const products = require("./products.js");

function findProduct(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        console.log(`Product found:`);
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
        console.log('--------------------------');
    } else {
        console.log(`Product "${productName}" not found.`);
        console.log('--------------------------');
    }
}

findProduct("Laptop");
findProduct("Book");
findProduct("Camera"); 
