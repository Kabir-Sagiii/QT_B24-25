function getProducts(x) {
  console.log("getProducts is called");
  console.log(x);
}

getProducts(function f2() {
  console.log("f2 is called");
});

function f1() {
  console.log("f1 is called");
}

getProducts(f1);

getProducts(function () {
  console.log("Anonymous Function");
});

getProducts(() => {
  console.log("Arrow Function");
});
