async function loginUser() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var data = { email, password };

  try {
    var res = await fetch("http://localhost:8989/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    var data = await res.text();

    if (data === "Invalid User") {
      document.getElementById("error").style.display = "block";
    } else {
      location.href = "home.html";
    }
  } catch (error) {
    console.log(error);
    document.getElementById("error").style.display = "block";
  }
}
