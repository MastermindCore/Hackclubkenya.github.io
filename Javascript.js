document.addEventListener("DOMContentLoaded", function() {
  const intro = document.getElementById("intro");

  // Hide intro after 5 seconds
  setTimeout(function() {
    intro.classList.add("hidden");
    document.body.style.overflow = "auto"; // Restore scrolling
  }, 5000); // Change 5000 to the desired duration in milliseconds
});

