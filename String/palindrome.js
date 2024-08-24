//first way
function palindrome(str) {
  let length = str.length;
    for(let i=0; i<Math.floor(length/2); i++) {
        if(str[i]!== str[length-1-i]){
          return false;
        }
    }
    return true;
}

const data = "1234321";
const isPalindrome = palindrome(data);
if(isPalindrome) {
  console.log("String is palindrome",data)
}else {
  console.log("String is not palindrome",data)
}

//second way
// console.log("String is palindrome ",data === data.reverse())



// 01234
// madam