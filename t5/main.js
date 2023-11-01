// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    // if type is number return the square of the number
    if (typeof (value) === 'string') {
        return value.length;
    }
    else if (typeof (value) === 'number') {
        return value * value;
    }
    return "Invalid input type";
}
// Prompt the user to enter a value as either a string or a number
var userInput = prompt("enter a value as either a string or a number");
var parsedValue = parseFloat(userInput);
if (isNaN(parsedValue)) {
    parsedValue = userInput;
}
// Call the lengthOrSquare function
var result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
