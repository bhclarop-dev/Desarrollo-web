

document.getElementById("btnAlerta").addEventListener("click", function () {
  alert("Hola ");
});

document.getElementById("btnAbrirModal").addEventListener("click", function (e) {
  e.preventDefault(); 

  var modal = new bootstrap.Modal(document.getElementById("modalContacto"));
  modal.show();
});

document.getElementById("btnIniciarSesion").addEventListener("click", function () {


  var email    = document.getElementById("inputEmail").value.trim();
  var password = document.getElementById("inputPassword").value.trim();

  var mensajeError = document.getElementById("mensajeError");
  var mensajeExito = document.getElementById("mensajeExito");

  mensajeError.classList.add("d-none");
  mensajeExito.classList.add("d-none");

 
  if (email === "" || password === "" || password.length < 6) {
    
    mensajeError.classList.remove("d-none");
  } else {
    mensajeExito.classList.remove("d-none");

    
    setTimeout(function () {
      document.getElementById("inputEmail").value    = "";
      document.getElementById("inputPassword").value = "";
      mensajeExito.classList.add("d-none");
    }, 2000);
  }
});
