/**
 * !Problem statement
 ** Find a peak element which is not smaller than its neighbors
   Input: array[] = [10, 20, 15, 2, 23, 90, 67]
   Output: 20 and 90
   Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.
 */
/**
 * Level: Easy
 * Time: maximum 5 minutes
 * Date: 22 August 2024
 */

const array = [10, 20, 15, 2, 23, 90, 67];
let peakElements = [];
for (let i = 0; i < array.length; i++) {
  if (i === 0 && array[i] >= array[i + 1]) peakElements.push(array[i]);
  else if (i > 0 && i + 1 < array.length) {
    if (array[i] >= array[i + 1] && array[i] >= array[i - 1]) {
      peakElements.push(array[i]);
  } else if (i + 1 === array.length && array[i] > array[i - 1]) {
    peakElements.push(array[i]);
  }
}

console.log("Peak elements are ", peakElements);
