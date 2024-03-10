// Day 14: Write a program to checkif a string is a palindrome.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    // Check if the original string is equal to the reversed string
    return alphanumericStr === reversedStr;
}

// Example usage:
const string = "A man, a plan, a canal, Panama";
const result = isPalindrome(string);
if (result) {
    console.log(`"${string}" is a palindrome.`);
} else {
    console.log(`"${string}" is not a palindrome.`);
}