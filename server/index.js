const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 420;

const routes = require("./routes/api");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");
const url =
  "mongodb+srv://varun:1234@auth-ycs8u.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(
  url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  err => {
    if (err) throw err;
    console.log("database connected");
  }
);

app.get("/", (req, res) => {
  res.send("yada");
});


app.use(routes);

app.listen(port, () => {
  console.log("this hit, that ice cold " + port);
});