// Managing promises

// async/await
// - Standard in many languages
// - Syntax closer to synchronous code

function promiseTimeout(ms) {
    return new Promise((resolve, reject) => { // anything that returns a Promise can work with async/await
        setTimeout(resolve, ms);
    });
}

// use "async" to declare a function that has an "await" call inside of it
// "await" : logically block exection but still allow the thread to be used by something else behind the scenes

async function run() {
    console.log('Start!!');
    // promiseTimeout(2000) // running concurrently on a different thread
    await promiseTimeout(2000) // logically block execution (the "stop" wait until timeout), but still things are happening behind
    console.log('Stop!!');
}

run()

async function simulateLongOperation() {
    await promiseTimeout(1000); // pauses while operation completes
    return 42; // same as Promise.resolve(42)
}

async function runAgain() {
    // const answer = simulateLongOperation(); // not waiting -> uncontrollable
    const answer = await simulateLongOperation(); // wait for the operation to finish
    console.log(answer);
}

runAgain(); // use try/catch to identify errors
