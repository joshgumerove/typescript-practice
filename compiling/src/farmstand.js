"use strict";
const printProduct = (product) => {
    console.log `${product.name} - $${product.price}`;
};
// note how we can just compile all using tsc
const testProduct = {
    price: 50,
    name: "Test product",
    quantity: 10,
};
