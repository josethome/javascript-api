var Singleton = {
	instancia: null,

	iniciar: function() {
		function Sgln() {
			this.nome = "";
			this.MostrarNaTela = function() {
				alert("Estou fazendo aulas de Javascript!");
			}
		}

		if(Singleton.instancia == null) {
			Singleton.instancia = new Sgln();
		}
	}
}