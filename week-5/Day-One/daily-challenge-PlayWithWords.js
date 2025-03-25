// Daily Challenge

// Exercise 1: makeAllCaps() & sortWords()

function makeAllCaps(wordsArray) {
    return new Promise((resolve, reject) => {
        if (wordsArray.every(word => typeof word === "string")) {
            resolve(wordsArray.map(word => word.toUpperCase()));
        } else {
            reject("Error: The array contains non-string elements.");
        }
    });
}

function sortWords(uppercasedArray) {
    return new Promise((resolve, reject) => {
        if (uppercasedArray.length > 4) {
            resolve(uppercasedArray.sort());
        } else {
            reject("Error: Array must have more than 4 words.");
        }
    });
}

// test 
makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));



// 2nd

const morse = `{
    "0": "-----", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.", "a": ".-", "b": "-...",
    "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
    "g": "--.", "h": "....", "i": "..", "j": ".---",
    "k": "-.-", "l": ".-..", "m": "--", "n": "-.",
    "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-",
    "w": ".--", "x": "-..-", "y": "-.--", "z": "--..",
    ".": ".-.-.-", ",": "--..--", "?": "..--..",
    "!": "-.-.--", "-": "-....-", "/": "-..-.",
    "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
  }`;

function toJs() {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
            reject("Error: Morse object is empty.");
        } else {
            resolve(morseJS);
        }
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or sentence:").toLowerCase();
        const morseTranslation = [];

        for (const char of userInput) {
            if (morseJS[char]) {
                morseTranslation.push(morseJS[char]);
            } else {
                reject(`Error: Character "${char}" not found in Morse code.`);
                return;
            }
        }
        resolve(morseTranslation);
    });
}

function joinWords(morseTranslation) {
    document.body.innerHTML = morseTranslation.join("<br>");
}

toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));
