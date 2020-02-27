var Media = function() {
	this.nota1 = 0;
	this.nota2 = 0;

	var a = 2;
	a = a * 8;

	// Método privado
	var mostrarValorDeA = function() {

	}

	// Método público
	this.calculo = function() {
		var media = (this.nota1 + this.nota2)/2;
		return media;
	}

	//alert(a);
} 
