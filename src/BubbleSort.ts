export class BubbleSort {
  sort(arr: number[]) {
    let isSorted: boolean;
    let j = arr.length - 1;
    while (j > 0 && !isSorted) {
      isSorted = true;
      for (let i = 0; i < j; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];

        if (currentNum > nextNum) {
          this.swap(arr, i, i + 1);
          isSorted = false;
        }
      }
      j--;
    }
  }

  private swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
