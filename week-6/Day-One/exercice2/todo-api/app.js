const express = require('express');
const app = express();
const PORT = 3000;

const todoRoutes = require('./routes/todos');

app.use(express.json()); 

app.use('/todos', todoRoutes);



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})