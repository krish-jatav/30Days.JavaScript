// Day 9: Write a program to check if a number is prime or not.

function isPrime(number) {
    if (number < 2) {

        return false;

    }
    for (let i = 2; i < Math.sqrt(number); i++) {

        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let num = 5;
if (isPrime(num)) {
    console.log(`${num} is a prime number...`)
} else {
    console.log(`${num} is not a prime number...`)
}