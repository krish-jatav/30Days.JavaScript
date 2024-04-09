// How to Use the filter() Method in JavaScript
// In the following examples, I will demonstrate how you can use the filter() method to filter items from an array in JavaScript.

// filter() Example 1: How to filter items out of an array
// In this example, we filter out every person who is a toddler(whose age falls between 0 and 4).

let people = [
    { name: "aaron", age: 65 },
    { name: "beth", age: 2 },
    { name: "cara", age: 13 },
    { name: "daniel", age: 3 },
    { name: "ella", age: 25 },
    { name: "fin", age: 1 },
    { name: "george", age: 43 },
];

let toddlers = people.filter((person) => person.age <= 3);

console.log(toddlers);
/*
[{
  age: 2,
  name: "beth"
}, {
  age: 3,
  name: "daniel"
}, {
  age: 1,
  name: "fin"
}]
*/


// .............................................................

let bookSeller = [{
        bookName: "Atomic Habits",
        Sell: "Bestseller",
    },
    {
        bookName: "THINK AND GROW RICH (PB)",
        Sell: "Bestseller",
    },
    {
        bookName: "The Power of Your Subconscious Mind",
        Sell: "Not Bestseller",
    },
    {
        bookName: "How To Use The Power of Prayer",
        Sell: "Not Bestseller",
    },
];
let result = bookSeller.filter(function(elm) {
    return elm.Sell == "Bestseller"
})
console.log(result);

// Ouput: [{ bookName: 'Atomic Habits', Sell: 'Bestseller' },
// { bookName: 'THINK AND GROW RICH (PB)', Sell: 'Bestseller' }




// map() method....>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let arr = [2, 5, 8, 8, 3, 9, 5];
let even = arr.map(function(elm) {
    return elm % 2 == 0;
});
console.log(even);