// loading ring
window.addEventListener("load", function () {
    document.querySelector('.load').style.display = 'none';
});


/*scroll navbar */
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

/*auto type word*/
var typed = new Typed(".input", {
    strings: ["Full Stack Developer",],
    typeSpeed: 120,
    backSpeed: 90,
    loop: true
});

/*navbar button clock color*/
document.getElementById("btn1").style.borderBottom = "2px solid #615CFD";
document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("btn1").style.borderBottom = "2px solid #615CFD";
    document.getElementById("btn2").style.borderBottom = "none";
    document.getElementById("btn3").style.borderBottom = "none";
    document.getElementById("btn4").style.borderBottom = "none";
    document.getElementById("btn5").style.borderBottom = "none";
    document.getElementById("btn6").style.borderBottom = "none";
});
document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("btn1").style.borderBottom = "none";
    document.getElementById("btn2").style.borderBottom = "2px solid #615CFD";
    document.getElementById("btn3").style.borderBottom = "none";
    document.getElementById("btn4").style.borderBottom = "none";
    document.getElementById("btn5").style.borderBottom = "none";
    document.getElementById("btn6").style.borderBottom = "none";
});
document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("btn1").style.borderBottom = "none";
    document.getElementById("btn2").style.borderBottom = "none";
    document.getElementById("btn3").style.borderBottom = "2px solid #615CFD";
    document.getElementById("btn4").style.borderBottom = "none";
    document.getElementById("btn5").style.borderBottom = "none";
    document.getElementById("btn6").style.borderBottom = "none";
});
document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("btn1").style.borderBottom = "none";
    document.getElementById("btn2").style.borderBottom = "none";
    document.getElementById("btn3").style.borderBottom = "none";
    document.getElementById("btn4").style.borderBottom = "2px solid #615CFD";
    document.getElementById("btn5").style.borderBottom = "none";
    document.getElementById("btn6").style.borderBottom = "none";
});
document.getElementById("btn5").addEventListener("click", function () {
    document.getElementById("btn1").style.borderBottom = "none";
    document.getElementById("btn2").style.borderBottom = "none";
    document.getElementById("btn3").style.borderBottom = "none";
    document.getElementById("btn4").style.borderBottom = "none";
    document.getElementById("btn5").style.borderBottom = "2px solid #615CFD";
    document.getElementById("btn6").style.borderBottom = "none";
});
document.getElementById("btn6").addEventListener("click", function () {
    document.getElementById("btn1").style.borderBottom = "none";
    document.getElementById("btn2").style.borderBottom = "none";
    document.getElementById("btn3").style.borderBottom = "none";
    document.getElementById("btn4").style.borderBottom = "none";
    document.getElementById("btn5").style.borderBottom = "none";
    document.getElementById("btn6").style.borderBottom = "2px solid #615CFD";
});

/*
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

WebCifarIcon.addEventListener("click", () => {
    WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
    WebCifarEl.classList.remove("active");
});
*/


/*slider*/
var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    }

    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    }

    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
}

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    }

    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
}