// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number): string|number {
  // TODO: Use a type guard to check the actual type of 'value'
  // if type is string, retrurn the length of the string
  // if type is number return the square of the number
  if (typeof(value) === 'string'){
    return value.length;
  } else if (typeof(value) === 'number'){
    return value*value;
  }
  return "Invalid input type";
}
// Prompt the user to enter a value as either a string or a number
const userInput = prompt("enter a value as either a string or a number") as string;
let parsedValue: string| number = parseFloat(userInput);
if (isNaN(parsedValue)){
  parsedValue = userInput
}

// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
