function capturarAlunos() {
	alunos = []
	for(i = 0; i < 3; i ++) {
		nome = prompt("Dígite o nome do aluno!");
		notas = [];
		for(x = 1; x <= 2; x ++) {
			nota = prompt("Dígite nota de número " + x + " do " + nome);
			nota = parseInt(nota);
			notas.push(nota);
		}

		aluno = {}
		aluno.nome = nome
		aluno.notas = notas
		alunos.push(aluno);
	}

	return alunos;
}