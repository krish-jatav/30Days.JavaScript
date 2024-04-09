// Day 15: Write a program to find the largest element in an array.

function findLargestElement(arr) {
    let largest = arr[0]; // Assume the first element as the largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage:
const array = [10, 5, 20, 8, 15];
const largestElement = findLargestElement(array);
console.log("The largest element in the array is:", largestElement);