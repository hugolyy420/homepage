/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const headerNav = document.querySelector('.header-nav');
const toolTip = document.querySelector('.tooltip');
const toolTipText = document.querySelector('.tooltiptext');
let prevScrollpos = window.scrollY;
const header = document.getElementsByTagName('header');
const themeButton = document.querySelector('.theme-button');
const themeIcon = document.createElement('i');

window.onload = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    themeIcon.className = 'fa-solid fa-sun';
    themeButton.textContent = 'Light Mode';
    themeButton.append(themeIcon);
    document.body.classList.add('dark-mode');
  } else {
    themeIcon.className = 'fa-solid fa-moon';
    themeButton.textContent = 'Dark Mode';
    themeButton.append(themeIcon);
  }
};

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
    themeIcon.className = 'fa-solid fa-moon';
    themeButton.append(themeIcon);
  } else {
    themeButton.textContent = 'Light Mode';
    themeIcon.className = 'fa-solid fa-sun';
    themeButton.append(themeIcon);
  }
  document.body.classList.toggle('dark-mode');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGhhbWJ1cmdlck1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUtYnV0dG9uJyk7XG5jb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW5hdicpO1xuY29uc3QgdG9vbFRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwJyk7XG5jb25zdCB0b29sVGlwVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwdGV4dCcpO1xubGV0IHByZXZTY3JvbGxwb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKTtcbmNvbnN0IHRoZW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWJ1dHRvbicpO1xuY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBpZiAoXG4gICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbiAgKSB7XG4gICAgdGhlbWVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1zdW4nO1xuICAgIHRoZW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ0xpZ2h0IE1vZGUnO1xuICAgIHRoZW1lQnV0dG9uLmFwcGVuZCh0aGVtZUljb24pO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhlbWVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1tb29uJztcbiAgICB0aGVtZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEYXJrIE1vZGUnO1xuICAgIHRoZW1lQnV0dG9uLmFwcGVuZCh0aGVtZUljb24pO1xuICB9XG59O1xuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgaGVhZGVyWzBdLnN0eWxlLnRvcCA9ICcwJztcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0KSBoZWFkZXJOYXYuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlclswXS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gIH1cbiAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG59O1xuXG5oYW1idXJnZXJNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBoZWFkZXJOYXYuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufSk7XG5cbnRvb2xUaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKS50aGVuKCgpID0+IHtcbiAgICB0b29sVGlwVGV4dC50ZXh0Q29udGVudCA9ICdFLW1haWwgY29waWVkLic7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b29sVGlwVGV4dC50ZXh0Q29udGVudCA9ICdDbGljayB0byBjb3B5IGUtbWFpbCBhZGRyZXNzJztcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59KTtcblxudGhlbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJykpIHtcbiAgICB0aGVtZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEYXJrIE1vZGUnO1xuICAgIHRoZW1lSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtbW9vbic7XG4gICAgdGhlbWVCdXR0b24uYXBwZW5kKHRoZW1lSWNvbik7XG4gIH0gZWxzZSB7XG4gICAgdGhlbWVCdXR0b24udGV4dENvbnRlbnQgPSAnTGlnaHQgTW9kZSc7XG4gICAgdGhlbWVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1zdW4nO1xuICAgIHRoZW1lQnV0dG9uLmFwcGVuZCh0aGVtZUljb24pO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==