function f1() {
  var x = 100;
  console.log("hello");
  return x;
  console.log("10000000"); // it will never execute
}

var result = f1();

console.log(result);
