const http = require("http");
const fs = require("fs");
const app = http.createServer((req, res) => {
  fs.writeFile("hello.java", (error) => {
    if (error) {
      console.log("failed to create file");
    } else {
      console.log("File is created");
    }
  });
});

app.listen(7878, () => {
  console.log("Server Started");
});
