const navbarMenu = document.querySelector('.navbar__menu');
const openMenu = document.querySelector('.openMenu');
const header = document.querySelector('nav');

openMenu.addEventListener('click',() => {
    navbarMenu.classList.toggle('show');
});

function scrollHeader(){
  if(this.scrollY >= 50){
    header.classList.add('scroll-nav');
  }else{
    header.classList.remove('scroll-nav');
  }
}
window.addEventListener('scroll',scrollHeader);