import { prisma } from "../../../config/prisma";
import { SavingDto } from "../../../domain";



export class SavingService {
    public async createSaving(savingDto: SavingDto, userId: string) {
        const saving = await prisma.saving.create({
            data: {
                amountExpected: savingDto.amountExpected,
                amountProgress: savingDto.amountProgress!,
                dateCreated: new Date(),
                dateExpectedStart: savingDto.dateExpectedStart,
                dateExpectedEnd: savingDto.dateExpectedEnd,
                dateUpdated: savingDto.dateUpdated!,
                user: {
                    connect: {id: userId} 
                }
            }
        })

        return saving;
    }
}