const express = require('express');
const router = express.Router();

let books = [];

router.get('/', (req, res) => {
  if (books.length === 0) {
    res.json({ message: 'No books available.' });
  } else {
    res.json(books); 
  }
});

router.post('/add', (req, res) => {
  const { id, title, author } = req.body;
  const newBook = { id, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found.' });
  }

  book.title = title;
  book.author = author;
  res.json(book);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: 'Book deleted successfully.' });
});

module.exports = router;
