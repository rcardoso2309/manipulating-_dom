// Traversing e Manipulação 1

// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


const h1 = document.querySelector('h1');

const animaisLista = document.querySelector('.animals-description');
console.log(h1.innerHTML)
console.log(h1.outerHTML)

h1.outerHTML = '<p>New Title</p>';

// console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animals-list');

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.childNodes);

const animais = document.querySelector('.animals');
const contato = document.querySelector('.contact');
const titulo = contato.querySelector('.title');

const mapa = contato.querySelector('.map')

lista.appendChild(titulo);


// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista


const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Titulo';
novoh1.classList.add('titulo')

mapa.appendChild(novoh1);

console.log(novoh1);

// Clone Elements

// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;
// // titulo, titulo2 e novoTitulo são iguais

// const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);

const H1 = document.querySelector('H1');
const faq = document.querySelector('.faq');

const cloneH1 = H1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);
