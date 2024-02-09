// Inizio modifica conta numero brani
function createInterval(numeroFinale, el){
    let conta = 0;
    let stop = setInterval( ()=>{
        if(conta < numeroFinale){
            conta++
            el.innerHTML = conta;
        } else {
            clearInterval(stop);
        }
    }, 500)
}
createInterval();
let ht = document.querySelector('#meteora');
createInterval(12, meteora);
// Fine modifica conta numero brani

// Inizio creazione swaper
var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
        },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
// Fine creazione swiper

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