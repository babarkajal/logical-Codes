/**
 * !Problem statement
 ** Find maximum and minimum number from array
 * Input: array[]= [10, 45, 3, 8, -20, 6]
 * Output: minimum is -20 and maximum is 45
 * Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.  */

/**
 * Level: Easy
 * Time: 5 minutes
 * Date: 22 August 2024
 */

function maxMin(array) {
  let max = array[0],
    min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
  }
  return { min, max };
}

console.log(
  "==============FIND MAXIMUM AND MINIMUM VALUE FROM ARRAY=============="
);
console.log("\n================ITERATING ARRAY USING FOR LOOP================");
const array = [10, 45, 3, 8, -20, 6];
const { min, max } = maxMin(array);
console.log("Minimum and maximum number", min, max);

console.log("\n=================USING SORT METHOD=================");
array.sort((a, b) => a - b);
console.log("Minimum and maximum number ", array[0], array[array.length - 1]);
