import { Request, Response } from "express";
import { CategoryDto } from "../../domain/models/dto-category/category-dto";
import { CategoryService } from "../services/category/category.service";

interface AuthRequest extends Request {
  userId?: string;
}

export class CategoryController {
    private readonly service = new CategoryService()

    createCategory = async (req: AuthRequest, res: Response) => {
        const [error, createCategoryDto] = CategoryDto.create(req.body);
      
        if (error) return res.status(400).json(error)

        try {
            const resultado = await this.service.createCategory(createCategoryDto!, req.userId!)
            return res.status(201).json({message: `Categoria enviada con exito ${resultado}`})
        } catch (error) {
            return res.status(500).json({error})
        }
    }


}