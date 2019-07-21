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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export class2type */
/* unused harmony export isBoolean */
/* unused harmony export isNumber */
/* unused harmony export isString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isUndefined; });
/* unused harmony export isNull */
/* unused harmony export isFunction */
/* unused harmony export isArray */
/* unused harmony export isDate */
/* unused harmony export isRegExp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isObject; });
/* unused harmony export isError */
/* unused harmony export isSymbol */
/* unused harmony export isSet */
/* unused harmony export isMap */
/* unused harmony export isPromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unit__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Class2type =
/*#__PURE__*/
function () {
  function Class2type() {
    _classCallCheck(this, Class2type);

    _defineProperty(this, "dataTypes", __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* dataTypes */]);
  }

  _createClass(Class2type, [{
    key: "getType",

    /**
     * 获取数据类型
     */
    value: function getType(opt) {
      return __WEBPACK_IMPORTED_MODULE_0__unit__["a" /* toString */].call(opt).replace(/^\[object\s+(.+)\]$/, '$1');
    }
    /**
     * 检测 json 是否为空
     */

  }, {
    key: "isEmptyObject",
    value: function isEmptyObject(param) {
      return Object.keys(param).length === 0;
    }
  }]);

  return Class2type;
}();
/**
 * 实例化 
 */


var class2type = new Class2type();
/**
 * 扩展原型方法
 */

