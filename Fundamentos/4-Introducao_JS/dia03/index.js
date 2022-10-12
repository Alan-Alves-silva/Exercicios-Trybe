console.log('--------1ª QUESTÃO-------')
console.log('Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.')
let fator = 10;
let multiplicador = 1;

for(let indice  = fator; indice > 0; indice --) {

  multiplicador = multiplicador * indice
}
console.log(`O número ${fator} fatorado:`, multiplicador)

console.log('--------2ª QUESTÃO-------')

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
//Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois
//troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverter = []

for(let index = word.length -1; index >= 0; index --) {
  console.log(word[index])
}

console.log('--------3ª QUESTÃO-------')

//Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
let size = 0;
let big_word = '';
let small_word = '';
let biggestWord = 0;
let smallestWord = array[0].length

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

for(let indice = 0; indice < array.length; indice++) {
  size = array[indice].length
  if(size > biggestWord) {
    biggestWord = size
    big_word = array[indice]
  }
  if(size < smallestWord) {
    smallestWord = size
    small_word = array[indice]
  }
}
console.log(`A maior palavra é: ${big_word} com ${biggestWord} caracteres.`)
console.log(`A menor palavra é: ${small_word} com ${smallestWord} caracteres.`)

console.log('--------4ª QUESTÃO-------')
//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo.
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let contador = 0;
let maiorNumeroPrimo = 0;
for(let contador1 = 1; contador1 <= 50; contador1 ++) {
  for(let contador2 = 1; contador2 <= 50; contador2 ++) {
    if(contador1 % contador2 === 0) {
      contador += 1
    }
  }
  if(contador > 2) {
    console.log(contador1, 'Não é primo')
  }else {
    console.log(contador1, 'É primo')
    maiorNumeroPrimo = contador1
  }
  contador = 0
}
console.log('O maior número primo é: ',maiorNumeroPrimo)


console.log('---Exercícios - bônus----')
console.log('--------4ª QUESTÃO-------')
//Escreva um programa que, dado um valor n qualquer, seja n > 1,
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 10
let b = '*';
for(let index = 1; index <= n; index ++) {
  console.log(b.repeat(n))
}

//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n1 = 5
let a = '*';
for(let index = 1; index <= n1; index ++) {
  console.log(a)
  a += '*'
}


//Agora inverta o lado do triângulo.

let n2 = 5;
let counter = 0;
for(let index = n2; index >= 1; index --) {
  counter ++;
  console.log(' '.repeat(index -1), '*'.repeat(counter))
}


//Faça uma pirâmide com n asteriscos de base:

let n3 = 3;
let counter1 = 1;
let z = " ";
for(let index3 = n3; index3 >= 1; index3 --) {
  console.log('#'.repeat(index3), '*'.repeat(counter1))
  counter1 += 2;
}

//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 13;
let midle = (n + 1) / 2;
let spaceright = midle
let spaceleft = midle

for(let index = 1; index <= midle; index ++) {
  let character = '';
  for(let index2 = 1; index2 <= n; index2 ++){
    if(index2 == spaceright  || index2 == spaceleft  || index == midle) {
      character += '*';
    }else {
      character += ' ';
    }
  }
  spaceright += 1;
  spaceleft -= 1;
  console.log(character);
}