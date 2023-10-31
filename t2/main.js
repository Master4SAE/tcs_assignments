//Develop a function that takes a number and returns the square root. 
//Handle cases where the input is negative or undefined. 
//Use the number, null, and undefined primitive types.
// TODO: Implement the squareRoot function
// parameter num should be a number or null or undefined and the function shoud return a number or a string
function squareRoot(num) {
    if (num === null || num === undefined) {
        return 'Input is undefined or null.';
    }
    // TODO: Check if the input is a valid number.
    // If fail, return 'Invalid input. Please enter a valid number.'
    // TODO: Handle cases where the input is negative. If fail, return 'Cannot calculate square root of a negative number.'
    // Calculate the square root and return the result
    var sqrt = Math.sqrt(num);
    return sqrt;
}
// Prompt the user to enter a number
var userInput = prompt("enter a number");
// Convert user input to a number or keep it undefined if empty
// TODO: replce x and y with proper types
var numberInput = userInput ? parseFloat(userInput) : undefined;
// Call the squareRoot function and display the result
var result = squareRoot(numberInput);
console.log(result);
