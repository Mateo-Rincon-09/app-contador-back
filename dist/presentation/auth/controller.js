"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
const auth_service_1 = require("../services/auth/auth.service");
class AuthController {
    service = new auth_service_1.AuthService();
    registerUser = async (req, res) => {
        const [error, registerUserDto] = domain_1.RegisterUserDto.create(req.body);
        if (error)
            return res.status(400).json({ error: error });
        try {
            const result = await this.service.register(registerUserDto);
            const { user, token } = result;
            return res.status(201).json({ message: `Usuario registrado con exito`, user, token });
        }
        catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    };
    loginUser = async (req, res) => {
        const [error, loginUserDto] = domain_1.LoginUserDto.create(req.body);
        if (error)
            return res.status(400).json({ error: error });
        try {
            const result = await this.service.login(loginUserDto);
            const { user, token } = result;
            return res.status(200).json({ message: `Usuario logueado con exito`, user, token });
        }
        catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    };
    loginGoogle = async (req, res) => {
        const { token } = req.body;
        if (!token) {
            return res.status(400).json({ error: 'Token requerido' });
        }
        try {
            const result = await this.service.loginGoogle(token);
            const { user, token: jwtToken } = result;
            return res.status(200).json({
                message: 'Login Google exitoso',
                user,
                token: jwtToken,
            });
        }
        catch (error) {
            return res.status(400).json({
                error: `${error}`
            });
        }
    };
    updatePassword = async (req, res) => {
        const userId = req.params.id;
        const { newPassword } = req.body;
        try {
            await this.service.updatePassword(userId, newPassword);
            return res.status(200).json({ message: `Contraseña actualizada con exito` });
        }
        catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    };
}
exports.AuthController = AuthController;
//# sourceMappingURL=controller.js.map