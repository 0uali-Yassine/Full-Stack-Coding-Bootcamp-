//  Exercise 1: Find the Numbers Divisible by 23
function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}

//  Exercise 2: Shopping List
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--; 
        }
    }
    return total;
}

// Exercise 3: What’s in My Wallet?
function changeEnough(itemPrice, amountOfChange) {
    const changeValue = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * changeValue[i];
    }
    return totalChange >= itemPrice; // return true or false
}



//  Exercise 4: Vacation Costs
function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay?");
    } while (isNaN(nights) || nights <= 0);
    return nights * 140;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Where are you traveling to?");
    } while (typeof destination !== 'string' || !destination);
    if (destination === "London") return 183;
    if (destination === "Paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days do you want to rent the car?");
    } while (isNaN(days) || days <= 0);
    const cost = days * 40;
    return days > 10 ? cost * 0.95 : cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    return hotel + plane + car;
}

// Exercise 5: Users
const container = document.getElementById("container");
console.log(container);

const listItems = document.querySelectorAll(".list li");
listItems[1].textContent = "Richard";
listItems[3].remove();

// Select all the <ul> elements
const listss = document.querySelectorAll('ul');

listss.forEach(list => {
    const firstLi = list.querySelector('li'); // the first because we dont use 'querySelectAll'
    firstLi.textContent = 'Yassine zerouali';  
});


const lists = document.querySelectorAll(".list");
for (let list of lists) {
    list.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";
lists[0].style.fontSize = "18px";

const richardLi = document.querySelector("li:nth-child(2)");
richardLi.style.border = "1px solid black";

const danLi = document.querySelector("li:last-child");
danLi.style.display = "none";

if (container.style.backgroundColor === "lightblue") {
    alert("Hello John and Richard");
}

// Exercise 6: Change the Navbar
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

const logoutLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
logoutLi.appendChild(logoutText);
navBar.querySelector("ul").appendChild(logoutLi);

const firstItem = navBar.querySelector("ul").firstElementChild;
const lastItem = navBar.querySelector("ul").lastElementChild;

console.log(firstItem.textContent, lastItem.textContent);

// Exercise 7: My Book List
const allBooks = [
    {
        title: "Clean Code",
        author: " Robert C. Martin",
        image: "https://miro.medium.com/v2/resize:fit:1103/1*PKsDuPxNoKJyJvmlLc64qg.jpeg",
        alreadyRead: true
    },
    {
        title: "The Little Book of Philosophy",
        author: "Rachel Poulton",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562682157l/51265536.jpg",
        alreadyRead: false
    }
];

const listBooks = document.querySelector(".listBooks");

for (let book of allBooks) {
    const bookDiv = document.createElement("div");
    const bookDetails = document.createElement("p");
    const bookImage = document.createElement("img");
    
    bookImage.src = book.image;
    bookImage.style.width = "100px";
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }
    
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);
    listBooks.appendChild(bookDiv);
}
