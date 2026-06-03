import { LoginUserDto, RegisterUserDto } from '../../../domain';
export declare class AuthService {
    register(registerDto: RegisterUserDto): Promise<{
        user: {
            password: string;
            email: string;
            name: string;
            lastName: string | null;
            id: string;
            dateCreated: Date;
        };
        token: string;
    }>;
    login(loginDto: LoginUserDto): Promise<{
        user: {
            password: string;
            email: string;
            name: string;
            lastName: string | null;
            id: string;
            dateCreated: Date;
        };
        token: string;
    }>;
    loginGoogle(firebaseToken: string): Promise<{
        user: {
            password: string;
            email: string;
            name: string;
            lastName: string | null;
            id: string;
            dateCreated: Date;
        };
        token: string;
    }>;
    updatePassword(userId: string, newPassword: string): Promise<{
        password: string;
        email: string;
        name: string;
        lastName: string | null;
        id: string;
        dateCreated: Date;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map