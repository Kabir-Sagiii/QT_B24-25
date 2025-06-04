//code to read or access the content of Profile.html and
// print in the terminalutf-

const fs = require("fs");

fs.readFile("Profile.html", "utf-8", (error, data) => {
  if (error) {
    console.log("error while reading the content");
  } else {
    console.log(data);
    //write the code send this response to client
  }
});
