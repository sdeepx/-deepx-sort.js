"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketSort = exports.countingSort = exports.bubbleSort = exports.bSort = exports.radixSort = exports.countSort = exports.insertionSort = exports.quickSort = exports.qSort = exports.mergeSort = exports.mSort = exports.heapSort = exports.shellSort = void 0;
const types_js_1 = require("./models/types.js");
const index_js_1 = require("./services/index.js");
const sort_js_1 = require("./services/sort.js");
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
const shellSort = (arr, type = types_js_1.st.ASC) => {
    const length = (0, index_js_1.len)(arr);
    let gap = (0, index_js_1.floorDiv)(length);
    for (gap; gap > 0; gap = (0, index_js_1.floorDiv)(gap)) {
        for (let i = gap; i < length; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap &&
                ((type === types_js_1.st.ASC && arr[j - gap] > temp) ||
                    (type === types_js_1.st.DESC && arr[j - gap] < temp)); j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
};
exports.shellSort = shellSort;
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
const heapSort = (arr, type = types_js_1.st.ASC) => {
    const length = (0, index_js_1.len)(arr);
    for (let i = (0, index_js_1.floorDiv)(length) - 1; i >= 0; i--)
        (0, sort_js_1.heapify)(arr, length, i, type);
    for (let i = length - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        (0, sort_js_1.heapify)(arr, i, 0, type);
    }
    return arr;
};
exports.heapSort = heapSort;
const mSort = (arr, l, r, type = types_js_1.st.ASC) => {
    if (l >= r) {
        return;
    }
    let n = ((r - l) / 2).toString();
    let m = l + parseInt(n);
    (0, exports.mSort)(arr, l, m, type);
    (0, exports.mSort)(arr, m + 1, r, type);
    (0, sort_js_1.merge)(arr, l, m, r, type);
};
exports.mSort = mSort;
const mergeSort = (arr, type = types_js_1.st.ASC) => {
    const left = 0;
    const right = (0, index_js_1.len)(arr) - 1;
    (0, exports.mSort)(arr, left, right, type);
    return arr;
};
exports.mergeSort = mergeSort;
const qSort = (arr, low, high, type = types_js_1.st.ASC) => {
    if (low < high) {
        const pi = (0, sort_js_1.partition)(arr, low, high, type);
        (0, exports.qSort)(arr, low, pi - 1, type);
        (0, exports.qSort)(arr, pi + 1, high, type);
    }
};
exports.qSort = qSort;
const quickSort = (arr, type = types_js_1.st.ASC) => {
    const low = 0;
    const high = arr.length - 1;
    (0, exports.qSort)(arr, low, high, type);
    return arr;
};
exports.quickSort = quickSort;
const insertionSort = (arr, type = types_js_1.st.ASC) => {
    const n = (0, index_js_1.len)(arr);
    let i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 &&
            ((type === types_js_1.st.ASC && arr[j] > key) || (type === types_js_1.st.DESC && arr[j] < key))) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};
exports.insertionSort = insertionSort;
const countSort = (arr, n, exp) => {
    let output = new Array(n);
    let i;
    let count = new Array(10);
    for (let i = 0; i < 10; i++)
        count[i] = 0;
    for (i = 0; i < n; i++)
        count[Math.floor(arr[i] / exp) % 10]++;
    for (i = 1; i < 10; i++)
        count[i] += count[i - 1];
    for (i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }
    for (i = 0; i < n; i++)
        arr[i] = output[i];
};
exports.countSort = countSort;
const radixSort = (arr, type = types_js_1.st.ASC) => {
    const n = (0, index_js_1.len)(arr);
    let m = (0, sort_js_1.getMax)(arr, n);
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
        (0, exports.countSort)(arr, n, exp);
    return type === types_js_1.st.ASC ? arr : arr.reverse();
};
exports.radixSort = radixSort;
const bSort = (arr, n, type) => {
    if (n <= 1)
        return;
    for (let i = 0; i < n - 1; i++) {
        if ((type === types_js_1.st.ASC && arr[i] > arr[i + 1]) ||
            (type === types_js_1.st.DESC && arr[i] < arr[i + 1])) {
            (0, sort_js_1.swap)(arr, i, i + 1);
        }
    }
    (0, exports.bSort)(arr, n - 1, type);
};
exports.bSort = bSort;
const bubbleSort = (arr, type = types_js_1.st.ASC) => {
    const n = (0, index_js_1.len)(arr);
    (0, exports.bSort)(arr, n, type);
    return arr;
};
exports.bubbleSort = bubbleSort;
const countingSort = (arr, type = types_js_1.st.ASC) => {
    const n = (0, index_js_1.len)(arr);
    let output = Array.from({ length: n }, (_, i) => 0);
    let count = Array.from({ length: 256 }, (_, i) => 0);
    for (let i = 0; i < n; ++i) {
        // ++count[arr[i].charCodeAt(0)];
    }
};
exports.countingSort = countingSort;
const bucketSort = (arr) => {
    const n = (0, index_js_1.len)(arr);
    if (n <= 0)
        return;
    let buckets = new Array(n);
    for (let i = 0; i < n; i++) {
        buckets[i] = [];
    }
    for (let i = 0; i < n; i++) {
        let idx = arr[i] * n;
        buckets[Math.floor(idx)].push(arr[i]);
    }
    for (let i = 0; i < n; i++) {
        buckets[i].sort(function (a, b) {
            return a - b;
        });
    }
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            arr[index++] = buckets[i][j];
        }
    }
    return arr;
};
exports.bucketSort = bucketSort;
//# sourceMappingURL=sort.js.map