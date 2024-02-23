// Assignment 1

function greet() {

    console.log('Hello');
}

greet();


// Assignment 2

function greet(name) {
    console.log(`Hello ${name}`);
}

greet('Yuvraj');


// Asssignment 3

function greet(name) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log('Hii there !!');
    }
}

greet();

// Assignment 4

function converToFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Assignment 5
function converToCelsius(Farenheit) {
    return (Farenheit - 32) * 9 / 5;
}

// Asssignment 6

function convertTemprature(degree, unit) {
    if (unit === 'C') {
        return (degree * 9 / 5) + 32;
    } else if (unit === 'F') {
        return (degree - 32) * 5 / 9;
    }

}

console.log(convertTemprature(25, 'C'));
console.log(convertTemprature(86, 'F'));

// Assignment 7
