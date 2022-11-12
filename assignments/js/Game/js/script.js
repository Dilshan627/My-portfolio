var man = document.getElementById("character");
let number = 0;
let animateNumber = 0;
let runImageNumber = 0;
let runAnimationNumber = 0;
let jumpImageNumber = 0;
let jumpAnimationNumber = 0;

document.addEventListener("keypress", keyCheck);
document.addEventListener("keyup", clear);

function clear(){
    clearInterval(runAnimationNumber);
    animateManStart();
}

function animateMan() {
    number = number + 1;
    if (number == 11) {
        number = 1
    }
    man.src = "assets/character/Idle%20(" + number + ").png";
}

function animateManStart() {
    animateNumber = setInterval(animateMan, 120);
}

function runAnimation() {
    runImageNumber = runImageNumber + 1;
    if (runImageNumber == 9) {
        runImageNumber = 1
    }
    man.src = "assets/character/Run%20(" + runImageNumber + ").png";
}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 120);
    clearInterval( animateNumber);
}

function jumpAnimation() {
    jumpImageNumber = jumpImageNumber + 1;
    if (jumpImageNumber == 11) {
        jumpImageNumber = 1
    }
    man.src = "assets/character/Jump%20(" + jumpImageNumber + ").png";
}

function jumpAnimationStart() {
    jumpAnimationNumber = setInterval(jumpAnimation, 120);
    clearInterval(animateNumber);
}


function keyCheck(event) {
    var keyCode = event.which;

    /*alert(event.which);*/

    if (keyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }
    }
}
