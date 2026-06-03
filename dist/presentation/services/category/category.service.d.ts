import { CategoryDto } from '../../../domain/models/dto-category/category-dto';
import { CategoryListRequest } from "../../category/controller";
import { IPaginationResponse } from "../../../config/pagination";
export declare class CategoryService {
    createCategory(categoryDto: CategoryDto, userId: string): Promise<{
        name: string;
        id: string;
        dateCreated: Date;
        status: import("../../../generated/prisma/enums").StatusType;
        dateUpdated: Date | null;
        userId: string;
    }>;
    deleteCategory(categoryId: string, userId: string): Promise<void>;
    listCategory(request: CategoryListRequest): Promise<IPaginationResponse<CategoryDto>>;
    getAllCategories(userId: string): Promise<CategoryDto[]>;
}
//# sourceMappingURL=category.service.d.ts.map