
enum TransactionType {
    income = 'income',
    expense = 'expense',
    saving = 'saving'
}


export class TransactionDto {
    private constructor(
        public readonly amount: number,
        public readonly description: string,
        public readonly dateCreated: Date,
        public readonly dateUpdated?: Date,
        public readonly type?: TransactionType,
    ) { }

    static create(object: { [key: string]: any }): [string?, TransactionDto?] {
        const { amount, description, dateCreated, dateUpdated, type } = object;

        if (!amount) return ['El monto es necesario'];
        if (amount <= 0) return ['El monto del ingreso debe ser mayor a 0'];
        if (!description) return ['La descripcion es necesaria'];
        if (!dateCreated) return ['La fecha es necesaria'];

        return ["", new TransactionDto(amount, description, dateCreated, dateUpdated, type)];
    }

}