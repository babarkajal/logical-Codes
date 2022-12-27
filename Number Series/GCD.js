/**
 ** Find GCD: Greatest common divisor
 * GCD can be maximum equal to smallest number between two numbers. 
 * 
*/


function FindGCD(num1, num2) {
  let small = num2 < num1 ? num2 : num1, large = num2 > num1 ? num2 : num1;

  // IF SMALL NUMBER IS DIVISOR FOR BOTH, THEN IT IS GCD
  if(large%small===0) return small;

  for(let i = Math.floor(small/2); i>0 ;i-=1) {
    if(num1%i ===0 && num2%i===0) return i;
  }
  return -1;
}

const GCD = FindGCD(10,45);
if(GCD>0) {
  console.log("Least Common Multiplier", GCD)
}