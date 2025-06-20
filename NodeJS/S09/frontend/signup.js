function getUserData() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var data = { username, email, password };

  fetch("http://localhost:8989/signup", {
    method: "post",
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      if (data === "User Created Successfully") {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Account Created";
        setTimeout(() => {
          location.href = "login.html";
          document.getElementById("error").style.display = "none";
          document.getElementById("error").innerText =
            "  Failed to Create User";
        }, 2000);
      } else {
        document.getElementById("error").style.display = "block";
      }
    })
    .catch((error) => {
      console.log(error);
      console.log("Failed to Create User");
      document.getElementById("error").style.display = "block";
    });
}
