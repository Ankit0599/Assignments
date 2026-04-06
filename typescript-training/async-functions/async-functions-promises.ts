//2. Async functions - promises 
// Asynchronous function with promise that returns either resolve and reject

function sampleAsyncfucntion () : Promise <string> {
    return new Promise ((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve (`Success! the random number is ${randomNumber}`);
        } else {
            reject (new Error (`Failure! The random number is  $(randomNumber)`));
        }
    });;
};


//calling asynchronous function and handling the promise

async function executeTest () : Promise <void> {
    const result : string = await sampleAsyncfucntion ();
    console.log (result);
}

//Call the async functions to see the result
executeTest ();