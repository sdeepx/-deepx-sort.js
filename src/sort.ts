import { SortType, st } from "./models/types.js";
import { floorDiv, len } from "./services/index.js";
import { getMax, heapify, merge, partition, swap } from "./services/sort.js";

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

export const shellSort = (
  arr: number[] | String[], 
  type: SortType = st.ASC
) => {
  const length = len(arr);
  let gap = floorDiv(length);

  for (gap; gap > 0; gap = floorDiv(gap)) {
    for (let i = gap; i < length; i++) {
      let temp = arr[i];

      let j;
      for (
        j = i;
        j >= gap &&
        ((type === st.ASC && arr[j - gap] > temp) ||
          (type === st.DESC && arr[j - gap] < temp));
        j -= gap
      ) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }

  return arr;
};

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
export const heapSort = (arr: number[] | String[], type: SortType = st.ASC) => {
  const length = len(arr);
  for (let i = floorDiv(length) - 1; i >= 0; i--) heapify(arr, length, i, type);

  for (let i = length - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0, type);
  }

  return arr;
};

export const mSort = (
  arr: number[] | String[],
  l: number,
  r: number,
  type: SortType = st.ASC
) => {
  if (l >= r) {
    return;
  }

  let n = ((r - l) / 2).toString();
  let m = l + parseInt(n);

  mSort(arr, l, m, type);
  mSort(arr, m + 1, r, type);
  merge(arr, l, m, r, type);
};

export const mergeSort = (
  arr: number[] | String[],
  type: SortType = st.ASC
) => {
  const left = 0;
  const right = len(arr) - 1;

  mSort(arr, left, right, type);

  return arr;
};

export const qSort = (
  arr: number[] | String[],
  low: number,
  high: number,
  type: SortType = st.ASC
) => {
  if (low < high) {
    const pi = partition(arr, low, high, type);
    qSort(arr, low, pi - 1, type);
    qSort(arr, pi + 1, high, type);
  }
};

export const quickSort = (
  arr: number[] | String[],
  type: SortType = st.ASC
) => {
  const low = 0;
  const high = arr.length - 1;
  qSort(arr, low, high, type);
  return arr;
};

export const insertionSort = (
  arr: number[] | String[],
  type: SortType = st.ASC
) => {
  const n = len(arr);

  let i: number, j: number, key: number | String;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (
      j >= 0 &&
      ((type === st.ASC && arr[j] > key) || (type === st.DESC && arr[j] < key))
    ) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
};

export const countSort = (arr: number[], n: number, exp: number) => {
  let output = new Array(n);
  let i: number;
  let count = new Array(10);
  for (let i = 0; i < 10; i++) count[i] = 0;

  for (i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;

  for (i = 1; i < 10; i++) count[i] += count[i - 1];

  for (i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (i = 0; i < n; i++) arr[i] = output[i];
};

export const radixSort = (arr: number[], type: SortType = st.ASC) => {
  const n = len(arr);
  let m = getMax(arr, n);

  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) countSort(arr, n, exp);

  return type === st.ASC ? arr : arr.reverse();
};

export const bSort = (arr: number[] | String[], n: number, type?: SortType) => {
  if (n <= 1) return;
  for (let i = 0; i < n - 1; i++) {
    if (
      (type === st.ASC && arr[i] > arr[i + 1]) ||
      (type === st.DESC && arr[i] < arr[i + 1])
    ) {
      swap(arr, i, i + 1);
    }
  }
  bSort(arr, n - 1, type);
};

export const bubbleSort = (
  arr: number[] | String[],
  type: SortType = st.ASC
) => {
  const n = len(arr);
  bSort(arr, n, type);

  return arr;
};

export const countingSort = (
  arr: number[] | String[],
  type: SortType = st.ASC
) => {
  const n = len(arr);
  let output = Array.from({ length: n }, (_, i) => 0);

  let count = Array.from({ length: 256 }, (_, i) => 0);

  for (let i = 0; i < n; ++i) {
    // ++count[arr[i].charCodeAt(0)];
  }
};

export const bucketSort = (arr: number[]) => {
  const n = len(arr);
  if (n <= 0) return;

  let buckets = new Array(n);

  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < n; i++) {
    let idx = arr[i] * n;
    buckets[Math.floor(idx)].push(arr[i]);
  }

  for (let i = 0; i < n; i++) {
    buckets[i].sort(function (a: number, b: number) {
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
