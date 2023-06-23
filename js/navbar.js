//nav bar
let  menubar = document.getElementsByClassName("menu")[0];
let navlinks = document.getElementsByClassName("nav-links")[0];
let cross = document.getElementsByClassName("cross")[0];

menubar.addEventListener("click", () => {
    navlinks.classList.toggle("menuToggle");
    menubar.classList.toggle("menuToggle");
    cross.classList.toggle("menuToggle");
});

cross.addEventListener("click", () => {
    navlinks.classList.toggle("menuToggle");
    menubar.classList.toggle("menuToggle");
    cross.classList.toggle("menuToggle");
})

//redirect
let logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", () => {
    window.location.href="index.html";
})

