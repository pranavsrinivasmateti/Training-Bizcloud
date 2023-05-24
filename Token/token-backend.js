const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Satyapranav333",
  database: "react",
});
con.connect((err) => {
  if (err) throw err;
  console.log("Connection Success");
});

function tokenVerify(req, res, next) {
    // const bearerHeader = req.headers["authorization"];
    console.log(req.headers)
    const bearerHeader=req.headers.token
    console.log(bearerHeader)
    if (typeof bearerHeader !== "undefined") {
    //   const bearerToken = bearerHeader.split(" ")[1];
    //   req.token = bearerToken;
      jwt.verify(bearerHeader, "secretkey", (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          next();
        }
      });
    } else {
      res.sendStatus(403);
    }
}



app.post("/logincheck", (req, res) => {
    let id=req.body.id
    let username=req.body.username
    let passwd=req.body.passwd

    const user = {
        id:id,
        username:username,
        passwd:passwd

    };
    jwt.sign({ user: user }, "secretkey", (err, token) => {
      res.json({token,});
    });
  });
  
  
  app.post("/getdata", tokenVerify, (req, resp) => {
    resp.send("Data from getdata");
  });
  

app.listen(6000, () => {
    console.log("listening to 6000");
  });
  