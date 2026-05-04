import { StatusType } from "../../../generated/prisma/enums";

export class CategoryDto {
    private constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly dateCreated: Date,
        public readonly status: StatusType,
        public readonly dateUpdated?: Date,
    ) { }

    static create(object: { [key: string]: any }): [string?, CategoryDto?] {
        const { id, name, dateCreated, status, dateUpdated } = object;

        if (!name) return ['La categoria es necesaria'];
        if (!dateCreated) return ['La fecha es necesaria'];

        return ["", new CategoryDto(id, name, dateCreated, status, dateUpdated)];
    }
}