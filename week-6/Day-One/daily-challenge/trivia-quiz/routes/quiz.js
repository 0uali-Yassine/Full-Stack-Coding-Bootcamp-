const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }
  res.json({
    question: triviaQuestions[currentQuestionIndex].question
  });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer?.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    res.json({ message: "Correct!" });
  } else {
    res.json({ message: `Incorrect! Correct answer is ${correctAnswer}` });
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      nextQuestion: triviaQuestions[currentQuestionIndex].question
    });
  } else {
    res.redirect('/quiz/score');
  }
});

router.get('/score', (req, res) => {
  res.json({ message: `Your final score is ${score}/${triviaQuestions.length}` });

  currentQuestionIndex = 0;
  score = 0;
});

module.exports = router;
