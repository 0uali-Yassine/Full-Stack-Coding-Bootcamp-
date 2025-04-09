// Exercise 1 : Find the numbers divisible by 23
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
  
  displayNumbersDivisible(23);
  
  // Exercise 2 : Shopping List
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
        stock[item] -= 1;
      }
    }
    return total;
  }
  
  console.log(myBill());
  
  // Exercise 3 : What’s in my wallet ?
  function changeEnough(itemPrice, amountOfChange) {
    const values = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;
  
    for (let i = 0; i < amountOfChange.length; i++) {
      totalChange += amountOfChange[i] * values[i];
    }
  
    return totalChange >= itemPrice;
  }
  
  console.log(changeEnough(4.25, [25, 20, 5, 0]));
  console.log(changeEnough(14.11, [2, 100, 0, 0]));
  console.log(changeEnough(0.75, [0, 0, 20, 5]));
  
  // Exercise 4 : Vacations Costs
  function hotelCost() {
    let nights = prompt("How many nights would you like to stay?");
    while (isNaN(nights) || nights <= 0) {
      nights = prompt("Please enter a valid number for the nights.");
    }
    return nights * 140;
  }
  
  function planeRideCost() {
    let destination = prompt("Where would you like to go?");
    while (!destination) {
      destination = prompt("Please enter a valid destination.");
    }
  
    if (destination === "London") return 183;
    if (destination === "Paris") return 220;
    return 300;
  }
  
  function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");
    while (isNaN(days) || days <= 0) {
      days = prompt("Please enter a valid number for the days.");
    }
  
    let totalCost = days * 40;
    if (days > 10) totalCost *= 0.95;
    return totalCost;
  }
  
  function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    return hotel + plane + car;
  }
  
  console.log(totalVacationCost());
  
  // Exercise 5 : Users
  const container = document.getElementById("container");
  console.log(container);
  
  const listItems = document.querySelectorAll(".list li");
  listItems[1].textContent = "Richard";
  listItems[2].remove();
  listItems[0].textContent = "YourName";
  listItems[1].textContent = "YourName";
  
  const ulList = document.querySelectorAll(".list");
  ulList.forEach((ul) => ul.classList.add("student_list"));
  ulList[0].classList.add("university", "attendance");
  
  container.style.backgroundColor = "lightblue";
  container.style.padding = "10px";
  
  document.querySelector(".list li:last-child").style.display = "none";
  document.querySelector(".list li:nth-child(2)").style.border = "1px solid black";
  
  document.body.style.fontSize = "18px";
  
  // Bonus
  if (container.style.backgroundColor === "lightblue") {
    alert("Hello John and Sarah");
  }
  
  // Exercise 6 : Change the navbar
  const navBar = document.getElementById("navBar");
  navBar.setAttribute("id", "socialNetworkNavigation");
  
  const newLi = document.createElement("li");
  const newText = document.createTextNode("Logout");
  newLi.appendChild(newText);
  navBar.querySelector("ul").appendChild(newLi);
  
  const firstItem = navBar.querySelector("ul").firstElementChild;
  const lastItem = navBar.querySelector("ul").lastElementChild;
  console.log(firstItem.textContent);
  console.log(lastItem.textContent);
  
  // Exercise 7 : My Book List
  const allBooks = [
    {
      title: "Book 1",
      author: "Author 1",
      image: "https://via.placeholder.com/100",
      alreadyRead: true
    },
    {
      title: "Book 2",
      author: "Author 2",
      image: "https://via.placeholder.com/100",
      alreadyRead: false
    }
  ];
  
  const listBooksSection = document.querySelector(".listBooks");
  
  allBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    const titleAuthor = document.createElement("p");
    const bookImage = document.createElement("img");
  
    titleAuthor.textContent = `${book.title} written by ${book.author}`;
    bookImage.src = book.image;
    bookImage.width = 100;
  
    if (book.alreadyRead) {
      titleAuthor.style.color = "red";
    }
  
    bookDiv.appendChild(titleAuthor);
    bookDiv.appendChild(bookImage);
    listBooksSection.appendChild(bookDiv);
  });
  