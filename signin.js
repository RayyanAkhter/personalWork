const getById = (id) => document.getElementById(id);

if (
  localStorage.getItem("currentUser") &&
  JSON.parse(localStorage.getItem("currentUser"))
) {
  window.location.href = "/dashboard.html";
}

const login = (event) => {
  event.preventDefault();
  const email = getById("email");
  const password = getById("password");
  const emailVal = email.value;
  const passwordVal = password.value;
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  const currentUser = users.find((user) => user.email === emailVal);
  if (!currentUser) return alert("couldn't find user");
  if (currentUser.password !== passwordVal) return alert("password mismatch");
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.href = "/profile.html";
};
const submitBtn = getById("button");
submitBtn.addEventListener("click", login);
