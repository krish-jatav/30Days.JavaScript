// Reduce() method..........>>>>>>>>>>>>>>>>>>>>>>>>>
const arr = [1, 4, 2, 3];

function joinArr(add, value) {
    return add + value;

}
const result = arr.reduce(joinArr);
console.log("This is result For Reduce() Method : ", result)

// Using Arrow Function..>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let arrResult = arr.reduce((add, value) => add + value)
console.log("Using by Arrow Function", arrResult)

const sum = 0;
const addum = [2, 4, 5];