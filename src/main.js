import './style.css';

const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const headerNav = document.querySelector('.header-nav');
const toolTip = document.querySelector('.tooltip');
const toolTipText = document.querySelector('.tooltiptext');
let prevScrollpos = window.scrollY;
const header = document.getElementsByTagName('header');

window.onscroll = () => {
  const currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    header[0].style.top = '0';
    if (window.innerWidth < 1024) headerNav.classList.remove('visible');
  } else {
    header[0].style.top = '-1000px';
  }
  prevScrollpos = currentScrollPos;
};

hamburgerMenuButton.addEventListener('click', () => {
  headerNav.classList.toggle('visible');
});

toolTip.addEventListener('click', (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(event.target.getAttribute('href')).then(() => {
    toolTipText.textContent = 'E-mail copied.';
    setTimeout(() => {
      toolTipText.textContent = 'Click to copy e-mail address';
    }, 1000);
  });
});
