(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["linkup"] = factory();
	else
		root["linkup"] = factory();
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
    function Element(el) {
        _classCallCheck(this, Element);

        this.el = el;
    }

    _createClass(Element, [{
        key: 'setFloat',
        value: function setFloat() {
            Element.setFloat(this.el);
            return this;
        }
    }, {
        key: 'setBgColor',
        value: function setBgColor(bgColor) {
            Element.setBgColor(this.el, bgColor);
            return this;
        }
    }, {
        key: 'setWidthAndHeight',
        value: function setWidthAndHeight(width, height) {
            Element.setWidthAndHeight(this.el, width, height);
            return this;
        }
    }, {
        key: 'hasClass',
        value: function hasClass(className) {
            return Element.hasClass(this.el, className);
        }
    }, {
        key: 'addClass',
        value: function addClass(className) {
            Element.addClass(this.el, className);
            return this;
        }
    }, {
        key: 'removeClass',
        value: function removeClass(className) {
            Element.removeClass(this.el, className);
            return this;
        }
    }, {
        key: 'setAttr',
        value: function setAttr(attrName, attrValue) {
            Element.setAttr(this.el, attrName, attrValue);
            return this;
        }
    }, {
        key: 'addEvent',
        value: function addEvent(type, fn) {
            Element.addEvent(this.el, type, fn);
            return this;
        }
    }, {
        key: 'append',
        value: function append(content) {
            Element.append(this.el, content);
            return this;
        }
    }, {
        key: 'mount',
        value: function mount(target) {
            Element.append(target, this);
        }
    }], [{
        key: 'createDiv',
        value: function createDiv() {
            return document.createElement('div');
        }
    }, {
        key: 'createBtn',
        value: function createBtn() {
            return document.createElement('button');
        }
    }, {
        key: 'setFloat',
        value: function setFloat(el) {
            el.style.float = 'left';
            return this;
        }
    }, {
        key: 'setBgColor',
        value: function setBgColor(el, bgColor) {
            el.style.backgroundColor = bgColor;
            return this;
        }
    }, {
        key: 'setWidthAndHeight',
        value: function setWidthAndHeight(el, width, height) {
            el.style.width = width + 'px';
            el.style.height = height + 'px';
            return this;
        }
    }, {
        key: 'append',
        value: function append(el, content) {

            if (content instanceof HTMLElement) {
                el.appendChild(content);
            } else if (content.el && content.el instanceof HTMLElement) {
                el.appendChild(content.el);
            } else if (Array.isArray(content)) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        el.append(item.el);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else {}
        }
    }, {
        key: 'hasClass',
        value: function hasClass(el, className) {
            return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    }, {
        key: 'addClass',
        value: function addClass(el, className) {
            if (!Element.hasClass(el, className)) {
                el.className += el.className ? ' ' + className : className;
            }
            return this;
        }
    }, {
        key: 'removeClass',
        value: function removeClass(elements, className) {
            if (Element.hasClass(elements, className)) {
                elements.className = elements.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), " ");
            }
        }
    }, {
        key: 'setAttr',
        value: function setAttr(el, attrName, attrValue) {
            el.setAttribute(attrName, attrValue);
            return this;
        }
    }, {
        key: 'addEvent',
        value: function addEvent(el, type, fn) {

            if (el.addEventListener) {
                el.addEventListener(type, fn, false);
            } else if (el.attachEvent) {
                el.attachEvent('on' + type, fn);
            } else {
                el['on' + type] = fn;
            }

            return this;
        }
    }]);

    return Element;
}();

