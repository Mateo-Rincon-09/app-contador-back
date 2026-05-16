import { Router } from 'express';
import { TransactionController } from './controller';
import { middleware } from '../middleware/middleware';
import { SavingService } from '../services/saving/saving.service';
import { TransactionService } from '../services/transaction/transaction.service';


export class TransactionRoutes {

    static get routes(): Router {
        const router = Router();

        const savingService = new SavingService()
        const transactionService = new TransactionService(savingService)

        const controller = new TransactionController(transactionService);

        router.post('/create', middleware, controller.createTransaction);
        router.post('/list', middleware, controller.listTransaction);
        router.delete('/delete/:transactionId', middleware, controller.deleteTransaction);

        return router;
    }
}