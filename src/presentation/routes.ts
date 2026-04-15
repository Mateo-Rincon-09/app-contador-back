import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { TransactionRoutes } from "./transaction/routes";
import { CategoryRoutes } from "./category/routes";
import { SavingRoutes } from "./saving/routes";


export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/auth', AuthRoutes.routes);
        router.use('/transaction', TransactionRoutes.routes);
        router.use('/saving', SavingRoutes.routes);
        router.use('/category', CategoryRoutes.routes);

        return router;
    }
}