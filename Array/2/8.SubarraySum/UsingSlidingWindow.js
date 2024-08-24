/** Using sliding window
 * Start adding elements window, if cumulativeSum > sum then remove first
 */

function findSubArrayOfSum(arr, givenSum) {
  let start = 0,
    last = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log("sum", sum);
    if (sum >= givenSum) {
      last = i;
      while (sum > givenSum && start < last) {
        sum -= arr[start];
        start++;
      }

      if (sum === givenSum) {
        return [start + 1, last + 1];
      }
    }
  }
  return [-1];
}

const arr = [15, 2, 4, 8, 9, 5, 10, 23, 0, 1, 22];
console.log(
  "Addition of subarray between two indices matches with provided sum",
  findSubArrayOfSum(arr, 23)
);
