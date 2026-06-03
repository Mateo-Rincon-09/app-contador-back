import { IPaginationResponse } from "../../../config/pagination";
import { SavingDto } from "../../../domain";
import { SavingListRequest } from "../../saving/controller";
export declare class SavingService {
    createSaving(savingDto: SavingDto, userId: string): Promise<{
        id: string;
        amount: number;
        dateCreated: Date;
        status: import("../../../generated/prisma/enums").StatusType;
        dateUpdated: Date | null;
        dateStart: Date;
        dateEnd: Date;
        amountProgress: number | null;
        userId: string;
    }>;
    updateSavingProgress(savingId: string, amount: number): Promise<{
        id: string;
        amount: number;
        dateCreated: Date;
        status: import("../../../generated/prisma/enums").StatusType;
        dateUpdated: Date | null;
        dateStart: Date;
        dateEnd: Date;
        amountProgress: number | null;
        userId: string;
    }>;
    deleteSaving(savingId: string, userId: string): Promise<void>;
    listSavings(request: SavingListRequest): Promise<IPaginationResponse<SavingDto>>;
}
//# sourceMappingURL=saving.service.d.ts.map