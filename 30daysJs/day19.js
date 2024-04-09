// : Write a program to sort an array in ascending order.

function ascendingSort(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr;
}

const array = [5, 3, 8, 2, 1];
const sortedArray = ascendingSort(array);
console.log("Array sorted in ascending order:", sortedArray);