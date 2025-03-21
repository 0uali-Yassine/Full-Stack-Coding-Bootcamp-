// Exercise 2 : 
// Your favorite colors

const colors = ["Blue","Red","Green","Purple","Yellow"];
const suffixes = ["st","nd","rd","th","th"]; 

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
