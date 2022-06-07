// asynchronous programming and promises

// Certain operations can take a while
// File I/O
// REST calls
// Database operations
// Complex computations

// Originally managed through callbacks
function callback() {
    console.log('Timeout completed');
}

// setTimeout(callback, 3000); // wait 3 seconds

// promises
// a common development pattern, cleaner version of callbacks
// recent versions of JavaScript have built-in Promise object
// long running operations typically return a Promise

function promiseTest() {
    return new Promise((res, rej) => { // create new Promise object that accepts a callback (function that has 2 params: resolve and reject)
        // res // success 
        // rej // failure
        setTimeout(res, 2000)
    })

    // resolve is called to indicate success
    // reject is called to indicate failure
}

promiseTest()
    .then(() => {
        console.log('Done');
    })
    .then(() => {
        console.log('Also done');
    })
    .catch(() => {
        console.log('Error');
    })



function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        // resolve(42) // success
        // reject('Hello') // failure
        setTimeout(resolve, ms); // success
    });
}

promiseTimeout(2000)
    .then(() => { // if sucessful
        console.log('Done!!');
        return promiseTimeout(1000)
    })
    .then(() => { // pass down to this if successful
        console.log('Also done!!');
        return Promise.resolve('Message');
    })
    .then((response) => {
        console.log(response);
    })
    .catch(() => {
        console.log('Error!!');
    })
