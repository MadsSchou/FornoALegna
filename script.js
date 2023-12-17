function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

/*Arrow in the buttom right corner that take you back to the top*/
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

// Burgermenu
const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log(menuShown);
    btn.textContent = "☰";
  } else {
    console.log(menuShown);
    btn.textContent = "☰";
  }
}
btn.addEventListener("click", toggleMenu);
