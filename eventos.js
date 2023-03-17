//Exercícios//

//1.11a//
const num = Number(prompt("Qual o seu número?"))
const viz1 = Number(num - 1)
const viz2 = Number(num + 1)
alert(`Os vizinho desse número são ${viz1} e ${viz2}`)

//1.11b//
const Vconta = Number(prompt("Qual o valor total da sua conta?"))
const Nclientes = Number(prompt("Qual o número de clientes?"))
const Vcliente = Number(Vconta / Nclientes)
alert(`O valor a ser pago por cliente é ${Vcliente}`)

//1.11c//
const preco = Number(prompt("Qual o preço do produto?"))
const vista = Number(preco - (preco * 0.10))
const prazo = Number(preco / 3)
alert(`Esse produto sai à vista por RS${vista} ou pode ser parcelado em até 3 vezes de RS${prazo}`)

//1.11d//
const nota1 = Number(prompt("Qual a nota da 1ª disciplina?"))
const nota2 = Number(prompt("Qual a nota da 2ª disciplina?"))
const media = Number((nota1 + nota2) / 2)
alert(`A sua média foi ${media}`)