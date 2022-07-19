/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = () => {
  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      const icon = this.querySelector('i');
      const plus = document.createElement('I');
      plus.setAttribute('aria-hidden', 'true');
      plus.classList.add('fa', 'fa-plus');
      const minus = document.createElement('I');
      minus.setAttribute('aria-hidden', 'true');
      minus.classList.add('fa', 'fa-minus');
      this.classList.toggle("active");
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        this.classList.remove('accordion_active');
        panel.style.display = "none";
        icon.remove();
        this.appendChild(plus);
      } else {
        this.classList.add('accordion_active');
        panel.style.display = "block";
        icon.remove();
        this.appendChild(minus);
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customSelect": () => (/* binding */ customSelect),
/* harmony export */   "customSelect2": () => (/* binding */ customSelect2)
/* harmony export */ });
//Sort select
const customSelect = selector => {
  let x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/

  x = document.getElementsByClassName(selector);
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/

    a = document.createElement("DIV");

    if (selector === 'custom-select') {
      a.setAttribute("class", "select-selected");
    } else if (selector === 'custom-select2') {
      a.setAttribute("class", "select-selected2");
    }

    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");

    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;

            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }

            this.setAttribute("class", "same-as-selected");
            break;
          }
        }

        h.click();
      });
      b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    let x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }

    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/


  document.addEventListener("click", closeAllSelect);
}; //Filter select

const customSelect2 = selector => {
  let x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class in "selector":*/

  x = document.getElementsByClassName(selector);
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected2");
    a.setAttribute("id", i);
    const inner = document.createElement("DIV");
    inner.classList.add("selected-item2");
    inner.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    a.appendChild(inner);
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items2 select-hide");

    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;

            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }

            this.setAttribute("class", "same-as-selected");
            break;
          }
        }

        h.parentNode.classList.remove('select-arrow-active'); // console.log(this, "this");

        this.parentNode.parentNode.parentNode.style.border = '1px solid #df4e3c';
      });
      b.appendChild(c);
    }

    a.appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation(); // console.log(this, "from click");

      closeAllSelect(this); // if(i === 1) {
      //     console.log(this, "this");
      // }

      this.querySelector('.select-items2').classList.toggle("select-hide"); // console.log(this.querySelector('.select-items2'));

      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    // console.log(elmnt, "elmnt in close");

    /*a function that will close all select boxes in the document,
    except the current select box:*/
    let x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName("select-items2"); // console.log(x, "x");

    y = document.getElementsByClassName("select-selected2");
    xl = x.length; //5

    yl = y.length; //5 

    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        console.log(y[i], "y[i]");
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    } // console.log(arrNo, 'arrNo');


    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/


  document.addEventListener("click", closeAllSelect);
};

/***/ }),

/***/ "./src/js/modules/validateEmail.js":
/*!*****************************************!*\
  !*** ./src/js/modules/validateEmail.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const validateEmail = selector => {
  const email = document.querySelector(selector),
        icon1 = document.querySelector('.input-error'),
        icon2 = document.querySelector('.input-success'),
        errorText = document.querySelector('.error-text'),
        btn = document.querySelector('#subscribe-btn');

  email.onkeydown = function () {
    const regEx = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;

    if (regEx.test(email.value)) {
      email.style.borderColor = '#507a36';
      icon1.style.display = 'none';
      icon2.style.display = 'block';
      btn.removeAttribute('disabled');
      errorText.style.display = 'none';
    } else {
      email.style.borderColor = '#df4e3c';
      btn.setAttribute('disabled', true);
      icon1.style.display = 'block';
      icon2.style.display = 'none';
      errorText.style.display = 'block';
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateEmail);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/select */ "./src/js/modules/select.js");
/* harmony import */ var _modules_validateEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validateEmail */ "./src/js/modules/validateEmail.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_select__WEBPACK_IMPORTED_MODULE_1__.customSelect)('custom-select');
  (0,_modules_select__WEBPACK_IMPORTED_MODULE_1__.customSelect2)('custom-select2');
  (0,_modules_validateEmail__WEBPACK_IMPORTED_MODULE_2__["default"])('#email');
  const sortBadge = document.querySelector('.offers_sort-select-badge'),
        arrowUp = sortBadge.querySelector('#arrow-up'),
        arrowDown = sortBadge.querySelector('#arrow-down');
  sortBadge.addEventListener('click', function (e) {
    let val = arrowUp.getAttribute('aria-sort');

    if (val === 'down') {
      arrowUp.style.fill = "#8d8d8d";
      arrowDown.style.fill = "#df4e3c";
      arrowUp.setAttribute('aria-sort', 'up');
    }

    if (val === 'up') {
      arrowUp.style.fill = "#df4e3c";
      arrowDown.style.fill = "#8d8d8d";
      arrowUp.setAttribute('aria-sort', 'down');
    }
  });
  const checker = document.querySelector('.offers_sort-checkbox');
  const checkInput = checker.querySelector('#check-available');
  checker.addEventListener('click', function () {
    if (checkInput.checked) {
      checker.style.color = '#df4e3c';
    } else {
      checker.style.color = "#8d8d8d";
    }

    console.log(checkInput.checked);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map