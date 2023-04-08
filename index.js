// Example of using functions, class and objects

// Define a function to calculate the area of a rectangle
function calculateArea(length, width){
    return length * width;
}

//Create a class representing a rectangle
class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    // Define a method to calculate the area of the rectangle
    calculateArea(){
        return this.length * this.width;
    }
}

// Create an object representing a rectangle using the class constructor
const rectangleObj = new Rectangle(5, 10);

// Call the calculateArea method on the rectangle object
const area = rectangleObj.calculateArea();

//Log the calculated area to the console
console.log("The area of the rectangle is:", area);

