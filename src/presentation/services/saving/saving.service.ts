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
                status: 'active',
                dateUpdated: savingDto.dateUpdated!,
                amountProgress: savingDto.amountProgress!,
                user: {
                    connect: { id: userId }
                }
            }
        })

        return saving;
    }

    public async deleteSaving(savingId: string, userId: string,) {
        const saving = await prisma.saving.findFirst({
            where: {
                id: savingId,
                userId: userId
            }
        });

        if (!saving) {
            throw new Error('Ahorro no encontrado');
        }

        await prisma.saving.update({
            where: { id: savingId },
            data: { status: 'deleted' }
        });
    }

    public async listSavings(request: SavingListRequest) {
        const { currentPage, pageSize, searchValue, dateCreated, dateRangeActive, dateStart, dateEnd } = request;
        const skip = (currentPage - 1) * pageSize;
        const where: any = {
            userId: request.userId,
            status: 'active'
        };

        if (searchValue) {
            where.OR = [
                { descripcion: { contains: searchValue, mode: 'insensitive' } },
                { categoria: { contains: searchValue, mode: 'insensitive' } }
            ];
        }

        if (dateRangeActive && dateCreated) {
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
            id: item.id,
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