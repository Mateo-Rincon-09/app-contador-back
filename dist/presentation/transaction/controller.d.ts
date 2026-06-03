import { Request, Response } from "express";
import { TransactionService } from "../services/transaction/transaction.service";
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
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    createTransaction: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getSummaryByUser: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteTransaction: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    listTransaction: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
}
export {};
//# sourceMappingURL=controller.d.ts.map