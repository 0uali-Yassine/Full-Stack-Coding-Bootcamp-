// Exercise 1 : Comparison
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("Number is less than or equal to 10");
        } else {
            reject("Number is greater than 10");
        }
    });
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    
// Exercise 2 : Promises
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  });
  
  myPromise.then(result => console.log(result)); // Expected output after 4 seconds: "Success"

  
// Exercise 3 : Resolve & Reject
// Exercise 4: quizz - not mandatory