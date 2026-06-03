import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model saving
 *
 */
export type savingModel = runtime.Types.Result.DefaultSelection<Prisma.$savingPayload>;
export type AggregateSaving = {
    _count: SavingCountAggregateOutputType | null;
    _avg: SavingAvgAggregateOutputType | null;
    _sum: SavingSumAggregateOutputType | null;
    _min: SavingMinAggregateOutputType | null;
    _max: SavingMaxAggregateOutputType | null;
};
export type SavingAvgAggregateOutputType = {
    amount: number | null;
    amountProgress: number | null;
};
export type SavingSumAggregateOutputType = {
    amount: number | null;
    amountProgress: number | null;
};
export type SavingMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    amountProgress: number | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
    dateStart: Date | null;
    dateEnd: Date | null;
    status: $Enums.StatusType | null;
    userId: string | null;
};
export type SavingMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    amountProgress: number | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
    dateStart: Date | null;
    dateEnd: Date | null;
    status: $Enums.StatusType | null;
    userId: string | null;
};
export type SavingCountAggregateOutputType = {
    id: number;
    amount: number;
    amountProgress: number;
    dateCreated: number;
    dateUpdated: number;
    dateStart: number;
    dateEnd: number;
    status: number;
    userId: number;
    _all: number;
};
export type SavingAvgAggregateInputType = {
    amount?: true;
    amountProgress?: true;
};
export type SavingSumAggregateInputType = {
    amount?: true;
    amountProgress?: true;
};
export type SavingMinAggregateInputType = {
    id?: true;
    amount?: true;
    amountProgress?: true;
    dateCreated?: true;
    dateUpdated?: true;
    dateStart?: true;
    dateEnd?: true;
    status?: true;
    userId?: true;
};
export type SavingMaxAggregateInputType = {
    id?: true;
    amount?: true;
    amountProgress?: true;
    dateCreated?: true;
    dateUpdated?: true;
    dateStart?: true;
    dateEnd?: true;
    status?: true;
    userId?: true;
};
export type SavingCountAggregateInputType = {
    id?: true;
    amount?: true;
    amountProgress?: true;
    dateCreated?: true;
    dateUpdated?: true;
    dateStart?: true;
    dateEnd?: true;
    status?: true;
    userId?: true;
    _all?: true;
};
export type SavingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which saving to aggregate.
     */
    where?: Prisma.savingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of savings to fetch.
     */
    orderBy?: Prisma.savingOrderByWithRelationInput | Prisma.savingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.savingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` savings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` savings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned savings
    **/
    _count?: true | SavingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SavingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SavingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SavingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SavingMaxAggregateInputType;
};
export type GetSavingAggregateType<T extends SavingAggregateArgs> = {
    [P in keyof T & keyof AggregateSaving]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaving[P]> : Prisma.GetScalarType<T[P], AggregateSaving[P]>;
};
export type savingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.savingWhereInput;
    orderBy?: Prisma.savingOrderByWithAggregationInput | Prisma.savingOrderByWithAggregationInput[];
    by: Prisma.SavingScalarFieldEnum[] | Prisma.SavingScalarFieldEnum;
    having?: Prisma.savingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavingCountAggregateInputType | true;
    _avg?: SavingAvgAggregateInputType;
    _sum?: SavingSumAggregateInputType;
    _min?: SavingMinAggregateInputType;
    _max?: SavingMaxAggregateInputType;
};
export type SavingGroupByOutputType = {
    id: string;
    amount: number;
    amountProgress: number | null;
    dateCreated: Date;
    dateUpdated: Date | null;
    dateStart: Date;
    dateEnd: Date;
    status: $Enums.StatusType;
    userId: string;
    _count: SavingCountAggregateOutputType | null;
    _avg: SavingAvgAggregateOutputType | null;
    _sum: SavingSumAggregateOutputType | null;
    _min: SavingMinAggregateOutputType | null;
    _max: SavingMaxAggregateOutputType | null;
};
type GetSavingGroupByPayload<T extends savingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavingGroupByOutputType[P]>;
}>>;
export type savingWhereInput = {
    AND?: Prisma.savingWhereInput | Prisma.savingWhereInput[];
    OR?: Prisma.savingWhereInput[];
    NOT?: Prisma.savingWhereInput | Prisma.savingWhereInput[];
    id?: Prisma.StringFilter<"saving"> | string;
    amount?: Prisma.FloatFilter<"saving"> | number;
    amountProgress?: Prisma.FloatNullableFilter<"saving"> | number | null;
    dateCreated?: Prisma.DateTimeFilter<"saving"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableFilter<"saving"> | Date | string | null;
    dateStart?: Prisma.DateTimeFilter<"saving"> | Date | string;
    dateEnd?: Prisma.DateTimeFilter<"saving"> | Date | string;
    status?: Prisma.EnumStatusTypeFilter<"saving"> | $Enums.StatusType;
    userId?: Prisma.StringFilter<"saving"> | string;
    transactions?: Prisma.TransactionListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
};
export type savingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountProgress?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateStart?: Prisma.SortOrder;
    dateEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    transactions?: Prisma.transactionOrderByRelationAggregateInput;
    user?: Prisma.userOrderByWithRelationInput;
};
export type savingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.savingWhereInput | Prisma.savingWhereInput[];
    OR?: Prisma.savingWhereInput[];
    NOT?: Prisma.savingWhereInput | Prisma.savingWhereInput[];
    amount?: Prisma.FloatFilter<"saving"> | number;
    amountProgress?: Prisma.FloatNullableFilter<"saving"> | number | null;
    dateCreated?: Prisma.DateTimeFilter<"saving"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableFilter<"saving"> | Date | string | null;
    dateStart?: Prisma.DateTimeFilter<"saving"> | Date | string;
    dateEnd?: Prisma.DateTimeFilter<"saving"> | Date | string;
    status?: Prisma.EnumStatusTypeFilter<"saving"> | $Enums.StatusType;
    userId?: Prisma.StringFilter<"saving"> | string;
    transactions?: Prisma.TransactionListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
}, "id">;
export type savingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountProgress?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateStart?: Prisma.SortOrder;
    dateEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.savingCountOrderByAggregateInput;
    _avg?: Prisma.savingAvgOrderByAggregateInput;
    _max?: Prisma.savingMaxOrderByAggregateInput;
    _min?: Prisma.savingMinOrderByAggregateInput;
    _sum?: Prisma.savingSumOrderByAggregateInput;
};
export type savingScalarWhereWithAggregatesInput = {
    AND?: Prisma.savingScalarWhereWithAggregatesInput | Prisma.savingScalarWhereWithAggregatesInput[];
    OR?: Prisma.savingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.savingScalarWhereWithAggregatesInput | Prisma.savingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"saving"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"saving"> | number;
    amountProgress?: Prisma.FloatNullableWithAggregatesFilter<"saving"> | number | null;
    dateCreated?: Prisma.DateTimeWithAggregatesFilter<"saving"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableWithAggregatesFilter<"saving"> | Date | string | null;
    dateStart?: Prisma.DateTimeWithAggregatesFilter<"saving"> | Date | string;
    dateEnd?: Prisma.DateTimeWithAggregatesFilter<"saving"> | Date | string;
    status?: Prisma.EnumStatusTypeWithAggregatesFilter<"saving"> | $Enums.StatusType;
    userId?: Prisma.StringWithAggregatesFilter<"saving"> | string;
};
export type savingCreateInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
    transactions?: Prisma.transactionCreateNestedManyWithoutSavingInput;
    user: Prisma.userCreateNestedOneWithoutSavingInput;
};
export type savingUncheckedCreateInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
    userId: string;
    transactions?: Prisma.transactionUncheckedCreateNestedManyWithoutSavingInput;
};
export type savingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    transactions?: Prisma.transactionUpdateManyWithoutSavingNestedInput;
    user?: Prisma.userUpdateOneRequiredWithoutSavingNestedInput;
};
export type savingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactions?: Prisma.transactionUncheckedUpdateManyWithoutSavingNestedInput;
};
export type savingCreateManyInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
    userId: string;
};
export type savingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
};
export type savingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SavingListRelationFilter = {
    every?: Prisma.savingWhereInput;
    some?: Prisma.savingWhereInput;
    none?: Prisma.savingWhereInput;
};
export type savingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavingNullableScalarRelationFilter = {
    is?: Prisma.savingWhereInput | null;
    isNot?: Prisma.savingWhereInput | null;
};
export type savingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountProgress?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    dateStart?: Prisma.SortOrder;
    dateEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type savingAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    amountProgress?: Prisma.SortOrder;
};
export type savingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountProgress?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    dateStart?: Prisma.SortOrder;
    dateEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type savingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountProgress?: Prisma.SortOrder;
    dateCreated?: Prisma.SortOrder;
    dateUpdated?: Prisma.SortOrder;
    dateStart?: Prisma.SortOrder;
    dateEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type savingSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    amountProgress?: Prisma.SortOrder;
};
export type savingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.savingCreateWithoutUserInput, Prisma.savingUncheckedCreateWithoutUserInput> | Prisma.savingCreateWithoutUserInput[] | Prisma.savingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.savingCreateOrConnectWithoutUserInput | Prisma.savingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.savingCreateManyUserInputEnvelope;
    connect?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
};
export type savingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.savingCreateWithoutUserInput, Prisma.savingUncheckedCreateWithoutUserInput> | Prisma.savingCreateWithoutUserInput[] | Prisma.savingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.savingCreateOrConnectWithoutUserInput | Prisma.savingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.savingCreateManyUserInputEnvelope;
    connect?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
};
export type savingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.savingCreateWithoutUserInput, Prisma.savingUncheckedCreateWithoutUserInput> | Prisma.savingCreateWithoutUserInput[] | Prisma.savingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.savingCreateOrConnectWithoutUserInput | Prisma.savingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.savingUpsertWithWhereUniqueWithoutUserInput | Prisma.savingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.savingCreateManyUserInputEnvelope;
    set?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    disconnect?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    delete?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    connect?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    update?: Prisma.savingUpdateWithWhereUniqueWithoutUserInput | Prisma.savingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.savingUpdateManyWithWhereWithoutUserInput | Prisma.savingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.savingScalarWhereInput | Prisma.savingScalarWhereInput[];
};
export type savingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.savingCreateWithoutUserInput, Prisma.savingUncheckedCreateWithoutUserInput> | Prisma.savingCreateWithoutUserInput[] | Prisma.savingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.savingCreateOrConnectWithoutUserInput | Prisma.savingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.savingUpsertWithWhereUniqueWithoutUserInput | Prisma.savingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.savingCreateManyUserInputEnvelope;
    set?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    disconnect?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    delete?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    connect?: Prisma.savingWhereUniqueInput | Prisma.savingWhereUniqueInput[];
    update?: Prisma.savingUpdateWithWhereUniqueWithoutUserInput | Prisma.savingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.savingUpdateManyWithWhereWithoutUserInput | Prisma.savingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.savingScalarWhereInput | Prisma.savingScalarWhereInput[];
};
export type savingCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.savingCreateWithoutTransactionsInput, Prisma.savingUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.savingCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.savingWhereUniqueInput;
};
export type savingUpdateOneWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.savingCreateWithoutTransactionsInput, Prisma.savingUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.savingCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.savingUpsertWithoutTransactionsInput;
    disconnect?: Prisma.savingWhereInput | boolean;
    delete?: Prisma.savingWhereInput | boolean;
    connect?: Prisma.savingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.savingUpdateToOneWithWhereWithoutTransactionsInput, Prisma.savingUpdateWithoutTransactionsInput>, Prisma.savingUncheckedUpdateWithoutTransactionsInput>;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type savingCreateWithoutUserInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
    transactions?: Prisma.transactionCreateNestedManyWithoutSavingInput;
};
export type savingUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
    transactions?: Prisma.transactionUncheckedCreateNestedManyWithoutSavingInput;
};
export type savingCreateOrConnectWithoutUserInput = {
    where: Prisma.savingWhereUniqueInput;
    create: Prisma.XOR<Prisma.savingCreateWithoutUserInput, Prisma.savingUncheckedCreateWithoutUserInput>;
};
export type savingCreateManyUserInputEnvelope = {
    data: Prisma.savingCreateManyUserInput | Prisma.savingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type savingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.savingWhereUniqueInput;
    update: Prisma.XOR<Prisma.savingUpdateWithoutUserInput, Prisma.savingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.savingCreateWithoutUserInput, Prisma.savingUncheckedCreateWithoutUserInput>;
};
export type savingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.savingWhereUniqueInput;
    data: Prisma.XOR<Prisma.savingUpdateWithoutUserInput, Prisma.savingUncheckedUpdateWithoutUserInput>;
};
export type savingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.savingScalarWhereInput;
    data: Prisma.XOR<Prisma.savingUpdateManyMutationInput, Prisma.savingUncheckedUpdateManyWithoutUserInput>;
};
export type savingScalarWhereInput = {
    AND?: Prisma.savingScalarWhereInput | Prisma.savingScalarWhereInput[];
    OR?: Prisma.savingScalarWhereInput[];
    NOT?: Prisma.savingScalarWhereInput | Prisma.savingScalarWhereInput[];
    id?: Prisma.StringFilter<"saving"> | string;
    amount?: Prisma.FloatFilter<"saving"> | number;
    amountProgress?: Prisma.FloatNullableFilter<"saving"> | number | null;
    dateCreated?: Prisma.DateTimeFilter<"saving"> | Date | string;
    dateUpdated?: Prisma.DateTimeNullableFilter<"saving"> | Date | string | null;
    dateStart?: Prisma.DateTimeFilter<"saving"> | Date | string;
    dateEnd?: Prisma.DateTimeFilter<"saving"> | Date | string;
    status?: Prisma.EnumStatusTypeFilter<"saving"> | $Enums.StatusType;
    userId?: Prisma.StringFilter<"saving"> | string;
};
export type savingCreateWithoutTransactionsInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
    user: Prisma.userCreateNestedOneWithoutSavingInput;
};
export type savingUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
    userId: string;
};
export type savingCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.savingWhereUniqueInput;
    create: Prisma.XOR<Prisma.savingCreateWithoutTransactionsInput, Prisma.savingUncheckedCreateWithoutTransactionsInput>;
};
export type savingUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.savingUpdateWithoutTransactionsInput, Prisma.savingUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.savingCreateWithoutTransactionsInput, Prisma.savingUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.savingWhereInput;
};
export type savingUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.savingWhereInput;
    data: Prisma.XOR<Prisma.savingUpdateWithoutTransactionsInput, Prisma.savingUncheckedUpdateWithoutTransactionsInput>;
};
export type savingUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    user?: Prisma.userUpdateOneRequiredWithoutSavingNestedInput;
};
export type savingUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type savingCreateManyUserInput = {
    id?: string;
    amount: number;
    amountProgress?: number | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string | null;
    dateStart: Date | string;
    dateEnd: Date | string;
    status?: $Enums.StatusType;
};
export type savingUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    transactions?: Prisma.transactionUpdateManyWithoutSavingNestedInput;
};
export type savingUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
    transactions?: Prisma.transactionUncheckedUpdateManyWithoutSavingNestedInput;
};
export type savingUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    amountProgress?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateCreated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType;
};
/**
 * Count Type SavingCountOutputType
 */
