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



// callback basics
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Successful')
    } else {
        reject('Failed')
    }
})


p.then((message) => {
    console.log('This is the result of then: ' + message)
}).catch((message) => {
    console.log('This is the result of catch: ' + message)
})


console.log("------------------------------------");
// traditionally using callbacks
const userHasLeft = true
const userWatchingCatMeme = true

function watchTutorialCallback(callback, errorCallback) {
    if (userHasLeft) {
        errorCallback({
            name: 'User has left',
            message: ':(('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'Learning < Cat'
        })
    } else {
        callback('User is learning well !!!')
    }
}

watchTutorialCallback(
    (message) => {
        console.log('Success: ' + message)
    },
    (error) => {
        console.log(error.name + ' ' + error.message);
    }
)

console.log("------------------------------------");
// using promise instead -> no more callbacks, avoid callback hell
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userHasLeft) {
            reject({
                name: 'User has left',
                message: ':(('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Learning < Cat'
            })
        } else {
            resolve('User is learning well !!!')
        }
    })
}

watchTutorialPromise()
    .then((message) => {
        console.log('Success: ' + message)
    })
    .catch((error) => {
        console.log(error.name + ' ' + error.message);
    })


console.log("------------------------------------");
// further on promises

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

// wait for everything to complete then return
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

// return as soon as the first one complete
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})
