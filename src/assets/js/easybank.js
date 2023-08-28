const collapse = document.querySelector("ul");
const navToggle = document.querySelector(".hamburger");

const Menu = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", Menu);