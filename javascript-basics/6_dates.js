// time is just a JS Object

const now = new Date()

// month counting starts form 0 -> April: 3
const randomTime = new Date(2015, 3, 12, 6, 25, 58)

console.log(now);
console.log(randomTime);

// setting values
randomTime.setFullYear(2014)
randomTime.setMonth(3)
randomTime.setDate(4)
randomTime.setHours(4)
randomTime.setMinutes(24)
randomTime.setSeconds(46)


console.log(randomTime)
console.log(now.getTime()); // milliseconds since 1/1/1970
console.log(now.getDay()); // day of the week (Mon, Tue, ...) (Sunday = 0)