exports.default = Element;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Element = __webpack_require__(0);

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Target = function () {
    function Target(targetElement) {
        _classCallCheck(this, Target);

        if (!(targetElement instanceof HTMLElement)) {
            throw new Error('[Error] Unexpected Parameters' + targetElement);
        }

        this.element = targetElement;
    }

    _createClass(Target, [{
        key: 'choose',
        value: function choose() {
            _Element2.default.addClass(this.element, 'choosed');
        }
    }, {
        key: 'unChoose',
        value: function unChoose() {
            _Element2.default.removeClass(this.element, 'choosed');
        }
    }, {
        key: 'remove',
        value: function remove() {
            _Element2.default.setBgColor(this.element, 'rgb(235,237,240)');
            _Element2.default.removeClass(this.element, 'choosed');
            _Element2.default.setAttr(this.element, 'el-type', '0');
        }
    }, {
        key: 'type',
        get: function get() {
            return this.element.getAttribute('el-type');
        }
    }, {
        key: 'isChoosed',
        get: function get() {
            return _Element2.default.hasClass(this.element, 'choosed');
        }
    }, {
        key: 'key',
        get: function get() {
            return this.element.getAttribute('matrix-key');
        }
    }, {
        key: 'bgColor',
        get: function get() {
            return this.element.style.backgroundColor;
        }
    }]);

    return Target;
}();

exports.default = Target;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Element2 = __webpack_require__(0);

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = function (_Element) {
    _inherits(Block, _Element);

    function Block() {
        _classCallCheck(this, Block);

        return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, _Element3.default.createDiv()));
    }

    return Block;
}(_Element3.default);

exports.default = Block;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.find = find;
exports.getColor = getColor;
/**
 * Generates a random number for the specified interval
 * @param min
 * @param max
 * @returns {*}
 */
