let mongoose = require('mongoose');

const schema = new mongoose.Schema({
// user: {
//     required: true,
//     type: String
// },
items: {
    required: true,
    type: Array
 },
price: {
    required: true,
    type: Number
},
coords: {
    required: true,
    type: Object
},
});

module.exports =  schema;