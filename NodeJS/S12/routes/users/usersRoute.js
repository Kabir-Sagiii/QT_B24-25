const express = require("express");
const User = require("../../model/userModel");

const route = express.Router();

route.get("/sign-in", (req, res) => {
  res.send("User Signed In");
});
//http://localhost:5000/users/sign-in

route.get("/get-all-users", (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});
//http://localhost:5000/users/get-all-users

route.post("/sign-up", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send({ ok: true, result: "User Created Successfully" });
    })
    .catch((error) => {
      res.send({ ok: false, result: error.message });
    });
});
//http://localhost:5000/users/sign-up

route.put("/update-user/:id", (req, res) => {
  var updatedData = req.body;
  var id = req.params.id;
  User.updateOne({ _id: id }, { $set: updatedData })
    .then(() => {
      res.send({ ok: true, result: "User Updated successfully" });
    })
    .catch((error) => {
      res.send({ ok: false, result: error.message });
    });
});
//http://localhost:5000/users/update-user/<user-id>

route.delete("/remove-user/:id", (req, res) => {
  var id = req.params.id;

  User.deleteOne({ _id: id })
    .then(() => {
      res.send({ ok: true, result: "User Removed successfully" });
    })
    .catch((error) => {
      res.send({ ok: false, result: error.message });
    });
});
//http://localhost:5000/users/remove-user/<user-id>

module.exports = route;
