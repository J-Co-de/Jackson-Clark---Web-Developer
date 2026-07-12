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
    const nav = document.querySelector("nav");

    if (window.scrollY > lastScrollY) {
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
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setRealVH();


