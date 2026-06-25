import { Router } from "express";
import { AuthController } from "./controller";
import { middleware } from "../middleware/middleware";


export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new AuthController();

        router.post('/register', controller.registerUser);
        router.post('/login', controller.loginUser);
        router.post('/google', controller.loginGoogle);
        router.put('/update-password/:id', middleware, controller.updatePassword);
        router.get('/test-email', controller.testEmail);
        router.get('/verify-email', controller.verifyEmail);

        return router;
    }


}