
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    socialIcons.classList.toggle('active');
  });
});
// This script toggles the visibility of the navigation links and social icons when the burger menu is clicked.