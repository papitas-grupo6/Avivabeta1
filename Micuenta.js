// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Obtén elementos del DOM
  const accountModal = document.getElementById("accountModal");
  const myAccountBtn = document.getElementById("myAccountBtn");
  const closeModal = document.getElementById("closeModal");

  // Abre el modal cuando se hace clic en "Mi cuenta"
  myAccountBtn.addEventListener("click", () => {
    accountModal.style.display = "block";
  });

  // Cierra el modal cuando se hace clic en la "X"
  closeModal.addEventListener("click", () => {
    accountModal.style.display = "none";
  });

  // Cierra el modal cuando se hace clic fuera del modal
  window.addEventListener("click", (event) => {
    if (event.target === accountModal) {
      accountModal.style.display = "none";
    }
  });
});
