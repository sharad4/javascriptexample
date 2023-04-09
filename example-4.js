// Define a higher-order function that takes in a function and an array, and returns a new array with the result of applying the functions to each element of the input array
function mapArray(func, array){
    const result = [];

    for (let i = 0; i < array.length; i++){
        result.push(func(array[i]));
    }

    return result;
}

// Define a closure function that takes in a factor and returns a function that multiplies any given number by he factor
function multiplier(factor){
    return function(number){
        return number * factor;
    }
}

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = mapArray(multiplier(3), numbers);

//Log the result to the console
console.log(multipliedNumbers);

//Define a function tht takes in a callback function and an initial value, and  returns a new function that accumulates the results of calling the callback function on each element of an array
function reduceArray(callback, initialValue){
    return function (array) {
        let accumulator = initialValue;

        for (let i = 0; i < array.length; i++){
            accumulator = callback(accumulator, array[i]);
        }

        return accumulator;
    };
}

// Define a callback function that sums two numbers
function sumNumbers(a, b){
    return a + b;
}

//Define a new array of numbers
const newNumbers = [1, 2, 3, 4, 5];

// Call the reduceArray function with the sumNumbers callback function and an initial value of 0, and store the resulting function in a variable
const sumArray = reduceArray(sumNumbers, 0);

// Call the sumArray function on the newNumbers array and log the result to the console
console.log(sumArray(newNumbers));