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

var carousel = document.querySelector('.carousel');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var slideWidth = carousel.clientWidth;

nextButton.addEventListener('click', function() {
carousel.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', function() {
carousel.scrollLeft -= slideWidth;
});