

export class SavingDto {
    private constructor(
        public readonly montoMeta: number,
        public readonly agregarMonto?: number,
        public readonly eliminarMonto?: number,
    ) { }

    static create(object: { [key: string]: any }): [string?, SavingDto?] {
        const { montoMeta, agregarMonto, eliminarMonto } = object;

        if (!montoMeta && montoMeta <= 0 ) return ['Tienes que agregar un valor para continuar'];
        if ( agregarMonto <= 0 ) return ['El monto agregado no puede ser 0 o menor'];
        if ( eliminarMonto <= 0 ) return ['El monto eliminado no puede ser 0 o menor'];

        return ["", new SavingDto(montoMeta, agregarMonto, eliminarMonto)]
    }
}