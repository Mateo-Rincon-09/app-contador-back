export declare class RegisterUserDto {
    readonly name: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    private constructor();
    static create(object: {
        [key: string]: any;
    }): [string?, RegisterUserDto?];
}
//# sourceMappingURL=register-user-dto.d.ts.map