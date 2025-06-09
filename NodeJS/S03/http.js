const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  //   res.end("sagar");
  fs.readFile("login.html", "utf-8", (error, data) => {
    if (error) {
      res.end("Failed to send login file code");
    } else {
      res.end(data);
    }
  });
});
//http://localhost:4545

server.listen(4545, () => {
  console.log("server is started");
});
