// Object

// object ek tareek hai jisse ki hum ek identity ki details ko ek saath rakh skt hai

// object = ek bande ka kai saara data
// array = kai logo ka data

// let user = {
//     name: "Xyz",
//     age: 20,
//     Enroll: 12345,
//     city: "Bhopal"
// }
// Object.freeze(user);
// user.age = 23;
// console.log(user["age"])

// const student = {
//     name: "krish",
//     class: 12,
//     marks: 95.4,
//     printMarks: function() {
//         console.log("marks = ", student.marks);
//     },
// };

// Object Methods-----------

// Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.

const person = {
    firstName: "krish",
    id: 1122,
    school: "Hrs",
    schoolName: function() {
        console.log(this.school)
    }
};
console.log(person.schoolName);

// how

// {}

// when & why

// jab bhi apko ek hi element ki bhut saari details store krni ho

// to save a lot of details all together at one place we use object