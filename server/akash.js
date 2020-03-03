const express = require('express');
const body = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

const students = require('./model/students')

const url =
    "mongodb+srv://varun:1234@auth-ycs8u.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err
    console.log('database connected')
})




let app = express();

const port = process.env.PORT || 3000;


app.use(cors());
app.use(body.json());


app.use('/post', (req, res) => {
    const data = {
        name: req.body.name,
        age: req.body.age,
        designation: req.body.designation
    }
    let info = new students(data);
    info.save(err => {
        if (err) throw err;
        res.json({
            info
        })
    })
})

app.listen(port, (err) => {
    if (err) throw err
    console.log('port at' + port)
});