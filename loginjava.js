// Función que muestra una alerta indicando la funcionalidad de recuperar contraseña
function forgotPassword() {
    alert("Funcionalidad de recuperar contraseña");
}

// Función que muestra el formulario de creación de cuenta y oculta el formulario de inicio de sesión
function showCreateAccountForm() {
    document.getElementById("createAccountForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

// Función que oculta el formulario de creación de cuenta y muestra el formulario de inicio de sesión
function goToLoginForm() {
    document.getElementById("createAccountForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Función que alterna la visibilidad de la contraseña entre texto y contraseña
function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.textContent = "Ocultar ";
    } else {
        passwordField.type = "password";
        toggleBtn.textContent = "Mostrar ";
    }
}

// Manejo del evento de envío del formulario de inicio de sesión (por ahora evita el envío)
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe (por ahora)
    // Aquí puedes agregar el código para manejar la autenticación con JavaScript
});

// Manejo del evento de envío del formulario de creación de cuenta (por ahora evita el envío)
document.getElementById("createAccountForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe (por ahora)
    // Aquí puedes agregar el código para manejar la creación de una nueva cuenta con JavaScript
    goToLoginForm(); // Luego de procesar el formulario, vuelve al formulario de inicio de sesión
});
