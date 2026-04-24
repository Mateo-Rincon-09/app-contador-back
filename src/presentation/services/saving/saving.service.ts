import { IPaginationResponse, PaginationResponse } from "../../../config/pagination";
import { prisma } from "../../../config/prisma";
import { SavingDto } from "../../../domain";
import { SavingListRequest } from "../../saving/controller";


export class SavingService {
    public async createSaving(savingDto: SavingDto, userId: string) {
        const saving = await prisma.saving.create({
            data: {
                amount: savingDto.amount,
                dateCreated: savingDto.dateCreated,
                dateStart: savingDto.dateStart,
                dateEnd: savingDto.dateEnd,
                status: savingDto.status!,
                dateUpdated: savingDto.dateUpdated!,
                amountProgress: savingDto.amountProgress!,
                user: {
                    connect: { id: userId }
                }
            }
        })

        return saving;
    }

    public async listSavings(request: SavingListRequest) {
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
            prisma.saving.count({ where }),
            prisma.saving.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { dateCreated: 'desc' }
            })
        ]);

        const response: IPaginationResponse<SavingDto> = new PaginationResponse<SavingDto>(pageSize);
        response.items = items.map((item: any) => SavingDto.create({
            amount: item.amount,
            dateCreated: item.dateCreated,
            dateStart: item.dateStart,
            dateEnd: item.dateEnd,
            status: item.status,
            dateUpdated: item.dateUpdated,
            amountProgress: item.amountProgress
        })[1]!
        );

        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;

    }
}