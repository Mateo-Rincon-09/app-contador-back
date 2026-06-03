import { StatusType, TransactionType } from "../../../generated/prisma/enums";
export declare class TransactionDto {
    readonly id: string;
    readonly type: TransactionType;
    readonly amount: number;
    readonly description: string;
    readonly dateCreated: Date;
    readonly status: StatusType;
    readonly categoryId: string;
    readonly dateUpdated?: Date | undefined;
    readonly savingId?: string | undefined;
    private constructor();
    static create(object: {
        [key: string]: any;
    }): [string?, TransactionDto?];
}
//# sourceMappingURL=transaction-dto.d.ts.map