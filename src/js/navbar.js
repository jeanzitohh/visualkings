let menu = document.querySelector(".navbar__menu");
let navbar = document.querySelector(".navbar");
let desplegable = document.querySelector(".desplegable");

menu.addEventListener("click", ()=>{
  desplegable.classList.toggle("navbar-height");
});

window.addEventListener("scroll", ()=>{
  navbar.classList.toggle("sticky", window.scrollY > 0);
})