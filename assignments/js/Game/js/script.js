let number = 0;
let animateNumber = 0;
let runImageNumber = 0;
let runAnimationNumber = 0;
let jumpImageNumber = 1;
let jumpAnimationNumber = 0;
let moveBackgroundAnimation = 0;
let imagePositionX = 0;
let marginTop = 660;
var marginLeftGo = 78;

window.addEventListener("load", function () {
    // document.querySelector('.load').style.display = 'none';
    /* animateManStart();
     barriers();
     ring();*/

});

document.getElementById("btnPlay").focus();

document.getElementById("btnPlay").addEventListener("click", function () {
    document.querySelector('.play').style.display = 'none';

    animateManStart();
    barriers();
    ring();

    document.addEventListener("keypress", keyCheck);
});


var man = document.getElementById("character");

