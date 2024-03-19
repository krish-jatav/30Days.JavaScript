// Reduce() method..........>>>>>>>>>>>>>>>>>>>>>>>>>
const arr = [1, 4, 2, 3];

function joinArr(add, value) {
    return add + value;

}
const result = arr.reduce(joinArr);
console.log("This is result For Reduce() Method : ", result)