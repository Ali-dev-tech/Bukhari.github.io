//Accordtion
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll',function(){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click',function(){
    header.classList.toggle('menu-open');
})


//SCROLL UP
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)