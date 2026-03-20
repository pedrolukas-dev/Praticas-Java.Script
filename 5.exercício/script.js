function verificarAposentadoria() {
    // Captura os valores
    const codigo = document.getElementById('codigo').value;
    const anoNasc = document.getElementById('anoNascimento').value;
    const tempoTrabalho = document.getElementById('tempoTrabalho').value;
    const campoResultado = document.getElementById('resultado');

    // Limpa estilos anteriores
    campoResultado.className = '';

    // Validação básica
    if (!codigo || !anoNasc || !tempoTrabalho) {
        campoResultado.innerText = "Preencha todos os pergaminhos (campos)!";
        return;
    }

    // Cálculos
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - parseInt(anoNasc);
    const anosTrabalho = parseInt(tempoTrabalho);

    // Lógica: Idade >= 65 OU Tempo de Trabalho >= 30
    let mensagem = `Empregado ${codigo}: Idade ${idade} anos | Trabalho: ${anosTrabalho} anos. \n`;

    if (idade >= 65 || anosTrabalho >= 30) {
        mensagem += "SITUAÇÃO: REQUERER APOSENTADORIA";
        campoResultado.innerText = mensagem;
        campoResultado.classList.add('voto-opcional'); // Reutiliza o verde do CSS anterior
    } else {
        mensagem += "SITUAÇÃO: NÃO REQUERER APOSENTADORIA";
        campoResultado.innerText = mensagem;
        campoResultado.classList.add('voto-obrigatorio'); // Reutiliza o vermelho/coral
    }
}