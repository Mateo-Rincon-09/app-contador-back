import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { MovimientoRoutes } from "./movements/routes";


export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/auth', AuthRoutes.routes);
        router.use('/movements', MovimientoRoutes.routes);

        return router;
    }
}