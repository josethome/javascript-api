var Cliente = function() {
	this.ClienteId = "";
	this.GravarEmMemoria = function() {
		Cliente.Base.push(this);
	}

	this.super = Pessoa.prototype;
	this.Original = function() {
		console.log("Sobrescrevi a função original!");
		this.super.Original();
	}
}

Cliente.prototype = new Pessoa();
Cliente.Base = [];
