let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

// CAROUSEL IMAGES

const carouselContainer = document.querySelector('.carousel-container');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

carouselPrev.addEventListener('click', function(event) {
event.preventDefault();
    carouselContainer.scrollBy({
        left: -carouselContainer.offsetWidth,
        behavior: 'smooth'
    });
});

carouselNext.addEventListener('click', function(event) {
event.preventDefault();
    carouselContainer.scrollBy({
        left: carouselContainer.offsetWidth,
        behavior: 'smooth'
    });
});
