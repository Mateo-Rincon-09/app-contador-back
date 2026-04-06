

export class SavingDto {
    private constructor(
        public readonly amountExpected: number,
        public readonly dateCreated: Date,
        public readonly dateExpectedStart: Date,
        public readonly dateExpectedEnd: Date,
        public readonly amountProgress?: number,
        public readonly dateUpdated?: Date,
    ) { }

    static create(object: { [key: string]: any }): [string?, SavingDto?] {
        const { amountExpected, amountProgress, dateCreated, dateExpectedStart, dateExpectedEnd, dateUpdated } = object;

        if (!amountExpected && amountExpected <= 0) return ['Tienes que agregar un valor para continuar'];
        if (!dateCreated) return ['La fecha de creación es necesaria'];
        if (!dateExpectedStart) return ['La fecha de inicio es necesaria'];
        if (!dateExpectedEnd) return ['La fecha de fin es necesaria'];

        return ["", new SavingDto(amountExpected, amountProgress, dateCreated, dateExpectedStart, dateExpectedEnd, dateUpdated)]
    }
}