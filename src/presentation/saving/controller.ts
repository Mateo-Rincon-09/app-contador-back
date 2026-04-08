import { Request, Response } from "express";
import { SavingService } from "../services/saving/saving.service";
import { SavingDto } from "../../domain/models/dto-saving/saving-dto";

interface SavingRequest extends Request{
    userId?: string;
}

export class SavingController {
  
    private readonly service = new SavingService();

    createSaving = async (req: SavingRequest, res: Response) => {
        const [ error, createSavingDto ] = SavingDto.create(req.body);

        if (error) return res.status(400).json(error);

        try {
            const result = await this.service.createSaving(createSavingDto!, req.userId!);
            return res.status(201).json({message: `Meta creada con exito ${result}`});
        } catch (error) {
            return res.status(500).json({error});
        }
    }
    
}