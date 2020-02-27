// Exemplo programação funcional
function resolverProblema() {
	return "async";
}

function resolverProblema2() {
	return "async2";
}

function resolverProblema3() {
	return "async3";
}

var retorno = resolverProblema();
	alert(retorno);

var retorno2 = resolverProblema2();
	alert(retorno2);

var retorno3 = resolverProblema3();
	alert(retorno3);

// ########################## Código assincronos #############################

function resolverProblema(callback) {
	callback.call(null, "async");
}

function resolverProblema(callback) {
	callback.call(null, "async2");
}

function resolverProblema(callback) {
	callback.call(null, "async3");
}

resolverProblema(function(retorno) { 
	setTimeout(function() {
		alert(retorno);
	}, 1000);
});

resolverProblema2(function(retorno2) { 
	alert(retorno2);
});

resolverProblema3(function(retorno3) { 
	alert(retorno3);
});

resolverProblema();
resolverProblema2();
resolverProblema3();

// Exemplo programação orientada a objetos
function Problema() {
	this.resolverProblema = function() {

	}

	this.resolverProblema2 = function() {

	}

	this.resolverProblema3 = function() {

	}	
}