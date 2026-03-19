function verificarVoto() {
    // Captura o valor do input de idade
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');
    // Validação simples para campo vazio
    if (idade === "") {
        resultado.innerText = "Por favor, digite uma idade.";
        return;
    }
    const anos = parseInt(idade);
    if (anos < 16) {
        resultado.innerText = "Você não pode votar.";
    } 
    else if (anos >= 16 && anos <= 17) {
        resultado.innerText = "Seu voto é opcional.";
    } 
    else if (anos >= 18 && anos <= 65) {
        resultado.innerText = "Seu voto é OBRIGATÓRIO.";
    } 
    else {
        resultado.innerText = "Seu voto não é mais obrigatório (opcional).";
    }
}