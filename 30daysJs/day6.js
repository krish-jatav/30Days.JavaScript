// Write a program to find the factorial of a number.

// let num = 3;

// function fact(num) {
//     let ans = 1;
//     if (num === 0)
//         return 1;
//     for (let i = 2; i <= num; i++) ans = ans * i;
//     return ans;
// }
// console.log(fact(num));
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

let number = 6;
let result = fact(number)
console.log(result)