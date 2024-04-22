import './style.css';

const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const headerNav = document.querySelector('.header-nav');
const toolTip = document.querySelector('.tooltip');
const toolTipText = document.querySelector('.tooltiptext');
let prevScrollpos = window.scrollY;
const header = document.getElementsByTagName('header');
const themeButton = document.querySelector('.theme-button');

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

themeButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    themeButton.textContent = 'Dark Mode';
  } else themeButton.textContent = 'Light Mode';
  document.body.classList.toggle('dark-mode');
});

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  themeButton.textContent = 'Light Mode';
  document.body.classList.add('dark-mode');
} else themeButton.textContent = 'Dark Mode';