export type SavingCountOutputType = {
    transactions: number;
};
export type SavingCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | SavingCountOutputTypeCountTransactionsArgs;
};
/**
 * SavingCountOutputType without action
 */
export type SavingCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingCountOutputType
     */
    select?: Prisma.SavingCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SavingCountOutputType without action
 */
export type SavingCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionWhereInput;
};
export type savingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    amountProgress?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    dateStart?: boolean;
    dateEnd?: boolean;
    status?: boolean;
    userId?: boolean;
    transactions?: boolean | Prisma.saving$transactionsArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.SavingCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saving"]>;
export type savingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    amountProgress?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    dateStart?: boolean;
    dateEnd?: boolean;
    status?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saving"]>;
export type savingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    amountProgress?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    dateStart?: boolean;
    dateEnd?: boolean;
    status?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saving"]>;
export type savingSelectScalar = {
    id?: boolean;
    amount?: boolean;
    amountProgress?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
    dateStart?: boolean;
    dateEnd?: boolean;
    status?: boolean;
    userId?: boolean;
};
export type savingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "amountProgress" | "dateCreated" | "dateUpdated" | "dateStart" | "dateEnd" | "status" | "userId", ExtArgs["result"]["saving"]>;
export type savingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | Prisma.saving$transactionsArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.SavingCountOutputTypeDefaultArgs<ExtArgs>;
};
export type savingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type savingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $savingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "saving";
    objects: {
        transactions: Prisma.$transactionPayload<ExtArgs>[];
        user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        amount: number;
        amountProgress: number | null;
        dateCreated: Date;
        dateUpdated: Date | null;
        dateStart: Date;
        dateEnd: Date;
        status: $Enums.StatusType;
        userId: string;
    }, ExtArgs["result"]["saving"]>;
    composites: {};
};
export type savingGetPayload<S extends boolean | null | undefined | savingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$savingPayload, S>;
export type savingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<savingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavingCountAggregateInputType | true;
};
export interface savingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['saving'];
        meta: {
            name: 'saving';
        };
    };
    /**
     * Find zero or one Saving that matches the filter.
     * @param {savingFindUniqueArgs} args - Arguments to find a Saving
     * @example
     * // Get one Saving
     * const saving = await prisma.saving.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends savingFindUniqueArgs>(args: Prisma.SelectSubset<T, savingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Saving that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {savingFindUniqueOrThrowArgs} args - Arguments to find a Saving
     * @example
     * // Get one Saving
     * const saving = await prisma.saving.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends savingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, savingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saving that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savingFindFirstArgs} args - Arguments to find a Saving
     * @example
     * // Get one Saving
     * const saving = await prisma.saving.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends savingFindFirstArgs>(args?: Prisma.SelectSubset<T, savingFindFirstArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saving that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savingFindFirstOrThrowArgs} args - Arguments to find a Saving
     * @example
     * // Get one Saving
     * const saving = await prisma.saving.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends savingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, savingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Savings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Savings
     * const savings = await prisma.saving.findMany()
     *
     * // Get first 10 Savings
     * const savings = await prisma.saving.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const savingWithIdOnly = await prisma.saving.findMany({ select: { id: true } })
     *
     */
    findMany<T extends savingFindManyArgs>(args?: Prisma.SelectSubset<T, savingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Saving.
     * @param {savingCreateArgs} args - Arguments to create a Saving.
     * @example
     * // Create one Saving
     * const Saving = await prisma.saving.create({
     *   data: {
     *     // ... data to create a Saving
     *   }
     * })
     *
     */
    create<T extends savingCreateArgs>(args: Prisma.SelectSubset<T, savingCreateArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Savings.
     * @param {savingCreateManyArgs} args - Arguments to create many Savings.
     * @example
     * // Create many Savings
     * const saving = await prisma.saving.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends savingCreateManyArgs>(args?: Prisma.SelectSubset<T, savingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Savings and returns the data saved in the database.
     * @param {savingCreateManyAndReturnArgs} args - Arguments to create many Savings.
     * @example
     * // Create many Savings
     * const saving = await prisma.saving.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Savings and only return the `id`
     * const savingWithIdOnly = await prisma.saving.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends savingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, savingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Saving.
     * @param {savingDeleteArgs} args - Arguments to delete one Saving.
     * @example
     * // Delete one Saving
     * const Saving = await prisma.saving.delete({
     *   where: {
     *     // ... filter to delete one Saving
     *   }
     * })
     *
     */
    delete<T extends savingDeleteArgs>(args: Prisma.SelectSubset<T, savingDeleteArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Saving.
     * @param {savingUpdateArgs} args - Arguments to update one Saving.
     * @example
     * // Update one Saving
     * const saving = await prisma.saving.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends savingUpdateArgs>(args: Prisma.SelectSubset<T, savingUpdateArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Savings.
     * @param {savingDeleteManyArgs} args - Arguments to filter Savings to delete.
     * @example
     * // Delete a few Savings
     * const { count } = await prisma.saving.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends savingDeleteManyArgs>(args?: Prisma.SelectSubset<T, savingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Savings
     * const saving = await prisma.saving.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends savingUpdateManyArgs>(args: Prisma.SelectSubset<T, savingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Savings and returns the data updated in the database.
     * @param {savingUpdateManyAndReturnArgs} args - Arguments to update many Savings.
     * @example
     * // Update many Savings
     * const saving = await prisma.saving.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Savings and only return the `id`
     * const savingWithIdOnly = await prisma.saving.updateManyAndReturn({
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
    updateManyAndReturn<T extends savingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, savingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Saving.
     * @param {savingUpsertArgs} args - Arguments to update or create a Saving.
     * @example
     * // Update or create a Saving
     * const saving = await prisma.saving.upsert({
     *   create: {
     *     // ... data to create a Saving
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saving we want to update
     *   }
     * })
     */
    upsert<T extends savingUpsertArgs>(args: Prisma.SelectSubset<T, savingUpsertArgs<ExtArgs>>): Prisma.Prisma__savingClient<runtime.Types.Result.GetResult<Prisma.$savingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Savings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savingCountArgs} args - Arguments to filter Savings to count.
     * @example
     * // Count the number of Savings
     * const count = await prisma.saving.count({
     *   where: {
     *     // ... the filter for the Savings we want to count
     *   }
     * })
    **/
    count<T extends savingCountArgs>(args?: Prisma.Subset<T, savingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Saving.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavingAggregateArgs>(args: Prisma.Subset<T, SavingAggregateArgs>): Prisma.PrismaPromise<GetSavingAggregateType<T>>;
    /**
     * Group by Saving.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends savingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: savingGroupByArgs['orderBy'];
    } : {
        orderBy?: savingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, savingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the saving model
     */
    readonly fields: savingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for saving.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__savingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transactions<T extends Prisma.saving$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.saving$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the saving model
 */
export interface savingFieldRefs {
    readonly id: Prisma.FieldRef<"saving", 'String'>;
    readonly amount: Prisma.FieldRef<"saving", 'Float'>;
    readonly amountProgress: Prisma.FieldRef<"saving", 'Float'>;
    readonly dateCreated: Prisma.FieldRef<"saving", 'DateTime'>;
    readonly dateUpdated: Prisma.FieldRef<"saving", 'DateTime'>;
    readonly dateStart: Prisma.FieldRef<"saving", 'DateTime'>;
    readonly dateEnd: Prisma.FieldRef<"saving", 'DateTime'>;
    readonly status: Prisma.FieldRef<"saving", 'StatusType'>;
    readonly userId: Prisma.FieldRef<"saving", 'String'>;
}
/**
 * saving findUnique
 */
export type savingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which saving to fetch.
     */
    where: Prisma.savingWhereUniqueInput;
};
/**
 * saving findUniqueOrThrow
 */
export type savingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which saving to fetch.
     */
    where: Prisma.savingWhereUniqueInput;
};
/**
 * saving findFirst
 */
export type savingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which saving to fetch.
     */
    where?: Prisma.savingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of savings to fetch.
     */
    orderBy?: Prisma.savingOrderByWithRelationInput | Prisma.savingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for savings.
     */
    cursor?: Prisma.savingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` savings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` savings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of savings.
     */
    distinct?: Prisma.SavingScalarFieldEnum | Prisma.SavingScalarFieldEnum[];
};
/**
 * saving findFirstOrThrow
 */
export type savingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which saving to fetch.
     */
    where?: Prisma.savingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of savings to fetch.
     */
    orderBy?: Prisma.savingOrderByWithRelationInput | Prisma.savingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for savings.
     */
    cursor?: Prisma.savingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` savings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` savings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of savings.
     */
    distinct?: Prisma.SavingScalarFieldEnum | Prisma.SavingScalarFieldEnum[];
};
/**
 * saving findMany
 */
export type savingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which savings to fetch.
     */
    where?: Prisma.savingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of savings to fetch.
     */
    orderBy?: Prisma.savingOrderByWithRelationInput | Prisma.savingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing savings.
     */
    cursor?: Prisma.savingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` savings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` savings.
     */
    skip?: number;
    distinct?: Prisma.SavingScalarFieldEnum | Prisma.SavingScalarFieldEnum[];
};
/**
 * saving create
 */
export type savingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a saving.
     */
    data: Prisma.XOR<Prisma.savingCreateInput, Prisma.savingUncheckedCreateInput>;
};
/**
 * saving createMany
 */
export type savingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many savings.
     */
    data: Prisma.savingCreateManyInput | Prisma.savingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * saving createManyAndReturn
 */
export type savingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saving
     */
    select?: Prisma.savingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the saving
     */
    omit?: Prisma.savingOmit<ExtArgs> | null;
    /**
     * The data used to create many savings.
     */
    data: Prisma.savingCreateManyInput | Prisma.savingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.savingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * saving update
 */
export type savingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a saving.
     */
    data: Prisma.XOR<Prisma.savingUpdateInput, Prisma.savingUncheckedUpdateInput>;
    /**
     * Choose, which saving to update.
     */
    where: Prisma.savingWhereUniqueInput;
};
/**
 * saving updateMany
 */
export type savingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update savings.
     */
    data: Prisma.XOR<Prisma.savingUpdateManyMutationInput, Prisma.savingUncheckedUpdateManyInput>;
    /**
     * Filter which savings to update
     */
    where?: Prisma.savingWhereInput;
    /**
     * Limit how many savings to update.
     */
    limit?: number;
};
/**
 * saving updateManyAndReturn
 */
export type savingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saving
     */
    select?: Prisma.savingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the saving
     */
    omit?: Prisma.savingOmit<ExtArgs> | null;
    /**
     * The data used to update savings.
     */
    data: Prisma.XOR<Prisma.savingUpdateManyMutationInput, Prisma.savingUncheckedUpdateManyInput>;
    /**
     * Filter which savings to update
     */
    where?: Prisma.savingWhereInput;
    /**
     * Limit how many savings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.savingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * saving upsert
 */
export type savingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the saving to update in case it exists.
     */
    where: Prisma.savingWhereUniqueInput;
    /**
     * In case the saving found by the `where` argument doesn't exist, create a new saving with this data.
     */
    create: Prisma.XOR<Prisma.savingCreateInput, Prisma.savingUncheckedCreateInput>;
    /**
     * In case the saving was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.savingUpdateInput, Prisma.savingUncheckedUpdateInput>;
};
/**
 * saving delete
 */
export type savingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which saving to delete.
     */
    where: Prisma.savingWhereUniqueInput;
};
/**
 * saving deleteMany
 */
export type savingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which savings to delete
     */
    where?: Prisma.savingWhereInput;
    /**
     * Limit how many savings to delete.
     */
    limit?: number;
};
/**
 * saving.transactions
 */
export type saving$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.transactionWhereInput;
    orderBy?: Prisma.transactionOrderByWithRelationInput | Prisma.transactionOrderByWithRelationInput[];
    cursor?: Prisma.transactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * saving without action
 */
export type savingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=saving.d.ts.map