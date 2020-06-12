const menuMobileBtn = document.querySelector("header  .menu-mobile");
const navContainer = document.querySelector("nav");

menuMobileBtn.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("menu-opened");
});

const btnSwitcher = document.querySelector(".btn-switcher");
const bodyPage = document.querySelector("body");
const p = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");

btnSwitcher.addEventListener("change", () => {
  bodyPage.classList.toggle("dark-mode");
  p.forEach((item) => {
    item.classList.toggle("dark-mode--font");
  });
  h1.forEach((item) => {
    item.classList.toggle("dark-mode--font---h1");
  });
});

const contactBar = document.querySelector("#contact_bar");
const socials = document.querySelector(".socials");

contactBar.addEventListener("click", (e) => {
  e.preventDefault;
  socials.classList.toggle("show");
});
