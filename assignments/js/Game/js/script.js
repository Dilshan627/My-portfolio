var c1Number = 0;
var c1startNumber = 0;
var c2Number = 0;
var c2startNumber = 0;
var c1RunImageNumber = 0;
var c1RunX = 50;
var c2RunImageNumber = 0;
var c2RunX = 50;
/*window.addEventListener("load", function () {
    // document.querySelector('.load').style.display = 'none';
    /!* animateManStart();
     barriers();
     ring();*!/

});*/

document.getElementById("btnPlay").focus();

document.getElementById("btnPlay").addEventListener("click", function () {
    document.querySelector('.play').style.display = 'none';

    character1Start();
    character2Start();
    document.addEventListener("keypress", keyCheck);
});

var c1 = document.getElementById("character1");
var c2 = document.getElementById("character2");

function character1() {
    c1Number = c1Number + 1;
    if (c1Number == 10) {
        c1Number = 0;
    }
    c1.src = "assets/ninjaadventurenew/png/Idle__00" + c1Number + ".png";
}

function character1Start() {
    c1startNumber = setInterval(character1, 300);
}

function character2() {
    c2Number = c2Number + 1;
    if (c2Number == 10) {
        c2Number = 0;
    }
    c2.src = "assets/ninjagirlnew/png/Idle__00" + c2Number + ".png";
}

function character2Start() {
    c2startNumber = setInterval(character2, 200);
}

function c1Run() {
    // clearInterval(c1startNumber);
    //c1startNumber=1;

    c1RunImageNumber = c1RunImageNumber + 1;
    if (c1RunImageNumber == 10) {
        c1RunImageNumber = 0;
    }
    c1.src = "assets/ninjaadventurenew/png/Run__00" + c1RunImageNumber + ".png";

    if (c1RunX <= 1500) {
        c1RunX = c1RunX + 6;
        document.getElementById("character1").style.marginLeft = c1RunX + "px";
    }
}

function c1Back() {
    c1RunImageNumber = c1RunImageNumber + 1;
    if (c1RunImageNumber == 10) {
        c1RunImageNumber = 0;
    }
    c1.src = "assets/ninjaadventurenew/png/Run__00" + c1RunImageNumber + ".png";

    if (c1RunX >= 10) {
        c1RunX = c1RunX - 6;
        document.getElementById("character1").style.marginLeft = c1RunX + "px";
    }
}

function c2Run() {
    c2RunImageNumber = c2RunImageNumber + 1;
    if (c2RunImageNumber == 10) {
        c2RunImageNumber = 0;
    }
    c2.src = "assets/ninjagirlnew/png/Run__00" + c2RunImageNumber + ".png";

    if (c2RunX <= 1500) {
        c2RunX = c2RunX + 6;
        document.getElementById("character2").style.marginRight = c2RunX + "px";
    }
}

function c2Back() {
    c2RunImageNumber = c2RunImageNumber + 1;
    if (c2RunImageNumber == 10) {
        c2RunImageNumber = 0;
    }
    c2.src = "assets/ninjagirlnew/png/Run__00" + c2RunImageNumber + ".png";

    if (c2RunX >= 10) {
        c2RunX = c2RunX - 6;
        document.getElementById("character2").style.marginRight = c2RunX + "px";
    }
}

function keyCheck(event) {
    var keyCode = event.which;

    console.log(keyCode);

    if (keyCode == 100) {
        c1Run();
        console.log(keyCode);
    }
    if (keyCode == 97) {
        c1Back();
       console.log(keyCode);
    }
    if (keyCode == 52) {
        c2Run();
        console.log(keyCode);
    }
    if (keyCode == 54) {
        c2Back();
        console.log(keyCode);
    }
    if (keyCode == 101) {
        c1AttackStart();
        console.log(keyCode);
    }
    if (keyCode == 55) {
        c2AttackStart();
        console.log(keyCode);
    }
}

let c1AttackX = 0;
let c1AttackStartX = 0;

let c2AttackX = 0;
let c2AttackStartX = 0;

function c1Attack() {
    c1AttackX=c1AttackX+1;
    if (c1AttackX == 10) {
       clearInterval(c1AttackStartX);
        c1AttackStartX=1;
       c1AttackX = 0;
    }
    c1.src = "assets/ninjaadventurenew/png/Attack__00" + c1AttackX + ".png";
}

function c1AttackStart() {
    c1AttackStartX = setInterval(c1Attack, 100);
}

function c2Attack() {
    c2AttackX=c2AttackX+1;

    if (c2AttackX == 10) {
        clearInterval(c2AttackStartX);
        c2AttackStartX=1;
        c2AttackX = 0;
    }
    c2.src = "assets/ninjagirlnew/png/Attack__00" + c2AttackX + ".png";
}

function c2AttackStart() {
    c2AttackStartX = setInterval(c2Attack, 100);
}
