const fs = require("fs");

fs.writeFile("home.css", "h2{color:red}", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file Created");
  }
});
