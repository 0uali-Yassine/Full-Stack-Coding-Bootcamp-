
let number = prompt("Enter a number:");
console.log(typeof number)

while (number < 10) {
    number = Number(prompt("Enter a new number must be 10 or more: "));
}

console.log("Thank you! You enter:", number);
