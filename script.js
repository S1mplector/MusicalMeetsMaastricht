window.addEventListener("load", function() {
  // Animate the buttons after ~1.8s
  setTimeout(() => {
    const buttons = document.querySelectorAll("#buttons-container .button-86");
    buttons.forEach((btn, index) => {
      btn.style.animation = `slideInLeft 0.8s ease forwards`;
      btn.style.animationDelay = `${index * 0.2}s`;
    });
  }, 1800);

  // No news animation trigger here. The CSS handles #latest-news now.
});
