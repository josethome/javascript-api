var Abstracao = function() {
	if(this.constructor === Abstracao) {
		throw new Error("Não pode instânciar classe abstrata!");
	}
} 	 	
	Abstracao.prototype.nome = "";
	Abstracao.prototype.telefone = "";
	Abstracao.prototype.cpf = "";
	Abstracao.prototype.GravarEmMemoria = function() {
		throw new Error("Obrigatório a implementação do método GravarEmMemoria, para classes filhas!");
}