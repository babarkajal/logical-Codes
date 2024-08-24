/**
 ** Reverse Array: In place reverse without using iterative approach and using in-build function
 */

function reverseArray(arr) {
  let temp = 0;
  let length = arr.length;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[length - i - 1];
    arr[length - i - 1] = temp;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 18, 22, 34];
console.log("REVERSED ARRAY WITHOUT USING BUILT-IN fun", reverseArray(arr));

const arr2 = [10, 40, 30, 20];
console.log("REVERSED ARRAY USING BUILT-IN FUN", arr2.reverse());
