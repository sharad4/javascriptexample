// Define a generator function that yields random numbers between 1 and 100
function* randomGenerator(){
    while (true){
        yield Math.floor(Math.random() * 100) + 1;
    }
}

// Define an async function that fetches data from an API and returns a promise that resolves to the parsed JSON response
async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

// Define a function that takes in a generator function and an async function, and logs the results of the generator and the API call
async function handleData(generator, asyncFunction) {
    const generatorInstance = generator();
    const generatedNumber = generatorInstance.next().value;
    console.log(`Generated number: ${generatedNumber}`)

    const apiData = await asyncFunction();
    console.log(`API data:`, apiData);
}

// Call the handleData function with the randomGenerator function and the fetchData function 
handleData(randomGenerator, fetchData);