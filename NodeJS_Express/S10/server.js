//import express package
const express = require("express");

//initializing the express package
const app = express();

//Configuring the Port
const port = 5000;

// app.get(routePath,routerHandler);

//get endpoint or get api
app.get("/text", (req, res) => {
  console.log("Request Received");
  res.send("Request Received and It is Processed");
});
// url : http://localhost:5000/text

app.get("/htmltag", (req, res) => {
  console.log("Request Received for html tag");
  res.send("<h2>This is html tag response</h2>");
});

// url : http://localhost:5000/htmltag

app.get("/json", (req, res) => {
  console.log("Request Received for json data");
  res.send({ ok: true, result: "Everything working fine" });
});

// url : http://localhost:5000/json

// app.post();

// app.put();

// app.delete();

app.listen(port, () => {
  console.log("Server Started");
});
//server is created and started
