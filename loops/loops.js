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