
// Animation Trigger
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.about2');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(aboutSection);
});


document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about1');
  
  // Intersection Observer for scroll trigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  observer.observe(aboutSection);

  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bg = document.querySelector('.about1__bg');
    if (bg) {
      bg.style.transform = `scale(1.05) translateY(${scrollY * 0.3}px)`;
    }
  });
});



// about3 function //
// Animation Trigger
const about3Section = document.querySelector('.about3');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

observer.observe(about3Section);



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