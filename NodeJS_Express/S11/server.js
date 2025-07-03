const express = require("express");
const app = express();
const port = 5000;

app.get("/getUser", (req, res) => {
  res.send({ name: "s1", city: "hyd", gender: "male" });
});
//http://localhost:5000/getUser
//method type : GET

app.post("/create-user", (req, res) => {
  res.send("User Created");
});
//http://localhost:5000/create-user
//method type : POST

app.put("/update-user", (req, res) => {
  res.send("User updated");
});
//http://localhost:5000/update-user
//Method type : Put

app.delete("/delete-user", (req, res) => {
  res.send({ ok: true, result: "User Removed" });
});
//http://localhost:5000/delete-user
//Method: Delete

app.listen(port, () => {
  console.log("Server is Started");
});
