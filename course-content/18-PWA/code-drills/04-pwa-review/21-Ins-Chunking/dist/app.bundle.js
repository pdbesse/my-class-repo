/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculations */ \"./src/calculations.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexedDb */ \"./src/indexedDb.js\");\n\n\n\n\nfunction addToList(name, price) {\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"expensesListEl\"].innerHTML += \"<li class=\\\"list-group-item\\\">Name: \".concat(name, \"\\n    <span class=\\\"ml-4\\\">Price: \").concat(price, \"</span></li>\");\n}\n\nfunction submit(e) {\n  e.preventDefault();\n  var total = Object(_calculations__WEBPACK_IMPORTED_MODULE_0__[\"subtract\"])(Number(_elements__WEBPACK_IMPORTED_MODULE_1__[\"balanceEl\"].innerText), _elements__WEBPACK_IMPORTED_MODULE_1__[\"priceEl\"].value);\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"balanceEl\"].innerText = total;\n  addToList(_elements__WEBPACK_IMPORTED_MODULE_1__[\"expenseEl\"].value, _elements__WEBPACK_IMPORTED_MODULE_1__[\"priceEl\"].value);\n  Object(_indexedDb__WEBPACK_IMPORTED_MODULE_2__[\"useIndexedDb\"])(\"expense\", \"expenseStore\", \"put\", {\n    _id: _elements__WEBPACK_IMPORTED_MODULE_1__[\"expenseEl\"].value,\n    name: _elements__WEBPACK_IMPORTED_MODULE_1__[\"expenseEl\"].value,\n    value: _elements__WEBPACK_IMPORTED_MODULE_1__[\"priceEl\"].value\n  });\n}\n\nfunction reset(e) {\n  e.preventDefault();\n  var total = 2000;\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"balanceEl\"].innerText = total;\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"expensesListEl\"].innerHTML = \"\";\n  Object(_indexedDb__WEBPACK_IMPORTED_MODULE_2__[\"useIndexedDb\"])(\"expense\", \"expensesStore\", \"clear\");\n}\n\n_elements__WEBPACK_IMPORTED_MODULE_1__[\"submitBtn\"].onclick = submit;\n_elements__WEBPACK_IMPORTED_MODULE_1__[\"resetBtn\"].onclick = reset;\nObject(_indexedDb__WEBPACK_IMPORTED_MODULE_2__[\"useIndexedDb\"])(\"expense\", \"expenseStore\", \"get\").then(function (results) {\n  results.forEach(function (expense) {\n    addToList(expense.name, expense.value);\n  });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/calculations.js":
/*!*****************************!*\
  !*** ./src/calculations.js ***!
  \*****************************/
/*! exports provided: subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return subtract; });\nfunction subtract(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack:///./src/calculations.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: priceEl, balanceEl, expenseEl, expensesListEl, submitBtn, resetBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"priceEl\", function() { return priceEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"balanceEl\", function() { return balanceEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expenseEl\", function() { return expenseEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expensesListEl\", function() { return expensesListEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitBtn\", function() { return submitBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetBtn\", function() { return resetBtn; });\nvar priceEl = document.getElementById(\"price\");\nvar balanceEl = document.getElementById(\"balance\");\nvar expenseEl = document.getElementById(\"expense\");\nvar expensesListEl = document.getElementById(\"expenses-list\");\nvar submitBtn = document.getElementById(\"submit\");\nvar resetBtn = document.getElementById(\"reset\");\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/indexedDb.js":
/*!**************************!*\
  !*** ./src/indexedDb.js ***!
  \**************************/
/*! exports provided: useIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIndexedDb\", function() { return useIndexedDb; });\nfunction useIndexedDb(databaseName, storeName, method, object) {\n  return new Promise(function (resolve, reject) {\n    var request = window.indexedDB.open(databaseName, 1);\n    var db, tx, store;\n\n    request.onupgradeneeded = function (e) {\n      var db = request.result;\n      db.createObjectStore(storeName, {\n        keyPath: \"_id\"\n      });\n    };\n\n    request.onerror = function (e) {\n      console.log(\"There was an error\");\n    };\n\n    request.onsuccess = function (e) {\n      db = request.result;\n      tx = db.transaction(storeName, \"readwrite\");\n      store = tx.objectStore(storeName);\n\n      db.onerror = function (e) {\n        console.log(\"error\");\n      };\n\n      if (method === \"put\") {\n        store.put(object);\n      }\n\n      if (method === \"clear\") {\n        store.clear();\n      }\n\n      if (method === \"get\") {\n        var all = store.getAll();\n\n        all.onsuccess = function () {\n          resolve(all.result);\n        };\n      }\n\n      tx.oncomplete = function () {\n        db.close();\n      };\n    };\n  });\n}\n\n//# sourceURL=webpack:///./src/indexedDb.js?");

/***/ })

/******/ });