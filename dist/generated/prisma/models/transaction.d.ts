import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model transaction
 *
 */
export type transactionModel = runtime.Types.Result.DefaultSelection<Prisma.$transactionPayload>;
export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
export type TransactionAvgAggregateOutputType = {
    amount: number | null;
};
export type TransactionSumAggregateOutputType = {
    amount: number | null;
};
export type TransactionMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
    type: $Enums.TransactionType | null;
    status: $Enums.StatusType | null;
    userId: string | null;
    categoryId: string | null;
    savingId: string | null;
};
export type TransactionMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
    type: $Enums.TransactionType | null;
    status: $Enums.StatusType | null;
    userId: string | null;
    categoryId: string | null;
    savingId: string | null;
};
export type TransactionCountAggregateOutputType = {
    id: number;
    amount: number;
    description: number;
    dateCreated: number;
    dateUpdated: number;
    type: number;
    status: number;
    userId: number;
    categoryId: number;
    savingId: number;
    _all: number;
};
export type TransactionAvgAggregateInputType = {
    amount?: true;
};
export type TransactionSumAggregateInputType = {
    amount?: true;
};
export type TransactionMinAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    dateCreated?: true;
    dateUpdated?: true;
    type?: true;
    status?: true;
    userId?: true;
    categoryId?: true;
    savingId?: true;
};
export type TransactionMaxAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    dateCreated?: true;
    dateUpdated?: true;
    type?: true;
    status?: true;
    userId?: true;
    categoryId?: true;
    savingId?: true;
};
export type TransactionCountAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    dateCreated?: true;
    dateUpdated?: true;
    type?: true;
    status?: true;
    userId?: true;
    categoryId?: true;
    savingId?: true;
    _all?: true;
};
export type TransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: Prisma.transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionOrderByWithRelationInput | Prisma.transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType;
};
export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction[P]> : Prisma.GetScalarType<T[P], AggregateTransaction[P]>;
};
export type transactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionWhereInput;
    orderBy?: Prisma.transactionOrderByWithAggregationInput | Prisma.transactionOrderByWithAggregationInput[];
    by: Prisma.TransactionScalarFieldEnum[] | Prisma.TransactionScalarFieldEnum;
    having?: Prisma.transactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type TransactionGroupByOutputType = {
    id: string;
    amount: number;
    description: string;
    dateCreated: Date;
    dateUpdated: Date | null;
    type: $Enums.TransactionType;
    status: $Enums.StatusType;
    userId: string;
    categoryId: string;
    savingId: string | null;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]>;
}>>;
export type transactionWhereInput = {
    AND?: Prisma.transactionWhereInput | Prisma.transactionWhereInput[];
    OR?: Prisma.transactionWhereInput[];
    NOT?: Prisma.transactionWhereInput | Prisma.transactionWhereInput[];
    id?: Prisma.StringFilter<"transaction"> | string;
    amount?: Prisma.FloatFilter<"transaction"> | number;
    description?: Prisma.StringFilter<"transaction"> | string;
    dateCreated?: Prisma.DateTimeFilter<"transaction"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableFilter<"transaction"> | Date | string | null;
    type?: Prisma.EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFilter<"transaction"> | $Enums.StatusType;
    userId?: Prisma.StringFilter<"transaction"> | string;
    categoryId?: Prisma.StringFilter<"transaction"> | string;
    savingId?: Prisma.StringNullableFilter<"transaction"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.categoryWhereInput>;
    saving?: Prisma.XOR<Prisma.SavingNullableScalarRelationFilter, Prisma.savingWhereInput> | null;
};
export type transactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    savingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.userOrderByWithRelationInput;
    category?: Prisma.categoryOrderByWithRelationInput;
    saving?: Prisma.savingOrderByWithRelationInput;
};
export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.transactionWhereInput | Prisma.transactionWhereInput[];
    OR?: Prisma.transactionWhereInput[];
    NOT?: Prisma.transactionWhereInput | Prisma.transactionWhereInput[];
    amount?: Prisma.FloatFilter<"transaction"> | number;
    description?: Prisma.StringFilter<"transaction"> | string;
    dateCreated?: Prisma.DateTimeFilter<"transaction"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableFilter<"transaction"> | Date | string | null;
    type?: Prisma.EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFilter<"transaction"> | $Enums.StatusType;
    userId?: Prisma.StringFilter<"transaction"> | string;
    categoryId?: Prisma.StringFilter<"transaction"> | string;
    savingId?: Prisma.StringNullableFilter<"transaction"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.categoryWhereInput>;
    saving?: Prisma.XOR<Prisma.SavingNullableScalarRelationFilter, Prisma.savingWhereInput> | null;
}, "id">;
export type transactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    savingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.transactionCountOrderByAggregateInput;
    _avg?: Prisma.transactionAvgOrderByAggregateInput;
    _max?: Prisma.transactionMaxOrderByAggregateInput;
    _min?: Prisma.transactionMinOrderByAggregateInput;
    _sum?: Prisma.transactionSumOrderByAggregateInput;
};
export type transactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.transactionScalarWhereWithAggregatesInput | Prisma.transactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.transactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.transactionScalarWhereWithAggregatesInput | Prisma.transactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"transaction"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"transaction"> | number;
    description?: Prisma.StringWithAggregatesFilter<"transaction"> | string;
    dateCreated?: Prisma.DateTimeWithAggregatesFilter<"transaction"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null;
    type?: Prisma.EnumTransactionTypeWithAggregatesFilter<"transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeWithAggregatesFilter<"transaction"> | $Enums.StatusType;
    userId?: Prisma.StringWithAggregatesFilter<"transaction"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"transaction"> | string;
    savingId?: Prisma.StringNullableWithAggregatesFilter<"transaction"> | string | null;
};
export type transactionCreateInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    user: Prisma.userCreateNestedOneWithoutTransactionsInput;
    category: Prisma.categoryCreateNestedOneWithoutTransactionsInput;
    saving?: Prisma.savingCreateNestedOneWithoutTransactionsInput;
};
export type transactionUncheckedCreateInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    userId: string;
    categoryId: string;
    savingId?: string | null;
};
export type transactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    user?: Prisma.userUpdateOneRequiredWithoutTransactionsNestedInput;
    category?: Prisma.categoryUpdateOneRequiredWithoutTransactionsNestedInput;
    saving?: Prisma.savingUpdateOneWithoutTransactionsNestedInput;
};
export type transactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    savingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionCreateManyInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    userId: string;
    categoryId: string;
    savingId?: string | null;
};
export type transactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
};
export type transactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    savingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TransactionListRelationFilter = {
    every?: Prisma.transactionWhereInput;
    some?: Prisma.transactionWhereInput;
    none?: Prisma.transactionWhereInput;
};
export type transactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type transactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    savingId?: Prisma.SortOrder;
};
export type transactionAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type transactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    savingId?: Prisma.SortOrder;
};
export type transactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    savingId?: Prisma.SortOrder;
};
export type transactionSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type transactionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutUserInput, Prisma.transactionUncheckedCreateWithoutUserInput> | Prisma.transactionCreateWithoutUserInput[] | Prisma.transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutUserInput | Prisma.transactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.transactionCreateManyUserInputEnvelope;
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
};
export type transactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutUserInput, Prisma.transactionUncheckedCreateWithoutUserInput> | Prisma.transactionCreateWithoutUserInput[] | Prisma.transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutUserInput | Prisma.transactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.transactionCreateManyUserInputEnvelope;
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
};
export type transactionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutUserInput, Prisma.transactionUncheckedCreateWithoutUserInput> | Prisma.transactionCreateWithoutUserInput[] | Prisma.transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutUserInput | Prisma.transactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.transactionUpsertWithWhereUniqueWithoutUserInput | Prisma.transactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.transactionCreateManyUserInputEnvelope;
    set?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    disconnect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    delete?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    update?: Prisma.transactionUpdateWithWhereUniqueWithoutUserInput | Prisma.transactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.transactionUpdateManyWithWhereWithoutUserInput | Prisma.transactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
};
export type transactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutUserInput, Prisma.transactionUncheckedCreateWithoutUserInput> | Prisma.transactionCreateWithoutUserInput[] | Prisma.transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutUserInput | Prisma.transactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.transactionUpsertWithWhereUniqueWithoutUserInput | Prisma.transactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.transactionCreateManyUserInputEnvelope;
    set?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    disconnect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    delete?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    update?: Prisma.transactionUpdateWithWhereUniqueWithoutUserInput | Prisma.transactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.transactionUpdateManyWithWhereWithoutUserInput | Prisma.transactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
};
export type EnumStatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.StatusType;
};
export type transactionCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutCategoryInput, Prisma.transactionUncheckedCreateWithoutCategoryInput> | Prisma.transactionCreateWithoutCategoryInput[] | Prisma.transactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutCategoryInput | Prisma.transactionCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.transactionCreateManyCategoryInputEnvelope;
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
};
export type transactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutCategoryInput, Prisma.transactionUncheckedCreateWithoutCategoryInput> | Prisma.transactionCreateWithoutCategoryInput[] | Prisma.transactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutCategoryInput | Prisma.transactionCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.transactionCreateManyCategoryInputEnvelope;
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
};
export type transactionUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutCategoryInput, Prisma.transactionUncheckedCreateWithoutCategoryInput> | Prisma.transactionCreateWithoutCategoryInput[] | Prisma.transactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutCategoryInput | Prisma.transactionCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.transactionUpsertWithWhereUniqueWithoutCategoryInput | Prisma.transactionUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.transactionCreateManyCategoryInputEnvelope;
    set?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    disconnect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    delete?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    update?: Prisma.transactionUpdateWithWhereUniqueWithoutCategoryInput | Prisma.transactionUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.transactionUpdateManyWithWhereWithoutCategoryInput | Prisma.transactionUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
};
export type transactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutCategoryInput, Prisma.transactionUncheckedCreateWithoutCategoryInput> | Prisma.transactionCreateWithoutCategoryInput[] | Prisma.transactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutCategoryInput | Prisma.transactionCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.transactionUpsertWithWhereUniqueWithoutCategoryInput | Prisma.transactionUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.transactionCreateManyCategoryInputEnvelope;
    set?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    disconnect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    delete?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    update?: Prisma.transactionUpdateWithWhereUniqueWithoutCategoryInput | Prisma.transactionUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.transactionUpdateManyWithWhereWithoutCategoryInput | Prisma.transactionUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
};
export type transactionCreateNestedManyWithoutSavingInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutSavingInput, Prisma.transactionUncheckedCreateWithoutSavingInput> | Prisma.transactionCreateWithoutSavingInput[] | Prisma.transactionUncheckedCreateWithoutSavingInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutSavingInput | Prisma.transactionCreateOrConnectWithoutSavingInput[];
    createMany?: Prisma.transactionCreateManySavingInputEnvelope;
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
};
export type transactionUncheckedCreateNestedManyWithoutSavingInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutSavingInput, Prisma.transactionUncheckedCreateWithoutSavingInput> | Prisma.transactionCreateWithoutSavingInput[] | Prisma.transactionUncheckedCreateWithoutSavingInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutSavingInput | Prisma.transactionCreateOrConnectWithoutSavingInput[];
    createMany?: Prisma.transactionCreateManySavingInputEnvelope;
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
};
export type transactionUpdateManyWithoutSavingNestedInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutSavingInput, Prisma.transactionUncheckedCreateWithoutSavingInput> | Prisma.transactionCreateWithoutSavingInput[] | Prisma.transactionUncheckedCreateWithoutSavingInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutSavingInput | Prisma.transactionCreateOrConnectWithoutSavingInput[];
    upsert?: Prisma.transactionUpsertWithWhereUniqueWithoutSavingInput | Prisma.transactionUpsertWithWhereUniqueWithoutSavingInput[];
    createMany?: Prisma.transactionCreateManySavingInputEnvelope;
    set?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    disconnect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    delete?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    update?: Prisma.transactionUpdateWithWhereUniqueWithoutSavingInput | Prisma.transactionUpdateWithWhereUniqueWithoutSavingInput[];
    updateMany?: Prisma.transactionUpdateManyWithWhereWithoutSavingInput | Prisma.transactionUpdateManyWithWhereWithoutSavingInput[];
    deleteMany?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
};
export type transactionUncheckedUpdateManyWithoutSavingNestedInput = {
    create?: Prisma.XOR<Prisma.transactionCreateWithoutSavingInput, Prisma.transactionUncheckedCreateWithoutSavingInput> | Prisma.transactionCreateWithoutSavingInput[] | Prisma.transactionUncheckedCreateWithoutSavingInput[];
    connectOrCreate?: Prisma.transactionCreateOrConnectWithoutSavingInput | Prisma.transactionCreateOrConnectWithoutSavingInput[];
    upsert?: Prisma.transactionUpsertWithWhereUniqueWithoutSavingInput | Prisma.transactionUpsertWithWhereUniqueWithoutSavingInput[];
    createMany?: Prisma.transactionCreateManySavingInputEnvelope;
    set?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    disconnect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    delete?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    connect?: Prisma.transactionWhereUniqueInput | Prisma.transactionWhereUniqueInput[];
    update?: Prisma.transactionUpdateWithWhereUniqueWithoutSavingInput | Prisma.transactionUpdateWithWhereUniqueWithoutSavingInput[];
    updateMany?: Prisma.transactionUpdateManyWithWhereWithoutSavingInput | Prisma.transactionUpdateManyWithWhereWithoutSavingInput[];
    deleteMany?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
};
export type transactionCreateWithoutUserInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    category: Prisma.categoryCreateNestedOneWithoutTransactionsInput;
    saving?: Prisma.savingCreateNestedOneWithoutTransactionsInput;
};
export type transactionUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    categoryId: string;
    savingId?: string | null;
};
export type transactionCreateOrConnectWithoutUserInput = {
    where: Prisma.transactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionCreateWithoutUserInput, Prisma.transactionUncheckedCreateWithoutUserInput>;
};
export type transactionCreateManyUserInputEnvelope = {
    data: Prisma.transactionCreateManyUserInput | Prisma.transactionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type transactionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.transactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionUpdateWithoutUserInput, Prisma.transactionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.transactionCreateWithoutUserInput, Prisma.transactionUncheckedCreateWithoutUserInput>;
};
export type transactionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.transactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionUpdateWithoutUserInput, Prisma.transactionUncheckedUpdateWithoutUserInput>;
};
export type transactionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.transactionScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionUpdateManyMutationInput, Prisma.transactionUncheckedUpdateManyWithoutUserInput>;
};
export type transactionScalarWhereInput = {
    AND?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
    OR?: Prisma.transactionScalarWhereInput[];
    NOT?: Prisma.transactionScalarWhereInput | Prisma.transactionScalarWhereInput[];
    id?: Prisma.StringFilter<"transaction"> | string;
    amount?: Prisma.FloatFilter<"transaction"> | number;
    description?: Prisma.StringFilter<"transaction"> | string;
    dateCreated?: Prisma.DateTimeFilter<"transaction"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableFilter<"transaction"> | Date | string | null;
    type?: Prisma.EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFilter<"transaction"> | $Enums.StatusType;
    userId?: Prisma.StringFilter<"transaction"> | string;
    categoryId?: Prisma.StringFilter<"transaction"> | string;
    savingId?: Prisma.StringNullableFilter<"transaction"> | string | null;
};
export type transactionCreateWithoutCategoryInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    user: Prisma.userCreateNestedOneWithoutTransactionsInput;
    saving?: Prisma.savingCreateNestedOneWithoutTransactionsInput;
};
export type transactionUncheckedCreateWithoutCategoryInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    userId: string;
    savingId?: string | null;
};
export type transactionCreateOrConnectWithoutCategoryInput = {
    where: Prisma.transactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionCreateWithoutCategoryInput, Prisma.transactionUncheckedCreateWithoutCategoryInput>;
};
export type transactionCreateManyCategoryInputEnvelope = {
    data: Prisma.transactionCreateManyCategoryInput | Prisma.transactionCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type transactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.transactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionUpdateWithoutCategoryInput, Prisma.transactionUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.transactionCreateWithoutCategoryInput, Prisma.transactionUncheckedCreateWithoutCategoryInput>;
};
export type transactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.transactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionUpdateWithoutCategoryInput, Prisma.transactionUncheckedUpdateWithoutCategoryInput>;
};
export type transactionUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.transactionScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionUpdateManyMutationInput, Prisma.transactionUncheckedUpdateManyWithoutCategoryInput>;
};
export type transactionCreateWithoutSavingInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    user: Prisma.userCreateNestedOneWithoutTransactionsInput;
    category: Prisma.categoryCreateNestedOneWithoutTransactionsInput;
};
export type transactionUncheckedCreateWithoutSavingInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    userId: string;
    categoryId: string;
};
export type transactionCreateOrConnectWithoutSavingInput = {
    where: Prisma.transactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionCreateWithoutSavingInput, Prisma.transactionUncheckedCreateWithoutSavingInput>;
};
export type transactionCreateManySavingInputEnvelope = {
    data: Prisma.transactionCreateManySavingInput | Prisma.transactionCreateManySavingInput[];
    skipDuplicates?: boolean;
};
export type transactionUpsertWithWhereUniqueWithoutSavingInput = {
    where: Prisma.transactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionUpdateWithoutSavingInput, Prisma.transactionUncheckedUpdateWithoutSavingInput>;
    create: Prisma.XOR<Prisma.transactionCreateWithoutSavingInput, Prisma.transactionUncheckedCreateWithoutSavingInput>;
};
export type transactionUpdateWithWhereUniqueWithoutSavingInput = {
    where: Prisma.transactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionUpdateWithoutSavingInput, Prisma.transactionUncheckedUpdateWithoutSavingInput>;
};
export type transactionUpdateManyWithWhereWithoutSavingInput = {
    where: Prisma.transactionScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionUpdateManyMutationInput, Prisma.transactionUncheckedUpdateManyWithoutSavingInput>;
};
export type transactionCreateManyUserInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    categoryId: string;
    savingId?: string | null;
};
export type transactionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    category?: Prisma.categoryUpdateOneRequiredWithoutTransactionsNestedInput;
    saving?: Prisma.savingUpdateOneWithoutTransactionsNestedInput;
};
export type transactionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    savingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    savingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionCreateManyCategoryInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    userId: string;
    savingId?: string | null;
};
export type transactionUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    user?: Prisma.userUpdateOneRequiredWithoutTransactionsNestedInput;
    saving?: Prisma.savingUpdateOneWithoutTransactionsNestedInput;
};
export type transactionUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    savingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    savingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionCreateManySavingInput = {
    id?: string;
    amount: number;
    description: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    type?: $Enums.TransactionType;
    status?: $Enums.StatusType;
    userId: string;
    categoryId: string;
};
export type transactionUpdateWithoutSavingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    user?: Prisma.userUpdateOneRequiredWithoutTransactionsNestedInput;
    category?: Prisma.categoryUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type transactionUncheckedUpdateWithoutSavingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type transactionUncheckedUpdateManyWithoutSavingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type transactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    type?: boolean;
    status?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    savingId?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    saving?: boolean | Prisma.transaction$savingArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type transactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    type?: boolean;
    status?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    savingId?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    saving?: boolean | Prisma.transaction$savingArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type transactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    type?: boolean;
    status?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    savingId?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    saving?: boolean | Prisma.transaction$savingArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type transactionSelectScalar = {
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    type?: boolean;
    status?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    savingId?: boolean;
};
export type transactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "description" | "dateCreated" | "dateUpdated" | "type" | "status" | "userId" | "categoryId" | "savingId", ExtArgs["result"]["transaction"]>;
export type transactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    saving?: boolean | Prisma.transaction$savingArgs<ExtArgs>;
};
export type transactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    saving?: boolean | Prisma.transaction$savingArgs<ExtArgs>;
};
export type transactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    saving?: boolean | Prisma.transaction$savingArgs<ExtArgs>;
};
export type $transactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "transaction";
    objects: {
        user: Prisma.$userPayload<ExtArgs>;
        category: Prisma.$categoryPayload<ExtArgs>;
        saving: Prisma.$savingPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        amount: number;
        description: string;
        dateCreated: Date;
        dateUpdated: Date | null;
        type: $Enums.TransactionType;
        status: $Enums.StatusType;
        userId: string;
        categoryId: string;
        savingId: string | null;
    }, ExtArgs["result"]["transaction"]>;
    composites: {};
};
export type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$transactionPayload, S>;
export type transactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionCountAggregateInputType | true;
};
export interface transactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['transaction'];
        meta: {
            name: 'transaction';
        };
    };
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: Prisma.SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: Prisma.SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends transactionFindManyArgs>(args?: Prisma.SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     *
     */
    create<T extends transactionCreateArgs>(args: Prisma.SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends transactionCreateManyArgs>(args?: Prisma.SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     *
     */
    delete<T extends transactionDeleteArgs>(args: Prisma.SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends transactionUpdateArgs>(args: Prisma.SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends transactionUpdateManyArgs>(args: Prisma.SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: Prisma.SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma.Prisma__transactionClient<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(args?: Prisma.Subset<T, transactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Prisma.Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;
    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends transactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: transactionGroupByArgs['orderBy'];
    } : {
        orderBy?: transactionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the transaction model
     */
    readonly fields: transactionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for transaction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__transactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.categoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoryDefaultArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    saving<T extends Prisma.transaction$savingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction$savingArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the transaction model
 */
export interface transactionFieldRefs {
    readonly id: Prisma.FieldRef<"transaction", 'String'>;
    readonly amount: Prisma.FieldRef<"transaction", 'Float'>;
    readonly description: Prisma.FieldRef<"transaction", 'String'>;
    readonly dateCreated: Prisma.FieldRef<"transaction", 'DateTime'>;
    readonly dateUpdated: Prisma.FieldRef<"transaction", 'DateTime'>;
    readonly type: Prisma.FieldRef<"transaction", 'TransactionType'>;
    readonly status: Prisma.FieldRef<"transaction", 'StatusType'>;
    readonly userId: Prisma.FieldRef<"transaction", 'String'>;
    readonly categoryId: Prisma.FieldRef<"transaction", 'String'>;
    readonly savingId: Prisma.FieldRef<"transaction", 'String'>;
}
/**
 * transaction findUnique
 */
export type transactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where: Prisma.transactionWhereUniqueInput;
};
/**
 * transaction findUniqueOrThrow
 */
export type transactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where: Prisma.transactionWhereUniqueInput;
};
/**
 * transaction findFirst
 */
export type transactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where?: Prisma.transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionOrderByWithRelationInput | Prisma.transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: Prisma.transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * transaction findFirstOrThrow
 */
export type transactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where?: Prisma.transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionOrderByWithRelationInput | Prisma.transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: Prisma.transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * transaction findMany
 */
export type transactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: Prisma.transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionOrderByWithRelationInput | Prisma.transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transactions.
     */
    cursor?: Prisma.transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * transaction create
 */
export type transactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a transaction.
     */
    data: Prisma.XOR<Prisma.transactionCreateInput, Prisma.transactionUncheckedCreateInput>;
};
/**
 * transaction createMany
 */
export type transactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: Prisma.transactionCreateManyInput | Prisma.transactionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * transaction createManyAndReturn
 */
export type transactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * The data used to create many transactions.
     */
    data: Prisma.transactionCreateManyInput | Prisma.transactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * transaction update
 */
export type transactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a transaction.
     */
    data: Prisma.XOR<Prisma.transactionUpdateInput, Prisma.transactionUncheckedUpdateInput>;
    /**
     * Choose, which transaction to update.
     */
    where: Prisma.transactionWhereUniqueInput;
};
/**
 * transaction updateMany
 */
export type transactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: Prisma.XOR<Prisma.transactionUpdateManyMutationInput, Prisma.transactionUncheckedUpdateManyInput>;
    /**
     * Filter which transactions to update
     */
    where?: Prisma.transactionWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
};
/**
 * transaction updateManyAndReturn
 */
export type transactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * The data used to update transactions.
     */
    data: Prisma.XOR<Prisma.transactionUpdateManyMutationInput, Prisma.transactionUncheckedUpdateManyInput>;
    /**
     * Filter which transactions to update
     */
    where?: Prisma.transactionWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * transaction upsert
 */
export type transactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: Prisma.transactionWhereUniqueInput;
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: Prisma.XOR<Prisma.transactionCreateInput, Prisma.transactionUncheckedCreateInput>;
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.transactionUpdateInput, Prisma.transactionUncheckedUpdateInput>;
};
/**
 * transaction delete
 */
export type transactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
    /**
     * Filter which transaction to delete.
     */
    where: Prisma.transactionWhereUniqueInput;
};
/**
 * transaction deleteMany
 */
export type transactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: Prisma.transactionWhereInput;
    /**
     * Limit how many transactions to delete.
     */
    limit?: number;
};
/**
 * transaction.saving
 */
export type transaction$savingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saving
     */
    select?: Prisma.savingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the saving
     */
    omit?: Prisma.savingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.savingInclude<ExtArgs> | null;
    where?: Prisma.savingWhereInput;
};
/**
 * transaction without action
 */
export type transactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: Prisma.transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: Prisma.transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=transaction.d.ts.map