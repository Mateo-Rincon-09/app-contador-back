import { Router } from 'express';
import { middleware } from '../middleware/middleware';
import { SavingController } from './controller';


export class SavingRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new SavingController();

        router.post('/new', middleware, controller.createSaving);
        router.post('/list', middleware, controller.listSaving);
        router.delete('/delete/:savingId', middleware, controller.deleteSaving);

        return router;
    }
}