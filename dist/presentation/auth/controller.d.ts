import { Request, Response } from "express";
export declare class AuthController {
    private readonly service;
    registerUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    loginGoogle: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updatePassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=controller.d.ts.map