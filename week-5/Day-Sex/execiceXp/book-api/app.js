const express = require('express');
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear', publishedYear: 2018 },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988 },
    { id: 3, title: '1984', author: 'George Orwell', publishedYear: 1949 }
  ];

app.listen(5000,()=>{
    console.log("Book API running at http://localhost:5000");
});

app.get('/api/books',(req,res)=>{
    res.status(200).json(books);
})

app.get('/api/books/:bookId',(req,res)=>{
    const bookId = parseInt(req.params.bookId)
    const findBook = books.find((book)=> book.id == bookId);
    if(!findBook){
        res.status(404).json({ message: 'Book not found' });
    }else{
        res.status(200).json(findBook)
    }
})

app.post('/api/books',(req,res)=>{
    const {title,author,publishedYear} = req.body;
    const addBook ={
        id:books.length+1,
        title,
        author,
        publishedYear
    }

    books.push(addBook)
    res.status(201).json(addBook)
})