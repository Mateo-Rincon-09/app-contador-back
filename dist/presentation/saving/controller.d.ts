import { Request, Response } from "express";
import { IPaginationRequest } from "../../config/pagination";
interface SavingRequest extends Request {
    userId?: string;
}
export interface SavingListRequest extends IPaginationRequest {
    userId: string;
}
export declare class SavingController {
    private readonly service;
    createSaving: (req: SavingRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteSaving: (req: SavingRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    listSaving: (req: SavingRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
}
export {};
//# sourceMappingURL=controller.d.ts.map