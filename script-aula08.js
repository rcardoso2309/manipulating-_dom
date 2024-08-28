// Tab Navigation
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo');

  if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu,index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    });
  }
}
initTabNav();

// Accordion List

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if(accordionList.length)
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);


  function activeAccordion(event) {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }


  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
  }
initAccordion();

// Scroll Suave Link Interno
function initScrollSuave() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function srollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  // forma alternativa
  // const topo = section.offsetTop;
  // window.scrollTo ({
  //   top: topo,
  //   behavior: "smooth"
  //   });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', srollToSection)
  });
}
initScrollSuave();

// Animação ao Scroll

const sections = document.querySelectorAll('.js-scroll');

function animaScroll() {
  sections.forEach((section) =>{
    const sectionTop = section.getBoundingClientRect().top;
    console.log(sectionTop);
    if(sectionTop < 0) {
      console.log('animar');
      
    }
  })
}

window.addEventListener('scroll', animaScroll);

