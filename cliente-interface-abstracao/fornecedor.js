var Fornecedor = function() {
	this.CNPJ = "";

	this.super = Pessoa.prototype;

	this.entregarProdutos = function() {
		alert("<h1>O Fornecedor está entregando os produtos!</h1>");
	}
	this.GravarEmMemoria = function() {
		Fornecedor.Base.push(this);
		this.super.GravarEmMemoria();
	}
} 

Fornecedor.prototype = new Pessoa();
Fornecedor.Base = [];