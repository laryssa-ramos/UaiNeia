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


var swiper = new Swiper(".slide-content_1", {
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
      nextEl: ".btn-next_1",
      prevEl: ".btn-prev_1",
    },

    breakpoints:{

        0:{
            slidesPerView: 1,
        },

        321:{
            slidesPerView: 2,
        },

        600:{
            slidesPerView: 3,
        },

        1187:{
            slidesPerView: 4,
        },
    }

  });

  var swiper = new Swiper(".slide-content_2", {
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
      nextEl: ".btn-next_2",
      prevEl: ".btn-prev_2",
    },

    breakpoints:{

        0:{
            slidesPerView: 1,
        },

        321:{
            slidesPerView: 2,
        },

        600:{
            slidesPerView: 3,
        },

        1187:{
            slidesPerView: 4,
        },
    }

  });


  var swiper = new Swiper(".slide-content_3", {
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
      nextEl: ".btn-next_3",
      prevEl: ".btn-prev_3",
    },

    breakpoints:{

        0:{
            slidesPerView: 1,
        },

        321:{
            slidesPerView: 2,
        },

        600:{
            slidesPerView: 3,
        },

        1187:{
            slidesPerView: 4,
        },
    }

  });



// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     //reset:true
// })

// sr.reveal('.home_image, .home_content, .slide-content_1,  .slide-content_2, .slide-content_3')
// sr.reveal('.box', {interval: 100})
// sr.reveal('.about_image, .phone', {origin: 'left'})
// sr.reveal('.about_text, .gmail', {origin: 'right'})





