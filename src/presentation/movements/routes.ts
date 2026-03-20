import { Router } from 'express';
import { MovimientoController } from './controller';
import { middleware } from '../middleware/middleware';


export class MovimientoRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new MovimientoController()

        router.post('/create', middleware, controller.enviarMovimiento)
        
        //TODO: Ejemplo para obtener movimientos paginados, se pueden agregar filtros de fecha, tipo de movimiento, etc.
        router.post('/list', middleware, controller.listarMovimientos)

        return router;
    }
}