"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponse = void 0;
;
;
class PaginationResponse {
    items = [];
    currentPage = 1;
    pageSize = 20;
    totalPages = 0;
    totalItems = 0;
    constructor(pagSize) {
        if (pagSize) {
            this.pageSize = pagSize;
        }
    }
}
exports.PaginationResponse = PaginationResponse;
//# sourceMappingURL=pagination.js.map