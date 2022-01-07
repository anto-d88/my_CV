const infoContact = {
    Salutation: "<h4>Hello!</h4>",
    Message: "<p>Pour me contacter, </br> Clickez ici :)</p>",
    mailLien: "Contact",
}


// MENU DEROULANT //****************************
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}


function generate() {


    //SECTION CONTENANT DE LA MODALE CONTACT
    let container = document.createElement("section");
    container.setAttribute('class', "modalContact");
    container.innerHTML = infoContact.Salutation + "</br>" + infoContact.Message;
    //BOUTON DE CONTACT
    let boutonContact = document.createElement("button");
    boutonContact.setAttribute('class', "buttContact");
    //LIEN DU BOUTTON
    let lienMail = document.createElement("a");
    lienMail.setAttribute('href', "mailto:antonio_robles_88@outlook.com");
    lienMail.setAttribute('class', "Mail");
    lienMail.innerHTML = infoContact.mailLien;

    modcont.appendChild(container);
    container.appendChild(boutonContact);
    boutonContact.appendChild(lienMail);


}

generate();

const sectionContact = document.querySelector(".Contact");


sectionContact.onclick = function () {
    let sect = document.querySelector(".cardcont");
    sect.style.display = "grid";

    window.onclick = function (event) {
        if (event.target == sect) {
            sect.style.display = "none";
            document.querySelector(".cardcont").style.display = "none";
        }
    }

}
sectionContact.onclick = function () {
    let sect = document.querySelector(".cardcont");
    sect.style.display = "grid";

    window.onclick = function (event) {
        if (event.target == sect) {
            sect.style.display = "none";
            document.querySelector(".cardcont").style.display = "none";
        }
    }

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
