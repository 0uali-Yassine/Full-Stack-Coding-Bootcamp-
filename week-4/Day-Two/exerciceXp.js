// Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${colors[i]}.`);
}

if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// Exercise 2 : Colors #2

// for HINT: 'ternary operator' is just an option so i use the easy way!
const ordinal = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
    let indx = i + 1; 
    let sufx;

    // special case: 11/12/13 = 'th'
    if (indx % 100 >= 11 && indx % 100 <= 13) {
        sufx = ordinal[0];
    } else {
        switch (indx % 10) {
            case 1:
                sufx = ordinal[1]; 
                break;
            case 2:
                sufx = ordinal[2]; 
                break;
            case 3:
                sufx = ordinal[3]; 
                break;
            default:
                sufx = ordinal[0];
                break;
        }
    }

    console.log(`${indx}${sufx} choice is ${colors[i]}.`);
}
