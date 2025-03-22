// Exercise 1: Timer

// Part I 
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II
setTimeout(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}, 2000);

// Part III 
let paragraphCount = 0;
const intervalId = setInterval(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
    paragraphCount++;

    if (paragraphCount >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

document.getElementById('clear').addEventListener('click', () => {
    clearInterval(intervalId);
});

// Exercise 2: Move the Box

function myMove() {
    const animateBox = document.getElementById('animate');
    const container = document.getElementById('container');
    let position = 0;

    const intervalId = setInterval(() => {
        position += 1;
        animateBox.style.left = position + 'px';

        // Stop the interval when the box reache the right sid of the container
        if (position >= container.offsetWidth - animateBox.offsetWidth) {
            clearInterval(intervalId);
        }
    }, 1); // Move every 1 millisecod
}