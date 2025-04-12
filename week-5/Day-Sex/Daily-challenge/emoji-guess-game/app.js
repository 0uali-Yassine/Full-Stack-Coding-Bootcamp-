const express = require('express');
const path = require('path');
const emojis = require('./data/emojis');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let score = 0;

function getQuestion() {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    let options = [correct.name];
    while (options.length < 4) {
        let random = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(random)) options.push(random);
    }
    options = options.sort(() => Math.random() - 0.5);
    return { correct, options };
}

let currentQuestion = getQuestion();

app.get('/', (req, res) => {
    res.render('game', { question: currentQuestion, score });
});

app.post('/guess', (req, res) => {
    const guess = req.body.choice;
    const correctAnswer = currentQuestion.correct.name;

    if (guess === correctAnswer) score++;
    else score = 0;

    currentQuestion = getQuestion();
    res.redirect('/');
});

app.listen(5000, () => console.log('🎮 Game running on http://localhost:5000'));
