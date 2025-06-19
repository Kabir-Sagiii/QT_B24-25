function getUserData() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var data = { username, email, password };

  fetch("http://localhost:8989", {
    method: "post",
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      alert("User Created");
      setTimeout(() => {
        location.href = "login.html";
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
      console.log("Failed to Create User");
    });
}
