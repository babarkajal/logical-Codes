//Count number of occurrences (or frequency) in a sorted array

function occurrences(array, x) {
  let occ = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) {
      occ += 1;
    }
    if (array[i] > x) {
      return occ;
    }
  }
  return occ;
}

const array = [1, 1, 2, 2, 2, 2, 3];
const x = 4;
console.log("OCCURRENCE OF", x, "ARE = ", occurrences(array, x));
