/**
 ** Sort Array: With and without function
 */

function SortArray(arr) {
  for(let i=0; i < arr.length; i++) {
    for(let j=0; j < arr.length-i-1; j++) {
      if(arr[j] < arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

const arr = [1,5,7,3,8];
SortArray(arr);

console.log("SORTED ARRAY WITHOUT USING FUNCTION ", arr)

const arr2 = [10,4,7,10,0,6];
arr2.sort((num1, num2)=>{
  if(num1 > num2 ) return -1;
  else if(num1 < num2) return 1;
  else return 0;
})
console.log("SORTED ARRAY USING FUNCTION ",arr2)