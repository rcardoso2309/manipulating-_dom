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



