document.addEventListener('DOMContentLoaded', function () {
  const mainImgDiv = document.querySelector('.mainimg');
  const heading = document.getElementById('hero-heading');
  const paragraph = document.getElementById('hero-paragraph');

  // Ensure animation is running initially
  heading.style.animationPlayState = 'running';
  paragraph.style.animationPlayState = 'running';

  // Pause animation on hover
  mainImgDiv.addEventListener('mouseenter', function () {
    heading.style.animationPlayState = 'paused';
    paragraph.style.animationPlayState = 'paused';
  });

  // Resume animation when mouse leaves
  mainImgDiv.addEventListener('mouseleave', function () {
    heading.style.animationPlayState = 'running';
    paragraph.style.animationPlayState = 'running';
  });
});