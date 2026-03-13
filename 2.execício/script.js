const botao = document.getElementById("gerarBotao");

botao.addEventListener("click", function () {

  const n1 = Number(document.getElementById("numero1").value);
  const n2 = Number(document.getElementById("numero2").value);

  if (!n1 && !n2) {
    resultadoTabuada.innerHTML = "Digite os números!";
    return;
  }

  const soma = n1 + n2;
  const produto = n1 * n2;
  const media = soma / 2;
  const maior = Math.max(n1, n2);
  const menor = Math.min(n1, n2);

  resultadoTabuada.innerHTML = `
    <div class="resultado-item"> Soma: ${soma}</div>
    <div class="resultado-item"> Produto: ${produto}</div>
    <div class="resultado-item"> Média: ${media.toFixed(2)}</div>
    <div class="resultado-item"> Maior número: ${maior}</div>
    <div class="resultado-item"> Menor número: ${menor}</div>
  `;
});