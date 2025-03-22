//>>> Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) { 
        a = 3; 
    }
    alert(`inside the funcOne function ${a}`); // The final value of 'a' is 3
}

// #1.1 - run in the console:
funcOne(); // Prediction: The alert will show "inside the funcOne function 3"

// #1.2 What will happen if the variable is declared with const instead of let?
// const a >>>  it will be exactly the same because `const` allows reassign with the same block scopem so it still be a = 3



// #2
let a = 0; 
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); 
}

// #2.1 - run in the console:
funcThree(); // Prediction: a = 0
funcTwo(); // Prediction:  a = 5
funcThree(); // Prediction: a = 5

// #2.2 What will happen if the variable is declared with const instead of let?
// const a >>> error because can't be reassigned outside the scope.



// #3
function funcFour() {
    window.a = "hello"; 
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); 
}

// #3.1 - run in the console:
funcFour(); // Prediction: a =  "hello"
funcFive(); // Prediction: a =  "hello"  because 'window.a' is globally access
// No change if 'a'  declared with const instead of let because the assign is using the `window` object

// #4
let a = 1; 
function funcSix() {
    let a = "test"; 
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // Prediction: The alert will show 'test', because  'a' inside the function is "test" (local scope)


// #4.2 What will happen if the variable is declared with const instead of let?
// No change if 'a'  declared with const instead of let  inside `funcSix` would still  the global variable 'a' and output "test".


// #5
let a = 2; 
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); //  a = 5
}
alert(`outside of the if block ${a}`); // a = 2

// #5.1 - run the code in the console

// #5.2 What will happen if the variable is declared with const instead of let?
//No change if 'a'  declared with const instead of let inside the if block, the value will be the same.


//>>> Exercise 2 : Ternary operator

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); 

