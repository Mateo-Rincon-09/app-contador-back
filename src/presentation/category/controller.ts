import { Request, Response } from "express";
import { CategoryDto } from "../../domain/models/dto-category/category-dto";
import { CategoryService } from "../services/category/category.service";
import { IPaginationRequest } from "../../config/pagination";

interface CategoryRequest extends Request {
    userId?: string;
}

export interface CategoryListRequest extends IPaginationRequest {
    userId: string
}

export class CategoryController {
    private readonly service = new CategoryService();

    createCategory = async (req: CategoryRequest, res: Response) => {
        const [error, createCategoryDto] = CategoryDto.create(req.body);

        if (error) return res.status(400).json(error);

        try {
            const result = await this.service.createCategory(createCategoryDto!, req.userId!);
            return res.status(201).json({ message: `Categoria enviada con exito ${result}` });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    listCategory = async (req: CategoryRequest, res: Response) => {
        const body: CategoryListRequest = req.body;
        try {
            const result = await this.service.listCategory(body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

}