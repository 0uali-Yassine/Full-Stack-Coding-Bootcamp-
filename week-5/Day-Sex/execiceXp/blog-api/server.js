const express = require('express');
const app = express();

let posts = [
    { id: 1, title: 'First Post', content: 'This is my first post.' },
    { id: 2, title: 'Second Post', content: 'Here is another post.' }
  ];

app.get('/allpost',(res,res)=>{
    res.status(200).json(posts);
})

app.get(('/post/:id'),(req,res)=>{
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
})

app.post('/post', (req, res) => {
   const { title, content } = req.body;
   const updatedPost = {
    id:posts.length + 1,
    title,
    content
   }

    posts.push(updatedPost);
    res.status(201).json(updatedPost);
})

app.put('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex] = { id: postId, title, content };
        res.status(200).json(posts[postIndex]);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
})

app.delete('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
})

app.use((req,res)=>{
    res.status(404).json({message:"404"})
})

app.listen(3000);