

export class LoginUserDto {
    private constructor(
        public readonly email: string,
        public readonly password: string,
    ) { }

    static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
        const { password, email } = object;
        if (!email) return ['Email es requerido'];
        if (!password) return ['Contraseña es requerida'];

        return ["", new LoginUserDto(email, password)];
    }
}