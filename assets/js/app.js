const openBtn = document.querySelector("#sidenavOpenBtn"),
    closeBtn = document.querySelector("#sidenavCloseBtn");
let  menu = document.querySelector("#menu");
openBtn.addEventListener("click", () => {
    menu.style.display = "block";
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
})