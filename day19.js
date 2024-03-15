// : Write a program to sort an array in ascending order.

function ascendingSort(arr) {
    // Use the built-in sort method to sort the array
    arr.sort(function(a, b) {
        return a - b; // Compare function to sort numbers in ascending order
    });
    return arr;
}

// Example usage:
const array = [5, 3, 8, 2, 1];
const sortedArray = ascendingSort(array);
console.log("Array sorted in ascending order:", sortedArray);