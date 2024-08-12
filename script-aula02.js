// 0303 - Seleção de Elementos 2
// Exercício
// Retorne no console todas as imagens do site
const listaImg = document.querySelectorAll('img');

console.log(listaImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');

console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.description-animals');

const h2Animais = animais.querySelector('h2');
console.log(animais);
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);




