const http = require("http");
const fs = require("fs");
const port = 8989;
const server = http.createServer((req, res) => {
  if (req.url === "/create-user") {
    var newuser = { username: "s2", password: 12345 };
    //access the data from Data.json
    fs.readFile("Data.json", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to Register User");
      } else {
        //convert file data to pure object
        var userObj = JSON.parse(data);
        userObj.users.push(newuser);
        userObj = JSON.stringify(userObj);

        fs.writeFile("Data.json", userObj, (error) => {
          if (error) {
            res.end("Failed to Register User");
          } else {
            res.end("User Created Account Successfully");
          }
        });
      }
    });
  } else if (req.url === "/signup") {
    fs.readFile("signup.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to get Sign Up Page");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/login") {
    fs.readFile("signin.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to get Sign In Page");
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("Invalid Request");
  }
});

server.listen(port, () => {
  console.log("Server is started");
});
