

export class SavingDto {
    private constructor(
        public readonly montoMeta: number,
        public readonly progreso?: number,
    ) { }

    static create(object: { [key: string]: any }): [string?, SavingDto?] {
        const { montoMeta, progreso } = object;

        if (!montoMeta && montoMeta <= 0) return ['Tienes que agregar un valor para continuar'];
        if (progreso <= 0) return ['El monto agregado no puede ser 0 o menor'];

        return ["", new SavingDto(montoMeta, progreso)]
    }
}