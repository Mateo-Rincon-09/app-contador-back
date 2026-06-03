import { IPaginationResponse, PaginationResponse } from "../../../config/pagination";
import { prisma } from "../../../config/prisma";
import { TransactionDto } from "../../../domain";
import { TransactionType } from "../../../generated/prisma/enums";
import { TransactionListRequest } from "../../transaction/controller";
import { SavingService } from '../saving/saving.service';

export class TransactionService {

    constructor(
        private readonly savingService: SavingService
    ) { }

    public async createTransaction(transactionDto: TransactionDto, userId: string) {

        const transaction = await prisma.transaction.create({
            data: {
                type: transactionDto.type,
                amount: transactionDto.amount,
                description: transactionDto.description,
                dateCreated: new Date(),
                status: 'active',
                dateUpdated: transactionDto.dateUpdated!,
                user: {
                    connect: { id: userId }
                },
                category: {
                    connect: { id: transactionDto.categoryId }
                },

                ...(transactionDto.savingId && {
                    saving: {
                        connect: { id: transactionDto.savingId }
                    }
                }),
            }
        });

        if (transaction && transaction.savingId) {
            await this.savingService.updateSavingProgress(transaction.savingId, transaction.amount);
        }

        return transaction;

    }

    public async getSummaryByUser(userId: string, startDate?: Date, endDate?: Date) {

        const transactionWhere: any = {
            userId,
            status: 'active'
        };

        if (startDate && endDate) {
            transactionWhere.dateCreated = {
                gte: startDate,
                lte: endDate
            };
        }

        const [
            categoriesCount,
            lastCategory,
            savings,
            transactionSums,
            incomeCount,
            expenseCount,
            lastTransaction,
            lastSavingContribution,
            topCategories,
            monthlyFlow,
            recentTransactions
        ] = await Promise.all([

            // Categorías total
            prisma.category.count({
                where: {
                    userId,
                    status: 'active'
                }
            }),

            // Última categoría
            prisma.category.findFirst({
                where: {
                    userId,
                    status: 'active'
                },
                orderBy: {
                    dateCreated: 'desc'
                }
            }),

            // Ahorros
            prisma.saving.findMany({
                where: {
                    userId,
                    status: 'active'
                }
            }),

            // Suma ingresos / gastos
            prisma.transaction.groupBy({
                by: ['type'],
                where: transactionWhere,
                _sum: {
                    amount: true
                }
            }),

            // Conteo ingresos
            prisma.transaction.count({
                where: {
                    ...transactionWhere,
                    type: TransactionType.income
                }
            }),

            // Conteo gastos
            prisma.transaction.count({
                where: {
                    ...transactionWhere,
                    type: TransactionType.expense
                }
            }),

            // Última transacción
            prisma.transaction.findFirst({
                where: transactionWhere,
                orderBy: {
                    dateCreated: 'desc'
                }
            }),

            // Última contribución a ahorro
            prisma.transaction.findFirst({
                where: {
                    userId,
                    status: 'active',
                    savingId: {
                        not: null
                    }
                },
                orderBy: {
                    dateCreated: 'desc'
                }
            }),

            // Categorias mas usadas (gastos)
            prisma.$queryRaw`
            SELECT
                c.id,
                c.name,
                SUM(t.amount)::float AS total
            FROM "transaction" t
            INNER JOIN "category" c ON c.id = t."categoryId"
            WHERE
                t."userId" = ${userId}
                AND t.status = 'active'
                AND t.type = 'expense'
            GROUP BY c.id, c.name
            ORDER BY total DESC
            LIMIT 5
        `,

            // Flujo mensual
            prisma.$queryRaw`
            SELECT
                TO_CHAR("dateCreated", 'YYYY-MM') AS month,
                SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END)::float AS income,
                SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END)::float AS expense
            FROM "transaction"
            WHERE
                "userId" = ${userId}
                AND status = 'active'
            GROUP BY month
            ORDER BY month
        `,

            // Últimas transacciones
            prisma.transaction.findMany({
                where: transactionWhere,
                orderBy: {
                    dateCreated: 'desc'
                },
                take: 10,
                include: {
                    category: true
                }
            })
        ]);

        // =========================
        // CALCULOS DE TRANSACTIONS
        // =========================

        const incomeSum =
            transactionSums.find(x => x.type === TransactionType.income)
                ?._sum.amount ?? 0;

        const expenseSum =
            transactionSums.find(x => x.type === TransactionType.expense)
                ?._sum.amount ?? 0;

        const balance = incomeSum - expenseSum;

        const expensePercentage =
            incomeSum > 0
                ? Number(((expenseSum / incomeSum) * 100).toFixed(2))
                : 0;

        // =========================
        // CALCULOS DE AHORROS
        // =========================

        const savedAmount = savings.reduce(
            (acc, s) => acc + (s.amountProgress ?? 0),
            0
        );

        const goalAmount = savings.reduce(
            (acc, s) => acc + s.amount,
            0
        );

        const savingsProgress =
            goalAmount > 0
                ? Number(((savedAmount / goalAmount) * 100).toFixed(2))
                : 0;

        // =========================
        // RESPONSE FINAL
        // =========================

        return {
            categories: {
                total: categoriesCount,
                lastCreated: lastCategory
            },

            savings: {
                total: savings.length,
                goalAmount,
                savedAmount,
                progressPercentage: savingsProgress,
                lastContribution: lastSavingContribution
            },

            transactions: {
                total: incomeCount + expenseCount,
                incomeCount,
                expenseCount,
                incomeSum,
                expenseSum,
                balance,
                expensePercentage,
                lastTransaction
            },

            charts: {
                topCategories,
                monthlyFlow
            },

            recentTransactions
        };
    }

    public async deleteTransaction(transactionId: string, userId: string) {
        const transaction = await prisma.transaction.findFirst({
            where: {
                id: transactionId,
                userId: userId
            }
        });

        if (!transaction) {
            throw new Error('Transacción no encontrada');
        }

        if (transaction.savingId) {
            await this.savingService.updateSavingProgress(transaction.savingId, -transaction.amount);
        }

        await prisma.transaction.update({
            where: { id: transactionId },
            data: { status: 'deleted', dateUpdated: new Date() }
        });
    }

    public async listTransactions(request: TransactionListRequest) {
        const { currentPage, pageSize, searchValue, dateCreated, type, savingId } = request;
        const skip = (currentPage - 1) * pageSize;
        const where: any = {
            userId: request.userId,
            status: 'active'
        };

        if (searchValue) {
            where.description = {
                contains: searchValue,
                mode: 'insensitive'
            };
        }

        if (type) {
            where.type = {
                equals: type,
            }
        }

        if (savingId) {
            where.savingId = {
                equals: savingId,
            }
        }

        if (dateCreated) {
            const start = new Date(dateCreated);
            const end = new Date(dateCreated);

            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);

            where.dateCreated = {
                gte: start,
                lte: end
            };
        }

        const [totalItems, items] = await prisma.$transaction([
            prisma.transaction.count({ where }),
            prisma.transaction.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { dateCreated: 'desc' }
            })
        ]);

        const response: IPaginationResponse<TransactionDto> = new PaginationResponse<TransactionDto>(pageSize);
        response.items = items.map((item: any) => TransactionDto.create({
            id: item.id,
            amount: item.amount,
            description: item.description,
            dateCreated: item.dateCreated,
            dateUpdated: item.dateUpdated,
            type: item.type,
            categoryId: item.categoryId,
        })[1]!
        );

        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;

    }
}