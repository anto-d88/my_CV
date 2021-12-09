// MENU DEROULANT //****************************
window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});


function toggleMenu(){
const menuToggle = document.querySelector('.menuToggle');
const navbar = document.querySelector('.navbar');
navbar.classList.toggle('active');
menuToggle.classList.toggle('active');
}

// CHANGE DE BANNIERE //*****************************
const changeBanniere = document.querySelector(".contenu");

function interf() {
    changeBanniere.style.display = "flex";
};

setTimeout(interf, 1000);

const icone = document.querySelector(".icone");

function iconn() {
    icone.style.display = "grid";
};
setTimeout(iconn, 1500);