const express = require('express');
const app = express.Router();
const toDoController = require('../controller/todo.controller');
app.get('/getToDoItems', toDoController.getToDoList);
app.post('/authenticate', toDoController.authenticateUser);
app.delete('/deleteItem/:_id', toDoController.deleteItem);
app.post('/addItem', toDoController.addItem);
module.exports = app;
