const burger = document.getElementById('burger');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
}); 
// This script toggles the mobile navigation menu when the burger icon is clicked and closes it when the close button is clicked.




$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
// This script initializes the Slick carousel with center mode and responsive settings.