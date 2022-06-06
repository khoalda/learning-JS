const names = ['Justin', 'Sarah', 'Christopher'];

let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}

for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}

for (n of names) {
    console.log(n);
}

for (let n of names) {
    console.log(n);
}