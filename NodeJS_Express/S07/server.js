const http = require("http");

const server = http.createServer((req, res) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
  //   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  let body = "";

  req.on("data", (chunk) => {
    body = chunk.toString();
    // console.log(chunk);
    // body += chunk.toString(); // convert Buffer to string
    console.log(body);
  });

  req.on("end", () => {
    console.log("Received data:", body);

    res.end("Request is received and will process it");
  });
});

server.listen(8989, () => {
  console.log("Server started on port 8989");
});
