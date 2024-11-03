const openBtn = document.querySelector("#sidenavOpenBtn"),
    closeBtn = document.querySelector("#sidenavCloseBtn");
let  menu = document.querySelector("#menu"),
    nav = document.querySelector("#nav");


openBtn.addEventListener("click", () => {
    menu.style.display = "block";
    nav.style.position = "absolute"
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    nav.style.position = "static"
})