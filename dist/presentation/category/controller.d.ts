import { Request, Response } from "express";
import { IPaginationRequest } from "../../config/pagination";
interface CategoryRequest extends Request {
    userId?: string;
}
export interface CategoryListRequest extends IPaginationRequest {
    userId?: string;
}
export declare class CategoryController {
    private readonly service;
    createCategory: (req: CategoryRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteCategory: (req: CategoryRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    listCategory: (req: CategoryRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllCategories: (req: CategoryRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
}
export {};
//# sourceMappingURL=controller.d.ts.map