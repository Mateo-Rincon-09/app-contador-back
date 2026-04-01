const regularExps = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
}

export class RegisterUserDto {
    private constructor(
        public readonly name: string,
        public readonly lastName: string,
        public readonly email: string,
        public readonly password: string,
        public readonly confirmPassword: string,
    ) { }

    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
        const { name, lastName, email, password, confirmPassword } = object;
        if (!name) return ['Nombre es requerido'];
        if (!email) return ['Email es requerido'];
        if (!regularExps.email.test(email)) return ['Email no es valido'];
        if (!password) return ['Contraseña es requerida'];
        if (password.length < 6) return ['Contraseña debe tener al menos 6 caracteres'];
        if (password !== confirmPassword) return ['Las contraseñas deben ser iguales'];

        return ["", new RegisterUserDto(name, lastName, email, password, confirmPassword)];
    }
}