import { QuickSort } from "./quickSort";
import { BubbleSort } from "./bubbleSort";
import { MergeSort } from "./mergeSort";

export class Sorter {
  static bubbleSort(arr: number[]) {
    const sorter = new BubbleSort();

    return sorter.sort([...arr]);
  }

  static quickSort(arr: number[]) {
    const sorter = new QuickSort();

    return sorter.sort([...arr]);
  }

  static quickSortInPlace(arr: number[]) {
    const sorter = new QuickSort();

    return sorter.sortInPlace([...arr]);
  }

  static mergeSort(arr: number[]) {
    const sorter = new MergeSort();

    return sorter.sort([...arr]);
  }
}
