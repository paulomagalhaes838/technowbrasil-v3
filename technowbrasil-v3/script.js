// script.js - Technow Brasil V3

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Tema escuro/claro toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      body.classList.toggle("light-mode");
    });
  }

  // Reveal animation ao rolar a página
  const revealElements = document.querySelectorAll(".card, .blog-post");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Estilos iniciais para fade/reveal
  revealElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease-out";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
