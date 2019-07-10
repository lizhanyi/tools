(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numToZh_cn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeFrame__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__URL__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NumToZh_cn", function() { return __WEBPACK_IMPORTED_MODULE_0__numToZh_cn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Memory", function() { return __WEBPACK_IMPORTED_MODULE_1__memory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFrame", function() { return __WEBPACK_IMPORTED_MODULE_2__timeFrame__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return __WEBPACK_IMPORTED_MODULE_3__URL__["a"]; });






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumToZh_cn; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NumToZh_cn =
/*#__PURE__*/
function () {
  function NumToZh_cn() {
    _classCallCheck(this, NumToZh_cn);

    _defineProperty(this, "numLevel", ["", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿"]);

    _defineProperty(this, "currencyUnit", ['角', '分']);

    _defineProperty(this, "numMapToCh", {
      '0': '零',
      '1': '壹',
      '2': '贰',
      '3': '叁',
      '4': '肆',
      '5': '伍',
      '6': '陆',
      '7': '柒',
      '8': '捌',
      '9': '玖',
      '０': '零',
      '１': '壹',
      '２': '贰',
      '３': '叁',
      '４': '肆',
      '５': '伍',
      '６': '陆',
      '７': '柒',
      '８': '捌',
      '９': '玖'
    });
  }

  _createClass(NumToZh_cn, [{
    key: "_test",
    value: function _test(arr, item, index) {
      var unit = this.numLevel[arr.length - index - 1];
      return item === '0' ? /万|亿/.test(unit) ? unit : '零' : this.numMapToCh[item] + unit;
    }
  }, {
    key: "_dataIntHandle",
    value: function _dataIntHandle(arr) {
      var _this = this;

      return arr.map(function (item, index) {
        return _this._test(arr, item, index);
      }).join('').replace(/零+/g, '零').replace(/零$/, '') + '元';
    }
  }, {
    key: "_dataDeciHandle",
    value: function _dataDeciHandle(arr) {
      var _this2 = this;

      return arr.map(function (item, index) {
        return item === '0' ? '' : _this2.numMapToCh[item] + _this2.currencyUnit[index];
      }).join('');
    }
  }, {
    key: "convert",
    value: function convert(numStr) {
      if (!/^-?\d+(\.\d+)?$/.test(numStr.trim())) throw 'param is not number string';

      var _numStr$split = numStr.split('.'),
          _numStr$split2 = _slicedToArray(_numStr$split, 2),
          _numStr$split2$ = _numStr$split2[0],
          integers = _numStr$split2$ === void 0 ? '' : _numStr$split2$,
          _numStr$split2$2 = _numStr$split2[1],
          decimals = _numStr$split2$2 === void 0 ? '' : _numStr$split2$2;

      return this._dataIntHandle(_toConsumableArray(integers)) + this._dataDeciHandle(_toConsumableArray(decimals)) + '整';
    }
  }]);

  return NumToZh_cn;
}();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Memory; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** 
 * @param { key: 存储的键  }
 * @param { type: 存储类型 local => localStorage, session => sessionStorage  }
*/
var Memory =
/*#__PURE__*/
function () {
  _createClass(Memory, null, [{
    key: "clear",
    value: function clear() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "local";
      this.map[type].clear();
    }
  }]);

  function Memory(key, type) {
    _classCallCheck(this, Memory);

    _defineProperty(this, "map", {
      'session': window.sessionStorage,
      'local': window.localStorage
    });

    this.key = key;
    this.type = type;
  }

  _createClass(Memory, [{
    key: "setItem",
    value: function setItem(value) {
      this.map[this.type].setItem(this.key, JSON.stringify(value));
    }
  }, {
    key: "getItem",
    value: function getItem() {
      if (this.getKey()) {
        return JSON.parse(this.map[this.type].getItem(this.key));
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem() {
      this.map[this.type].removeItem(this.key);
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return this.key in this.map[this.type];
    }
  }]);

  return Memory;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animationFrame__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animationFrame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__animationFrame__);
/**
 * @param { cb: 每帧回调 }
 * @param { timeStamp: 每帧时间间隔 }
 */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var timeStamp = arguments.length > 1 ? arguments[1] : undefined;
  var prev = Date.now();
  var origin = prev; // 起始时间

  var cur = 0;
  var timer = requestAnimationFrame(function () {
    cur = Date.now();

    if (cur - prev > timeStamp) {
      cb(prev, cur, origin);
      prev = cur;
    }

    timer && cancelAnimationFrame(timer);
    timer = requestAnimationFrame(arguments.callee);
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 6000 / 60);
  };
}();

window.cancelAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
    window.clearTimout(id);
  };
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @param { cb: 每帧回调 }
 * @param { timeStamp: 每帧时间间隔 }
 */
var URL =
/*#__PURE__*/
function () {
  function URL() {
    _classCallCheck(this, URL);
  }

  _createClass(URL, [{
    key: "handle",
    value: function handle(opt) {
      if (opt === '') return '';
      var opts = opt.substr(1).split('&');
      return opts.reduce(function (preTotal, el) {
        var _el$split = el.split('='),
            _el$split2 = _slicedToArray(_el$split, 2),
            key = _el$split2[0],
            _el$split2$ = _el$split2[1],
            value = _el$split2$ === void 0 ? '' : _el$split2$;

        if (key === '') return {};
        return _objectSpread({}, preTotal, _defineProperty({}, key, value));
      }, null);
    }
  }], [{
    key: "toJSON",
    value: function toJSON() {
      var _window$location = window.location,
          search = _window$location.search,
          protocol = _window$location.protocol,
          pathname = _window$location.pathname,
          port = _window$location.port,
          hash = _window$location.hash;
      var inst = new this();
      return {
        search: inst.handle(decodeURIComponent(search)),
        hash: decodeURIComponent(hash),
        uri: decodeURIComponent(protocol + hostname + port + pathname)
      };
    }
  }, {
    key: "reset",
    value: function reset(opt) {
      var _this$toJSON = this.toJSON(),
          search = _this$toJSON.search,
          uri = _this$toJSON.uri,
          hash = _this$toJSON.hash;

      return [uri, '?', Object.entries(_objectSpread({}, search, opt)).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return key + '=' + value;
      }).join('&'), '#', hash].join('');
    }
  }, {
    key: "getParam",
    value: function getParam(mid) {
      var onHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var regExp = new RegExp("(^|&)" + mid + "=([^&]*)(&|$)");

      var handle = function handle(opt) {
        return window.location[opt].substr(1).match(regExp);
      };

      var r = handle('search') || onHash && handle('hash') || null;
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    }
  }]);

  return URL;
}();



/***/ })
/******/ ]);
});