const fs = require("fs");

fs.mkdir("react", (error) => {
  if (error) {
    console.log(error, "Failed to create Folder");
  } else {
    console.log("Folder is Created");
  }
});
