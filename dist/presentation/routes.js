"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./auth/routes");
const routes_2 = require("./transaction/routes");
const routes_3 = require("./category/routes");
const routes_4 = require("./saving/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/auth', routes_1.AuthRoutes.routes);
        router.use('/transaction', routes_2.TransactionRoutes.routes);
        router.use('/saving', routes_4.SavingRoutes.routes);
        router.use('/category', routes_3.CategoryRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map