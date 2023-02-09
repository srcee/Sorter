export class QuickSort {
  sort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...this.sort(left), pivot, ...this.sort(right)];
  }

  sortInPlace(
    arr: number[],
    left: number = 0,
    right: number = arr.length - 1
  ): number[] | undefined {
    if (left < right) {
      const pivotIndex = this.partition(arr, left, right);
      this.sortInPlace(arr, left, pivotIndex - 1);
      this.sortInPlace(arr, pivotIndex + 1, right);
    }

    return arr;
  }

  private partition(arr: number[], left: number, right: number): number {
    const pivotValue = arr[right];
    let pivotIndex = left;
    for (let index = left; index < right; index++) {
      if (arr[index] < pivotValue) {
        this.swap(arr, pivotIndex, index);
        pivotIndex++;
      }
    }

    this.swap(arr, pivotIndex, right);

    return pivotIndex;
  }

  private swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
