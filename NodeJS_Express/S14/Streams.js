var fs = require("fs");

var readStream = fs.createReadStream("Users.txt", "utf-8");
var writeStream = fs.createWriteStream("Details.txt");

//duplex
readStream.pipe(writeStream);
