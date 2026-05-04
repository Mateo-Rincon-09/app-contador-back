import { IPaginationResponse, PaginationResponse } from "../../../config/pagination";
import { prisma } from "../../../config/prisma";
import { TransactionDto } from "../../../domain";
import { TransactionListRequest } from "../../transaction/controller";


export class TransactionService {

    public async createTransaction(transactionDto: TransactionDto, userId: string, categoryId: string) {

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
                ...(categoryId && {
                    category: {

                        connect: { id: categoryId }
                    }
                }),
            }
        });

        return transaction;

    }

    public async deleteTransaction(transactionId: string, userId: string,) {
        const transaction = await prisma.transaction.findFirst({
            where: {
                id: transactionId,
                userId: userId
            }
        });

        if (!transaction) {
            throw new Error('Transacción no encontrada');
        }

        await prisma.transaction.update({
            where: { id: transactionId },
            data: { status: 'deleted' }
        });
    }

    public async listTransactions(request: TransactionListRequest) {
        const { currentPage, pageSize, searchValue, dateCreated, type } = request;
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
            type: item.type
        })[1]!
        );

        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;

    }
}