document.addEventListener("DOMContentLoaded", function() {
  const animatedBox = document.getElementById("animated-box");
  let position = 0;
  const speed = 2; // Adjust the speed of animation (higher value = faster)

  function moveBox() {
    position += speed;
    animatedBox.style.left = position + "px";
    
    // Reset position when it goes out of the window
    if (position > window.innerWidth) {
      position = -100;
    }
    
    requestAnimationFrame(moveBox);
  }

  // Start the animation
  moveBox();
});


