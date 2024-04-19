// Object

// object ek tareek hai jisse ki hum ek identity ki details ko ek saath rakh skt hai

// object = ek bande ka kai saara data
// array = kai logo ka data

let user = {
    name: "Xyz",
    age: 20,
    Enroll: 12345,
    city: "Bhopal"
}
Object.freeze(user);
user.age = 23;
console.log(user["age"])