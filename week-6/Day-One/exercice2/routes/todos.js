const express = require('express');
const router = express.Router();

let todos = []; 

// get
router.get('/',(req,res)=>{
    if(todos.length === 0){
        res.json({message:'No todo are listed'});
    }else{
        res.json(todos);// why not use .json({todos}) use {}
    }
})

// add
router.post('/add',(req,res)=>{
    const {_id,title,complete} = req.body;

    const newTod = {_id,title,complete};

    todos.push(newTod);

    res.status(200).json(newTod);

})
// edite

router.put('/:id',(req,res)=>{
    const _id = parseInt(req.params.id);
    const {title,complete} = req.body;
    const findTodo = todos.find(todo => todo._id == _id);
    if (!findTodo) res.status(404).json({message:'todo not found'});

    findTodo.title = title;
    findTodo.complete = complete;
    res.json(findTodo);

})
// delete

router.delete('/:id',(req,res)=>{
    const _id = parseInt(req.params.id);
    todos = todos.filter(todo => todo._id !== _id);
    res.json({ message: 'Todo deleted' });

})

module.exports = router;