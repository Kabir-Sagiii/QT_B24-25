const fs = require("fs");

fs.rename("document.txt", "mydocs.txt", (error) => {
  if (error) {
    console.log("Failed to rename variable");
  } else {
    console.log("File Renamed Successfully");
  }
});
