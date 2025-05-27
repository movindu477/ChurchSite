document.addEventListener('DOMContentLoaded', function() {
  const heroHeading = document.getElementById('hero-heading');
  const heroParagraph = document.getElementById('hero-paragraph');
  
  function animateElements() {
    // Reset state
    heroHeading.style.opacity = '0';
    heroHeading.style.transform = 'translate(-50%, 100px)';
    heroParagraph.style.opacity = '0';
    heroParagraph.style.transform = 'translate(-50%, 100px)';
    
    // Animate heading
    setTimeout(() => {
      heroHeading.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
      heroHeading.style.opacity = '1';
      heroHeading.style.transform = 'translate(-50%, 0)';
    }, 100);
    
    // Animate paragraph with slight delay
    setTimeout(() => {
      heroParagraph.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
      heroParagraph.style.opacity = '1';
      heroParagraph.style.transform = 'translate(-50%, 0)';
    }, 300);
    
    // Hide after delay
    setTimeout(() => {
      heroHeading.style.transition = 'opacity 1.5s ease-in, transform 1.5s ease-in';
      heroParagraph.style.transition = 'opacity 1.5s ease-in, transform 1.5s ease-in';
      heroHeading.style.opacity = '0';
      heroHeading.style.transform = 'translate(-50%, -100px)';
      heroParagraph.style.opacity = '0';
      heroParagraph.style.transform = 'translate(-50%, -100px)';
      
      // Restart animation
      setTimeout(animateElements, 2000);
    }, 5000);
  }
  
  // Start animation
  animateElements();
});