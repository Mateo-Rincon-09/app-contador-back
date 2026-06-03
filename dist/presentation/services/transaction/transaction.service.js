"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const pagination_1 = require("../../../config/pagination");
const prisma_1 = require("../../../config/prisma");
const domain_1 = require("../../../domain");
const enums_1 = require("../../../generated/prisma/enums");
class TransactionService {
    savingService;
    constructor(savingService) {
        this.savingService = savingService;
    }
    async createTransaction(transactionDto, userId) {
        const transaction = await prisma_1.prisma.transaction.create({
            data: {
                type: transactionDto.type,
                amount: transactionDto.amount,
                description: transactionDto.description,
                dateCreated: new Date(),
                status: 'active',
                dateUpdated: transactionDto.dateUpdated,
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
    async getSummaryByUser(request) {
        const { userId, dateCreated, dateRangeActive, dateStart, dateEnd } = request;
        // Construir filtros de fecha
        const dateFilter = this.buildDateFilter(dateCreated, dateRangeActive, dateStart, dateEnd);
        const where = {
            userId: userId,
            status: 'active',
            ...(dateFilter && { dateCreated: dateFilter })
        };
        // Traer todas las transacciones para el rango de fecha
        const transactions = await prisma_1.prisma.transaction.findMany({
            where,
            include: {
                category: true
            },
            orderBy: { dateCreated: 'desc' }
        });
        // Calcular totales por tipo
        const totalIncome = transactions
            .filter(t => t.type === enums_1.TransactionType.income)
            .reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = transactions
            .filter(t => t.type === enums_1.TransactionType.expense)
            .reduce((sum, t) => sum + t.amount, 0);
        // Agrupar transacciones por categoría
        const categoriesByIncome = this.groupTransactionsByCategory(transactions.filter(t => t.type === enums_1.TransactionType.income), enums_1.TransactionType.income);
        const categoriesByExpense = this.groupTransactionsByCategory(transactions.filter(t => t.type === enums_1.TransactionType.expense), enums_1.TransactionType.expense);
        // Traer ahorros
        const savingsData = await prisma_1.prisma.saving.findMany({
            where: {
                userId: userId,
                status: 'active'
            }
        });
        const savings = savingsData.map((s) => ({
            id: s.id,
            amount: s.amount,
            amountProgress: s.amountProgress,
            completionPercentage: s.amount > 0 ? (s.amountProgress / s.amount) * 100 : 0,
            dateStart: s.dateStart,
            dateEnd: s.dateEnd
        }));
        const totalSaved = savingsData.reduce((sum, s) => sum + s.amountProgress, 0);
        const totalSavingGoal = savingsData.reduce((sum, s) => sum + s.amount, 0);
        // Crear historial detallado de transacciones
        const transactionHistory = transactions.map(t => ({
            id: t.id,
            description: t.description,
            amount: t.amount,
            type: t.type,
            categoryName: t.category?.name || 'Sin categoría',
            dateCreated: t.dateCreated
        }));
        // Construir rango de fechas para respuesta
        let dateRange;
        if (dateFilter) {
            dateRange = {
                startDate: dateFilter.gte || new Date(),
                endDate: dateFilter.lte || new Date()
            };
        }
        // Crear y retornar DTO del dashboard
        return DashboardSummaryDto.create({
            totalIncome,
            totalExpense,
            totalSaved,
            totalSavingGoal,
            categoriesByIncome,
            categoriesByExpense,
            savings,
            transactionHistory,
            totalTransactions: transactions.length,
            dateRange
        });
    }
    async deleteTransaction(transactionId, userId) {
        const transaction = await prisma_1.prisma.transaction.findFirst({
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
        await prisma_1.prisma.transaction.update({
            where: { id: transactionId },
            data: { status: 'deleted', dateUpdated: new Date() }
        });
    }
    async listTransactions(request) {
        const { currentPage, pageSize, searchValue, dateCreated, type, savingId } = request;
        const skip = (currentPage - 1) * pageSize;
        const where = {
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
            };
        }
        if (savingId) {
            where.savingId = {
                equals: savingId,
            };
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
        const [totalItems, items] = await prisma_1.prisma.$transaction([
            prisma_1.prisma.transaction.count({ where }),
            prisma_1.prisma.transaction.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { dateCreated: 'desc' }
            })
        ]);
        const response = new pagination_1.PaginationResponse(pageSize);
        response.items = items.map((item) => domain_1.TransactionDto.create({
            id: item.id,
            amount: item.amount,
            description: item.description,
            dateCreated: item.dateCreated,
            dateUpdated: item.dateUpdated,
            type: item.type,
            categoryId: item.categoryId,
        })[1]);
        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;
    }
}
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map