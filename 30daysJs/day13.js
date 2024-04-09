function sumOfDigits(number) {
    let sum = 0;
    // Convert number to a string to iterate over each digit
    const numString = number.toString();
    for (let i = 0; i < numString.length; i++) {
        // Convert each digit back to a number and add it to sum
        sum += parseInt(numString[i]);
    }
    return sum;
}

// Example usage:
const number = 12345;
const result = sumOfDigits(number);
console.log(`The sum of digits of ${number} is ${result}`);