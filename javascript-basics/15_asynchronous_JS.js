// // callback basics
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Successful')
//     } else {
//         reject('Failed')
//     }
// })


// p.then((message) => {
//     console.log('This is the result of then: ' + message)
// }).catch((message) => {
//     console.log('This is the result of catch: ' + message)
// })


// console.log("------------------------------------");
// // traditionally using callbacks
// const userHasLeft = true
// const userWatchingCatMeme = true

// function watchTutorialCallback(callback, errorCallback) {
//     if (userHasLeft) {
//         errorCallback({
//             name: 'User has left',
//             message: ':(('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'Learning < Cat'
//         })
//     } else {
//         callback('User is learning well !!!')
//     }
// }

// watchTutorialCallback(
//     (message) => {
//         console.log('Success: ' + message)
//     },
//     (error) => {
//         console.log(error.name + ' ' + error.message);
//     }
// )

// console.log("------------------------------------");
// // using promise instead -> no more callbacks, avoid callback hell
// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userHasLeft) {
//             reject({
//                 name: 'User has left',
//                 message: ':(('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'Learning < Cat'
//             })
//         } else {
//             resolve('User is learning well !!!')
//         }
//     })
// }

// watchTutorialPromise()
//     .then((message) => {
//         console.log('Success: ' + message)
//     })
//     .catch((error) => {
//         console.log(error.name + ' ' + error.message);
//     })


// console.log("------------------------------------");
// // further on promises

// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })

// // wait for everything to complete then return
// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })

// // return as soon as the first one complete
// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((message) => {
//     console.log(message)
// })




function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}


function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}


// // traditional
// makeRequest('Google')
//     .then(response => {
//         console.log('Reponse has been received');
//         return processRequest(response)
//     })
//         .then(processedResponse => {
//             console.log(processedResponse);
//         })
//     .catch(err => {
//         console.log(err);
//     })


// simplify this code
async function doWork() {
    try {
        const response = await makeRequest('Google') 
        // when JS hits this await statement, it will leave this function, do other works and comeback when makeRequest returns
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }    
}

doWork()



