const burger = document.querySelector(".header-burger");
const burgerLinks = document.querySelector(".header-burger-links");

burger.addEventListener("click", function () {
  burgerLinks.classList.toggle("hidden");
});
