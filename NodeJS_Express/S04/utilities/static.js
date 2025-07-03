const fs = require("fs");

function getStaticFileContent(fileName, res) {
  //Read the content from the file

  fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) {
      res.end("Something went wrong");
    } else {
      res.end(data);
    }
  });
}

module.exports = getStaticFileContent;
