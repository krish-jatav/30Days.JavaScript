// Write a program to find the power of a number using recursion.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is:`, result);