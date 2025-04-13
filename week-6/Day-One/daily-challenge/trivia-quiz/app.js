const express = require('express');
const app = express();
const PORT = 3000;
const quizRoutes = require('./routes/quiz');

app.use(express.json());
app.use('/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`Trivia Quiz running on http://localhost:${PORT}`);
});
