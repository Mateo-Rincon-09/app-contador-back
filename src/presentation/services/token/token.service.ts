import crypto from 'crypto';
import { prisma } from '../../../config/prisma';
import { TokenType } from '../../../generated/prisma/client';

export class TokenService {

    generateToken(): string {
        return crypto.randomBytes(32).toString('hex');
    }

    generateHash(token: string): string {
        return crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');
    }

    async invalidateTokens(
        userId: string,
        type: TokenType
    ) {

        await prisma.token.updateMany({
            where: {
                userId,
                type,
                used: false
            },
            data: {
                used: true
            }
        });

    }

    async createToken(
        userId: string,
        type: TokenType,
        expiresInMinutes: number
    ) {

        await this.invalidateTokens(
            userId,
            type
        );

        const rawToken = this.generateToken();

        const tokenHash = this.generateHash(rawToken);

        await prisma.token.create({
            data: {
                tokenHash,
                type,
                userId,
                expiresAt: new Date(
                    Date.now() + expiresInMinutes * 60 * 1000
                )
            }
        });

        return rawToken;
    }

    async validateToken(
        token: string,
        type: TokenType
    ) {

        const tokenHash = this.generateHash(token);

        return prisma.token.findFirst({
            where: {
                tokenHash,
                type,
                used: false,
                expiresAt: {
                    gt: new Date()
                }
            },
            include: {
                user: true
            }
        });
    }

    async markAsUsed(tokenId: string) {

        await prisma.token.update({
            where: {
                id: tokenId
            },
            data: {
                used: true
            }
        });

    }

}