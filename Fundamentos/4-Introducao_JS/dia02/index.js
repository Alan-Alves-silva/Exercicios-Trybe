console.log('-----LIDANDO COM ARRAYS------')
console.log('---------1ª 2ª 3ª QUESTÃO---------')

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMultiplado = [];

let sequenc = "";
let sum = Number();
let maiorNumero = 0;
let menorNumero = numbers[0]
let impar = Number();
let listacom25 = []


for(let number of numbers) {
  sequenc += number + ','
  sum = sum + number
}

let mA = sum / numbers.length;

console.log('A sequência: ', sequenc)
console.log('A soma: ', sum)
console.log(`A média aritimética é: ${mA}`)

console.log('---------4ª  QUESTÃO---------')

if(mA > 20) {
  console.log('valor maior que 20')
}else {
  console.log('valor menor ou igual a 20')
}

console.log('---------5ª  QUESTÃO---------')

for(let maior of numbers) {
  if(maior > maiorNumero){
  maiorNumero = maior
  }
}
console.log(maiorNumero)

console.log('---------6ª  QUESTÃO---------')

for(let index of numbers) {
  if(index % 2 != 0){
    impar ++
  }
}
if(impar > 0) {
  console.log('Foram encontrados: ', impar,'número(s) ímpar(es)')
}else {
  console.log('Nenhum valor ímpar encontrado')
}

console.log('---------7ª  QUESTÃO---------')

for(let ind of numbers) {
  if(ind <= menorNumero) {
    menorNumero = ind  
  }
}
console.log(menorNumero)

console.log('---------8ª  QUESTÃO---------')

for(let iindex = 1; iindex < 26; iindex ++) {
  listacom25.push(iindex)
}
console.log(listacom25)

console.log('---------9ª  QUESTÃO---------')

for(let indice of listacom25) {
  console.log(`${indice} / 2 é igual a:`, indice/2)
}

console.log('Exercícios - Bônus - Ordenação Bubble Sort')
console.log('---------ORDEM CRESCENTE---------')
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers)

console.log('---------ORDEM DECRESCENTE---------')
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers)


console.log('---------MULTIPLICANDO O ARRAY---------')

for(let a = 0; a < numbers1.length; a++) {
  if(a + 1 < numbers1.length) {
    let multi = numbers1[a] * numbers1[a+1]
  arrayMultiplado.push(multi)
  } else {
    arrayMultiplado.push(numbers1[a] * 2)
  }
  
}

console.log(arrayMultiplado)