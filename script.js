document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("disclaimer-modal");
  const closeBtn = document.getElementById("close-modal");

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
});

if (window.innerWidth < window.innerHeight) {
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-navbar");

    if (window.scrollY > lastScrollY && window.scrollY >= 10) {
      // scrolling down
      nav.classList.add("hide");
    } else {
      // scrolling up
      nav.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
  });
}

function setRealVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setRealVH();

// Use orientationchange with a delay so the browser has time to update innerHeight
window.visualViewport.addEventListener("resize", setRealVH);

// Hamburger menu logic
const hamButton = document.querySelector("#main-navbar .hamburger");
const hamExitIcon = document.getElementById("hamburger-exit");
const hamNavbar = document.getElementById("hamburger-navbar");

if (hamButton && hamExitIcon && hamNavbar) {
  // Open menu
  hamButton.addEventListener("click", () => {
    hamNavbar.removeAttribute("hidden");
    hamButton.setAttribute("aria-expanded", "true");
    hamButton.setAttribute("aria-label", "Close Menu");
  });

  // Close menu
  hamExitIcon.addEventListener("click", () => {
    hamNavbar.setAttribute("hidden", "");
    hamButton.setAttribute("aria-expanded", "false");
    hamButton.setAttribute("aria-label", "Open Menu");
  });
}
