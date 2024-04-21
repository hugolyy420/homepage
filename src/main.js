import './style.css';

const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const headerNav = document.querySelector('.header-nav');

hamburgerMenuButton.addEventListener('click', () => {
  headerNav.classList.toggle('visible');
});
