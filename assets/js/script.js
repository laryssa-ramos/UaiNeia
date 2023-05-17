// MENU MOBILE

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


var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 18,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{

        0:{
            slidesPerView: 1,
        },

        520:{
            slidesPerView: 2,
        },

        950:{
            slidesPerView: 4,
        },
    }

  });













