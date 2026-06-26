import { Request, Response } from "express";
import { LoginUserDto, RegisterUserDto, ResendVerificationDto, ForgotPasswordDto, ResetPasswordDto, ChangePasswordDto } from "../../domain";
import { AuthService } from "../services/auth/auth.service";


export class AuthController {

    private readonly service = new AuthService();

    testEmail = async (req: Request, res: Response) => {

        try {

            const result = await this.service.testEmail();

            return res.status(200).json(result);

        } catch (error) {

            return res.status(500).json({
                error: `${error}`
            });
        }
    }

    verifyEmail = async (req: Request, res: Response) => {

        const token = req.query.token as string;

        if (!token) {
            return res.status(400).json({ error: 'Token requerido' });
        }

        try {
            const result = await this.service.verifyEmail(token);
            return res.status(200).json(result);

        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    }

    resendVerification = async (req: Request, res: Response) => {

        const [error, dto] = ResendVerificationDto.create(req.body);

        if (error) {
            return res.status(400).json({ error });
        }

        try {
            const result = await this.service.resendVerification(dto!);
            return res.status(200).json(result);

        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }

    }

    registerUser = async (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);

        if (error) return res.status(400).json({ error: error });

        try {
            const result = await this.service.register(registerUserDto as RegisterUserDto);

            return res.status(201).json({ message: `Usuario registrado con exito`, result });
        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    }

    loginUser = async (req: Request, res: Response) => {
        const [error, loginUserDto] = LoginUserDto.create(req.body);

        if (error) return res.status(400).json({ error: error });

        try {
            const result = await this.service.login(loginUserDto as LoginUserDto);
            const { user, token } = result;
            return res.status(200).json({ message: `Usuario logueado con exito`, user, token });
        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    }

    loginGoogle = async (req: Request, res: Response) => {

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

        } catch (error) {
            return res.status(400).json({
                error: `${error}`
            });
        }
    }


    forgotPassword = async (req: Request, res: Response) => {

        const [error, dto] = ForgotPasswordDto.create(req.body);

        if (error) {
            return res.status(400).json({ error });
        }

        try {
            const result = await this.service.forgotPassword(dto!);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }

    }

    resetPassword = async (req: Request, res: Response) => {

        const [error, dto] = ResetPasswordDto.create(req.body);

        if (error) {
            return res.status(400).json({ error });
        }

        try {
            const result = await this.service.resetPassword(dto!);
            return res.status(200).json(result);

        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }

    }

    validateResetToken = async (req: Request, res: Response) => {

        const token = req.query.token as string;

        if (!token) {
            return res.status(400).json({ error: "Token requerido" });
        }

        try {
            const result = await this.service.validateResetToken(token);
            return res.json(result);
        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }

    }

    changePassword = async (req: Request & { userId?: string }, res: Response) => {

        const [error, dto] = ChangePasswordDto.create(req.body);

        if (error) {
            return res.status(400).json({ error });
        }

        try {
            const result = await this.service.changePassword(req.userId!, dto!);
            return res.status(200).json(result);

        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }

    }

}