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
                dateUpdated: categoryDto.dateUpdated!,
                user: {
                    connect: { id: userId }
                }
            }
        })

        return category;
    }

    public async listCategory(request: CategoryListRequest) {
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