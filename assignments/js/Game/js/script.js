var c1Number = 0;
var c1startNumber = 0;
var c2Number = 0;
var c2startNumber = 0;
var c1RunImageNumber = 0;
var c1RunX = 50;

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
    c1startNumber = setInterval(character1, 200);
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

function keyCheck(event) {
    var keyCode = event.which;

    if (keyCode == 100) {
        c1Run();
        console.log(keyCode);
    }
    if (keyCode == 97) {
        c1Back();
       console.log(keyCode);

    }
}

