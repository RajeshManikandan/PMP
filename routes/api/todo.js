const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Importing Model
const Todo = require('../../models/Todo');

//@Route    POST
//ACCESS    PUBLIC
//DESC      Route to add new Todo
router.post('/', (req, res) => {
    const { name } = req.body;
    // Create new Todo
    const newTodo = new Todo({
        name
    });

    newTodo
        .save()
        .then(todo => {
            res.json(todo);
        })
        .catch(err => res.status(404).send('dbInsertError : ' + err));
});

//@Route    GET
//ACCESS    PUBLIC
//DESC      list all todo list
router.get('/', (req, res) => {
    Todo.find()
        .then(todos => {
            if (todos === []) res.json('no todos found');
            else res.json(todos);
        })
        .catch(err => {
            res.status(404).send('fetchTodosError' + err);
        });
});

//@Route    GET
//ACCESS    PUBLIC
//DESC      delete todo
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Todo.findByIdAndDelete(id)
        .then(todo => res.json(todo))
        .catch(err => {
            res.status(404).send('deleteTodoError' + err);
        });
});

module.exports = router;
