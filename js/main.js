function validateForm(){

	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasenia = document.getElementById("input-password").value;
	var tipoBicicleta = document.getElementsByTagName("select");

	function mayuscula(string){ // variable que contendra la validacion para que la primera letra sea mayuscula
		return string.charAt(0).toUpperCase();
	}

	var nSpan = document.createElement("span");
	
	if(nombre == "" || nombre.length == 0 || nombre.charAt(0) != mayuscula(nombre)){ // valida que el campo nombre no este vacio			
		var hijo = document.createTextNode("Debes escribir correctamente los campos");
		var padre = document.getElementsByClassName("name-container")[0];
		padre.appendChild(nSpan);
		nSpan.appendChild(hijo);
		return nSpan;
	}else{
		alert("Nombre bien ingresado");
	}		

	if(apellido == "" || apellido.length == 0 || apellido.charAt(0) != mayuscula(apellido)){
		var hijo = document.createTextNode("Debes escribir correctamente los campos");
		var padre = document.getElementsByClassName("lastname-container")[0];
		padre.appendChild(nSpan);
		nSpan.appendChild(hijo);
		return nSpan;
	}else{
		alert("Apellido bien ingresado");
	}

	if(correo == "" || correo.length == 0 || /\S+@\S+\.\S+/.test(correo) == false){
		var hijo = document.createTextNode("El formato de correo es inválido");
		var padre = document.getElementsByClassName("email-container")[0];
		padre.appendChild(nSpan);
		nSpan.appendChild(hijo);
		return nSpan;
	}else{
		alert("Correo bien ingresado");
	}

	if(contrasenia === "123456" || contrasenia === "098754" || contrasenia === "password" ){
		var hijo = document.createTextNode("Tu contrasenia no debe ser 123456 o 098754 ni tampoco la palabra password");
		var padre = document.getElementsByClassName("form-group")[0];
		padre.appendChild(nSpan);
		nSpan.appendChild(hijo);
		return nSpan;
	}else if(contrasenia.length < 6){
		var hijo = document.createTextNode("Tu contrasenia debe contener al menos 6 caracteres");
		var padre = document.getElementsByClassName("form-group")[0];
		padre.appendChild(nSpan);
		nSpan.appendChild(hijo);
		return nSpan;
	}else{
		alert("Contraseña valida");
	}


	for(var i = 0; i < tipoBicicleta.length; i++){
		// valida que el usuario elija una opcion 
		if(tipoBicicleta[i].value == "0"){
			var hijo = document.createTextNode("Debes seleccionar un tipo de bicicleta");
			var padre = document.getElementsByClassName("form-group")[1];
			padre.appendChild(nSpan);
			nSpan.appendChild(hijo);
			return nSpan;
		}else{
			alert("Seleccionaste bien el tipo de bicicleta " + "\n" + " Ahora solo debes ingresar tu Twitter y listo !!");
		}
	}
}
