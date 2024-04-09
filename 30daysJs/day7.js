// Day 7: Write a program to check if a year is a leap year.

function LeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log("is leap year",
    LeapYear(1936))