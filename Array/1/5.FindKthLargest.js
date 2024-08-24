/**
 * Find K’th Smallest Element in Unsorted Array
 * Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3
 * Output: 7
 */

// 1. Naive approach: sort the array and then find the k-1 element, but this solution is not advisable for large arrays

function SmallestKthElemet(array, k) {
  //SORT ARRAY
  const len = array.length;

  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        array[j] = array[j] + array[j + 1];
        array[j + 1] = array[j] - array[j + 1];
        array[j] = array[j] - array[j + 1];
      }
    }
  }
  if (k === 0) {
    return array[k];
  } else if (k >= len) {
    return array[len - 1];
  } else {
    return array[k - 1];
  }
}

const array = [7, 10, 4, 3, 20, 15];
console.log("SMALLEST Kth ELEMENT ", SmallestKthElemet(array, 3));
