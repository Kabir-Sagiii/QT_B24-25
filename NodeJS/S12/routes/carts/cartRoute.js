const express = require("express");

const route = express.Router();

route.get("/get-cart-products", (req, res) => {});

route.post("/add-product-in-cart", (req, res) => {});

route.delete("/delete-product-cart", (req, res) => {});

module.exports = route;
