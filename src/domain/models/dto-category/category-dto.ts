
export class CategoryDto {
    private constructor(
        public readonly name: string,
    ) { }

    static create(object: { [key: string]: any }): [string?, CategoryDto?] {
        const { name } = object;

        if (!name) return ['La categoria es necesaria'];

        return ["", new CategoryDto(name)]
    }
}