class2type.dataTypes.forEach(function (item) {
  Object.assign(Class2type.prototype, _defineProperty({}, 'is' + item, function (opt) {
    return class2type.getType(opt) === item;
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (Class2type);

var isBoolean = class2type.isBoolean,
    isNumber = class2type.isNumber,
    isString = class2type.isString,
    isUndefined = class2type.isUndefined,
    isNull = class2type.isNull,
    isFunction = class2type.isFunction,
    isArray = class2type.isArray,
    isDate = class2type.isDate,
    isRegExp = class2type.isRegExp,
    isObject = class2type.isObject,
    isError = class2type.isError,
    isSymbol = class2type.isSymbol,
    isSet = class2type.isSet,
    isMap = class2type.isMap,
    isPromise = class2type.isPromise;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numToZh_cn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeFrame__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__URL__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class2type__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NumToZh_cn", function() { return __WEBPACK_IMPORTED_MODULE_0__numToZh_cn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Memory", function() { return __WEBPACK_IMPORTED_MODULE_1__memory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFrame", function() { return __WEBPACK_IMPORTED_MODULE_2__timeFrame__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return __WEBPACK_IMPORTED_MODULE_3__URL__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return __WEBPACK_IMPORTED_MODULE_4__class2type__["a"]; });







/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumToZh_cn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(3);
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

    _defineProperty(this, "numRanks", __WEBPACK_IMPORTED_MODULE_0__constant__["c" /* numRanks */]);

    _defineProperty(this, "currencyUnits", __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* currencyUnits */]);

    _defineProperty(this, "numMapToCh", __WEBPACK_IMPORTED_MODULE_0__constant__["b" /* numMapToCh */]);
  }

  _createClass(NumToZh_cn, [{
    key: "_verify",

    /**
     * 核心方法，将数字转成汉子，并对数位级做处理(个位级、万位级、亿位级)
     */
    value: function _verify(arr, item, index) {
      var unit = this.numRanks[arr.length - index - 1];
      return item === '0' ? /万|亿/.test(unit) ? unit : '零' : this.numMapToCh[item] + unit;
    }
    /**
     * 整数转换
     */

  }, {
    key: "_dataIntHandle",
    value: function _dataIntHandle(integers) {
      var _this = this;

      if (integers.length > 17) {
        console.warn('system is only support 17 digits, you can achieve more digits needs by extension');
      }

      var currencyUnit = this.currencyUnits[0];
      return integers.map(function (item, index) {
        return _this._verify(integers, item, index);
      }).join('').replace(/零+/g, '零').replace(/零$/, '') + currencyUnit;
    }
    /**
     * 小数转换
     */

  }, {
    key: "_dataDeciHandle",
    value: function _dataDeciHandle(decimals) {
      var _this2 = this;

      if (decimals.length > 4) {
        decimals = decimals.slice(0, 4);
        console.warn('system is only remained 4 decimal places, other will be ignored!');
      }

      var currencyUnits = this.currencyUnits.slice(1);
      return decimals.map(function (item, index) {
        return item === '0' ? '' : _this2.numMapToCh[item] + currencyUnits[index];
      }).join('');
    }
    /**
     * 转换方法， 传入待转换的数字
     */

  }, {
    key: "toZh",
    value: function toZh(numStr) {
      var _char = ''; // 记录数字是否为负数

      numStr = ('' + numStr).trim();

      if (!/^-?\d+(\.\d+)?$/.test(numStr)) {
        throw 'param is not number string';
      }

      if (numStr < 0) {
        numStr = numStr.substr(1);
        _char = '负';
      }

      var _numStr$split = numStr.split('.'),
          _numStr$split2 = _slicedToArray(_numStr$split, 2),
          _numStr$split2$ = _numStr$split2[0],
          integers = _numStr$split2$ === void 0 ? '' : _numStr$split2$,
          _numStr$split2$2 = _numStr$split2[1],
          decimals = _numStr$split2$2 === void 0 ? '' : _numStr$split2$2;

      return [_char, this._dataIntHandle(_toConsumableArray(integers)), this._dataDeciHandle(_toConsumableArray(decimals)), '整'].join('');
    }
  }]);

  return NumToZh_cn;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numRanks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currencyUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numMapToCh; });
/**
 * 数位
 */
var numRanks = ["", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿"];
/**
 * 人民币单位
 */

var currencyUnits = ['元', '角', '分', '厘', '毫'];
/**
 * 数字映射
 */

var numMapToCh = {
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
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Memory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class2type__ = __webpack_require__(0);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  /**
   *Creates an instance of Memory.
   *
   * @param { 存储的键 } key
   * @param { 存储类型 } type
   */
  function Memory(key, type) {
    _classCallCheck(this, Memory);

    _defineProperty(this, "map", {
      'session': window.sessionStorage,
      'local': window.localStorage
      /**
       * 存储数据， value 数据
       */

    });

    var hasSpace = /\s+/.test(key);
    var hasSpecialChar = /\W+/.test(key);

    if (hasSpecialChar && hasSpace) {
      throw 'key must be a /w+/ and not space';
    }

    this.key = key;
    this.type = type;

    this._getIntance(type, key, this);
  }
  /**
   * 存储类型 映射
   */


  _createClass(Memory, [{
    key: "setItem",
    value: function setItem(value) {
      this.map[this.type].setItem(this.key, JSON.stringify(value));
    }
    /**
     * 获取 存储的值
     */

  }, {
    key: "getItem",
    value: function getItem() {
      return this.getKey() && JSON.parse(this.map[this.type].getItem(this.key));
    }
    /**
     * 删除 单条 存储数据
     */

  }, {
    key: "removeItem",
    value: function removeItem() {
      this.map[this.type].removeItem(this.key);
    }
    /**
     * 检测 存储 是否存在 通过 key， 返回布尔值
     */

  }, {
    key: "getKey",
    value: function getKey() {
      return this.key in this.map[this.type];
    }
    /**
     * 存储实例对象， 内部方法( 不建议调用 )
     * type: 存储类型， key: 数据的键 
     */

  }, {
    key: "_getIntance",
    value: function _getIntance(type, key, that) {
      if (that.constructor !== Memory) {
        throw 'not allowed, this is a internal method!';
      } // 静态方法初始化时，会自动执行， 增加判断处理


      if (Object(__WEBPACK_IMPORTED_MODULE_0__class2type__["c" /* isUndefined */])(type)) return;
      var instances = this.constructor.instances;
      var values = instances[type] || [];

      if (values.length !== 0 && values.includes(key)) {
        throw " Memory need a only key, the ".concat(key, " is existed, please check code!");
      }

      this.constructor.instances = _objectSpread({}, instances, _defineProperty({}, type, [].concat(_toConsumableArray(values), [key])));
    }
    /**
     * 存储实例, 获取
     */

  }], [{
    key: "clear",

    /**
     * 清除空指定类型的数据
     */
    value: function clear() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "local";
      new this().map[type].clear();
    }
    /**
     * 清空所有数据
     */

  }, {
    key: "clearAll",
    value: function clearAll() {
      this.clear('local');
      this.clear('session');
    }
    /**
     * 批量删除 存储数据， 自动遍历所有存储, 返回剩余存储
     */

  }, {
    key: "removeItems",
    value: function removeItems() {
      var _this = this;

      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      (!Array.isArray(keys) ? keys.split(/\W+/g) : keys).forEach(function (key) {
        Object.values(new _this().map).forEach(function (item) {
          item.removeItem(key);
        });
      });
    }
    /**
     * 获取存储 与存储数据的 key 值
     */

  }, {
    key: "keys",
    value: function keys() {
      return Object.entries(new this().map).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return _defineProperty({}, key, new Array(value.length).fill('').map(function (item, index) {
          return value.key(index);
        }));
      });
    }
  }]);

  return Memory;
}();

