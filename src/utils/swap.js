function swapArray(arr, index1, index2) {
  if (index1 <= index2) {
    arr.splice(index2 + 1, 0, arr[index1]);
    console.log(arr);
    arr.splice(index1, 1);
    return arr;
  }
  if (index1 > index2) {
    arr.splice(index2 + 1, 0, arr[index1]);
    arr.splice(index1 + 1, 1);
    return arr;
  }
}
console.log(swapArray([1, 4, 48, 5, 6], 3, 4));
