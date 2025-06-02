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



// top button functionality
// Get the button element
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when user scrolls down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll to top smoothly when button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  function setActiveLink() {
    // Remove active class from all links first
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Check current page
    const currentPath = window.location.pathname;
    let activeLink = null;
    
    // First try to find exact match
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPath.endsWith(linkPath)) {
        activeLink = link;
      }
    });
    
    // If no exact match, try partial match
    if (!activeLink) {
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath)) {
          activeLink = link;
        }
      });
    }
    
    // If still no match, use stored link
    if (!activeLink) {
      const storedLink = localStorage.getItem('activeNavLink');
      activeLink = document.querySelector(`.nav-link[href="${storedLink}"]`);
    }
    
    // Set active class
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
  
  // Set initial active link
  setActiveLink();
  
  // Add click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      localStorage.setItem('activeNavLink', this.getAttribute('href'));
      setActiveLink();
    });
  });
});