const Items = require('../models/todoitem.model');
const Users = require('../models/todouser.model');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const toDoDao = {
    getToDoList: getToDoList,
    checkUserExists: checkUserExists,
    deleteItem: deleteItem,
    addItem: addItem
};
function getToDoList(req, res) {
    return Items.find({});
}
function deleteItem(id) {
    return Items.update({},{"$pull":{"items":{"itemid": id}}});
}
function addItem(data) {
    return Items.update({},{"$push":{"items":{"itemid": data.itemid,"title":data.title,"description": data.description}}});
}
function checkUserExists(data) {
    const username = data.username;
    const password = data.password;
    console.log(username);
    return new Promise((resolve, reject) => {
        Users.findOne({ "users.username": username }).then(user => {
            if (user) {
                const users = user.users;
                const selectedUser = users.filter(user => user.username === username)[0];
                console.log('selected',selectedUser);
                if (selectedUser.password !== password) {
                    resolve("invalid password");
                    console.log("invalid passwword");
                } else {
                    const payload = {
                        check: true
                    };

                    var token = jwt.sign(payload,config.secretKey , {
                        expiresIn: 1440
                    });
                    resolve({
                        message: "user autenticated",
                        token: token
                    });
                }
            } else {
                resolve("No user found");
            }
        }).catch(err => {
            console.log("inside catch todo dao");
            reject("Connection eroor");
        });
    });


}
module.exports = toDoDao;