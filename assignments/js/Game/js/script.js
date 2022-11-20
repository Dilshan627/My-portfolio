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

});


var c1Number = 0;
var c1startNumber;
var c2Number = 0;
var c2startNumber;

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



function keyboard() {

}
