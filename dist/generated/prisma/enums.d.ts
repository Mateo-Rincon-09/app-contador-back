export declare const TransactionType: {
    readonly income: "income";
    readonly expense: "expense";
    readonly saving: "saving";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export declare const StatusType: {
    readonly active: "active";
    readonly closed: "closed";
    readonly deleted: "deleted";
};
export type StatusType = (typeof StatusType)[keyof typeof StatusType];
//# sourceMappingURL=enums.d.ts.map