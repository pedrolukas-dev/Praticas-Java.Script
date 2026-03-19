function verificarVoto() {
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');

    // Limpa as cores antes de verificar
    resultado.className = '';

    if (idade === "") {
        resultado.innerText = "Por favor, digite uma idade.";
        return;
    }

    const anos = parseInt(idade);

    if (anos < 16) {
        resultado.innerText = "Não pode votar.";
        resultado.classList.add('voto-bloqueado');
    } 
    else if (anos >= 16 && anos <= 17) {
        resultado.innerText = "Voto opcional.";
        resultado.classList.add('voto-opcional');
    } 
    else if (anos >= 18 && anos <= 65) {
        resultado.innerText = "Voto OBRIGATÓRIO.";
        resultado.classList.add('voto-obrigatorio');
    } 
    else {
        resultado.innerText = "Voto opcional.";
        resultado.classList.add('voto-opcional');
    }
}