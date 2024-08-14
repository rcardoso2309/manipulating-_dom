// 0304 - forEach and Arrow Function
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item,index,array) {
// console.log(item,index,array);
// });


// forEach e Array
const titulos = document.getElementsByClassName('title');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item,index, array){
  console.log(item, index, array);
});


const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

// Exercicios
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
console.log(item);
})

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
  })

// Como corrigir os erros abaixo:
const imagens = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

