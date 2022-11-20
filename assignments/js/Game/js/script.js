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
    display();
    document.addEventListener("keypress", keyCheck);
});

function display() {
    $(".lifeLineBoy").css("display", "block");
    $(".lifeLineGirl").css("display", "block");
    $(".vs").css("display", "block");
}

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

    if (c1RunX <= 716) {
        c1RunX = c1RunX + 10;
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
        c1RunX = c1RunX - 10;
        document.getElementById("character1").style.marginLeft = c1RunX + "px";
    }
}

function c2Run() {
    c2RunImageNumber = c2RunImageNumber + 1;
    if (c2RunImageNumber == 10) {
        c2RunImageNumber = 0;
    }
    c2.src = "assets/ninjagirlnew/png/Run__00" + c2RunImageNumber + ".png";

    if (c2RunX <= 716) {
        c2RunX = c2RunX + 10;
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
        c2RunX = c2RunX - 10;
        document.getElementById("character2").style.marginRight = c2RunX + "px";
    }
}

function keyCheck(event) {
    var keyCode = event.which;

    console.log(keyCode);

    if (keyCode == 100) {
        c1Run();

    }
    if (keyCode == 97) {
        c1Back();
    }
    if (keyCode == 52) {
        c2Run();
    }
    if (keyCode == 54) {
        c2Back();
    }
    if (keyCode == 101) {
        c1Attack();
        boyLife();
    }
    if (keyCode == 55) {
        c2Attack();
        girlLife();
    }
    if (keyCode == 119) {
        //c1SlideStart();
    }
    if (keyCode == 50) {

    }
}

let c1AttackX = 0;
let c2AttackX = 0;

function c1Attack() {
    c1AttackX = c1AttackX + 1;
    if (c1AttackX == 10) {
        c1AttackX = 0;
    }
    c1.src = "assets/ninjaadventurenew/png/Attack__00" + c1AttackX + ".png";
}

function c2Attack() {
    c2AttackX = c2AttackX + 1;
    if (c2AttackX == 10) {
        c2AttackX = 0;
    }
    c2.src = "assets/ninjagirlnew/png/Attack__00" + c2AttackX + ".png";
}


let lifeLineBoy = 200;
let lifeLineGirl = 200;

function boyLife() {
    if (c1RunX >= 700 && c2RunX >= 700) {
        lifeLineBoy = lifeLineBoy - 20;
        $(".lifeLineGirl").css("width", lifeLineBoy);
    }
}

function girlLife() {
    if (c1RunX >= 700 && c2RunX >= 700) {
        lifeLineGirl = lifeLineGirl - 20;
        $(".lifeLineBoy").css("width", lifeLineGirl);
    }
}

