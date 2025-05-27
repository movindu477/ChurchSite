
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