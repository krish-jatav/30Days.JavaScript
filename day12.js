// Write a program to convert temperature from Celsius to Fahrenheit.

function CelsiusToF(Celsius) {
    return (Celsius * 9 / 5) + 32;
}
const CelsiusTemp = 13;
const fahrenheitTemp = CelsiusToF(CelsiusTemp);
console.log(`${CelsiusTemp} C is equal to ${fahrenheitTemp} F`);