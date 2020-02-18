const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CRUD = new Schema({
    username: String,
    email: String,
    phone: Number,
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("crud", CRUD);