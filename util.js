const getById = (id) => document.getElementById(id);

if (!localStorage.getItem("currentUser")) {
  window.location.href = "/signIn.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "/signIn.html";
}
