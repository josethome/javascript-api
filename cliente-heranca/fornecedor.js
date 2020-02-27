var Fornecedor = function() {
	this.CNPJ = "";

	this.entregarProdutos = function() {
		alert("<h1>O Fornecedor está entregando os produtos!</h1>");
	}
} 

Fornecedor.prototype = new Pessoa();