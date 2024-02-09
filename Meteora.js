// Scroll navbar scroll effect
let navbarNav = document.querySelector('#test');
let mainNav = document.querySelector('#mainNav');
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 0){
      mainNav.classList.remove('bg-black');
      mainNav.classList.add('red');
      mainNav.style.height = '100px';
      navbarNav.classList.remove('bg-black');
      navbarNav.classList.add('red');
    } else {
      mainNav.classList.remove('red');
      mainNav.classList.add('bg-black');
      mainNav.style.height = '87px';
      navbarNav.classList.add('bg-black');
      navbarNav.classList.remove('red');
    }
})
// Fine navbar scroll effect

