"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingService = void 0;
const pagination_1 = require("../../../config/pagination");
const prisma_1 = require("../../../config/prisma");
const domain_1 = require("../../../domain");
class SavingService {
    async createSaving(savingDto, userId) {
        const saving = await prisma_1.prisma.saving.create({
            data: {
                amount: savingDto.amount,
                dateCreated: savingDto.dateCreated,
                dateStart: savingDto.dateStart,
                dateEnd: savingDto.dateEnd,
                status: 'active',
                dateUpdated: savingDto.dateUpdated,
                amountProgress: savingDto.amountProgress || 0,
                user: {
                    connect: { id: userId }
                }
            }
        });
        return saving;
    }
    async updateSavingProgress(savingId, amount) {
        try {
            const saving = await prisma_1.prisma.saving.update({
                where: {
                    id: savingId,
                },
                data: {
                    amountProgress: {
                        increment: amount
                    },
                    dateUpdated: new Date()
                }
            });
            return saving;
        }
        catch (error) {
            throw new Error('Ahorro no encontrado');
        }
    }
    async deleteSaving(savingId, userId) {
        const saving = await prisma_1.prisma.saving.findFirst({
            where: {
                id: savingId,
                userId: userId
            }
        });
        if (!saving) {
            throw new Error('Ahorro no encontrado');
        }
        await prisma_1.prisma.saving.update({
            where: { id: savingId },
            data: { status: 'deleted' }
        });
    }
    async listSavings(request) {
        const { currentPage, pageSize, searchValue, dateCreated, dateRangeActive, dateStart, dateEnd } = request;
        const skip = (currentPage - 1) * pageSize;
        const where = {
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
        const [totalItems, items] = await prisma_1.prisma.$transaction([
            prisma_1.prisma.saving.count({ where }),
            prisma_1.prisma.saving.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { dateCreated: 'desc' }
            })
        ]);
        const response = new pagination_1.PaginationResponse(pageSize);
        response.items = items.map((item) => domain_1.SavingDto.create({
            id: item.id,
            amount: item.amount,
            dateCreated: item.dateCreated,
            dateStart: item.dateStart,
            dateEnd: item.dateEnd,
            status: item.status,
            dateUpdated: item.dateUpdated,
            amountProgress: item.amountProgress
        })[1]);
        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;
    }
}
exports.SavingService = SavingService;
//# sourceMappingURL=saving.service.js.map