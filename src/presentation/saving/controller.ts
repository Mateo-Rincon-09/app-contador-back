import { Request, Response } from "express";
import { SavingService } from "../services/saving/saving.service";
import { SavingDto } from "../../domain/models/dto-saving/saving-dto";

interface SavingRequest extends Request{
    userId?: string
}

export class SavingController {
  
    private readonly service = new SavingService();

    enviarSaving = async (req: SavingRequest, res: Response) => {
        const [ error, enviarSavingDto ] = SavingDto.create(req.body);

        if (error) return res.status(400).json(error);

        try {
            const resultado = await this.service.enviarSaving(enviarSavingDto!, req.userId!);
            return res.status(201).json({message: `Meta creada con exito ${resultado}`});
        } catch (error) {
            return res.status(500).json({error});
        }
    }
    
}