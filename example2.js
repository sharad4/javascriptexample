// Example uses multiple concepts such as functions, closures, and callbacks

// Define a function that takes in a delay a time and a message, and logs the message after the specified delay

function delayedLog(delay, message){
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Define a function that takes in an array of numbers and returns a new array with each number multiplied by 2
 function doubleArray(array){
    const result = [];

    for (i = 0; i < array.length; i++){
        result.push(array[i]*2);
    }
     return result;
 }

// Define a function that takes in a number and returns a function that multiplies any given number by the original number
function multiplierFactory(number){
    return function(value){
        return number* value;
    };
}

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Call the doubleArray function on the numbers array and store the result in a new array
const doubledNumbers = doubleArray(numbers);

// Call the delayedLog function with a delay of 2000ms and a message indicating the length of the doubledNumbers array
delayedLog(2000, `The length of the doubled numbers array is ${doubledNumbers.length}`);

// Create a multiplier function that multipliers numbers by 3 using the multiplierFactory function
const multiplierByThree = multiplierFactory(3);

// Call the multiplier function on the number 5 and log the result to the console
const result = multiplierByThree(5);
console.log(result);