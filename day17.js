// Day 18: Write a program to count the number of vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

const string = "Hello World";
const result = countVowels(string);
console.log(`The number of vowels in "${string}" is:`, result);