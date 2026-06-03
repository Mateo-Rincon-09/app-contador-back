"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const prisma_1 = require("../../../config/prisma");
const category_dto_1 = require("../../../domain/models/dto-category/category-dto");
const pagination_1 = require("../../../config/pagination");
class CategoryService {
    async createCategory(categoryDto, userId) {
        const category = await prisma_1.prisma.category.create({
            data: {
                name: categoryDto.name,
                dateCreated: categoryDto.dateCreated,
                status: 'active',
                dateUpdated: categoryDto.dateUpdated,
                user: {
                    connect: { id: userId }
                }
            }
        });
        return category;
    }
    async deleteCategory(categoryId, userId) {
        const category = await prisma_1.prisma.category.findFirst({
            where: {
                id: categoryId,
                userId: userId
            }
        });
        if (!category) {
            throw new Error('Categoria no encontrada');
        }
        await prisma_1.prisma.category.update({
            where: { id: categoryId },
            data: { status: 'deleted' }
        });
    }
    async listCategory(request) {
        const { currentPage, pageSize, searchValue, dateCreated } = request;
        const skip = (currentPage - 1) * pageSize;
        const where = {
            userId: request.userId,
            status: 'active'
        };
        if (searchValue) {
            where.name = {
                contains: searchValue,
                mode: 'insensitive'
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
            prisma_1.prisma.category.count({ where }),
            prisma_1.prisma.category.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { dateCreated: 'desc' }
            })
        ]);
        const response = new pagination_1.PaginationResponse(pageSize);
        response.items = items.map((item) => category_dto_1.CategoryDto.create({
            id: item.id,
            name: item.name,
            dateCreated: item.dateCreated,
            dateUpdated: item.dateUpdated
        })[1]);
        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;
    }
    async getAllCategories(userId) {
        const items = await prisma_1.prisma.category.findMany({
            where: {
                userId,
                status: 'active'
            },
            orderBy: { dateCreated: 'desc' }
        });
        return items.map((item) => category_dto_1.CategoryDto.create({
            id: item.id,
            name: item.name,
            dateCreated: item.dateCreated,
            status: item.status,
            dateUpdated: item.dateUpdated
        })[1]);
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map