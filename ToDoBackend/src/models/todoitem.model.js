const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    itemid: {
        type: String
    }
});
const toDoSchema = mongoose.Schema({
    items: [ itemSchema
]

});

module.exports = mongoose.model('items', toDoSchema);
