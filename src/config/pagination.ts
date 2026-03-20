export interface IPaginationRequest {
    searchValue?: string;
    dateRangeActive?: boolean;
    dateStart?: Date | string;
    dateEnd?: Date | string;
    currentPage: number;
    pageSize: number;
};

export interface IPaginationResponse<T> {
    items: T[];
    totalPages: number;
    totalItems: number;
    currentPage: number;
    pageSize: number;
};

export class PaginationResponse<T> implements IPaginationResponse<T> {
    items: T[] = [];
    currentPage: number = 1;
    pageSize: number = 20;
    totalPages: number = 0;
    totalItems: number = 0;
    constructor(pagSize?: number) {
        if (pagSize) {
            this.pageSize = pagSize;
        }
    }
}
