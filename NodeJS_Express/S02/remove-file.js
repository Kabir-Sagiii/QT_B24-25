const fs = require("fs");

fs.unlink("mydocs.txt", (error) => {
  if (error) {
    console.log("Failed to delete the file");
  } else {
    console.log("Filed removed successfully");
  }
});
