"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.StatusType = void 0;
var StatusType;
(function (StatusType) {
    StatusType["active"] = "active";
    StatusType["closed"] = "closed";
    StatusType["deleted"] = "deleted";
})(StatusType || (exports.StatusType = StatusType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["income"] = "income";
    TransactionType["expense"] = "expense";
    TransactionType["saving"] = "saving";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
//# sourceMappingURL=enum.js.map