import { Router } from 'express';
import { MovimientoController } from './controller';
import { middleware } from '../middleware/middleware';


export class MovimientoRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new MovimientoController()

        router.post('/movimiento', middleware, controller.enviarMovimiento)

        return router;
    }
}