function createRandom(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Find the index of element
 * @param array - array
 * @param element - the element that needs to find its index
 * @param extra　extra conditon
 *        if the array is object[], you can speccify the attribute you want to find
 */
function find(array, element, extra) {
    for (var i = 0, l = array.length; i < l; i++) {
        if ((extra ? array[i][extra] : array[i]) === element) {
            return i;
        }
    }
    return -1;
}

/**
 * Get a random color [From Github]
 * @returns {*}
 */
function getColor() {
    switch (Math.floor(Math.random() * 20 / 5)) {
        case 0:
            return '#c6e48b';
        case 1:
            return '#7bc96f';
        case 2:
            return '#239a3b';
        case 3:
            return '#196127';
        default:
            return '#c6e48b';
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Target = __webpack_require__(1);

var _Target2 = _interopRequireDefault(_Target);

var _TargetCollection = __webpack_require__(6);

var _TargetCollection2 = _interopRequireDefault(_TargetCollection);

var _Block = __webpack_require__(2);

var _Block2 = _interopRequireDefault(_Block);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

var _LinkupElement = __webpack_require__(5);

var _LinkupElement2 = _interopRequireDefault(_LinkupElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Linkup = function () {
    function Linkup() {
        _classCallCheck(this, Linkup);

        var args = arguments,
            xAxis = void 0,
            yXias = void 0,
            zeroChance = void 0;

        if (args.length === 2) {
            xAxis = yXias = args[0];
            zeroChance = args[1];
        } else {
            xAxis = args[0];
            yXias = args[1];
            zeroChance = args[2];
        }

        this.data = Linkup.createMatrix(xAxis, yXias, zeroChance);
        this.choices = new _TargetCollection2.default();
    }

    _createClass(Linkup, [{
        key: '$mount',
        value: function $mount(el) {
            this.mountElement = el;
            this.dom.mount(el);
        }
    }, {
        key: '$destory',
        value: function $destory() {
            this.mountElement.innerHTML = null;
        }

        /**
         * handle the click target
         * @param target
         */

    }, {
        key: 'handle',
        value: function handle(target) {

            target = new _Target2.default(target);

            if (target.type == 0) {
                console.log('[Warning] Cannot choose this element!');
                return;
            }

            if (target.isChoosed) {
                target.unChoose();
                this.choices.delete(target);
            } else {
                this.linkHandle(target);
            }
        }

        /**
         * handle the link of the target
         * @param target
         */

    }, {
        key: 'linkHandle',
        value: function linkHandle(target) {

            if (this.choices.isFull) {
                var firstTarget = this.choices.deleteFirst();
                firstTarget.unChoose();
            }

            target.choose();
            this.choices.push(target);

            if (this.choices.isFull) {

                console.log(this.choices);

                // check color
                if (!this.choices.colorCheck) {
                    console.info('[Warning] Cannot match color!');
                    return;
                }

                // check link
                var linkCheck = Linkup.linkCheck(this.data, this.choices.pointOne, this.choices.pointTwo);

                console.info('Result: ' + linkCheck);

                if (linkCheck) this.successLink();
            }
        }

        // if link success ...

    }, {
        key: 'successLink',
        value: function successLink() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {

                for (var _iterator = this.choices.collection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var target = _step.value;

                    var pos = target.key.split('-');
                    this.data[pos[0]][pos[1]] = 0;
                    target.remove();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.choices.empty();
        }

        /**
         * 根据随机矩阵生成对应的DOM
         * @param {Array} matrix - 矩阵
         * @param {Function} callback - 点击某个元素的回调，会返回其坐标
         * @returns {*}
         */

    }, {
        key: 'dom',
        get: function get() {
            var _this = this;

            return Linkup.createDomByMatrix(this, function (target) {
                return _this.handle(target);
            });
        }
    }], [{
        key: 'createDomByMatrix',
        value: function createDomByMatrix(matrix, callback) {

            if (!(matrix instanceof Linkup)) {
                throw new Error('[Error] Unexpected parameters');
            }

            var container = new _Block2.default();
            container.addClass('matrix-container');

            matrix.data.forEach(function (line, i) {

                var subContainer = new _Block2.default();
                subContainer.addClass('clearfix line-container');

                line.forEach(function (element, j) {

                    var matrixElement = new _LinkupElement2.default(element);
                    matrixElement.setAttr('matrix-key', i + '-' + j).addEvent('click', function (e) {
                        callback && callback(e.target);
                    });
                    subContainer.append(matrixElement);
                });

                container.append(subContainer);
            });

            var newGameBtn = new _Button2.default('New Game');
            newGameBtn.addClass('btn btn-restart').addEvent('click', function () {
                matrix.$destory();
                new Linkup(7, 0.3).$mount(document.getElementById('app'));
            });

            var btnWrapper = new _Block2.default();
            btnWrapper.addClass('btn-wrapper');
            btnWrapper.append(newGameBtn);
            container.append(btnWrapper);

            return container;

            /**
             * The following is FP writing
             */

            // return new Block()
            //     .addClass('matrix-container')
            //     .append(
            //         matrix.data.map((line, i) =>
            //             new Block()
            //                 .addClass('clearfix line-container')
            //                 .append(
            //                     line.map((element, j) =>
            //                         new MatrixElement(element)
            //                             .setAttr('matrix-key', `${i}-${j}`)
            //                             .addEvent('click', e => {
            //                                 callback && callback(
            //                                     e.target
            //                                 )
            //                             })
            //                     )
            //                 )
            //         )
            //     )
            //     .append(
            //         new Block()
            //             .addClass('btn-wrapper')
            //             .append(
            //                 new Button('New Game')
            //                     .addClass('btn btn-restart')
            //             )
            //             .addEvent('click', () => {
            //                 matrix.$destory()
            //                 new Matrix(7, 0.3).$mount(
            //                     document.getElementById('app')
            //                 )
            //             })
            //     )
        }

        /**
         * 生成一个随机矩阵
         * @param {Number} xAxis
         * @param {Number} yXias
         * @param {Number} zeroChance - 0出现的概率(默认生成0和1的概率相等)
         * @returns {Array}
         */

    }, {
        key: 'createMatrix',
        value: function createMatrix(xAxis, yXias, zeroChance) {

            if (!zeroChance) {
                zeroChance = 0.5;
            }

            var matrix = new Array();

            for (var i = 0; i < xAxis; i++) {

                matrix[i] = new Array();

                for (var j = 0; j < yXias; j++) {
                    matrix[i].push(Math.random() >= zeroChance + 0.1 ? 1 : 0);
                }
            }

            return matrix;
        }

        /**
         * 是否允许连接？
         * @param matrix
         * @param point1
         * @param point2
         * @returns {boolean}
         */

    }, {
        key: 'linkCheck',
        value: function linkCheck(matrix, point1, point2) {

            var aCheck = Array.isArray;
            if (!aCheck(matrix) || !aCheck(point1) || !aCheck(point2)) {
                throw new Error('[Error 01] Unexpected parameters');
            }

            var x1 = point1[0],
                y1 = point1[1];
            var x2 = point2[0],
                y2 = point2[1];

            var xmin = Math.min(x1, x2),
                xmax = Math.max(x1, x2);
            var ymin = Math.min(y1, y2),
                ymax = Math.max(y1, y2);

            var left = new Set();
            var right = new Set();

            for (var i = xmin; i <= xmax; i++) {
                left.add([i, y1]);
                right.add([i, y2]);
            }

            for (var j = ymin; j <= ymax; j++) {
                left.add([x2, j]);
                right.add([x1, j]);
            }

            function check(set) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = set.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var item = _step2.value;

                        var itemStr = item.join();
                        if (itemStr !== point1.join() && itemStr !== point2.join()) {
                            if (matrix[item[0]][item[1]] === 1) {
                                return false;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return true;
            }

            if (check(left)) {
                return true;
            } else if (check(right)) {
                return true;
            } else {
                return false;
            }
        }
    }]);

    return Linkup;
}();

exports.default = Linkup;


window.Linkup = Linkup;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Block2 = __webpack_require__(2);

var _Block3 = _interopRequireDefault(_Block2);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkupElement = function (_Block) {
    _inherits(LinkupElement, _Block);

    function LinkupElement(typeValue) {
        _classCallCheck(this, LinkupElement);

        // default style
        var _this = _possibleConstructorReturn(this, (LinkupElement.__proto__ || Object.getPrototypeOf(LinkupElement)).call(this));

        _this.setFloat().setBgColor(typeValue ? (0, _utils.getColor)() : 'rgb(235,237,240)').setAttr('el-type', typeValue).setWidthAndHeight(35, 35).addClass('martix-element');

        return _this;
    }

    return LinkupElement;
}(_Block3.default);

exports.default = LinkupElement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Target = __webpack_require__(1);

var _Target2 = _interopRequireDefault(_Target);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TargetCollection = function () {
    function TargetCollection(targetCollection) {
        _classCallCheck(this, TargetCollection);

        if (targetCollection) {

            if (!Array.isArray(targetCollection)) {
                throw new Error('[Error] Unexpected parameters' + targetCollection);
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = targetCollection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var target = _step.value;

                    if (!(target instanceof _Target2.default)) {
                        throw new Error('[Error] Unexpected parameters' + targetCollection);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        this.collection = targetCollection || [];
    }

    _createClass(TargetCollection, [{
        key: 'push',
        value: function push(target) {
            this.collection.push(target);
        }
    }, {
        key: 'deleteFirst',
        value: function deleteFirst() {
            return this.collection.pop();
        }
    }, {
        key: 'empty',
        value: function empty() {
            this.collection = [];
        }
    }, {
        key: 'delete',
        value: function _delete(target) {
            this.collection.splice((0, _utils.find)(this.collection, target), 1);
        }
    }, {
        key: 'colorCheck',
        get: function get() {
            return this.pointOneBgColor === this.pointTwoBgColor;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.collection.length;
        }
    }, {
        key: 'isFull',
        get: function get() {
            return this.length === 2;
        }
    }, {
        key: 'pointOne',
        get: function get() {
            return this.collection[0].key.split('-');
        }
    }, {
        key: 'pointTwo',
        get: function get() {
            return this.collection[1].key.split('-');
        }
    }, {
        key: 'pointOneBgColor',
        get: function get() {
            return this.collection[0].bgColor;
        }
    }, {
        key: 'pointTwoBgColor',
        get: function get() {
            return this.collection[1].bgColor;
        }
    }]);

    return TargetCollection;
}();

exports.default = TargetCollection;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Element2 = __webpack_require__(0);

var _Element3 = _interopRequireDefault(_Element2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Element) {
    _inherits(Button, _Element);

    function Button(text) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, _Element3.default.createBtn()));

        _this.el.append(text);
        return _this;
    }

    return Button;
}(_Element3.default);

exports.default = Button;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Linkup = __webpack_require__(4);

var _Linkup2 = _interopRequireDefault(_Linkup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Linkup2.default;

/***/ })
/******/ ]);
});