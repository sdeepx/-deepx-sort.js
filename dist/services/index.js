"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floorDiv = exports.len = void 0;
const len = (n) => {
    if (typeof n === "string" || Array.isArray(n))
        return n.length;
    return Object.keys(n).length;
};
exports.len = len;
const floorDiv = (n, divBy = 2) => Math.floor(n / divBy);
exports.floorDiv = floorDiv;
//# sourceMappingURL=index.js.map