export const len = (n) => {
    if (typeof n === "string" || Array.isArray(n))
        return n.length;
    return Object.keys(n).length;
};
export const floorDiv = (n, divBy = 2) => Math.floor(n / divBy);
//# sourceMappingURL=index.js.map