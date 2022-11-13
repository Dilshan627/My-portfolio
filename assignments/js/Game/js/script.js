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
        runImageNumber = 1;
    }
    man.src = "assets/character/Run%20(" + runImageNumber + ").png";
}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 120);
    clearInterval(animateNumber);
}

function jumpAnimation() {
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6) {
        marginTop = marginTop - 20;
        man.style.marginTop = marginTop + "px";
    }
    if (jumpImageNumber >= 7) {
        marginTop = marginTop + 20;
        man.style.marginTop = marginTop + "px";
    }

    if (jumpImageNumber == 11) {
        jumpImageNumber = 1;

        clearInterval(jumpAnimationNumber);

        runImageNumber = 1;
        jumpAnimationNumber = 1;
        runAnimationStart();
    }
    man.src = "assets/character/Jump%20(" + jumpImageNumber + ").png";
}

function jumpAnimationStart() {
    clearInterval(animateNumber);
    runImageNumber = 1;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation, 100);
}


function keyCheck(event) {
    var keyCode = event.which;

    if (keyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }
        if (moveBackgroundAnimation == 0) {
            moveBackgroundAnimation = setInterval(moveBackground, 100);
        }
    }
    if (keyCode == 32) {
        if (jumpImageNumber == 1) {
            jumpAnimationStart();
        }
        if (moveBackgroundAnimation == 0) {
            moveBackgroundAnimation = setInterval(moveBackground, 100);
        }
    }

    if (keyCode == 100) {
        forWord();
    }
    if (keyCode == 97) {
        backWord();
    }
}


function forWord() {
    if (marginLeftGo <= 1718) {
        marginLeftGo = marginLeftGo + 3;
        document.getElementById("character").style.marginLeft = marginLeftGo + "px";
    }
}

function backWord() {
    if (marginLeftGo >= -20) {
        marginLeftGo = marginLeftGo - 4;
        document.getElementById("character").style.marginLeft = marginLeftGo + "px";
    }
}

function moveBackground() {
    imagePositionX = imagePositionX - 20;
    document.getElementById("bg").style.backgroundPositionX = imagePositionX + "px";
}

function barriers() {

}

function ring() {

}