"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware/middleware");
const controller_1 = require("./controller");
class CategoryRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const controller = new controller_1.CategoryController();
        router.post('/new', middleware_1.middleware, controller.createCategory);
        router.get('/:userId', middleware_1.middleware, controller.getAllCategories);
        router.post('/list', middleware_1.middleware, controller.listCategory);
        router.delete('/delete/:categoryId', middleware_1.middleware, controller.deleteCategory);
        return router;
    }
}
exports.CategoryRoutes = CategoryRoutes;
//# sourceMappingURL=routes.js.map