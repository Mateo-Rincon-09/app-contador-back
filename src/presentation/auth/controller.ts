import { Request, Response } from "express";
import { LoginUserDto, RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth/auth.service";


export class AuthController {

    private readonly service = new AuthService()

    registerUser = async (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);

        if (error) return res.status(400).json({ error: error });

        try {
            const result = await this.service.register(registerUserDto as RegisterUserDto);
            return res.status(201).json({ message: `Usuario registrado con exito`, user: { user: result.user, token: result.token } });
        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    }

    loginUser = async (req: Request, res: Response) => {
        const [error, loginUserDto] = LoginUserDto.create(req.body);

        if (error) return res.status(400).json({ error: error });

        try {
            const result = await this.service.login(loginUserDto as LoginUserDto);
            return res.status(200).json({ message: `Usuario logueado con exito`, user: { user: result.user, token: result.token } });
        } catch (error) {
            return res.status(400).json({ error: `${error}` });
        }
    }


}