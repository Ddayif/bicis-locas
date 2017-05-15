function validateForm(){

	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasenia = document.getElementsByClassName("form-group")[0].value;
	var tipoBicicleta = document.getElementsByClassName("form-group")[1].value;

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
		}		

	if(apellido == "" || apellido.length == 0 || apellido.charAt(0) != mayuscula(apellido)){
		var hijo = document.createTextNode("Debes escribir correctamente los campos");
			var padre = document.getElementsByClassName("lastname-container")[0];
			padre.appendChild(nSpan);
			nSpan.appendChild(hijo);
			return nSpan;
	}

	if(correo == "" || correo.length == 0 || /\S+@\S+\.\S+/.test(correo) == false){
		var hijo = document.createTextNode("Debes escribir correctamente los campos");
			var padre = document.getElementsByClassName("email-container")[0];
			padre.appendChild(nSpan);
			nSpan.appendChild(hijo);
			return nSpan;
	}
	if(contrasenia == " " || contrasenia == undefined || contrasenia.length == 0 || contrasenia === "123456" || contrasenia === "098754" || contrasenia === "password" || contrasenia.length < 6){
		//valida que contrasenia no este vacio 
		// valida que la contrasenia no sea la palabra password ni los numeros 1234 ni 
		// valida que la longitud de la contrasenia se mayor a 6 caracteres
		var hijo = document.createTextNode("Debes escribir correctamente los campos");
			var padre = document.getElementsByClassName("form-group")[0];
			padre.appendChild(nSpan);
			nSpan.appendChild(hijo);
			return nSpan;

		
	}
	}

	