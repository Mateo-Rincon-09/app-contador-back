import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'
import { envs } from '../../config/envs';

interface JwtPayload {
    id: string
}

export const middleware = (req: Request & {userId?: string} , res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(400).json({ error: 'No token proveido' });
    }

    const token = authHeader!.split(" ")[1];

    try {
        const decoded = jwt.verify(token!, envs.SECRET_TOKEN!) as JwtPayload;

        req.userId = decoded.id;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token invalido' })
    }
}