// let age = 19;
// let accessAllowed = age > 18;
// let accessAllowed = (age < 18) ? this : false;
// console.log(accessAllowed)

// let age  = 20

// if(age>=18){
//     console.log("your are adult")
// }else{
//    console.log("not adult")
// }

// write a arry for studentnDB store 5 sudent


// let studentDB = ["krish", "nikhil ", "ritik"];

// const findStudent = (studentName, name) => {
//   for (let i = 0; i < studentName.length; i++) {
//     if (studentName[i] === name) {
//       console.log(`found student ${name}`);
//     }
//   }
// };

// findStudent(studentDB, "ritik")
// function init(pi){
//   // const pi = 3.14;
//   return function  getAreaofCircle(r){
//     return pi*r*r;
//   }
// }
// const getArea = init(3.14);
// const getArea2 = init(3.1416);
// console.log(getArea(2))
// console.log(getArea2(2))
// function outer() {
//   let count = 0; // Outer function का variable

//   return function inner() {
//       count++; // Inner function, count को याद रखता है
//       return count;
//   };
// }

// const counter = outer(); // Outer function call हुआ
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter());
// console.log(counter()); // Output: 3
// function createCounter() {
//   let count = 2; // Private variable
//   return {
//       increment: function () { return ++count; },
//       decrement: function () { return --count; }
     
//   };
// }
// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.decrement()); // 0
// console.log(counter.count); // undefined (direct access नहीं है)
// function greet(name, callback){
//   console.log(`hello... ${name}`)
//   callback()
// }
// function saygoodbye(){
//   console.log("good bye")
// }

// greet("krish",saygoodbye)
// function processData(a,b,c, callback){
//   // console.log(`total sum ${a}+${b}+${c}`)
//   const sum = a+b+c;
//   callback(a,b,c,sum)
// }
// function displayresult(x,y,z, total){
//   console.log(`Numbers: ${x},${y},${z}`)
//   console.log(`sum ${total}`)
// }
// processData(2,3,4,displayresult);


// const myPromise = new  Promise((resolve, reject) => {
//   // Asynchronous code
//   let success = true; // मान लें task सफल है

//   if (success) {
//       resolve("Task completed successfully!");
//   } else {
//       reject("Task failed!");
//   }
// });
// myPromise.then((result) =>{
//   console.log(result)
// }).catch((error) =>{
//   console.log(error)
// })

// function hollow( totalRow, totalCol){
//   for( let i = 1; i <= totalRow; i++){
//     for(let j= 1; j<= totalCol; j++){

//       if(i == 1 || i == totalRow || j==1 ||j == totalCol){
//         process.stdout.write("*");
//       }else{
//         process.stdout.write(" ");
//       }

//     }
//     console.log("\n")
//   }
// }
//  hollow(10 , 5)
// function sqr(row,col){
//   for(let i = 1 ; i <= row; i++){
//     for(let j = 1; j<=col; j++){
//       process.stdout.write("*");
//     }
//     console.log(" ")
//   }
 
// }
// sqr(10, 10)

function update(marks){
    for(let i = 0 ; i < marks.length; i++){
marks[i] = marks[i] + 1;
    }
}
const marks = [98,92,23]
update(marks)

for(let i=0; i <marks.length; i++){
    console.log(marks[i]+" ")
}

