import { prisma } from "../../../config/prisma";
import { SavingDto } from "../../../domain";



export class SavingService {
    public async enviarSaving(savingDto: SavingDto, userId: string) {
        const mov = await prisma.saving.create({
            data: {
                montoMeta: savingDto.montoMeta,
                progreso: savingDto.progreso!,
                user: {
                    connect: {id: userId} 
                }
            }
        })

        return mov
    }
}