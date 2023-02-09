import { BubbleSort } from "./BubbleSort";
import { MergeSort } from "./MergeSort";
import { QuickSort } from "./QuickSort";

export class Sorter {
  static bubbleSort(arr: number[]) {
    const sorter = new BubbleSort();
    sorter.sort(arr);
  }

  static quickSort(arr: number[]) {
    const sorter = new QuickSort();
    const sortedArr = sorter.sort(arr);

    return sortedArr;
  }

  static quickSortInPlace(arr: number[]) {
    const sorter = new QuickSort();
    sorter.sortInPlace(arr);
  }

  static mergeSort(arr: number[]) {
    const sorter = new MergeSort();
    sorter.sort(arr);
  }
}
