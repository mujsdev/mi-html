const button = document.getElementById("button");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  sidebar.classList.toggle("sidebar--active");
  main.classList.toggle("main--sidebar-active");
  e.currentTarget.classList.toggle("menu--active");
});
