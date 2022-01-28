function copiarTexto() {
	var contenido = document.getElementById("mensaje2");
	contenido.select();
	document.execCommand("copy");
	alert("¡Copiado!");
}

function cifrarTexto() {
	const cifrar = document.getElementById("mensaje1").value;
	const cifrado = cifrar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
	document.getElementById("mensaje2").value = cifrado;
}

function descifrarTexto() {
	const descifrar = document.getElementById("mensaje1").value;
	const descifrado = descifrar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	document.getElementById("mensaje2").value = descifrado;
}