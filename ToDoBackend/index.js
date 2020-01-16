const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./src/config/config');
const MongoClient = require('mongodb').MongoClient;

// const client = new MongoClient(config.mongoUrl, { useNewUrlParser: true });
// client.connect(err => {
   
//   const collection = client.db("todolist").collection("items");
//   console.log(collection)
//   // perform actions on the collection object
//   client.close();
// });


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUrl, { useNewUrlParser: true }).then((clinet) => { console.log('connected')}).catch(error => console.error('error', error));
const toDoRouter = require('./src/routes/todo.route');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todo', toDoRouter);
app.listen(config.port, ()=> {
    console.log('app running');
});