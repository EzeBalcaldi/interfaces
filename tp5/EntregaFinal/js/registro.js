let input = document.querySelector("#emailInput").addEventListener("keyup", validarMail);
let contraseña = document.querySelector("#inputContraseña").addEventListener("keyup", validarContraseña);
let botonPlanes = document.querySelector("#botonPlanes").addEventListener("click", cargarPlanes)

let mensajeError = document.querySelector("#emailHelp");
let mensajeErrorContraseña = document.querySelector("#passwordHelp");
function cargarPlanes(){
    window.location.assign('planes.html')
}

function validarMail()
{
let mail = document.querySelector("#emailInput");
valueForm=mail.value;

var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
if(valueForm.search(patron)==0)
{
  mail.style.color="#008000";
  mensajeError.innerHTML = "";
  mensajeError.style.color = "green";

  return;
}

mail.style.color="#f00";
mensajeError.style.visibility = "display";
mensajeError.innerHTML = "Email erroneo";

}

function validarContraseña(){
  let contraseña = document.querySelector("#inputContraseña");
  let textLength = contraseña.value.length;
  if(textLength < 6){
    mensajeErrorContraseña.innerHTML = "La contraseña debe tener más de seis dígitos"
  }
  else{
    mensajeErrorContraseña.innerHTML = "";

  }
}
