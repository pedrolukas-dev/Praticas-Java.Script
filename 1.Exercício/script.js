// pegar o botão
const botao = document.getElementById("gerarBotao");

// clicar no botão
botao.addEventListener("click", function () {

  // valores do input (convertendo para número)
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const nota3 = Number(document.getElementById("nota3").value);

  // verificar se estão vazias
  if (nota1 === 0 && nota2 === 0 && nota3 === 0) {
    document.getElementById("resultadoTabuada").innerText =
      "Digite as notas";
    return;
  }

  // calcular média
  const media = (nota1 + nota2 + nota3) / 3;

  // situação
  let situacao = media >= 7 ? "Aprovado" : "Reprovado";

  // mostrar resultado
  document.getElementById("resultadoTabuada").innerText =
    `Média: ${media.toFixed(2)} — ${situacao}`;
});