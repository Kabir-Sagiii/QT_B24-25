const express = require("express");
const app = express();
const UserRoute = require("./routes/users/usersRoute.js");
const ProductRoute = require("./routes/products/productsRoute.js");
const port = 5000;

//middleware
app.use("/users", UserRoute);

app.use("/products", ProductRoute);

app.listen(port, () => {
  console.log("Server is Started");
});
