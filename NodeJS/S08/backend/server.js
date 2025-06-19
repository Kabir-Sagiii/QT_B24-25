const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

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
});

server.listen(8989, () => {
  console.log("Server Started");
});

//http://localhost:8989
