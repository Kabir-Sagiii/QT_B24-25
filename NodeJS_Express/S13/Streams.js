const fs = require("fs");

const readstream = fs.createReadStream("users.html", "utf-8");
const writestream = fs.createWriteStream("destination.html");
var count = 0;
readstream.on("data", (chunk) => {
  count++;
  writestream.write(chunk);
  console.log(count);
});
