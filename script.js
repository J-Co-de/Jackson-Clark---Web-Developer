function lockHeight() {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  );
}

window.addEventListener('resize', lockHeight);
lockHeight();