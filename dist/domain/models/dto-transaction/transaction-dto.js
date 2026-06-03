"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDto = void 0;
class TransactionDto {
    id;
    type;
    amount;
    description;
    dateCreated;
    status;
    categoryId;
    dateUpdated;
    savingId;
    constructor(id, type, amount, description, dateCreated, status, categoryId, dateUpdated, savingId) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.description = description;
        this.dateCreated = dateCreated;
        this.status = status;
        this.categoryId = categoryId;
        this.dateUpdated = dateUpdated;
        this.savingId = savingId;
    }
    static create(object) {
        const { id, type, amount, description, dateCreated, status, categoryId, dateUpdated, savingId } = object;
        if (!amount)
            return ['El monto es necesario'];
        if (amount <= 0)
            return ['El monto del ingreso debe ser mayor a 0'];
        if (!description)
            return ['La descripcion es necesaria'];
        if (!dateCreated)
            return ['La fecha es necesaria'];
        if (!categoryId)
            return ["Categoria es necesaria"];
        return ["", new TransactionDto(id, type, amount, description, dateCreated, status, categoryId, dateUpdated, savingId)];
    }
}
exports.TransactionDto = TransactionDto;
//# sourceMappingURL=transaction-dto.js.map