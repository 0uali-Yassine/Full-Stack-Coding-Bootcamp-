const _ = require('lodash'); 
const math = require('./math'); 
const numbers = [5, 10, 15, 20];

const sum = _.sum(numbers); 
const max = _.max(numbers);

console.log("Sum of numbers (using lodash):", sum);
console.log("Max value (using lodash):", max);

const a = 6;
const b = 7;

console.log(`Addition (${a} + ${b}):`, math.add(a, b));
console.log(`Multiplication (${a} * ${b}):`, math.multiply(a, b));
