const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});
const todoUserSchema = mongoose.Schema({
    users: [userSchema]
});
module.exports = mongoose.model('users', todoUserSchema);