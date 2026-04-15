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
                dateUpdated: transactionDto.dateUpdated!,
                user: {
                    connect: { id: userId }
                },
                ...(categoryId &&  {
                    category: {

                        connect: { id: categoryId }
                    }
                }),
            }
        });

        return transaction;

    }

    public async listarMovimientos(request: TransactionListRequest) {
        const { currentPage, pageSize, searchValue, dateRangeActive, dateStart, dateEnd } = request;
        const skip = (currentPage - 1) * pageSize;
        const where: any = {
            userId: request.userId
        };

        if (searchValue) {
            where.OR = [
                { descripcion: { contains: searchValue, mode: 'insensitive' } },
                { categoria: { contains: searchValue, mode: 'insensitive' } }
            ];
        }

        if (dateRangeActive && dateStart && dateEnd) {
            where.fecha = {
                gte: new Date(dateStart),
                lte: new Date(dateEnd)
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