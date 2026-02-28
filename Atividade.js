const listaDealunos = [
    {nome:`Ana`, nota: 5.0},
    {nome:`Bruno`, nota: 10.0},
    {nome:`mateus`, nota: 2.0},
    {nome:`Lucas`, nota: 7.0},
    {nome:`Andresa`, nota: 6.0}
];

console.log ("Encontre a aluna Ana e Mostre o nome e a nota dela.")
const alunoencontrado = listaDealunos.find (u => u.nome)
console.log (`A Aluna  ${alunoencontrado .nome} tomou a Nota ${alunoencontrado .nota}`)

console.log ("Mostre a Media de Gelra da Turma.")

console.log ("Mostre o Nome e a Nota dos Alusno com as notras abaixo de 7.0.")

const menor7 = listaDealunos.filter( usuario=> usuario.idade > 7)

console.log ("Mostre apenas o nome dos aluno com nota maior ou igual a 7.0.")

