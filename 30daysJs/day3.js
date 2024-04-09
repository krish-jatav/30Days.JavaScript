// Day 3: Write a program to find the largest number among three numbers.

// function largestNum(num1, num2, num3, ) {
//     let largest = Math.max(num1, num2, num3, num4, )
//     return largest;

// }
// let result = largestNum(10, 30, 48, );
// console.log("this is a largest number", result)


// --------------------------------

// This is solve by  arrray...

function largestNum() {
    let largest = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > largest) {
            largest = arguments[i];
        }
    }
    return largest;
}

let result = largestNum(10, 30, 40, 60, 70, 30, 31, 200);
console.log("This is a larGEST NUMber >>>>", result);