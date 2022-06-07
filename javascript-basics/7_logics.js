const stt = 400

if (stt === 200) {
    console.log('OK!');
} else if (stt === 400 || stt == 500) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

const message = (stt === 200) ? 'OK!' : 'Errror!'

// implicit false values
// - empty strings -> false
// - null/undefined objects -> false
// - number 0 -> false

switch (stt) {
    case 200:
        console.log('Ok');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown value!');
        break;
}
