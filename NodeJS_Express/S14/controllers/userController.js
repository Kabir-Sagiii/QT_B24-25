const User = require("../model/userModel");

function authUser(res, logindata) {
  User.find()
    .then((data) => {
      const result = data.find((user) => {
        return (
          user.email == logindata.email && user.password == logindata.password
        );
      });

      if (result) {
        res.send("User is LoggedIn");
      } else {
        res.send("Invalid User, No User Exist with this Credential");
      }
    })
    .catch((error) => {
      res.send(error.message);
    });
}

module.exports = authUser;
