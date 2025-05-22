var user = {
  name: "Vaibhav",
  gender: "male",
  phone: 9999999999999,
  email: "vaibhav@gmail.com",
  city: "hyd",
};

console.log(user);

delete user.phone;
delete user["city"];

console.log(user);
