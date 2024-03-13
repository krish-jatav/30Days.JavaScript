// Day 18: Write a program to count the number of vowels in a string.

function countVowels(str) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
    // Initialize a variable to store the count of vowels
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            // If it is, increment the count
            count++;
        }
    }

    return count;
}

// Example usage:
const string = "Hello World";
const result = countVowels(string);
console.log(`The number of vowels in "${string}" is:`, result);