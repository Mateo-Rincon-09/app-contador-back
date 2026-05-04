import { prisma } from "../../../config/prisma";
import { CategoryDto } from '../../../domain/models/dto-category/category-dto';
import { CategoryListRequest } from "../../category/controller";
import { IPaginationResponse, PaginationResponse } from "../../../config/pagination";


export class CategoryService {
    public async createCategory(categoryDto: CategoryDto, userId: string) {
        const category = await prisma.category.create({
            data: {
                name: categoryDto.name,
                dateCreated: categoryDto.dateCreated,
                status: 'active',
                dateUpdated: categoryDto.dateUpdated!,
                user: {
                    connect: { id: userId }
                }
            }
        })

        return category;
    }

    public async deleteCategory(categoryId: string, userId: string,) {
        const category = await prisma.category.findFirst({
            where: {
                id: categoryId,
                userId: userId
            }
        });

        if (!category) {
            throw new Error('Categoria no encontrada');
        }

        await prisma.category.update({
            where: { id: categoryId },
            data: { status: 'deleted' }
        });
    }

    public async listCategory(request: CategoryListRequest) {
        const { currentPage, pageSize, searchValue, dateCreated } = request;
        const skip = (currentPage - 1) * pageSize;
        const where: any = {
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

        const [totalItems, items] = await prisma.$transaction([
            prisma.category.count({ where }),
            prisma.category.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { dateCreated: 'desc' }
            })
        ]);

        const response: IPaginationResponse<CategoryDto> = new PaginationResponse<CategoryDto>(pageSize);
        response.items = items.map((item: any) => CategoryDto.create({
            id: item.id,
            name: item.name,
            dateCreated: item.dateCreated,
            dateUpdated: item.dateUpdated
        })[1]!
        );

        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;

    }
}