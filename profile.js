const button = getById("logoutBtn");

button.addEventListener("click", logout);

const spanName = getById("name");
function initalize() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { fullName } = currentUser;
  spanName.innerText = fullName;
}
initalize();
