import { Sorter } from "./Sorter";

const testArr = [2, 45, 2, 39, 7, 1, 97, 21, 3, 7];

console.log(Sorter.mergeSort(testArr));
console.log(Sorter.quickSort(testArr));
console.log(Sorter.quickSortInPlace(testArr));
console.log(Sorter.bubbleSort(testArr));
