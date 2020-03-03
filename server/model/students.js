const mongoose = require('mongoose')

const elmeasure = mongoose.Schema;


const employees = new elmeasure({
    name: String,
    age: Number,
    designation: String
});


module.exports = mongoose.model('satan', employees);