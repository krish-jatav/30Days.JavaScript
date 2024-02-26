// Day 10: Write a program to find the Fibonacci series up to n terms.



function fibonacciSeries(n) {
    let fibSeries = [];

    if (n === 1) {
        fibSeries.push(0);
    } else if (n === 2) {
        fibSeries.push(0, 1);
    } else {
        fibSeries.push(0, 1);
        for (let i = 2; i < n; i++) {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
    }

    return fibSeries;
}

// Example usage:
const n = 10; // Number of terms in the Fibonacci series
const fibSeries = fibonacciSeries(n);
console.log(`Fibonacci series up to ${n} terms:`, fibSeries.join(', '));