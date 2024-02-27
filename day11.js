// Write a program to find the area of a circle.

let pi = 3.14;

function findArea(r) {
    return pi * r * r;
}
let r, area;
r = 19;

area = findArea(r);
console.log("Area of circle is " + area);