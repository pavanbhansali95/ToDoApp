const toDocontroller = {
    getToDoList: getToDoList,
    deleteItem: deleteItem,
    authenticateUser: authenticateUser,
    addItem: addItem
};
const Response = require('../../response');
const toDoService = require('../service/todo.service');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
function getToDoList(req, res){
    let response = new Response();
    let token = req.headers['access-token'];
    if(token){
        jwt.verify(token,config.secretKey,(err,decoded) => {
            if(err)
            {
                response.status.statusCode = 401;
                response.status.message = "Invalid token";
                res.status(401).send(response);

            } else {
                toDoService.getToDoList().then(result => {
                    response.data.result = result;
                    response.status.statusCode = 200;
                    response.status.message = "Item fecthed from database";
                    res.status(200).send(response);
                }).catch(err => {
                    response.status.statusCode = 500;
                    response.status.message = "Item cannot be fetched";
                    res.status(500).send(response);
                });
            }
        });
   
       
} else {
    response.status.statusCode = 401;
    response.status.message = "No token provided";
    res.status(401).send(response);
}
}
function deleteItem(req, res) {
    let response = new Response();
    let token = req.headers['access-token'];
    if(token){
        jwt.verify(token,config.secretKey,(err,decoded) => {
            if(err)
            {
                response.status.statusCode = 401;
                response.status.message = "Invalid token";
                res.status(401).send(response);

            } else {
                toDoService.deleteItem(req.params._id).
                then((result) => {
                    response.data.result = result;
                    response.status.statusCode = 200;
                    response.status.message = "Item deleted from the database";
                    res.status(200).json(response);
                }).catch((err) => {
                    response.status.statusCode = '500';
                    response.status.message = "Item not deleted from database";
                    res.status(500).json(response);
                });
            }});
        }
        else {
            response.status.statusCode = 401;
            response.status.message = "No token provided";
            res.status(401).send(response);
        }
    
}
function addItem(req, res) {
    let response = new Response();
    let token = req.headers['access-token'];
    if(token){
        jwt.verify(token,config.secretKey,(err,decoded) => {
            if(err)
            {
                response.status.statusCode = 401;
                response.status.message = "Invalid token";
                res.status(401).send(response);

            } else {
                let data = req.body;
                toDoService.addItem(data).
                then((result) => {
                    response.data.result = result;
                    response.status.statusCode = 200;
                    response.status.message = "Item added into the database";
                    res.status(200).json(response);
                }).catch((err) => {
                    response.status.statusCode = '500';
                    response.status.message = "Item not added from database";
                    res.status(500).json(response);
                });
            }});
        }
        else {
            response.status.statusCode = 401;
            response.status.message = "No token provided";
            res.status(401).send(response);
        }
    
}
function authenticateUser(req,res){
    let response = new Response();
    toDoService.authenticateUser(req.body).then(result => {
        response.data.result = result;
        response.status.statusCode = 200;
        res.status(200).send(response);
    }).catch(err => {
        response.status.statusCode = 500;
        response.status.message = "user details cannot be fetched";
        res.status(500).send(response);
    });
}
module.exports = toDocontroller;