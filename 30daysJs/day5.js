// Write a program to check if a number is even or odd.


function checkNum(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let result = checkNum(3)
console.log(result)