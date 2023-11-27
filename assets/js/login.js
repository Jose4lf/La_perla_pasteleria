const $loginForm = document.getElementById("loginForm"),
$password = document.getElementById("password"),
$username = document.getElementById("username"),
$visible = document.getElementById("visible");

$loginForm.addEventListener("submit", (e) => {
e.preventDefault();


if ($username.value === "josealfredo" && $password.value === "123456789") {
  window.location.href = "pagina_principal.html";
} else {
  alert("Nombre de usuario o contraseña incorrectos");
}
});

$visible.addEventListener("change", () => {
$password.type = $visible.checked ? "text" : "password";
});