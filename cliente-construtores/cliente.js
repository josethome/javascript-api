var Cliente = function(_campos) {
	if(_campos != undefined) {
		if(_campos.nome != undefined) {
			this.nome = _campos.nome;
		} 
		else {
			this.nome = "";
		}
		
		if(_campos.telefone != undefined) {
			this.telefone = _campos.telefone;
		}
		else {
			this.telefone = "";
		}

		if(_campos.cpf != undefined) {
			this.cpf = _campos.cpf;
		}
		else {
			this.cpf = "";
		}		
	} 	
	
	this.Mostrar = function() {
		document.write("Nome: " + this.nome + "<br>");
		document.write("Telefone: " + this.telefone + "<br>");
		document.write("CPF: " + this.cpf + "<br>");
	}

	this.GravarEmMemoria = function() {
		Cliente.clientes.push(this);
	}
}

Cliente.clientes = [];

Cliente.todos = function() {
	html = "<h1>Estou executando um método de classe!</h1>";

	for(i = 0; i < Cliente.clientes.length; i ++) {
		cliente = Cliente.clientes[i];

		html += "Nome: " + cliente.nome + "<br>";
		html += "Telefone: " + cliente.telefone + "<br>";
		html += "CPF: " + cliente.cpf + "<br>";
		html += "<hr>";
	}

	document.getElementById("resultado").innerHTML = html;
}
