const express = require('express');
const app = express()
const { fetchPosts } = require('./data/dataService');

app.use(express.json());

app.get('/api/posts', async(req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('Posts successfully fetched and sent');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

})

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});