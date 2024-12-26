var express = require("express");
var server = express();
var bodyParser = require("body-parser");

server.use(express.static(__dirname + "/images"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var DB = require("nedb-promises");
var PajamasDB = DB.create(__dirname + "/pajamas.db");

PajamasDB.insert([
  { imgSrc: "images/t12.jpg", hoverImg: "images/t32.jpg", heading: "Pajama 1", price: "2000 NTD" },
  { imgSrc: "images/t13.jpg", hoverImg: "images/t48.jpg", heading: "Pajama 2", price: "2000 NTD" },
  { imgSrc: "images/t14.jpg", hoverImg: "images/t47.jpg", heading: "Pajama 3", price: "2000 NTD" },
  { imgSrc: "images/t17.jpg", hoverImg: "images/t35.jpg", heading: "Pajama 4", price: "2000 NTD" }
]);

server.get("/pajamas", (req, res) => {
  PajamasDB.find({}).then(results => {
    if (results) {
      res.send(results);
    } else {
      res.send("Error!");
    }
  });
});

server.listen(80, () => {
  console.log("Server is running at port 80.");
});
