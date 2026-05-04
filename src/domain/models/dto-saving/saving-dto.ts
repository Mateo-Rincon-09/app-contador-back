import { StatusType } from "../../../generated/prisma/enums";


export class SavingDto {
    private constructor(
        public readonly id: string,
        public readonly amount: number,
        public readonly dateCreated: Date,
        public readonly dateStart: Date,
        public readonly dateEnd: Date,
        public readonly status: StatusType,
        public readonly dateUpdated?: Date,
        public readonly amountProgress?: number,
    ) { }

    static create(object: { [key: string]: any }): [string?, SavingDto?] {
        const { id, amount, dateCreated, dateStart, dateEnd, status, dateUpdated, amountProgess } = object;

        if (!amount) return ['Tienes que agregar un valor para continuar'];
        if (amount <= 0) return ['El monto no puede ser 0 o menor'];
        if (!dateCreated) return ['La fecha de creación es necesaria'];
        if (!dateStart) return ['La fecha de inicio es necesaria'];
        if (!dateEnd) return ['La fecha de fin es necesaria'];
        if (amountProgess <= 0) return ['El monto agregado no puede ser 0 o menor'];

        return ["", new SavingDto(id, amount, dateCreated, dateStart, dateEnd, status, dateUpdated, amountProgess)]
    }
}