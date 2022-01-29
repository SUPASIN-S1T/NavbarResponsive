let navbarMenu = document.querySelector(".menu-bar");
let btnToggle = document.querySelector(".btn-toggle");

btnToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("menu-bar-active");
});
