const listaDealunos = [
    {nome:`Ana`, nota: 5.0},
    {nome:`Bruno`, nota: 10.0},
    {nome:`mateus`, nota: 2.0},
    {nome:`Lucas`, nota: 7.0},
    {nome:`Andresa`, nota: 6.0}];

console.log ("\nEncontre a aluna Ana e Mostre o nome e a nota dela.\n")
const alunoencontrado = listaDealunos.find (u => u.nome)
console.log (`\nA Aluna  ${alunoencontrado .nome} tomou a Nota ${alunoencontrado .nota}\n`)

console.log ("\nMostre a Media de Geral da Turma.\n")
const soma = listaDealunos.reduce((total, aluno) => total + aluno.nota, 0)
const media = soma / listaDealunos.length

console.log(`\nA média da turma é ${media}\n`)

console.log ("Mostre o Nome e a Nota dos Alunos com as notas abaixo de 7.0.")

const menores7 = listaDealunos.filter(usuario => usuario.nota < 7)

menores7.forEach(aluno => {
    console.log(`\nO aluno ${aluno.nome} tirou a nota ${aluno.nota}\n`)
})
 

console.log ("\nMostre apenas o nome dos aluno com nota maior ou igual a 7.0.\n")



const maior7 = listaDealunos.filter(usuario => usuario.nota >= 7)

maior7.forEach(aluno => {
    console.log(`\nO aluno ${aluno.nome} tirou a nota ${aluno.nota}\n`)
})
 