// Loops----------

// In programming, loops are control structures used to repeat a block of code multiple times.
// They are essential for automating repetitive tasks and iterating over collections of data.

// There are several types of loops, but the most common ones are:-
// for , while , do-while , foreach , forin , forof :

// repetetion of any task

// particular condition

// loops = repeat

// 1 1 1 1 1 1 1

// 1 2 3 4 5 6 7 8

// For loop: Executes a block of code a specified number of times. It typically consists of an initialization step, a condition for continuation, an iteration step, and the code block to execute.

// for (initialization; condition; iteration) {
//     // code block to be executed
// }

// for(start;end;change){

// }

// for (var i = 5; i < 10; i++) {
//     console.log(i);
// }

// while Loop

// while" loop ek control flow statement hai jo ek condition ko evaluate karta hai aur agar wo condition true hoti hai,
// tab tak ek block of code ko execute karta hai. Jab tak ye condition false nahi ho jati, loop chalta rahta hai.

// start;
// while(end){
// change;
// }

// Yahan "condition" ek boolean expression hoti hai jo evaluate hoti hai.Agar condition true hoti hai, tabhi loop ke andar ka code block execute hota hai.Phir condition firse check hoti hai.Loop tab tak chalta rahega jab tak condition false nahi ho jati hai.
// Yeh ek simple example hai jisme 1 se 20 tak ke numbers ko print kiya gaya hai:

// let i = 1;

// while (i <= 20) {
//     console.log(i)
//     i++;
// }


// // Is example me, loop 1 se start hota hai aur jab tak "i"
// 20 se chota ya equal hai, loop chalta rahega.iteration me "i"
// ko 1 se increment kiya jata hai.

// ------------------------------------------------------------------------------

//
// Do - while loop ek control flow statement hai jo ek block of code ko execute karta hai jab tak ek specified condition true hai.Yeh loop do tarah se kaam karta hai:

// 1.Execution: Sabse pehle, loop ke andar ka code block execute hota hai.
// 2.Condition Check: Fir, ek condition check hoti hai.Agar ye condition true hoti hai, to loop firse execute hota hai.Agar condition false hoti hai, tab loop terminate ho jata hai.

// let i = 1;
// let text = "";

// do {
//     text += "The number is " + i + "\n";
//     i++;

// } while (i <= 10);
// console.log(text)

// forEach ek array method hai jo har array element ke liye ek function ko execute karta hai.
//  Yeh method loop ke through array ke har element pe iterate karta hai aur har ek element ko ek function ke through pass karta hai.
//  Is method ka syntax is tarah hai:

// array.forEach(function(currentValue, index, array) {
//     // code to execute on each element
// });

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.forEach(function(number, index) {
//     console.log(" Element  at index " + index + " is " + number)
// })

//for-in loop JavaScript me object properties par iteration karne ke liye istemal hota hai.
// Is loop se aap object ke har ek property ko access kar sakte hain.
// Syntax is tarah ka hota hai:

// for (variable in object) {
//     // code to be executed
// }

//
// Yahan variable ek naya variable hai jo object ke har property ko represent karta hai,
// aur object woh object hai jisme aap iteration karna chahte hain.

// let person = {
//     name: 'John',
//     age: 20,
//     profession: 'Developer'
// };

// for (let key in person) {
//     console.log(key + "" + person[key]);
// }

var x = 2;
var y = "2";
console.log(x === y);