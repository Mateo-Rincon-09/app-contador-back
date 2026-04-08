import { prisma } from "../../../config/prisma";
import { CategoryDto } from '../../../domain/models/dto-category/category-dto';


export class CategoryService {
    public async createCategory(categoryDto: CategoryDto, userId: string) {
        const category = await prisma.category.create({
            data: {
                name: categoryDto.name,
                user: {
                    connect: {id: userId}
                }
            }
        })

        return category;
    }
}