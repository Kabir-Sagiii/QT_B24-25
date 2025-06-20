const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/login") {
    //login logic
    req.on("data", (data) => {
      var logindata = JSON.parse(data);
      fs.readFile("userdata.json", "utf-8", (error, data) => {
        if (error) {
          res.end("Failed to read data from file while logging in");
        } else {
          var fileData = JSON.parse(data);
          var user = fileData.users.find((element) => {
            return (
              element.email === logindata.email &&
              element.password === logindata.password
            );
          });
          if (user) {
            res.end("User Exit");
          } else {
            res.end("Invalid User");
          }
        }
      });
    });
  } else if (req.url === "/signup") {
    req.on("data", (data) => {
      var data = JSON.parse(data);
      fs.readFile("userdata.json", "utf-8", (error, filedata) => {
        if (error) {
          console.log(error);
          res.end("Error while  access data from  file to Create User");
        } else {
          var newdata = JSON.parse(filedata);

          newdata.users.push(data);
          fs.writeFile("userdata.json", JSON.stringify(newdata), (error) => {
            if (error) {
              res.end(
                "Error while inserting newuser data into the file to Create User"
              );
            } else {
              res.end("User Created Successfully");
            }
          });
        }
      });
    });
  } else {
    res.end("Invalid Request");
  }
});

server.listen(8989, () => {
  console.log("Server Started");
});

//http://localhost:8989
