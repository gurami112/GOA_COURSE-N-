// Create a basic Promise that resolves immediately Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!".

const myPromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
});

myPromise.then(value => console.log(value));



// Create a Promise that rejects with an error Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().

const myRejectedPromise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});

myRejectedPromise.catch(error => console.error(error));


// Use setTimeout to resolve a Promise after 2 seconds Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".

const myTimeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
});


// Handle both resolve and reject outcomesTask:                                                                          Write a promise that randomly either resolves with "Success!" or rejects with "Failed!" using Math.random(). Handle both outcomes with .then() and .catch().

const myRandomPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
});

myRandomPromise.then(value => console.log(value))
             .catch(error => console.error(error));

// Create a chain of promises using .then()  Task: Create a promise that resolves with the number 5. Chain multiple .then() calls to multiply the number by 2 in each step.

const initialPromise = new Promise((resolve, reject) => {
    resolve(5);
});

initialPromise.then(value => value * 2)




// Simulate a network request using Promises Task: Create a promise that resolves with "Data fetched!" after 1 second. Use setTimeout to simulate the delay.

const networkRequestPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1000);
});