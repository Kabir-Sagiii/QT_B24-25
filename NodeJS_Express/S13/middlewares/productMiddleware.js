function checkUserToken(req, res, next) {
  //------
  console.log("middleware-1");
  next();
}

module.exports = checkUserToken;
