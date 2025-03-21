const family = {
    father: "Si Hassan",
    mother: "Lala Khadija",
    sibling1: "Lbrhuch dyal khoia",
    sibling2: "Yassine",
};

console.log("Keys of the family:");
for (let key in family) {
    console.log(key);
}

console.log("Values of the family:");
for (let key in family) {
    console.log(family[key]);
}
