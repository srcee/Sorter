export class MergeSort {
  sort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return this.merge(this.sort(leftArr), this.sort(rightArr));
  }

  private merge(leftArr: number[], rightArr: number[]): number[] {
    const mergeArr: number[] = [];

    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        mergeArr.push(leftArr.shift()!);
      } else {
        mergeArr.push(rightArr.shift()!);
      }
    }

    return [...mergeArr, ...leftArr, ...rightArr];
  }
}
