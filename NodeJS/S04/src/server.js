const http = require("http");
const getStaticFileContent = require("../utilities/static.js");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    getStaticFileContent("home.html", res);
  } else if (req.url === "/profile") {
    getStaticFileContent("profile.html", res);
  } else if (req.url === "/products") {
    getStaticFileContent("products.html", res);
  } else if (req.url === "/contactus") {
    getStaticFileContent("contactus.html", res);
  } else {
    getStaticFileContent("pagenotfound.html", res);
  }
});
7979;

server.listen(7979, () => {
  console.log("Server Started");
});

//http://localhost:7979/home
//http://localhost:7979/profile
//http://localhost:7979/contactus
//http://localhost:7979/products
