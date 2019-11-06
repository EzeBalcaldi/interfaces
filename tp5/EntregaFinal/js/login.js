function cargarRegistro(){
    window.location.assign('registro.html')
}
  let input = document.querySelector("#emailInput").addEventListener("keyup", validarMail)
  let botonRegistro = document.querySelector("#botonRegistro").addEventListener("click", cargarRegistro)

  let botonLogin = document.querySelector("#botonLogin").addEventListener("click", verificarInputs)
function validarMail()
{
let mail = document.querySelector("#emailInput");
	valueForm=mail.value;

	var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	if(valueForm.search(patron)==0)
	{
		mail.style.color="#008000";
		return;
	}

	mail.style.color="#f00";
}

  function verificarInputs(){
    let mail = document.querySelector("#emailInput").value;
    let pass = document.querySelector("#passInput").value;

    if(mail != "" && pass != ""){
      cargarHome();
    }else if (mail == ""){
      alert("Por favor, ingresa tu email")
    }
    else if (pass == ""){
      alert("Por favor, ingresa tu contraseña")
    }
    else{
      alert("Por favor, ingresa tus datos")
    }



  }

  function cargarHome(){
    window.location.assign('home.html')
}
