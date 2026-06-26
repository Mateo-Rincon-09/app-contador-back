const regularExps = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
}

export class ResendVerificationDto {

    private constructor(
        public readonly email: string
    ) { }

    static create(object: { [key: string]: any }): [string?, ResendVerificationDto?] {

        const { email } = object;

        if (!email)
            return ['Email es requerido'];

        if (!regularExps.email.test(email))
            return ['Email inválido'];

        return [, new ResendVerificationDto(email)];
    }

}