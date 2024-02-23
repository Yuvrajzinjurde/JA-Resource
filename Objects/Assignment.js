// 8a

basketBall = {
    name: "basket-Ball",
    price: 2095
}

console.log(basketBall);


// 8b

basketBall = {
    name: "basket-Ball",
    price: 2095
}

basketBall.price += 500;

console.log(basketBall);


// 8c

basketBall = {
    name: "basket-Ball",
    price: 2095
}

basketBall['delivery-time'] = 3;

console.log(basketBall);

// 8d
product1 = {
    name: "basket-Ball",
    price: 2095
}
product2 = {
    name: "base-Ball",
    price: 2053
}
function comparePrice(product1, product2) {

    if (product1.price > product2.price) {
        console.log(`${product2.name} looks like affordable `);
    }
    else {
        console.log(`${product1.name} looks like affordable `);
    }
}

// 8e

function isSameProduct(product1, product2) {
    if ((product1.name === product2.name) && (product1.price === product2.price)) {
        console.log("Both the objects have same data");
    }
}

// 8f
const string = "Good Morning";
console.log(string.toLocaleLowerCase());

// 8g

const stringRepeate = "Good Morning";
console.log(string.repeat(2));

// 8h





