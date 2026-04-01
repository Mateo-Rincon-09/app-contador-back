import { Router } from 'express';
import { middleware } from '../middleware/middleware';
import { SavingController } from './controller';


export class SavingRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new SavingController();

        router.post('/new', middleware, controller.enviarSaving);

        return router;
    }
}