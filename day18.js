// Write a program to find the power of a number using recursion.

function power(base, exponent) {
    // Base case: if exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: multiply base by the result of power with a reduced exponent
    return base * power(base, exponent - 1);
}

// Example usage:
const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is:`, result);