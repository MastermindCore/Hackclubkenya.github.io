document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.getElementById("loadingScreen");

  // Show loading screen
  loadingScreen.classList.remove("hidden");

  // Hide loading screen when page has fully loaded
  window.addEventListener("load", function() {
    loadingScreen.classList.add("hidden");
  });
});

