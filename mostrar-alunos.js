function mostrarAlunos(alunos) {
	for(i = 0; i < alunos.length; i ++) {
		aluno =  alunos[i]
		mostraEmTela("O aluno(a) " + aluno.nome + " teve as notas:");
		somaDasNotas = 0;
		for(x = 0; x < aluno.notas.length; x ++) {
			nota = aluno.notas[x];
			somaDasNotas = somaDasNotas + nota
			mostraEmTela("Nota " + (x + 1) + " do aluno(a): " + nota);
		}

		media = somaDasNotas/aluno.notas.length;
		mostraEmTela("A média do aluno(a): " + media);
		mostraEmTela("<br>#######################################################<br>");
		mostraEmTela("<br>");
	}
}