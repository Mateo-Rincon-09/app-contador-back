"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDto = void 0;
class CategoryDto {
    id;
    name;
    dateCreated;
    status;
    dateUpdated;
    constructor(id, name, dateCreated, status, dateUpdated) {
        this.id = id;
        this.name = name;
        this.dateCreated = dateCreated;
        this.status = status;
        this.dateUpdated = dateUpdated;
    }
    static create(object) {
        const { id, name, dateCreated, status, dateUpdated } = object;
        if (!name)
            return ['La categoria es necesaria'];
        if (!dateCreated)
            return ['La fecha es necesaria'];
        return ["", new CategoryDto(id, name, dateCreated, status, dateUpdated)];
    }
}
exports.CategoryDto = CategoryDto;
//# sourceMappingURL=category-dto.js.map