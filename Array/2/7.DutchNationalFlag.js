/**
 ** Sort an array of 0s, 1s and 2s | Dutch National Flag problem
 *
 * Given an array A[] consisting of only 0s, 1s, and 2s. The task is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.
 */

//Naive approach: O(N * log(N)) Time and O(1) Space:
console.log("Sorted 0,1 and 2s from Array");
function NaiveApproachSortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      let curr = array[j],
        next = array[j + 1];
      if (curr > next) {
        array[j] = curr + next;
        array[j + 1] = array[j] - next;
        array[j] = array[j] - array[j + 1];
      }
    }
  }
  return array;
}

const array = [0, 1, 2, 0, 1, 2];
console.log("USING NAIVE APPROACH", NaiveApproachSortArray(array));

//DUTCH APPROACH: O(N) Time and O(1) Space
/**
 * Lets start with low = 0, mid=0, high= length-1;
 *
 * Traverse over the array till mid <= hi, according to the value of arr[mid] we can have three cases:
 * arr[mid] = 0, then swap arr[low] and arr[mid] and increment low and mid by 1.
 * arr[mid] = 1, then move to the next element so increment mid by 1.
 * arr[mid] = 2, then swap arr[mid] and arr[high] and decrement high by 1.
 * Now, we don’t move mid to the next element because the element which is now at index mid can be a 0 and therefore needs to be checked again.
 */
const array2 = [0, 1, 2, 0, 1, 2];

function DutchAlgorithm(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1,
    temp;

  while (mid <= high) {
    if (arr[mid] === 0) {
      temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low += 1;
      mid += 1;
    } else if (arr[mid] === 1) {
      mid += 1;
    } else if (arr[mid] === 2) {
      if (arr[high] !== 2) {
        temp = arr[high];
        arr[high] = arr[mid];
        arr[mid] = temp;
      }
      high -= 1;
    }
  }
  return arr;
}

console.log("USING DUTCH ALGORITHM", DutchAlgorithm(array2));
