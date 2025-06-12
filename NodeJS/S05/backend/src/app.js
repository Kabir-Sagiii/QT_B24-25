const http = require("http");
const fs = require("fs");
const port = 7676;

const server = http.createServer((req, res) => {
  if (req.url === "/signup") {
    var userdata = { email: "s2@gmail.com", password: 12345, username: "s2" };
    fs.readFile("Data.json", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to read current data");
      } else {
        var data = JSON.parse(data);
        data.users.push(userdata);
        data = JSON.stringify(data);
        fs.writeFile("Data.json", data, (error) => {
          if (error) {
            res.end("Failed to create USer");
          } else {
            res.end("User Created");
          }
        });
      }
    });
  } else if (req.url === "/") {
    fs.readFile("signup.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to Get Signup Form");
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("Wrong Page Requested");
  }
});

server.listen(port, () => {
  console.log("Server Started");
});
