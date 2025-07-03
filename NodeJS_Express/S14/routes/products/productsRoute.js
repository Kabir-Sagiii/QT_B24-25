const express = require("express");

const route = express.Router();
const checkUserToken = require("../../middlewares/productMiddleware");
route.get(
  "/get-products",
  function (req, res, next) {
    console.log("middleware-1");
    next();
  },
  function (req, res, next) {
    console.log("middleware-2");
    next();
  },
  (req, res) => {
    console.log("Router Handler");
    res.send("Get All Products");
  }
);
//http://localhost:5000/products/get-products

route.post("/create-products", checkUserToken, (req, res) => {
  res.send("Product Created");
});
//http://localhost:5000/products/create-products

route.put("/update-product", (req, res) => {});

route.delete("/remove-product", (req, res) => {});

module.exports = route;
