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

}