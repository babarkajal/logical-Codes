/**
 ** Find LCM: Least common multiplier
*/


function FindLCM(num1, num2) {
  let flag = true, counter=num2 > num1 ? num2 : num1;
  while(true) {
    if(counter%num1 ===0 && counter%num2===0) {
      flag = false;
      break;
    }
    counter+=num2;
  }
  return counter
}

const LCM = FindLCM(12,20);
console.log("Least Common Multiplier", LCM)