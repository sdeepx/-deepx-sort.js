import { SortType } from "./models/types.js";
/**
 * * Shell Sort
 * * Ranking
 *
 * Reversed & Few Unique (best)
 *
 * Random & Nearly Sorted (good)
 *
 * * Time Complexity
 *
 * Best Case - O(n*logn)
 *
 * Average Case - O(n*log(n)2)
 *
 * Worst Case - O(n2)
 *
 *
 * * Space Complexity
 *
 * Space Complexity - O(1)
 *
 * Stable - NO
 */
export declare const shellSort: (arr: number[] | String[], type?: SortType) => number[] | String[];
/**
 * * Heap Sort
 * * Ranking
 *
 * Random & Reversed (best)
 *
 * Few Unique & Nearly Sorted (good)
 *
 * * Time Complexity - O(n*log(n))
 *
 * * Space Complexity - O(1)
 */
export declare const heapSort: (arr: number[] | String[], type?: SortType) => number[] | String[];
export declare const mSort: (arr: number[] | String[], l: number, r: number, type?: SortType) => void;
export declare const mergeSort: (arr: number[] | String[], type?: SortType) => number[] | String[];
export declare const qSort: (arr: number[] | String[], low: number, high: number, type?: SortType) => void;
export declare const quickSort: (arr: number[] | String[], type?: SortType) => number[] | String[];
export declare const insertionSort: (arr: number[] | String[], type?: SortType) => number[] | String[];
export declare const countSort: (arr: number[], n: number, exp: number) => void;
export declare const radixSort: (arr: number[], type?: SortType) => number[];
export declare const bSort: (arr: number[] | String[], n: number, type?: SortType) => void;
export declare const bubbleSort: (arr: number[] | String[], type?: SortType) => number[] | String[];
export declare const countingSort: (arr: number[] | String[], type?: SortType) => void;
export declare const bucketSort: (arr: number[]) => number[] | undefined;
//# sourceMappingURL=sort.d.ts.map