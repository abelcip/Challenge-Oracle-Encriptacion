
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var btnEncode = document.getElementById("btn-encriptar");
var btnDecode = document.getElementById("btn-desencriptar");
var btnCopy = document.getElementById("btn-copy");

function encriptar(texto){
	if (texto.match(/[^a-z\s]/)) {
        return alert("Solo puedes encriptar letras minúsculas sin acentos");
    }

    var resultado = texto.replace(/(e)/ig, "enter").replace(/(i)/ig, "imes").replace(/(a)/ig, "ai").replace(/(o)/ig, "ober").replace(/(u)/ig, "ufat");
    return resultado;
}

function desencriptar(texto){
	if (texto.match(/[^a-z\s]/)) {
        return alert("Solo puedes desencriptar letras minúsculas sin acentos");
    }

    var resultado = texto.replace(/(enter)/ig, "e").replace(/(imes)/ig, "i").replace(/(ai)/ig, "a").replace(/(ober)/ig, "o").replace(/(ufat)/ig, "u");
    return resultado;
    
}


btnEncode.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = encriptar(texto);
	document.getElementById("msg").value = texto;
    
    
});

btnDecode.addEventListener("click", function(event){
	event.preventDefault();
	var texto = document.querySelector("#input-texto").value;
	texto = desencriptar(texto);
	document.getElementById("msg").value = texto;
});
btnCopy.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#msg");
    texto.select();
    document.execCommand('copy');
    var msg = document.getElementById("input-texto");
    msg.value = "";
    
    

});