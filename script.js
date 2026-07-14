// ===============================
// Element References
// ===============================
const nav = document.getElementById("main-navbar");
const hamButton = document.querySelector("#main-navbar .hamburger");
const hamExitIcon = document.getElementById("hamburger-exit");
const hamNavbar = document.getElementById("hamburger-navbar");
const resume = document.querySelector("#hamburger-navbar .resume-nav");
const hamLinks = document.querySelectorAll("#hamburger-nav-list a");
const allLinks = document.querySelectorAll("a");

let navLocked = false;
let lastScrollY = window.scrollY;

// ===============================
// Modal Logic
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("disclaimer-modal");
  const closeBtn = document.getElementById("close-modal");

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
});

// ===============================
// Viewport Height Fix
// ===============================
function setRealVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setRealVH();

// ===============================
// Navbar Lift on Scroll
// ===============================
function navLift() {
  if (navLocked) return;

  if (window.scrollY > lastScrollY && window.scrollY >= 100) {
    nav.classList.add("hide"); // scrolling down
  } else {
    nav.classList.remove("hide"); // scrolling up
  }

  lastScrollY = window.scrollY;
}

function enableNavLift() {
  if (window.innerWidth < window.innerHeight) {
    window.addEventListener("scroll", navLift);
  } else {
    nav.classList.remove("hide");
    window.removeEventListener("scroll", navLift);
  }
}
enableNavLift();

window.visualViewport.addEventListener("resize", () => {
  enableNavLift();
});

window.addEventListener("orientationchange", () => {
  setTimeout(setRealVH,100)
});

// ===============================
// Hamburger Menu Logic
// ===============================
function closeHamburgerMenu() {
  hamNavbar.setAttribute("hidden", "");
  hamButton.setAttribute("aria-expanded", "false");
  hamButton.setAttribute("aria-label", "Open Menu");
}

// Resume link closes menu
resume.addEventListener("click", () => {
  closeHamburgerMenu();
});

// Any hamburger link closes menu
hamLinks.forEach((link) => link.addEventListener("click", closeHamburgerMenu));

// Open / Close buttons
if (hamButton && hamExitIcon && hamNavbar) {
  hamButton.addEventListener("click", () => {
    hamNavbar.removeAttribute("hidden");
    hamButton.setAttribute("aria-expanded", "true");
    hamButton.setAttribute("aria-label", "Close Menu");
  });

  hamExitIcon.addEventListener("click", closeHamburgerMenu);
}

// ===============================
// Auto-hide Navbar on Link Click (Mobile Portrait)
// ===============================

const linkNavHide = (link) => {
  if (!link.target && window.innerWidth < window.innerHeight) {
    nav.classList.add("hide");
    navLocked = true;
    setTimeout(() => (navLocked = false), 1000);
  }
};

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    linkNavHide(link);
  });
});

// ===============================
// Contact Form Validation
// ===============================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const nameInput = document.getElementById("name");
    const namePattern = /^[A-Z][a-zA-Z']+(?: [A-Z][a-zA-Z']+)+$/;

    if (!namePattern.test(nameInput.value)) {
      e.preventDefault();
      nameInput.setCustomValidity(
        "Enter your full name with capitalized words, like John Doe.",
      );

      // Safari/older browsers need the reportValidity() call to show the bubble
      if (typeof nameInput.reportValidity === "function") {
        nameInput.reportValidity();
      }

      return;
    }

    nameInput.setCustomValidity("");
  });
}
