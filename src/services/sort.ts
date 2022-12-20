import { SortType, st } from "../models/types.js";

export const heapify = (
  arr: number[] | String[],
  n: number,
  i: number,
  type: SortType = st.ASC
) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (
    left < n &&
    ((type === st.ASC && arr[left] > arr[largest]) ||
      (type === st.DESC && arr[left] < arr[largest]))
  )
    largest = left;

  if (
    right < n &&
    ((type === st.ASC && arr[right] > arr[largest]) ||
      (type === st.DESC && arr[right] < arr[largest]))
  )
    largest = right;

  if (largest !== i) {
    const swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    heapify(arr, n, largest, type);
  }
};

export const merge = (
  arr: number[] | String[],
  left: number,
  mid: number,
  right: number,
  type: SortType = st.ASC
) => {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const tempArr1 = new Array(n1);
  const tempArr2 = new Array(n2);

  for (let i = 0; i < n1; i++) tempArr1[i] = arr[left + i];

  for (let j = 0; j < n2; j++) tempArr2[j] = arr[mid + 1 + j];

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (
      (type === st.ASC && tempArr1[i] <= tempArr2[j]) ||
      (type === st.DESC && tempArr1[i] >= tempArr2[j])
    ) {
      arr[k] = tempArr1[i];
      i++;
    } else {
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

export const swap = (arr: number[] | String[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export const partition = (
  arr: number[] | String[],
  low: number,
  high: number,
  type: SortType = st.ASC
) => {
  const pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (
      (type === st.ASC && arr[j] < pivot) ||
      (type === st.DESC && arr[j] > pivot)
    ) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

export const getMax = (arr: number[], len: number) => {
  let mx = arr[0];

  for (let i = 0; i < len; i++) {
    if (arr[i] > mx) {
      mx = arr[i];
    }
  }

  return mx;
};
