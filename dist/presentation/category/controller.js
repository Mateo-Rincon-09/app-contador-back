"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_dto_1 = require("../../domain/models/dto-category/category-dto");
const category_service_1 = require("../services/category/category.service");
class CategoryController {
    service = new category_service_1.CategoryService();
    createCategory = async (req, res) => {
        const [error, createCategoryDto] = category_dto_1.CategoryDto.create(req.body);
        if (error)
            return res.status(400).json(error);
        try {
            const result = await this.service.createCategory(createCategoryDto, req.userId);
            return res.status(201).json({ message: `Categoria enviada con exito ${result}` });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    deleteCategory = async (req, res) => {
        const categoryId = req.params.categoryId;
        try {
            await this.service.deleteCategory(categoryId, req.userId);
            return res.status(200).json({ message: 'Categoria eliminada con exito' });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    listCategory = async (req, res) => {
        const body = {
            ...req.body,
            userId: req.userId
        };
        try {
            const result = await this.service.listCategory(body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    getAllCategories = async (req, res) => {
        try {
            const userId = req.params.userId;
            if (!userId)
                return res.status(400).json({ message: "Parametro no encontrado" });
            const result = await this.service.getAllCategories(userId);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=controller.js.map