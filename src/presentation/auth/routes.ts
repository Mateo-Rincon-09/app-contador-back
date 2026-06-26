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

        router.post('/resend-verification', controller.resendVerification);

        router.post('/forgot-password', controller.forgotPassword);
        router.post('/reset-password', controller.resetPassword);
        router.get("/validate-reset-token", controller.validateResetToken);

        router.put("/change-password", middleware, controller.changePassword);

        router.get('/test-email', controller.testEmail);
        router.get('/verify-email', controller.verifyEmail);

        return router;
    }


}