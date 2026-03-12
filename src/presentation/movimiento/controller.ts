import { Request, Response } from "express";
import { MovimientoService } from "../services/movements/movimiento.service";
import { MovimientoDto } from "../../domain";

interface AuthRequest extends Request {
  userId?: string;
}

export class MovimientoController {
    private readonly service = new MovimientoService()

    enviarMovimiento = async (req: AuthRequest, res: Response) => {
        const [error, enviarMovimientoDto] = MovimientoDto.create(req.body);
      
        if (error) return res.status(400).json(error)

        try {
            const resultado = await this.service.enviarMovimiento(enviarMovimientoDto!, req.userId!)
            return res.status(201).json({message: `Movimieto enviado con exito ${resultado}`})
        } catch (error) {
            return res.status(500).json({error})
        }
    }
}