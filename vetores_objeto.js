const listaDeUsuarios = [
    {nome:"ana",idade:25},
    {nome:"Felipe",idade:22},   
    {nome:"Andresa",idade:30},
    {nome:"Lucas",idade:44}
]
console.log ("\nexibir todos os usuarios de vetor:")
listaDeUsuarios.forEach (usuario =>{
    console.log (`${usuario.nome} tem ${usuario.idade}anos.`)
})

// Adicionando em uma nova Lista para Maiores de 18

console.log ("\nFiltrando idade maior que 18 anos:")
const maioresde18 = listaDeUsuarios.filter( usuario=> usuario.idade > 18)


// exibir todos os Elemtos do Vetor

maioresde18.forEach (usuario =>
    console.log (`${usuario.nome} tem ${usuario.idade}`)
)


console.log ("Mostrar apenas nomes:")
const listaNomes = listaDeUsuarios.map (u => u.nome)
listaNomes.forEach (nome=>console.log (`${nome}`))

console.log("\nEncontrar um Usuario")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome ==="ana")
console.log(usuarioEncontrado)
console.log (`nome:${usuarioEncontrado.nome}\n idade:${usuarioEncontrado.idade}`)