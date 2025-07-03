const express = require("express");

const route = express.Router();

route.get("/get-products", (req, res) => {
  res.send("Get All Products");
});
//http://localhost:5000/products/get-products

route.post("/create-products", (req, res) => {
  res.send("Product Created");
});
//http://localhost:5000/products/create-products

route.put("/update-product", (req, res) => {});

route.delete("/remove-product", (req, res) => {});

module.exports = route;
