const a = 4;
const b = 7;
const c = 8;
const d = -4;
const ladoA = 90;
const ladoB = -1;
const ladoC = 60;
const peao = 'frente';
const porcentagem = 105;
const custoDoProduto = 10*1.2;
const valorDeVenda = 14;
const lucro = (valorDeVenda - custoDoProduto) * 1000;

const salarioBruto = 3000;
const inss8porcento = salarioBruto*8/100;
const inss9porcento = salarioBruto*9/100;
const inss11porcento = salarioBruto*1.11 - salarioBruto;
const inssMax = salarioBruto-570.88;
let salLiqInss = undefined;
let descontoIr = undefined;

console.log(`-------------------PRIMEIRA QUESTÃO-------------------`)

console.log(`Soma: ${a+b}`)
console.log(`Subtração: ${a-b}`)
console.log(`Multiplicação: ${a*b}`)
console.log(`Divisão: ${a/b}`)
console.log(`Resto da divisão: ${a%b}`)

console.log(`-------------------SEGUNDA QUESTÃO-------------------`)

if(a > b) {
  console.log(a)
}else {
  console.log(b)
}

console.log(`-------------------TERCEIRA QUESTÃO-------------------`)

if(a > b && a > c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}

console.log(`-------------------QUARTA QUESTÃO-------------------`)

if(d > 0) {
  console.log('Positive')
} else if(d < 0){
  console.log('Negative')
}else {
  console.log('Zero')
}

console.log(`-------------------QUINTA QUESTÃO-------------------`)
if(ladoA < 0 || ladoB < 0 || ladoC < 0) {
  console.log('Seu triângulo possui um lado negativo, por favor tente novamente.')
}else if(ladoA + ladoB + ladoC == 180) {
  console.log(true)
}else {
  console.log(false)
}


console.log(`-------------------QUESTÃO PEÇA DE XADREZ-------------------`)

switch(peao.toLowerCase()) {
  case 'diagonal':
    console.log('Movimento errado')
    break
  case 'esquerda':
    console.log('Movimento errado')
    break
  case 'direita':
    console.log('Movimento errado')
    break
  case 'frente':
    console.log('Está certo!!!')
    break
  default:
    console.log('Esse movimento não existe')
}

console.log(`-------------------SÉTIMA QUESTÃO-------------------`)

if(porcentagem > 100 || porcentagem < 0) {
  console.log('ERROR')
}else if(porcentagem >= 90) {
  console.log('A')
}else if(porcentagem >= 80) {
  console.log('B')
}else if(porcentagem >= 70) {
  console.log('C')
}else if(porcentagem >= 60) {
  console.log('D')
}else if(porcentagem >= 50) {
  console.log('E')
}else if(porcentagem < 50) {
  console.log('F')
}
console.log('--------------------------------------------------------')
console.log('------------------Há um par entre nós------------------')
console.log(`-------------------QUESTÃO PAR&ÍMPAR-------------------`)

if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(true + ' ,' + 'Pelo menos uma é par')
}else {
  console.log(false + ' ,' + 'Nenhuma é par')
}

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  console.log(true + ' ,' + 'Pelo menos uma é ímpar')
}else {
  console.log(false + ' ,' + 'Nenhuma é ímpar')
}

console.log(`-------------------QUESTÃO VALOR DO PRODUTO-------------------`)

if(custoDoProduto <= 0 || valorDeVenda <= 0) {
  console.log('Error! valores precisam ser maior do que zero.')
} else {
  console.log(`O lucro da empresa é de: R$ ${lucro},00`)
}

console.log(`-------------------QUESTÃO IMPOSTO DE RENDA-------------------`)

if(salarioBruto <= 1556.94) {
  salLiqInss = salarioBruto - inss8porcento;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salLiqInss = salarioBruto - inss9porcento;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salLiqInss = salarioBruto - inss11porcento;
}else if(salarioBruto > 5189.82) {
  salLiqInss = salarioBruto - inssMax;
}

if(salLiqInss >= 1903.99 && salLiqInss <= 2826.65) {
  descontoIr = (salLiqInss*7.5/100) - 142.80;
}else if(salLiqInss >= 2826.66 && salLiqInss <= 3751.05) {
  descontoIr = salLiqInss*15/100 - 354.80;
}else if(salLiqInss >= 3751.06 && salLiqInss <= 4664.68) {
  descontoIr = salLiqInss*22.5/100 - 636.13;
}else if(salLiqInss > 4664.68) {
  descontoIr = (salLiqInss*27.5/100) - 869.36
}
console.log(`Salário bruto:`, new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(salarioBruto))
console.log(`Salário Liquido:`, new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(salLiqInss - descontoIr))