_defineProperty(Memory, "instances", {});



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toString; });
/* unused harmony export hasOwn */
var toString = Object.prototype.toString;
var hasOwn = Object.prototype.hasOwnProperty;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataTypes; });
var dataTypes = ["Boolean", "Number", "String", "Undefined", "Null", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "Set", "Map", "Promise"];

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animationFrame__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animationFrame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__animationFrame__);
/**
 * @param { cb: 每帧回调 }
 * @param { timeStamp: 每帧时间间隔 }
 */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var timeStamp = arguments.length > 1 ? arguments[1] : undefined;

  /**
   * 起始时间
   */
  var origin = Date.now();
  /**
   * 上一次时间
   */

  var prev = origin;
  /**
   * 下一次时间
   */

  var cur = 0;
  /**
   * 核心函数 
   */

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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class2type__ = __webpack_require__(0);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var URL =
/*#__PURE__*/
function () {
  function URL() {
    _classCallCheck(this, URL);
  }

  _createClass(URL, [{
    key: "handle",

    /**
     * 核心方法： 处理 URL 参数
     * 参数 opt: search 或 hash
     *
     */
    value: function handle(opt) {
      if (opt === '') return '';
      var opts = opt.substr(1).split('&');
      return opts.reduce(function (preTotal, el) {
        var _el$split = el.split('='),
            _el$split2 = _slicedToArray(_el$split, 2),
            key = _el$split2[0],
            _el$split2$ = _el$split2[1],
            value = _el$split2$ === void 0 ? '' : _el$split2$;

        return key === '' ? {} : _objectSpread({}, preTotal, _defineProperty({}, key, value));
      }, null);
    }
    /**
     * 功能：将url 转换成 json 对象
     * 返回值： 返回 url 相关信息
     *
     */

  }], [{
    key: "toJSON",
    value: function toJSON() {
      var _window$location = window.location,
          search = _window$location.search,
          protocol = _window$location.protocol,
          hostname = _window$location.hostname,
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
    /**
     * 功能：重置 url
     * 参数：opt, json 对象
     */

  }, {
    key: "set",
    value: function set(opt) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__class2type__["b" /* isObject */])(opt)) {
        throw 'The method need a json data, but get a other type data';
      }

      var _this$toJSON = this.toJSON(),
          search = _this$toJSON.search,
          uri = _this$toJSON.uri,
          hash = _this$toJSON.hash;

      var newUrl = [uri, '?', Object.entries(_objectSpread({}, search, {}, opt)).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return key + '=' + value;
      }).join('&'), hash].join('');
      window.location.href = newUrl;
    }
    /**
     * 功能： 获取 url 参数
     * 参数： mid，参数; onHash，是否启用 hash, 默认不开启( 不建议开启 ) 
     * 返回值：参数值
     */

  }, {
    key: "get",
    value: function get(mid) {
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