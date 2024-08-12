// 0303 - Seleção de Elementos 1
const animals = document.getElementById('animals');
console.log(animals);


const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animalsImg = document.querySelectorAll('.animals img');
console.log(animalsImg);

// HTMLCollection vs NodeList
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);


// Array-Like
gridSectionNode.forEach(function(item,index){
console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item) {
  console.log(item);
})
