var reverseArray = function (array) {
    return array.reverse();
};
// Test the function with arrays of different types
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["apple", "banana", "cherry", "date"];
var mixedArray = [true, 42, "hello", false];
// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
console.log(reverseArray(numberArray));
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
console.log(reverseArray(stringArray));
// Reversed Mixed Array: [ false, 'hello', 42, true ]
console.log(reverseArray(mixedArray));
