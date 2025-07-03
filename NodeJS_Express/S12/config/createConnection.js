const mongoose = require("mongoose");
const mongodburl = "mongodb://localhost:27017/qtfullstack";
function createConnection() {
  //Logic to connect with Mongodb Server and Database

  mongoose
    .connect(mongodburl)
    .then(() => {
      console.log("Connected with Server and Database");
    })
    .catch((error) => {
      console.log("Failed to Connect With Mongodb Server and Database");
    });
}

module.exports = createConnection;
