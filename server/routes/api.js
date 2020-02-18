var express = require("express");
var router = express.Router();
const mongoose = require('mongoose')
const Register = require("../model/user");
const jwt = require("jsonwebtoken");

require("../model/crud");
const crud = mongoose.model("crud");
// build payload(register / login) > build token(payload, private key) > store it in local storage > pass the token in every
// request(inside request headers) > backend will access the headers and verify the token
router.use("/register", (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  };
  var register = new Register(data);
  register.save(err => {
    if (err) {
      console.log(err);
    }
    let payload = {
      subject: register._id
    };
    let token = jwt.sign(payload, "nani");
    res.status(200).json(token);
    console.log("registered successfully");
  });
});

router.use("/login", (req, res) => {
  //let data = req.body
  let userEmail = req.body.username;
  let pass = req.body.password;

  // let userEmail = 'varun';
  // let pass = '123qe';

  Register.findOne({
      username: userEmail
    },
    (err, user) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!user) {
        res.status(401).send("malakka");
      }
      if (pass != user.password) {
        res.status(406).send("what? no pass");
      }
      let payload = {
        subject: user._id
      };
      //user.email
      let token = jwt.sign(payload, "shsh");
      res.status(200).json(token);

      console.log("login successful");
    }
  );
});


router.use("/create", (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  };
  // const data = {
  //   username: 'varun',
  //   email: 'varun@gmail',
  //   phone: 911,
  //   password: '123'
  // };
  var creation = new crud(data);
  creation.save(err => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.status(200).json(creation)
  });
});

router.get("/get", (req, res) => {
  crud
    .find({})
    .then(data => {
      res.json(data, 200, {
        message: "done dana done"
      });
    })
    .catch(err => console.log(err));
});

router.put("/update/:id", (req, res) => {
  //should tell which object want to modify
  crud.findOne({
      _id: req.params.id
    })
    .then(profile => {
      //console.log(profile);
      //save the data
      profile.username = req.body.username;
      profile.email = req.body.email;
      profile.phone = req.body.phone;
      profile.password = req.body.password;

      //save new data to mongodb database
      profile
        .save()
        .then(profile => {
          res.status(200).json(profile)
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});


router.delete("/delete/:id", (req, res) => {
  crud.findByIdAndRemove({
      _id: req.params.id
    })
    .then(profile => {
      res.status(200).json(profile)
    })
    .catch(err => console.log(err));
});



function verify(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized access");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token == "null") {
    return res.status(401).send("unauthorized request");
  }
  let payload = jwt.verify(token, "shsh");
  if (!payload) {
    return res.status(401).send("unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

router.get("/home", verify, (req, res) => {
  let Data = [{
      username: "deek",
      email: "deek@gmail.com",
      phone: 913,
      password: "123qwe"
    },
    {
      username: "nada",
      email: "nada@gmail.com",
      phone: 913,
      password: "123qwe"
    },
    {
      username: "pada",
      email: "pada@gmail.com",
      phone: 913,
      password: "123qwe"
    },
    {
      username: "vada",
      email: "vada@gmail.com",
      phone: 913,
      password: "123qwe"
    }
  ];

  res.json(Data);
});

module.exports = router;