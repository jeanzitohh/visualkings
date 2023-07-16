/*SLIDER TESTIMONIO*/

let slider = document.querySelector(".testimonio__container");
let sliderIndividual = document.querySelectorAll(".testimonio__card");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function () {
  let width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + -(width + 50) * contador + "px)";
  slider.style.transition = "transform 1s";
  contador++;

  if (contador == (sliderIndividual.length - 2)) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform .8s";
      contador = 1;
    }, 1500);
  }
}




/*INDICADOR SECCION SCROLL*/

const secciones = document.querySelectorAll('.seccion')
const menuItems = document.querySelectorAll('.navbar__links')

const funcionObserver = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
      itemActual.classList.add('active__scroll')
      for (const item of menuItems) {
        if(item != itemActual){
          item.classList.remove('active__scroll')
        }
      }
    }
  })
}

const observer = new IntersectionObserver(funcionObserver,{
  root: null,
  rootMargin: '0px',
  threshold: .8
})

secciones.forEach(seccion => observer.observe(seccion))