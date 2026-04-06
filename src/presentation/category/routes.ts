import { Router } from 'express';
import { middleware } from '../middleware/middleware';
import { CategoryController } from './controller';


export class CategoryRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new CategoryController();

        router.post('/new', middleware, controller.createCategory);

        return router;
    }
}