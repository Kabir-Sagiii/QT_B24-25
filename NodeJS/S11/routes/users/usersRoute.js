const express = require("express");

const route = express.Router();

route.get("/sign-in", (req, res) => {
  res.send("User Signed In");
});
//http://localhost:5000/users/sign-in

route.post("/sign-up", (req, res) => {
  res.send("User Created Account");
});
//http://localhost:5000/users/sign-up

route.put("/update-user", (req, res) => {
  res.send("User Updated the Data");
});
//http://localhost:5000/users/update-user

route.delete("/remove-user", (req, res) => {
  res.send("User Removed from Database");
});
//http://localhost:5000/users/remove-user

module.exports = route;
