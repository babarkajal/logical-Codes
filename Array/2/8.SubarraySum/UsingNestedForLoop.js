//USING NAIVE APPROACH : O(n^2) time and O(1) auxiliary space

function findSubArray(arr, givenSum) {
  let sum = 0,
    j = 1,
    result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    sum = arr[i];
    j = i + 1;
    while (sum < givenSum && j < arr.length) {
      sum += arr[j];
      j++;
    }
    if (sum === givenSum) {
      result.push([i + 1, j]);
    }
  }
  if (result.length > 0) return result;
  return [-1];
}

const arr = [15, 2, 4, 8, 9, 5, 10, 23, 0, 1, 22];
console.log(
  "addition of subarray between two indices matches with provided sum",
  findSubArray(arr, 23)
);
