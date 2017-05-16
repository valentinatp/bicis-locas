function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contra = document.getElementById("input-password").value;
	var seleccion = document.getElementsByClassName("form-control").value;

	if(nombre == "" || nombre.length == 0 || nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
			var span = document.createElement("span");
			var ident = document.getElementById("name");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar su nombre");
			span.appendChild(contenido);
		return span;
	}	
	if(apellido == "" || apellido.length == 0 || apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
			var span = document.createElement("span");
			var ident = document.getElementById("lastname");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar su apellido");
			span.appendChild(contenido);
		return span;
	}
	if((/\w+([-+.']\w+)@\w+([-.]\w+)\.\w+([-.]\w+)/.test(correo))){
			var span = document.createElement("span");
			var ident = document.getElementById("input-email");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Su correo debe contener '@'");
			span.appendChild(contenido);
		return span;
	}
	if(contra.length <= 6 || contra == "" || contra == "123456" || contra == "098765"){
			var span = document.createElement("span");
			var ident = document.getElementById("input-password");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar una contraseña");
			span.appendChild(contenido);
		return span;
	}
}