import { Request, Response } from "express";
import { SavingService } from "../services/saving/saving.service";
import { SavingDto } from "../../domain/models/dto-saving/saving-dto";
import { IPaginationRequest } from "../../config/pagination";

interface SavingRequest extends Request {
    userId?: string;
}

export interface SavingListRequest extends IPaginationRequest {
    userId: string;
}

export class SavingController {

    private readonly service = new SavingService();

    createSaving = async (req: SavingRequest, res: Response) => {
        const [error, createSavingDto] = SavingDto.create(req.body);

        if (error) return res.status(400).json(error);

        try {
            const result = await this.service.createSaving(createSavingDto!, req.userId!);
            return res.status(201).json({ message: `Meta creada con exito ${result}` });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    deleteSaving = async (req: SavingRequest, res: Response) => {

        const savingId = req.params.savingId as string;

        try {
            await this.service.deleteSaving(savingId, req.userId!,);
            return res.status(200).json({ message: 'Ahorro eliminado con exito' });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    listSaving = async (req: SavingRequest, res: Response) => {
        const body: SavingListRequest = {
            ...req.body,
            userId: req.userId!,
        };
        try {
            const result = await this.service.listSavings(body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

}