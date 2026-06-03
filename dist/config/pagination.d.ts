export interface IPaginationRequest {
    currentPage: number;
    pageSize: number;
    dateCreated?: Date | string;
    type?: string;
    searchValue?: string;
    dateRangeActive?: boolean;
    dateStart?: Date | string;
    dateEnd?: Date | string;
}
export interface IPaginationResponse<T> {
    items: T[];
    totalPages: number;
    totalItems: number;
    currentPage: number;
    pageSize: number;
}
export declare class PaginationResponse<T> implements IPaginationResponse<T> {
    items: T[];
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
    constructor(pagSize?: number);
}
//# sourceMappingURL=pagination.d.ts.map