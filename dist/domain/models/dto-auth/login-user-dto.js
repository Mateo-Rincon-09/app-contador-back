"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
class LoginUserDto {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { password, email } = object;
        if (!email)
            return ['Email es requerido'];
        if (!password)
            return ['Contraseña es requerida'];
        return ["", new LoginUserDto(email, password)];
    }
}
exports.LoginUserDto = LoginUserDto;
//# sourceMappingURL=login-user-dto.js.map