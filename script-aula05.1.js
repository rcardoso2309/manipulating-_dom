// Dimensões e Distâncias 1
// Height e Width

const listaAnimais = document.querySelector('.copy');

const height = listaAnimais.scrollHeight;
console.log(height);


const animaisTop = listaAnimais.offsetTop;


const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;


const rect = primeiroh2.getBoundingClientRect();

console.log(rect.top);



console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,


);


// rect.height; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll


// // Window

// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também
// window.innerHeight; // height do janela
// window.outerHeight; // soma a barra de endereço

// window.pageYOffset; // distância total do scroll vertical
// window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// // matchMedia();

const small = window.matchMedia('(max-width: 600px)') .matches;

if(small) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}