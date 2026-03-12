

export class MovimientoDto {
    private constructor(
        public readonly montoIngreso: number,
        public readonly montoGasto: number,
        public readonly categoria: string,
        public readonly descripcion: string,
        public readonly fecha: string,
    ) { }

    static create(object: { [key: string]: any }): [string?, MovimientoDto?] {
        const { montoIngreso, montoGasto, categoria, descripcion, fecha } = object;

        if (!montoIngreso) return ['El monto del ingreso es necesario'];
        if (montoIngreso < 0) return ['El monto del ingreso debe ser mayor a 0']
        if (!montoGasto) return ['El monto del gasto es necesario'];
        if (montoGasto < 0) return ['El monto del gasto debe ser mayor a 0']
        if (!categoria) return ['La categoria es necesaria'];
        if (!descripcion) return ['La descripcion es necesaria'];
        if (!fecha) return ['La fecha es necesaria'];

        return ["", new MovimientoDto(montoIngreso, montoGasto, categoria, descripcion, fecha)];
    }

}