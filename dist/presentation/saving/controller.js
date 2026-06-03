"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingController = void 0;
const saving_service_1 = require("../services/saving/saving.service");
const saving_dto_1 = require("../../domain/models/dto-saving/saving-dto");
class SavingController {
    service = new saving_service_1.SavingService();
    createSaving = async (req, res) => {
        const [error, createSavingDto] = saving_dto_1.SavingDto.create(req.body);
        if (error)
            return res.status(400).json(error);
        try {
            const result = await this.service.createSaving(createSavingDto, req.userId);
            return res.status(201).json({ message: `Meta creada con exito ${result}` });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    deleteSaving = async (req, res) => {
        const savingId = req.params.savingId;
        try {
            await this.service.deleteSaving(savingId, req.userId);
            return res.status(200).json({ message: 'Ahorro eliminado con exito' });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
    listSaving = async (req, res) => {
        const body = {
            ...req.body,
            userId: req.userId,
        };
        try {
            const result = await this.service.listSavings(body);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    };
}
exports.SavingController = SavingController;
//# sourceMappingURL=controller.js.map