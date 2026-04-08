import { prisma } from "../../../config/prisma";
import { SavingDto } from "../../../domain";


export class SavingService {
    public async createSaving(savingDto: SavingDto, userId: string) {
        const saving = await prisma.saving.create({
            data: {
                amount: savingDto.amount,
                dateCreated: savingDto.dateCreated,
                dateStart: savingDto.dateStart,
                dateEnd: savingDto.dateEnd,
                status: savingDto.status!,
                dateUpdated: savingDto.dateUpdated!,
                amountProgress: savingDto.amountProgress!,
                user: {
                    connect: {id: userId} 
                }
            }
        })

        return saving;
    }
}