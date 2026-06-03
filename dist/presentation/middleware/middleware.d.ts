import { Request, Response, NextFunction } from 'express';
export declare const middleware: (req: Request & {
    userId?: string;
}, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=middleware.d.ts.map