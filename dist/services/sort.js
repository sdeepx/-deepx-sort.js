"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMax = exports.partition = exports.swap = exports.merge = exports.heapify = void 0;
const types_js_1 = require("../models/types.js");
const heapify = (arr, n, i, type = types_js_1.st.ASC) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n &&
        ((type === types_js_1.st.ASC && arr[left] > arr[largest]) ||
            (type === types_js_1.st.DESC && arr[left] < arr[largest])))
        largest = left;
    if (right < n &&
        ((type === types_js_1.st.ASC && arr[right] > arr[largest]) ||
            (type === types_js_1.st.DESC && arr[right] < arr[largest])))
        largest = right;
    if (largest !== i) {
        const swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        (0, exports.heapify)(arr, n, largest, type);
    }
};
exports.heapify = heapify;
const merge = (arr, left, mid, right, type = types_js_1.st.ASC) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const tempArr1 = new Array(n1);
    const tempArr2 = new Array(n2);
    for (let i = 0; i < n1; i++)
        tempArr1[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        tempArr2[j] = arr[mid + 1 + j];
    let i = 0;
    let j = 0;
    let k = left;
    while (i < n1 && j < n2) {
        if ((type === types_js_1.st.ASC && tempArr1[i] <= tempArr2[j]) ||
            (type === types_js_1.st.DESC && tempArr1[i] >= tempArr2[j])) {
            arr[k] = tempArr1[i];
            i++;
        }
        else {
            arr[k] = tempArr2[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = tempArr1[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = tempArr2[j];
        j++;
        k++;
    }
};
exports.merge = merge;
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
exports.swap = swap;
const partition = (arr, low, high, type = types_js_1.st.ASC) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if ((type === types_js_1.st.ASC && arr[j] < pivot) ||
            (type === types_js_1.st.DESC && arr[j] > pivot)) {
            i++;
            (0, exports.swap)(arr, i, j);
        }
    }
    (0, exports.swap)(arr, i + 1, high);
    return i + 1;
};
exports.partition = partition;
const getMax = (arr, len) => {
    let mx = arr[0];
    for (let i = 0; i < len; i++) {
        if (arr[i] > mx) {
            mx = arr[i];
        }
    }
    return mx;
};
exports.getMax = getMax;
//# sourceMappingURL=sort.js.map