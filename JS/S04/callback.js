function f1(para) {
  console.log("f1 is called");
  console.log(para);
}

f1(function f2() {});

f1(function () {});

f1(() => {});
