var user = {
  name: "sagar",
  id: 101,
  getCity: function (x, y) {
    console.log("Mumbai", x, y);
  },
  display: () => {
    console.log("display");
    return "display is returned";
  },
  print: function f1() {
    console.log("f1 is called");
  },
};

user.getCity(10, 20);

var data = user.display();
console.log(data);

user.print();
