export const len = (n: string | Array<[]> | Object) => {
  if (typeof n === "string" || Array.isArray(n)) return n.length;
  return Object.keys(n).length;
};

export const floorDiv = (n: number, divBy = 2) => Math.floor(n / divBy);
