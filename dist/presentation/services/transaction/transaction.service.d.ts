import { IPaginationResponse } from "../../../config/pagination";
import { TransactionDto } from "../../../domain";
import { TransactionType } from "../../../generated/prisma/enums";
import { TransactionListRequest } from "../../transaction/controller";
import { SavingService } from '../saving/saving.service';
export declare class TransactionService {
    private readonly savingService;
    constructor(savingService: SavingService);
    createTransaction(transactionDto: TransactionDto, userId: string): Promise<{
        id: string;
        type: TransactionType;
        amount: number;
        description: string;
        dateCreated: Date;
        status: import("../../../generated/prisma/enums").StatusType;
        categoryId: string;
        dateUpdated: Date | null;
        savingId: string | null;
        userId: string;
    }>;
    getSummaryByUser(request: DashboardSummaryRequest): Promise<any>;
    deleteTransaction(transactionId: string, userId: string): Promise<void>;
    listTransactions(request: TransactionListRequest): Promise<IPaginationResponse<TransactionDto>>;
}
//# sourceMappingURL=transaction.service.d.ts.map