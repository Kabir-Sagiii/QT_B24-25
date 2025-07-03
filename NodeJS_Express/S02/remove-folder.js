const fs = require("fs");

fs.rmdir("css", (error) => {
  if (error) {
    console.log("Folder failed to remove");
    console.log(error);
  } else {
    console.log("Folder Removed");
  }
});
