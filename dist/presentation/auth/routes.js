"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const middleware_1 = require("../middleware/middleware");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const controller = new controller_1.AuthController();
        router.post('/register', controller.registerUser);
        router.post('/login', controller.loginUser);
        router.post('/google', controller.loginGoogle);
        router.put('/update-password/:id', middleware_1.middleware, controller.updatePassword);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=routes.js.map