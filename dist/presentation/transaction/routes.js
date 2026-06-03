"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const middleware_1 = require("../middleware/middleware");
const saving_service_1 = require("../services/saving/saving.service");
const transaction_service_1 = require("../services/transaction/transaction.service");
class TransactionRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const savingService = new saving_service_1.SavingService();
        const transactionService = new transaction_service_1.TransactionService(savingService);
        const controller = new controller_1.TransactionController(transactionService);
        router.post('/create', middleware_1.middleware, controller.createTransaction);
        router.post('/list', middleware_1.middleware, controller.listTransaction);
        router.get('/totals', middleware_1.middleware, controller.getSummaryByUser);
        router.delete('/delete/:transactionId', middleware_1.middleware, controller.deleteTransaction);
        return router;
    }
}
exports.TransactionRoutes = TransactionRoutes;
//# sourceMappingURL=routes.js.map