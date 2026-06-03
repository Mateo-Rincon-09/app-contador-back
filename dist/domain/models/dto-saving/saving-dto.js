"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingDto = void 0;
class SavingDto {
    id;
    amount;
    dateCreated;
    dateStart;
    dateEnd;
    status;
    dateUpdated;
    amountProgress;
    constructor(id, amount, dateCreated, dateStart, dateEnd, status, dateUpdated, amountProgress) {
        this.id = id;
        this.amount = amount;
        this.dateCreated = dateCreated;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.status = status;
        this.dateUpdated = dateUpdated;
        this.amountProgress = amountProgress;
    }
    static create(object) {
        const { id, amount, dateCreated, dateStart, dateEnd, status, dateUpdated, amountProgress } = object;
        if (!amount)
            return ['Tienes que agregar un valor para continuar'];
        if (amount <= 0)
            return ['El monto no puede ser 0 o menor'];
        if (!dateCreated)
            return ['La fecha de creación es necesaria'];
        if (!dateStart)
            return ['La fecha de inicio es necesaria'];
        if (!dateEnd)
            return ['La fecha de fin es necesaria'];
        return ["", new SavingDto(id, amount, dateCreated, dateStart, dateEnd, status, dateUpdated, amountProgress)];
    }
}
exports.SavingDto = SavingDto;
//# sourceMappingURL=saving-dto.js.map