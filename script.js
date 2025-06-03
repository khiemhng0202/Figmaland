
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    socialIcons.classList.toggle('active');
  });
});
// This script toggles the visibility of the navigation links and social icons when the burger menu is clicked.


let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Optional: auto-play every 5 seconds
setInterval(() => {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}, 5000);
// This script handles the image slider functionality, allowing users to navigate through slides and automatically cycling through them every 5 seconds.