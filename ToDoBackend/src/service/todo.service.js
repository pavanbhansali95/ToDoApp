
const itemDao = require('../dao/todo.dao');
const toDoService = {
    getToDoList: getToDoList,
    authenticateUser: authenticateUser,
    deleteItem: deleteItem,
    addItem: addItem
};
function getToDoList(){
    return new Promise((resolve,reject) => {
        itemDao.getToDoList().then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
}
function deleteItem(id) {
    return new Promise((resolve, reject) => {
        itemDao.deleteItem(id).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}
function addItem(data) {
    return new Promise((resolve, reject) => {
        itemDao.addItem(data).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}
function authenticateUser(data){
    return new Promise((resolve,reject) => {
        itemDao.checkUserExists(data).then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    });
}
module.exports = toDoService;