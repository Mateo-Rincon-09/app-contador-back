import { Request, Response } from "express";
import { TransactionService } from "../services/transaction/transaction.service";
import { TransactionDto } from "../../domain";
import { IPaginationRequest } from "../../config/pagination";

interface AuthRequest extends Request {
  userId?: string;
  categoryId?: string;
}

export interface TransactionListRequest extends IPaginationRequest {
    userId?: string;
}

export class TransactionController {
    private readonly service = new TransactionService()

    createTransaction = async (req: AuthRequest, res: Response) => {
        const [error, createTransactionDto] = TransactionDto.create(req.body);
      
        if (error) return res.status(400).json(error)

        try {
            const resultado = await this.service.createTransaction(createTransactionDto!, req.userId!, req.categoryId!);
            return res.status(201).json({message: `Transacción enviada con exito ${resultado}`});
        } catch (error) {
            return res.status(500).json({error})
        }
    }

    listarMovimientos = async (req: AuthRequest, res: Response) => {
        const body: TransactionListRequest = req.body;
        try {
            const resultado = await this.service.listarMovimientos(body)
            return res.status(200).json(resultado)
        } catch (error) {
            return res.status(500).json({error})
        }
    }
}