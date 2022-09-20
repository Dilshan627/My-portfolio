
/*scroll navbar */
window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0);
})

/*auto type word*/
var typed = new Typed(".input",{
    strings:["Full Stack Developer",],
    typeSpeed:120,
    backSpeed:90,
    loop: true
})

/*swiper*/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
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
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});