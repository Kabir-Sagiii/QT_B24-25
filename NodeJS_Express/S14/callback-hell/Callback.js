function f1(callback) {
  console.log("f1 is called");
  callback();
}

function f2(callback) {
  console.log("f2 is called");
  callback();
}

function f3(callback) {
  console.log("f3 is called");
  callback();
}

function f4() {
  console.log("f4 is called");
}

f1(() => {
  f2(() => {
    f3(() => {
      //Callback hell
      f4();
    });
  });
});
