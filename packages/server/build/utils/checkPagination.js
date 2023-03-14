"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPagination = void 0;
function checkPagination({ totalPosts, limit, page, }) {
    const totalPages = Math.ceil(Number(totalPosts) / limit);
    if ((totalPages > 0 && page > totalPages) || page < 1) {
        return {
            totalPages,
            isValid: false,
        };
    }
    return {
        totalPages,
        isValid: true,
    };
}
exports.checkPagination = checkPagination;
