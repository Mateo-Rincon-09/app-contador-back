"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = require("../../../config/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_adapter_1 = require("../../../config/jwt.adapter");
const firebaseAdmin_1 = __importDefault(require("../../../config/firebaseAdmin"));
class AuthService {
    async register(registerDto) {
        const hashed = await bcrypt_1.default.hash(registerDto.password, 10);
        try {
            const user = await prisma_1.prisma.user.create({
                data: {
                    name: registerDto.name,
                    lastName: registerDto.lastName,
                    email: registerDto.email,
                    password: hashed,
                }
            });
            const token = await jwt_adapter_1.JwtAdapter.generateToken({ id: user.id });
            if (!token)
                throw new Error('Error al generar token');
            return {
                user: user,
                token: token,
            };
        }
        catch (error) {
            if (error) {
                throw new Error('Email ya registrado');
            }
            throw error;
        }
    }
    async login(loginDto) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { email: loginDto.email }
        });
        if (!user)
            throw new Error('Usuario no encontrado');
        const isMatch = await bcrypt_1.default.compare(loginDto.password, user.password);
        if (!isMatch)
            throw new Error('Contraseña incorrecta');
        const token = await jwt_adapter_1.JwtAdapter.generateToken({ id: user.id });
        if (!token)
            throw new Error('Error al generar token');
        return {
            user: user,
            token: token,
        };
    }
    async loginGoogle(firebaseToken) {
        const decodedToken = await firebaseAdmin_1.default.auth().verifyIdToken(firebaseToken);
        const email = decodedToken.email;
        if (!email) {
            throw new Error('Email no encontrado');
        }
        ;
        let user = await prisma_1.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            user = await prisma_1.prisma.user.create({
                data: {
                    email,
                    name: decodedToken.name || '',
                    password: ''
                }
            });
        }
        ;
        const token = await jwt_adapter_1.JwtAdapter.generateToken({
            id: user.id
        });
        if (!token) {
            throw new Error('Error al generar token');
        }
        return {
            user,
            token,
        };
    }
    async updatePassword(userId, newPassword) {
        const hashed = await bcrypt_1.default.hash(newPassword, 10);
        try {
            const updatedUser = await prisma_1.prisma.user.update({
                where: { id: userId },
                data: { password: hashed },
            });
            return updatedUser;
        }
        catch (error) {
            throw new Error('Error al actualizar contraseña');
        }
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map