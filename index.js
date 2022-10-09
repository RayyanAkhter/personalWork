const getById = (id) => document.getElementById(id);
const fullName = getById("fullName");
const email = getById("email");
const password = getById("password");
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const submitData = (e) => {
  e.preventDefault();
  if (fullName.value.length < 3) {
    return alert("Please enter a full name");
  }
  const isDuplicate = duplicateEmail(email.value);
  if (isDuplicate) return alert("Account already exists with this email");
  if (!password.value.match(passwordRegex)) {
    return alert(
      "pasword should contains minimum eight characters, at least one letter and one number: "
    );
  }
  storeData(fullName.value, email.value, password.value);
  clearScreen();
};

const clearScreen = () => {
  fullName.value = "";
  email.value = "";
  password.value = "";
};

const storeData = (fullName, email, password) => {
  let arr = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  let obj = {};
  if (fullName) obj.fullName = fullName;
  if (email) obj.email = email;
  if (password) obj.password = password;
  arr.push(obj);
  localStorage.setItem("users", JSON.stringify(arr));
};
function duplicateEmail(email) {
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : false;
  if (!users) return false;
  const obj = users.find((user) => user.email === email);
  if (obj) return true;
  return false;
}
