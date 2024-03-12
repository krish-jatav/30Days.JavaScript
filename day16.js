// Day 16: Write a program to remove duplicate elements from an array.

function removeDuplicates(arr) {
    // Create a Set to store unique elements
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

// Example usage:
const array = [1, 2, 3, 4, 2, 3, 5];
const result = removeDuplicates(array);
console.log("Array with duplicates removed:", result);