
/*scroll navbar */
window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("color",window.scrollY > 0);
})

/*auto type word*/
var typed = new Typed(".input",{
    strings:["DAMITHA DILSHAN",],
    typeSpeed:120,
    backSpeed:90,
    loop: true
})