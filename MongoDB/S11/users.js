var username = "Souabh Jain";

var gender = "male";

function displayDetails() {
  console.log(username, gender);
}

function changeName(newname) {
  username = newname;
  displayDetails();
}

function changeGender(newGender) {
  gender = newGender;
  displayDetails();
}

module.exports = { displayDetails, changeName, changeGender };
