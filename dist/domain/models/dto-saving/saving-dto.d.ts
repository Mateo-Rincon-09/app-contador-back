import { StatusType } from "../../../generated/prisma/enums";
export declare class SavingDto {
    readonly id: string;
    readonly amount: number;
    readonly dateCreated: Date;
    readonly dateStart: Date;
    readonly dateEnd: Date;
    readonly status: StatusType;
    readonly dateUpdated?: Date | undefined;
    readonly amountProgress?: number | undefined;
    private constructor();
    static create(object: {
        [key: string]: any;
    }): [string?, SavingDto?];
}
//# sourceMappingURL=saving-dto.d.ts.map