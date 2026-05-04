import { Router } from "express";
import { AuthController } from "./controller";
import { middleware } from "../middleware/middleware";


export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new AuthController();

        router.post('/register', controller.registerUser);
        router.post('/login', controller.loginUser);
        router.put('/update-password/:id', middleware, controller.updatePassword);

        return router;
    }


}