"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const domain_1 = require("../../domain");
class TransactionController {
    transactionService;
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    createTransaction = async (req, res) => {
        const [error, createTransactionDto] = domain_1.TransactionDto.create(req.body);
        if (error)
            return res.status(400).json(error);
        try {
            const result = await this.transactionService.createTransaction(createTransactionDto, req.userId);
            return res.status(201).json({ message: `Transacción enviada con exito ${result}` });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    getSummaryByUser = async (req, res) => {
        try {
            const totals = await this.transactionService.getSummaryByUser(req.userId);
            return res.status(200).json(totals);
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    deleteTransaction = async (req, res) => {
        const transactionId = req.params.transactionId;
        try {
            await this.transactionService.deleteTransaction(transactionId, req.userId);
            return res.status(200).json({ message: 'Transacción eliminada con exito' });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    listTransaction = async (req, res) => {
        const body = {
            ...req.body,
            userId: req.userId
        };
        try {
            const result = await this.transactionService.listTransactions(body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
}
exports.TransactionController = TransactionController;
//# sourceMappingURL=controller.js.map