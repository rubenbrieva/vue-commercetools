(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters__ = __webpack_require__(1);


const VueCommercetools = {
  install(Vue) {
    // Install filters
    Object.keys(__WEBPACK_IMPORTED_MODULE_0__filters__).forEach(key => {
      if (Vue.filter(key)) {
        console.warn(`[filter duplication]: A filter named ${key} has already been installed.`);
      } else {
        Vue.filter(key, __WEBPACK_IMPORTED_MODULE_0__filters__[key]);
      }
    });
  },
};

/* harmony default export */ __webpack_exports__["default"] = (VueCommercetools);

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCommercetools);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__price__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "price", function() { return __WEBPACK_IMPORTED_MODULE_0__price__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return __WEBPACK_IMPORTED_MODULE_1__label__["a"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typographic_currency_db__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typographic_currency_db___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typographic_currency_db__);


/**
 * Get object Money
 */
function getMoneyObject(value) {
  if (typeof value === 'object') {
    if (typeof value.value === 'object' && typeof value.value.centAmount === 'number') {
      return value.value;
    } else if (typeof value.centAmount === 'number') {
      return value;
    }

    return undefined;
  }

  return undefined;
}

/**
 * Get price string from Price / Money object
 */
/* harmony default export */ __webpack_exports__["a"] = (function (value, currencySymbolPosition = 'prefix') {
  const money = getMoneyObject(value);

  if (typeof money === 'object') {
    const numberValue = money.centAmount / 100;
    const currencyValue = __WEBPACK_IMPORTED_MODULE_0_typographic_currency_db___default.a[money.currencyCode];

    return currencySymbolPosition === 'prefix'
      ? `${currencyValue}${numberValue}`
      : `${numberValue}${currencyValue}`;
  }

  return value;
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ISO_4217: unicode // symbol
// http://www.unicode.org/charts/PDF/U20A0.pdf



module.exports = {
  'AFN': '؋', // ؋
  'AMD': '֏', // ֏
  'ANG': 'ƒ', // ƒ
  'AWG': 'ƒ', // ƒ
  'AZN': '₼', // ₼
  'BDT': '৳', // ৳
  'BTC': 'Ƀ', // Ƀ
  'CNY': '¥', // ¥
  'CRC': '₡', // ₡
  'EUR': '€', // €
  'FKP': '£', // £
  'GBP': '£', // £
  'GHS': '₵', // ₵
  'GIP': '£', // £
  'ILS': '₪', // ₪
  'INR': '₹', // ₹
  'IRR': '﷼', // ﷼
  'JPY': '¥', // ¥
  'KHR': '៛', // ៛
  'KPW': '₩', // ₩
  'KRW': '₩', // ₩
  'KZT': '₸', // ₸
  'LAK': '₭', // ₭
  'LKR': '₨', // ₨
  'MNT': '₮', // ₮
  'MTL': '₤', // ₤
  'MUR': '₨', // ₨
  'NGN': '₦', // ₦
  'NPR': '₨', // ₨
  'OMR': '﷼', // ﷼
  'PHP': '₱', // ₱
  'PKR': '₨', // ₨
  'PYG': '₲', // ₲
  'QAR': '﷼', // ﷼
  'RUB': '₽', // ₽
  'SAR': '﷼', // ﷼
  'SCR': '₨', // ₨
  'SDG': '£', // £
  'SHP': '£', // £
  'SVC': '₡', // ₡
  'SYP': '£', // £
  'THB': '฿', // ฿
  'UAH': '₴', // ₴
  'USD': '$', // $
  'VND': '₫', // ₫
  'YER': '﷼' // ﷼
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Get string form LocalizedString
 */
/* harmony default export */ __webpack_exports__["a"] = (function (value, lang = 'en') {
  return typeof value === 'object' && typeof value[lang] === 'string' ? value[lang] : value;
});


/***/ })
/******/ ]);
});