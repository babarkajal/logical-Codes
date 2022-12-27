/**
 * *Fibonacci Series:  Where 1 and 2 are first two member of series and remaining terms are sum of previous two terms
 */

function fibonacciSeries(n) {
    const series = [ ];
    let num1 = 0;
    let num2 = 1; 
    
    series.push(num1);
    series.push(num2);

    for(let i=0; i<n-2; i++) {
      const sum = num1 + num2;
      num1 = num2; 
      num2 = sum;
      series.push(sum)
    }
    return series;
}

const series = fibonacciSeries(10);
console.log("FIBONACCI SERIES ", series)


