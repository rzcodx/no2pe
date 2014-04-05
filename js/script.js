var errorNombre = false;
var errorEmail = false;
var errorMensaje = false;


function validarNombres() {
	var txtNombre = document.getElementById("nombre");
	var spnNombre = document.getElementById('errorNombre')
	var txtNombreLength = txtNombre.value.length;	
	if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)){
		event.returnValue = false;
	}
	if ((event.keyCode == 209) || (event.keyCode == 241) || (event.keyCode == 225) || (event.keyCode == 233) || (event.keyCode == 237) || (event.keyCode == 243) || (event.keyCode == 250) || (event.keyCode == 193) || (event.keyCode == 201) || (event.keyCode == 205) || (event.keyCode == 211) || (event.keyCode == 218)){
		event.returnValue = true;
	}
	if (txtNombreLength>=100){
		event.returnValue = false;
	}
	txtNombre.value = txtNombre.value.substring(0,100);
}

function validarNombres2(){
	var txtNombre = document.getElementById("nombre");
	if (txtNombre.value.length > 100){
		txtNombre.value = txtNombre.value.substring(0,100);
	}	
}

function nombresLength(){
	var txtNombre = document.getElementById("nombre");
	var spnNombre = document.getElementById('errorNombre')
	var txtNombreLength = txtNombre.value.length;
	if (txtNombreLength<10){
		spnNombre.innerHTML = "Su nombre debe tener 10 caracteres como mínino";
		spnNombre.style.color = "red";
		errorNombre = false;
	}else{
		spnNombre.innerHTML = "Nombres y apellidos correctos";
		spnNombre.style.color = "green";
		errorNombre = true;
	}
}

function validaEmail(){
	var spnEmail = document.getElementById('errorCorreo')
	var email = document.getElementById('email').value;
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!expr.test(email)){
		spnEmail.innerHTML = "El email no tiene el formato correcto (mi@correo.com)";
		spnEmail.style.color = "red";
		errorEmail = false;
	}else{
		spnEmail.innerHTML = "email correcto";
		spnEmail.style.color = "green";
		errorEmail = true;
	}
}

function validarMensaje(){
	var txtMensaje = document.getElementById("mensaje");
	var txtNcaracteres = document.getElementById('ncaracteres');
	var textMensajeLength = txtMensaje.value.length;
	if (textMensajeLength>=200){
		event.returnValue = false;
	}
}

function validarMensaje2(){
	var txtMensaje = document.getElementById("mensaje");
	var txtNcaracteres = document.getElementById('ncaracteres');
	var txtMensajeLength = txtMensaje.value.length;
	txtMensaje.value = txtMensaje.value.substring(0,200);
	txtNcaracteres.innerHTML = 200 - (txtMensajeLength);
	if ((200 - (txtMensajeLength))<0){
		txtNcaracteres.innerHTML = 0;
	}
}

function mensajeLength(){
	var txtMensaje = document.getElementById("mensaje");
	var spnMensaje = document.getElementById('errorMensaje');	
	var txtMensajeLength = txtMensaje.value.length;
	if (txtMensajeLength<10){
		spnMensaje.innerHTML = "Su mensaje debe tener minimo 10 caracteres mínimo";
		spnMensaje.style.color = "red";
		errorMensaje = false;
	}else{
		spnMensaje.innerHTML = "";
		spnMensaje.style.color = "green";
		errorMensaje = true;
	}
}

function validar(){
	var mensajeError = "";
	if ((errorNombre == false) || (errorEmail == false) || (errorMensaje == false)) {		
		if (errorNombre == false){
			mensajeError += " nombres,";
		}
		if (errorEmail == false){
			mensajeError += " email,";
		}
		if (errorMensaje == false){
			mensajeError += " mensaje,";
		}
		mensajeError = mensajeError.substring(0,mensajeError.length-1);				
		nombresLength();
		validaEmail();
		mensajeLength();
		alert(mensajeError + " no son correctos");
		return;		
	}
	var loader = document.getElementById("loader");
	loader.style.display = "block";
	setTimeout("enviarMensaje()", 4000);
}

function enviarMensaje(){
	document.frmLogin.submit();
}

function limpiar(){
	document.getElementById("nombre").value = "";
	document.getElementById("email").value = "";
	document.getElementById("mensaje").value = "";
	errorNombre = false;
	errorEmail = false;
	errorMensaje = false;
	document.getElementById('errorNombre').innerHTML = "";
	document.getElementById('errorCorreo').innerHTML = "";
	document.getElementById('errorMensaje').innerHTML = "";
	document.getElementById('ncaracteres').innerHTML = "200";
	document.getElementById("nombre").focus();	
}