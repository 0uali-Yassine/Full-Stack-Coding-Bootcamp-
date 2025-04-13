const express = require('express');
const app = express();
const PORT = 3000;

const bookRoutes = require('./routes/books');

app.use(express.json());

app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
