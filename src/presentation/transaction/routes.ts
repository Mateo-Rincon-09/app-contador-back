import { Router } from 'express';
import { TransactionController } from './controller';
import { middleware } from '../middleware/middleware';


export class TransactionRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new TransactionController();

        router.post('/create', middleware, controller.createTransaction);
        router.post('/list', middleware, controller.listTransaction);

        return router;
    }
}