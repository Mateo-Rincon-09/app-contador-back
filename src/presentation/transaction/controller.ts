import { Request, Response } from "express";
import { TransactionService } from "../services/transaction/transaction.service";
import { TransactionDto } from "../../domain";
import { IPaginationRequest } from "../../config/pagination";
import { TransactionType } from "../../generated/prisma/enums";

interface AuthRequest extends Request {
    userId?: string;
    categoryId?: string;
}

export interface TransactionListRequest extends IPaginationRequest {
    userId?: string;
    type?: TransactionType;
    savingId?: string;
}

export class TransactionController {

    constructor(
        private transactionService: TransactionService,
    ) { }


    createTransaction = async (req: AuthRequest, res: Response) => {
        const [error, createTransactionDto] = TransactionDto.create(req.body);

        if (error) return res.status(400).json(error);

        try {
            const result = await this.transactionService.createTransaction(createTransactionDto!, req.userId!);
            return res.status(201).json({ message: `Transacción enviada con exito ${result}` });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    getSummaryByUser = async (req: AuthRequest, res: Response) => {
        try {

            const { startDate, endDate } = req.query;

            const summary = await this.transactionService.getSummaryByUser(
                req.userId!,
                startDate ? new Date(startDate as string) : undefined,
                endDate ? new Date(endDate as string) : undefined
            );

            return res.status(200).json(summary);

        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    deleteTransaction = async (req: AuthRequest, res: Response) => {

        const transactionId = req.params.transactionId as string;

        try {
            await this.transactionService.deleteTransaction(transactionId, req.userId!,);
            return res.status(200).json({ message: 'Transacción eliminada con exito' });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    listTransaction = async (req: AuthRequest, res: Response) => {
        const body: TransactionListRequest = {
            ...req.body,
            userId: req.userId!
        };
        try {
            const result = await this.transactionService.listTransactions(body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}