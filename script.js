document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("disclaimer-modal");
  const closeBtn = document.getElementById("close-modal");

  closeBtn.onclick = function() {
    modal.style.display = "none";
  };
});