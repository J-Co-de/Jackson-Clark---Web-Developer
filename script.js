document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("disclaimer-modal");
  const closeBtn = document.getElementById("close-modal");

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
});

function setRealVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setRealVH();
let lastScrollY = window.scrollY;
function navLift() {
  const nav = document.getElementById("main-navbar");

  if (window.scrollY > lastScrollY && window.scrollY >= 10) {
    // scrolling down
    nav.classList.add("hide");
  } else {
    // scrolling up
    nav.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
}
function enableNavLift() {
  const nav = document.getElementById("main-navbar");
  if (window.innerWidth < window.innerHeight) {
    window.addEventListener("scroll", navLift);
  } else {
    nav.classList.remove("hide");
    window.removeEventListener("scroll", navLift);
  }
}
// Use orientationchange with a dela so the browser has time to update innerHeight
enableNavLift();
window.visualViewport.addEventListener("resize", () => {
  setRealVH();
  enableNavLift();
});

// Hamburger menu logic
const hamButton = document.querySelector("#main-navbar .hamburger");
const hamExitIcon = document.getElementById("hamburger-exit");
const hamNavbar = document.getElementById("hamburger-navbar");
const resume = document.querySelector("#hamburger-navbar .resume-nav");
const links = document.querySelectorAll("#hamburger-nav-list a");
resume.addEventListener("click", () => {
  hamNavbar.setAttribute("hidden", "");
  hamButton.setAttribute("aria-expanded", "false");
  hamButton.setAttribute("aria-label", "Open Menu");
  console.log("helo");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    hamNavbar.setAttribute("hidden", "");
    hamButton.setAttribute("aria-expanded", "false");
    hamButton.setAttribute("aria-label", "Open Menu");
  }),
);
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
