function getUsers(callback) {
  console.log("All users data");
  callback("101");
}
function getOrdersInfo(userId, callback) {
  console.log("ORders Info");
  callback("Order56");
}

function getAllProductsOfTheOrder(orderId) {
  console.log("Products Info");
}

getUsers((userId) => {
  getOrdersInfo(userId, (orderId) => {
    getAllProductsOfTheOrder(orderId);
  });
});
