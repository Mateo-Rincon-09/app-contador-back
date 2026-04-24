
export class CategoryDto {
    private constructor(
        public readonly name: string,
        public readonly dateCreated: Date,
        public readonly dateUpdated?: Date,
    ) { }

    static create(object: { [key: string]: any }): [string?, CategoryDto?] {
        const { name, dateCreated, dateUpdated } = object;

        if (!name) return ['La categoria es necesaria'];
        if (!dateCreated) return ['La fecha es necesaria'];

        return ["", new CategoryDto(name, dateCreated, dateUpdated)];
    }
}