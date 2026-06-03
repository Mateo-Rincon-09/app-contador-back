"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
const regularExps = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
};
class RegisterUserDto {
    name;
    lastName;
    email;
    password;
    constructor(name, lastName, email, password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { name, lastName, email, password } = object;
        if (!name)
            return ['Nombre es requerido'];
        if (!email)
            return ['Email es requerido'];
        if (!regularExps.email.test(email))
            return ['Email no es valido'];
        if (!password)
            return ['Contraseña es requerida'];
        if (password.length < 6)
            return ['Contraseña debe tener al menos 6 caracteres'];
        return ["", new RegisterUserDto(name, lastName, email, password)];
    }
}
exports.RegisterUserDto = RegisterUserDto;
//# sourceMappingURL=register-user-dto.js.map