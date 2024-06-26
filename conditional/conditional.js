// conditionals = if else else-if ternary operator switch case
// The easiest condition is an
// if statement and its syntax is
// if (condition) { do this… }.The condition has to be true
// for the code inside the curly braces to be executed.

// var country = "France";
// if (country == "France") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// OUTPUT: false

// jab bhi apko program mein decision lena ho, k aage ka execution kaisa ho toh  whaha par if else else-if use hota hai

// var age = 20;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are not an adult.");
// }
// OUTPUT: You are an adult.

// "truthy" aur "falsy" concepts

// 1. truthy value

// har value ko true ya false banaya jaa sakta hai, ye depend krta hai, ki wo value ka type kya hai, agar wo value truthy hai to true banegi and falsy hai to false
// truthy value example---
//. Non - empty strings
//. Non - zero numbers
//. Arrays with at least one element
//. Objects

// Falsy Values: Values jo conditionally false consider kiye jaate hain. Yeh values hain jo JavaScript mein false ke tor par evaluate hote hain.
// falsy value examples:
//. Empty strings("")
//. Zero(0)
//. null
//. undefined
//. NaN(Not - a - Number)
//. false

// Yeh kuch examples hain jismein truthy aur falsy values ka use hota hai:

// var x = 5;

// if (x) {
//     console.log("x is truthy");
// } else {
//     console.log("x is falsy");
// }

// OUTPUT: x is truthy

// var y = "";

// if (y) {
//     console.log("y is truthy");
// } else {
//     console.log("y is falsy");
// }
// OUTPUT: y is falsy

// In examples mein, x ki value 5 hai, jo ek truthy value hai, to "x is truthy" print hoga. y ki value empty string hai, jo ek falsy value hai, to "y is falsy" print hoga.

// if , if else  and else;

// if, else if, aur else statements ek sath use karke multiple conditions ko evaluate karte hain.
// Yeh sequence mein conditions ko check karte hain aur jab ek condition true hoti hai,
// to uss associated block ko execute karte hain.Agar koi bhi condition true nahi hoti hai, to
// else block execute hota hai(agar available hai).

// var num = 10;

// if (num > 10) {
//     console.log("Num is greater than 10");
// } else if (num < 10) {
//     console.log("Num is less than 10");
// } else {
//     console.log("Num is equal to 10");
// }
// OUTPUT: Num is equal to 10

//Is example mein:

// Pehle if statement num ko 10 se compare karta hai.Agar num greater than 10 hai, to
// "Num is greater than 10" print hota hai.
// Agar pehli condition false hai, to dusri
// else if statement check hoti hai.Yadi num less than 10 hai, to "Num is less than 10"
// print hota hai.
// Agar na to pehli condition true hai aur na hi dusri condition, to
// else block execute hota hai, jo ki "Num is equal to 10"
// print karta hai.