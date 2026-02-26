import jwt, { SignOptions } from 'jsonwebtoken'
import { envs } from './envs';

const JWT_TOKEN = envs.SECRET_TOKEN;

export class JwtAdapter {

    static generateToken(payload: any, duration: SignOptions['expiresIn'] = '2h'): Promise<string | null> {


        return new Promise((resolve) => {

            jwt.sign(payload, JWT_TOKEN, { expiresIn: duration }, (err, token) => {
                if (err || !token) return resolve(null);

                resolve(token)
            });
        })

    }

    static validateToken<T>(token: string): Promise<T | null> {
        return new Promise((resolve) => {
            jwt.verify(token, JWT_TOKEN, (err, decoded) => {
                if (err) return resolve(null);

                resolve(decoded as T);
            })
        })
    }
}