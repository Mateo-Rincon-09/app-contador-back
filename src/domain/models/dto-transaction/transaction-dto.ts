import { StatusType, TransactionType } from "../../../generated/prisma/enums";


export class TransactionDto {
    private constructor(
        public readonly id: string,
        public readonly type: TransactionType,
        public readonly amount: number,
        public readonly description: string,
        public readonly dateCreated: Date,
        public readonly status: StatusType,
        public readonly categoryId: string,
        public readonly dateUpdated?: Date,
        public readonly savingId?: string,

    ) { }

    static create(object: { [key: string]: any }): [string?, TransactionDto?] {
        const { id, type, amount, description, dateCreated, status, categoryId, dateUpdated, savingId } = object;

        if (!amount) return ['El monto es necesario'];
        if (amount <= 0) return ['El monto del ingreso debe ser mayor a 0'];
        if (!description) return ['La descripcion es necesaria'];
        if (!dateCreated) return ['La fecha es necesaria'];
        if(!categoryId) return ["Categoria es necesaria"]

        return ["", new TransactionDto(id, type, amount, description, dateCreated, status, categoryId, dateUpdated, savingId)];
    }

}