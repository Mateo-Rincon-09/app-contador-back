import { StatusType } from "../../../generated/prisma/enums";
export declare class CategoryDto {
    readonly id: string;
    readonly name: string;
    readonly dateCreated: Date;
    readonly status: StatusType;
    readonly dateUpdated?: Date | undefined;
    private constructor();
    static create(object: {
        [key: string]: any;
    }): [string?, CategoryDto?];
}
//# sourceMappingURL=category-dto.d.ts.map