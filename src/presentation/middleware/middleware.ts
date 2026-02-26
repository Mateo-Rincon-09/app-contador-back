import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'
import { envs } from '../../config/envs';

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        res.status(400).json({ error: 'No token proveido' });
    }

    try {
        jwt.verify(token!, envs.SECRET_TOKEN!);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token invalido' })
    }
}