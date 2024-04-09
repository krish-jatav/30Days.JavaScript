// Write a program to merge two sorted arrays

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let index1 = 0,
        index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            mergedArray.push(arr1[index1++]);
        } else {
            mergedArray.push(arr2[index2++]);
        }
    }

    return mergedArray.concat(arr1.slice(index1), arr2.slice(index2));
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(array1, array2);
console.log("Merged sorted array:", mergedArray);