/**
 ** Sort Array: In place sorting array using built-in function and iterative approach
 */

function SortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const arr = [1, 5, 7, 3, 8];
SortArray(arr);

console.log("DESC SORTED ARRAY USING ITERATIVE APPROACH ", arr);

//We can do manual comparison or can calculate difference between values to decide whether to switch
const arr2 = [10, 4, 7, 10, 0, 6];
arr2.sort((num1, num2) => {
  if (num1 > num2) return -1;
  else if (num1 < num2) return 1;
  else return 0;
});

//OR
arr2.sort((a, b) => b - a);

console.log("DESC SORTED ARRAY USING BUILT-IN FUNCTION ", arr2);
