
const inputQuantidade = document.getElementById('maça');
const botaoGerar = document.getElementById('gerarBotao');
const divResultado = document.getElementById('resultadoTabuada');


botaoGerar.addEventListener('click', function() {

    const quantidade = parseInt(inputQuantidade.value);


    if (isNaN(quantidade) || quantidade <= 0) {
        divResultado.innerHTML = "<p style='color: red;'>Por favor, insira uma quantidade válida.</p>";
        return;
    }

    let precoUnitario;

   
    if (quantidade < 12) {
        precoUnitario = 1.30;
    } else {
        precoUnitario = 1.00;
    }

    const valorTotal = quantidade * precoUnitario;

    divResultado.innerHTML = `
        <p>Quantidade: <strong>${quantidade}</strong></p>
        <p>Preço unitário aplicado: <strong>R$ ${precoUnitario.toFixed(2).replace('.', ',')}</strong></p>
        <hr>
        <h3>Total a pagar: R$ ${valorTotal.toFixed(2).replace('.', ',')}</h3>
    `;
});