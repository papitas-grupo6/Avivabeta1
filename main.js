document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarCenter = document.querySelector(".navbar-center");

  menuToggle.addEventListener("click", function () {
    navbarCenter.classList.toggle("active");
  });
});
