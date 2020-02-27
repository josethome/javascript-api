var Pessoa = function(_campos) {
	if(_campos != undefined) {
	 	this.nome = _campos.nome;
	 	this.telefone = _campos.telefone;
	 	this.cpf = _campos.cpf; 	
 	}
 	else {
 		this.nome = "";
	 	this.telefone = "";
	 	this.cpf = ""; 
 	}

 	this.Mostrar = function() {
 		document.write("Nome: " + this.nome + "<br>");
 		document.write("Telefone: " + this.telefone + "<br>");
 		document.write("CPF: " + this.cpf + "<br>");
 	}

 	this.GravarEmMemoria = function() {
 		Pessoa.BaseDePessoas.push(this);
 	}
} 

Pessoa.BaseDePessoas = [];

Pessoa.todos = function() {	
	html = "<h1>Estou executando um método de classe!</h1>";

	for(i = 0; i < Pessoa.BaseDePessoas.length; i ++) {
		pessoa = Pessoa.BaseDePessoas[i];

		html += "Nome: " + pessoa.nome + "<br>";
		html += "Telefone: " + pessoa.telefone + "<br>";
		html += "CPF: " + pessoa.cpf + "<br>";
		html += "<br>";
	}
}


