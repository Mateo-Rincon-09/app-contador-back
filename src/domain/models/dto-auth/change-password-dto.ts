export class ChangePasswordDto {

    constructor(
        public readonly currentPassword: string,
        public readonly newPassword: string,
    ) { }

    static create(object: { [key: string]: any }): [string?, ChangePasswordDto?] {

        const { currentPassword, newPassword } = object;

        if (!currentPassword) return ["La contraseña actual es requerida"];
        if (!newPassword) return ["La nueva contraseña es requerida"];
        if (newPassword.length < 6) return ["La nueva contraseña debe tener mínimo 6 caracteres"];

        return [, new ChangePasswordDto(currentPassword, newPassword)];
    }

}