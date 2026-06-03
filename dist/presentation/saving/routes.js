"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingRoutes = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware/middleware");
const controller_1 = require("./controller");
class SavingRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const controller = new controller_1.SavingController();
        router.post('/new', middleware_1.middleware, controller.createSaving);
        router.post('/list', middleware_1.middleware, controller.listSaving);
        router.delete('/delete/:savingId', middleware_1.middleware, controller.deleteSaving);
        return router;
    }
}
exports.SavingRoutes = SavingRoutes;
//# sourceMappingURL=routes.js.map