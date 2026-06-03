import { SignOptions } from 'jsonwebtoken';
export declare class JwtAdapter {
    static generateToken(payload: any, duration?: SignOptions['expiresIn']): Promise<string | null>;
    static validateToken<T>(token: string): Promise<T | null>;
}
//# sourceMappingURL=jwt.adapter.d.ts.map