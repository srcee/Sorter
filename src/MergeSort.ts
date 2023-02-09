export class MergeSort {
  sort(arr: number[]) {
    if (arr.length < 2) return;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return this.merge(this.sort(leftArr), this.sort(rightArr));
  }

  private merge(leftArr: number[], rightArr: number[]) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }

    const resultArr = [...sortedArr, ...leftArr, ...rightArr];
    return resultArr;
  }
}
