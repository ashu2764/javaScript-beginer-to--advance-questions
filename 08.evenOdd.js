function evenOdd(number) {
    if (number <= 0 && number === 1) {
        console.log('Please enter a valid positive number greater than 0');
    } else if (number % 2 === 0) {
        return `${number} is an even number`;
    } else {
        return `${number} is an odd number`;
    }
}

let num = 3;
console.log(evenOdd(num));  // Output: 3 is an odd number
