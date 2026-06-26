export class ResetPasswordDto {

    private constructor(
        public readonly token: string,
        public readonly password: string
    ) {}

    static create(object: { [key: string]: any }): [string?, ResetPasswordDto?] {

        const { token, password } = object;

        if (!token) return ["Token requerido"];

        if (!password) return ["Contraseña requerida"];

        if (password.length < 6) {
            return ["La contraseña debe tener mínimo 6 caracteres"];
        }

        return ["", new ResetPasswordDto(token, password)];
    }

}