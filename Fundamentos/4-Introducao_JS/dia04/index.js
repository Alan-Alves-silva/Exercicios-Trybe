/*
console.log('Exercícios - objetos e for/in');
// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('------------1ª QUESTÃO---------------')

console.log('Bem-vinda, ' + info.personagem)

console.log('------------2ª QUESTÃO---------------')
info['recorrente'] = 'Sim'
console.log(info)

console.log('------------3ª QUESTÃO---------------')
for(let index in info) {
  console.log(index);
}

console.log('------------4ª QUESTÃO---------------')
for(let i in info) {
  console.log(info[i])
}

console.log('------------5ª QUESTÃO---------------')
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for(let index in info) {
  if(info.recorrente == 'Sim' && info2.recorrente == 'Sim' && index == 'recorrente') {
    console.log('Ambos recorrentes')
  }else {
    console.log(info[index] + ' e ' + info2[index])
  }
  
}

console.log('-----------6ª QUESTÃO---------------')
//Usando o objeto abaixo, faça os exercícios a seguir:
//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos,
//e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”. 

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

console.log('-----------7ª QUESTÃO---------------')
//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações: 
//titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//autor: 'JK Rowling',
//editora: 'Rocco',

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)
console.log(leitor.livrosFavoritos)

console.log('-----------8ª QUESTÃO---------------')
//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código. 

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros`)
console.log(`${leitor['nome']} tem ${leitor['livrosFavoritos'].length} livros`)


console.log('Exercícios - Funções');
console.log('------------1ª QUESTÃO---------------')

function palindromo(string) {
  let inverted = string.split('').reverse().join('');
  if(string == inverted){
    return `É palindromo!!!! Palavra/Frase Original: ${string}, reverse: ${verificar}`
  }else {
    return 'Não é palindromo';
  }

}
palindromo('reviver')
*/

console.log('------------2ª QUESTÃO---------------')

function indexMaxValue(array) {
  let maiorValor = Math.max(...array)
  return array.indexOf(maiorValor)
}

console.log('------------3ª QUESTÃO---------------')

function indexMinValue(array) {
  let menorValor = Math.min(...array)
  return array.indexOf(menorValor)
}

console.log('------------3ª QUESTÃO---------------')

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let newArray = 0;
let maiorNome = ''
for(let index of teste){
  if(index.length > newArray) {
    newArray = index.length
    maiorNome = index
  }
}
console.log(newArray, maiorNome);