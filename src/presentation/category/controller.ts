import { Request, Response } from "express";
import { CategoryDto } from "../../domain/models/dto-category/category-dto";
import { CategoryService } from "../services/category/category.service";
import { IPaginationRequest } from "../../config/pagination";

interface CategoryRequest extends Request {
    userId?: string;
}

export interface CategoryListRequest extends IPaginationRequest {
    userId?: string
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

    deleteCategory = async (req: CategoryRequest, res: Response) => {

        const categoryId = req.params.categoryId as string;

        try {
            await this.service.deleteCategory(categoryId, req.userId!,);
            return res.status(200).json({ message: 'Categoria eliminada con exito' });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    listCategory = async (req: CategoryRequest, res: Response) => {
        const body: CategoryListRequest = {
            ...req.body,
            userId: req.userId!
        };
        try {
            const result = await this.service.listCategory(body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    getAllCategories = async (req: CategoryRequest, res: Response) => {
        try {
            const userId = req.params.userId as string;

            if(!userId) return res.status(400).json({message: "Parametro no encontrado"})

            const result = await this.service.getAllCategories(userId);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

}