var express = require("express");
var server = express();
var bodyParser = require("body-parser");

server.use(express.static(__dirname+"/Final"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

var DB = require("nedb-promises");
var ProductsDB = DB.create(__dirname+"/Final/products.db");

// ProductsDB.insert([
//   { imgSrc: "images/t36.jpg", name: "CHOCOLATE", price: "NTD $300" },
//   { imgSrc: "images/t37.jpg", name: "NAIL STICKER", price: "NTD $400" },
//   { imgSrc: "images/t38.jpg", name: "HAT", price: "NTD $250" },
//   { imgSrc: "images/t39.jpg", name: "CUSHION FOUNDATION", price: "NTD $400" },
//   { imgSrc: "images/t40.jpg", name: "KEYCHAIN", price: "NTD $150" },
//   { imgSrc: "images/t42.jpg", name: "MAGNET", price: "NTD $150" },
//   { imgSrc: "images/t43.jpg", name: "PHONE HOLDER", price: "NTD $400" },
//   { imgSrc: "images/t44.jpg", name: "MOBILITY CARD", price: "NTD $200" },
//   { imgSrc: "images/t45.png", name: "REUSABLE BAG", price: "NTD $250" }
// ]);



server.get("/products", (req, res) => {
  ProductsDB.find({})
    .then(results => {
      if (results.length > 0) {
        res.json(results);
      } else {
        res.status(404).send("No products found.");
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error retrieving products.");
    });
});

server.listen(80, () => {
  console.log("Server is running at port 80.");
});
