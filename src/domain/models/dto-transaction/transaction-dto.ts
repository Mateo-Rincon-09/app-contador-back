enum TransactionType {
    income = 'income',
    expense = 'expense',
    saving = 'saving'
}


export class TransactionDto {
    private constructor(
        public readonly type: TransactionType,
        public readonly amount: number,
        public readonly description: string,
        public readonly dateCreated: Date,
        public readonly dateUpdated?: Date,
    ) { }

    static create(object: { [key: string]: any }): [string?, TransactionDto?] {
        const { type, amount, description, dateCreated, dateUpdated } = object;

        if (!amount) return ['El monto es necesario'];
        if (amount <= 0) return ['El monto del ingreso debe ser mayor a 0'];
        if (!description) return ['La descripcion es necesaria'];
        if (!dateCreated) return ['La fecha es necesaria'];

        return ["", new TransactionDto(type, amount, description, dateCreated, dateUpdated )];
    }

}