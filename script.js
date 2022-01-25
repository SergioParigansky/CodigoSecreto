function copiarTexto() {
	var contenido = document.getElementById("mensaje");
	contenido.select();
	document.execCommand("copy");
	alert("¡Copiado!");
}