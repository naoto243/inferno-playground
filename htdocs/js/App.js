/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "Inferno" ***!
  \**************************/
/***/ (function(module, exports) {

eval("module.exports = Inferno;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkluZmVybm9cIj83NDBkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gSW5mZXJubztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkluZmVybm9cIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/inferno-component/dist/inferno-component.node.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\n/*!\n * inferno-component v1.3.0-rc.10\n * (c) 2017 Dominic Gannaway'\n * Released under the MIT License.\n */\n\n(function (global, factory) {\n\t true ? module.exports = factory(__webpack_require__(/*! inferno */ 0)) :\n\ttypeof define === 'function' && define.amd ? define(['inferno'], factory) :\n\t(global['inferno-component'] = factory(global.Inferno));\n}(this, (function (inferno) { 'use strict';\n\nvar NO_OP = '$NO_OP';\r\nvar ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';\r\nvar isBrowser = typeof window !== 'undefined' && window.document;\r\n\r\n// this is MUCH faster than .constructor === Array and instanceof Array\r\n// in Node 7 and the later versions of V8, slower in older versions though\r\nvar isArray = Array.isArray;\r\n\r\nfunction isStringOrNumber(obj) {\r\n    var type = typeof obj;\r\n    return type === 'string' || type === 'number';\r\n}\r\nfunction isNullOrUndef(obj) {\r\n    return isUndefined(obj) || isNull(obj);\r\n}\r\nfunction isInvalid(obj) {\r\n    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);\r\n}\r\nfunction isFunction(obj) {\r\n    return typeof obj === 'function';\r\n}\r\n\r\n\r\n\r\nfunction isNull(obj) {\r\n    return obj === null;\r\n}\r\nfunction isTrue(obj) {\r\n    return obj === true;\r\n}\r\nfunction isUndefined(obj) {\r\n    return obj === undefined;\r\n}\r\n\r\nfunction throwError(message) {\r\n    if (!message) {\r\n        message = ERROR_MSG;\r\n    }\r\n    throw new Error((\"Inferno Error: \" + message));\r\n}\r\n\r\nfunction assign(target) {\n    var arguments$1 = arguments;\n\r\n    for (var i = 1, argumentsLength = arguments.length; i < argumentsLength; i++) {\r\n        var obj = arguments$1[i];\r\n        if (!isNullOrUndef(obj)) {\r\n            var keys = Object.keys(obj);\r\n            for (var j = 0, keysLength = keys.length; j < keysLength; j++) {\r\n                var key = keys[j];\r\n                target[key] = obj[key];\r\n            }\r\n        }\r\n    }\r\n    return target;\r\n}\r\nfunction Lifecycle() {\r\n    this.listeners = [];\r\n}\r\nLifecycle.prototype.addListener = function addListener(callback) {\r\n    this.listeners.push(callback);\r\n};\r\nLifecycle.prototype.trigger = function trigger() {\r\n    var listeners = this.listeners;\r\n    for (var i = 0, len = listeners.length; i < len; i++) {\r\n        listeners[i]();\r\n    }\r\n};\n\n// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference\r\nvar noOp = ERROR_MSG;\r\nif (true) {\r\n    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';\r\n}\r\nvar componentCallbackQueue = new Map();\r\n// when a components root VNode is also a component, we can run into issues\r\n// this will recursively look for vNode.parentNode if the VNode is a component\r\nfunction updateParentComponentVNodes(vNode, dom) {\r\n    if (vNode.flags & 28 /* Component */) {\r\n        var parentVNode = vNode.parentVNode;\r\n        if (parentVNode) {\r\n            parentVNode.dom = dom;\r\n            updateParentComponentVNodes(parentVNode, dom);\r\n        }\r\n    }\r\n}\r\nfunction addToQueue(component, force, callback) {\r\n    // TODO this function needs to be revised and improved on\r\n    var queue = componentCallbackQueue.get(component);\r\n    if (!queue) {\r\n        queue = [];\r\n        componentCallbackQueue.set(component, queue);\r\n        Promise.resolve().then(function () {\r\n            componentCallbackQueue.delete(component);\r\n            applyState(component, force, function () {\r\n                for (var i = 0, len = queue.length; i < len; i++) {\r\n                    queue[i]();\r\n                }\r\n            });\r\n        });\r\n    }\r\n    if (callback) {\r\n        queue.push(callback);\r\n    }\r\n}\r\nfunction queueStateChanges(component, newState, callback, sync) {\r\n    if (isFunction(newState)) {\r\n        newState = newState(component.state, component.props, component.context);\r\n    }\r\n    for (var stateKey in newState) {\r\n        component._pendingState[stateKey] = newState[stateKey];\r\n    }\r\n    if (!component._pendingSetState && isBrowser && !(sync && component._blockRender)) {\r\n        if (sync || component._blockRender) {\r\n            component._pendingSetState = true;\r\n            applyState(component, false, callback);\r\n        }\r\n        else {\r\n            addToQueue(component, false, callback);\r\n        }\r\n    }\r\n    else {\r\n        assign(component.state, component._pendingState);\r\n        component._pendingState = {};\r\n    }\r\n}\r\nfunction applyState(component, force, callback) {\r\n    if ((!component._deferSetState || force) && !component._blockRender && !component._unmounted) {\r\n        component._pendingSetState = false;\r\n        var pendingState = component._pendingState;\r\n        var prevState = component.state;\r\n        var nextState = assign({}, prevState, pendingState);\r\n        var props = component.props;\r\n        var context = component.context;\r\n        component._pendingState = {};\r\n        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);\r\n        var didUpdate = true;\r\n        if (isInvalid(nextInput)) {\r\n            nextInput = inferno.createVNode(4096 /* Void */);\r\n        }\r\n        else if (nextInput === NO_OP) {\r\n            nextInput = component._lastInput;\r\n            didUpdate = false;\r\n        }\r\n        else if (isStringOrNumber(nextInput)) {\r\n            nextInput = inferno.createVNode(1 /* Text */, null, null, nextInput);\r\n        }\r\n        else if (isArray(nextInput)) {\r\n            if (true) {\r\n                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');\r\n            }\r\n            throwError();\r\n        }\r\n        var lastInput = component._lastInput;\r\n        var vNode = component._vNode;\r\n        var parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);\r\n        component._lastInput = nextInput;\r\n        if (didUpdate) {\r\n            var subLifecycle = component._lifecycle;\r\n            if (!subLifecycle) {\r\n                subLifecycle = new Lifecycle();\r\n            }\r\n            else {\r\n                subLifecycle.listeners = [];\r\n            }\r\n            component._lifecycle = subLifecycle;\r\n            var childContext = component.getChildContext();\r\n            if (isNullOrUndef(childContext)) {\r\n                childContext = component._childContext;\r\n            }\r\n            else {\r\n                childContext = assign({}, context, component._childContext, childContext);\r\n            }\r\n            component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);\r\n            subLifecycle.trigger();\r\n            component.componentDidUpdate(props, prevState);\r\n            inferno.options.afterUpdate && inferno.options.afterUpdate(vNode);\r\n        }\r\n        var dom = vNode.dom = nextInput.dom;\r\n        var componentToDOMNodeMap = component._componentToDOMNodeMap;\r\n        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);\r\n        updateParentComponentVNodes(vNode, dom);\r\n        if (!isNullOrUndef(callback)) {\r\n            callback();\r\n        }\r\n    }\r\n    else if (!isNullOrUndef(callback)) {\r\n        if (component._blockRender) {\r\n            component.state = component._pendingState;\r\n            component._pendingState = {};\r\n        }\r\n        callback();\r\n    }\r\n}\r\nvar Component = function Component(props, context) {\r\n    this.state = {};\r\n    this._blockRender = false;\r\n    this._ignoreSetState = false;\r\n    this._blockSetState = false;\r\n    this._deferSetState = false;\r\n    this._pendingSetState = false;\r\n    this._syncSetState = true;\r\n    this._pendingState = {};\r\n    this._lastInput = null;\r\n    this._vNode = null;\r\n    this._unmounted = true;\r\n    this._lifecycle = null;\r\n    this._childContext = null;\r\n    this._patch = null;\r\n    this._isSVG = false;\r\n    this._componentToDOMNodeMap = null;\r\n    /** @type {object} */\r\n    this.props = props || inferno.EMPTY_OBJ;\r\n    /** @type {object} */\r\n    this.context = context || inferno.EMPTY_OBJ; // context should not be mutable\r\n};\r\nComponent.prototype.render = function render (nextProps, nextState, nextContext) {\r\n};\r\nComponent.prototype.forceUpdate = function forceUpdate (callback) {\r\n    if (this._unmounted) {\r\n        return;\r\n    }\r\n    isBrowser && applyState(this, true, callback);\r\n};\r\nComponent.prototype.setState = function setState (newState, callback) {\r\n    if (this._unmounted) {\r\n        return;\r\n    }\r\n    if (!this._blockSetState) {\r\n        if (!this._ignoreSetState) {\r\n            queueStateChanges(this, newState, callback, this._syncSetState);\r\n        }\r\n    }\r\n    else {\r\n        if (true) {\r\n            throwError('cannot update state via setState() in componentWillUpdate().');\r\n        }\r\n        throwError();\r\n    }\r\n};\r\nComponent.prototype.setStateSync = function setStateSync (newState) {\r\n    if (this._unmounted) {\r\n        return;\r\n    }\r\n    if (!this._blockSetState) {\r\n        if (!this._ignoreSetState) {\r\n            queueStateChanges(this, newState, null, true);\r\n        }\r\n    }\r\n    else {\r\n        if (true) {\r\n            throwError('cannot update state via setState() in componentWillUpdate().');\r\n        }\r\n        throwError();\r\n    }\r\n};\r\nComponent.prototype.componentWillMount = function componentWillMount () {\r\n};\r\nComponent.prototype.componentDidUpdate = function componentDidUpdate (prevProps, prevState, prevContext) {\r\n};\r\nComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate (nextProps, nextState, context) {\r\n    return true;\r\n};\r\nComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, context) {\r\n};\r\nComponent.prototype.componentWillUpdate = function componentWillUpdate (nextProps, nextState, nextContext) {\r\n};\r\nComponent.prototype.getChildContext = function getChildContext () {\r\n};\r\nComponent.prototype._updateComponent = function _updateComponent (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {\r\n    if (this._unmounted === true) {\r\n        if (true) {\r\n            throwError(noOp);\r\n        }\r\n        throwError();\r\n    }\r\n    if ((prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) || prevState !== nextState || force) {\r\n        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {\r\n            if (!fromSetState) {\r\n                this._blockRender = true;\r\n                this.componentWillReceiveProps(nextProps, context);\r\n                this._blockRender = false;\r\n            }\r\n            if (this._pendingSetState) {\r\n                nextState = assign({}, nextState, this._pendingState);\r\n                this._pendingSetState = false;\r\n                this._pendingState = {};\r\n            }\r\n        }\r\n        var shouldUpdate = this.shouldComponentUpdate(nextProps, nextState, context);\r\n        if (shouldUpdate || force) {\r\n            this._blockSetState = true;\r\n            this.componentWillUpdate(nextProps, nextState, context);\r\n            this._blockSetState = false;\r\n            this.props = nextProps;\r\n            this.state = nextState;\r\n            this.context = context;\r\n            inferno.options.beforeRender && inferno.options.beforeRender(this);\r\n            var render = this.render(nextProps, nextState, context);\r\n            inferno.options.afterRender && inferno.options.afterRender(this);\r\n            return render;\r\n        }\r\n        else {\r\n            this.props = nextProps;\r\n            this.state = nextState;\r\n            this.context = context;\r\n        }\r\n    }\r\n    return NO_OP;\r\n};\n\nreturn Component;\n\n})));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vaW5mZXJuby1jb21wb25lbnQvZGlzdC9pbmZlcm5vLWNvbXBvbmVudC5ub2RlLmpzPzc4ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKiFcbiAqIGluZmVybm8tY29tcG9uZW50IHYxLjMuMC1yYy4xMFxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheSdcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnaW5mZXJubycpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2luZmVybm8nXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsWydpbmZlcm5vLWNvbXBvbmVudCddID0gZmFjdG9yeShnbG9iYWwuSW5mZXJubykpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGluZmVybm8pIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgTk9fT1AgPSAnJE5PX09QJztcclxudmFyIEVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcclxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudDtcclxuXHJcbi8vIHRoaXMgaXMgTVVDSCBmYXN0ZXIgdGhhbiAuY29uc3RydWN0b3IgPT09IEFycmF5IGFuZCBpbnN0YW5jZW9mIEFycmF5XHJcbi8vIGluIE5vZGUgNyBhbmQgdGhlIGxhdGVyIHZlcnNpb25zIG9mIFY4LCBzbG93ZXIgaW4gb2xkZXIgdmVyc2lvbnMgdGhvdWdoXHJcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIob2JqKSB7XHJcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XHJcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XHJcbn1cclxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xyXG59XHJcbmZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcclxuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XHJcbn1cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcclxuICAgIHJldHVybiBvYmogPT09IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gaXNUcnVlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcclxuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XHJcbiAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICBtZXNzYWdlID0gRVJST1JfTVNHO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKChcIkluZmVybm8gRXJyb3I6IFwiICsgbWVzc2FnZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXHJcbiAgICBmb3IgKHZhciBpID0gMSwgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGFyZ3VtZW50c0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50cyQxW2ldO1xyXG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihvYmopKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDsgaiA8IGtleXNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5mdW5jdGlvbiBMaWZlY3ljbGUoKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG59XHJcbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYWxsYmFjaykge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcbn07XHJcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIoKSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnM7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgbGlzdGVuZXJzW2ldKCk7XHJcbiAgICB9XHJcbn07XG5cbi8vIE1ha2Ugc3VyZSB1IHVzZSBFTVBUWV9PQkogZnJvbSAnaW5mZXJubycsIG90aGVyd2lzZSBpdCdsbCBiZSBhIGRpZmZlcmVudCByZWZlcmVuY2VcclxudmFyIG5vT3AgPSBFUlJPUl9NU0c7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBub09wID0gJ0luZmVybm8gRXJyb3I6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50ZWQgb3IgbW91bnRpbmcgY29tcG9uZW50LiBUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCBzZXRTdGF0ZSgpIG9yIGZvcmNlVXBkYXRlKCkgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLic7XHJcbn1cclxudmFyIGNvbXBvbmVudENhbGxiYWNrUXVldWUgPSBuZXcgTWFwKCk7XHJcbi8vIHdoZW4gYSBjb21wb25lbnRzIHJvb3QgVk5vZGUgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgY2FuIHJ1biBpbnRvIGlzc3Vlc1xyXG4vLyB0aGlzIHdpbGwgcmVjdXJzaXZlbHkgbG9vayBmb3Igdk5vZGUucGFyZW50Tm9kZSBpZiB0aGUgVk5vZGUgaXMgYSBjb21wb25lbnRcclxuZnVuY3Rpb24gdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pIHtcclxuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xyXG4gICAgICAgIHZhciBwYXJlbnRWTm9kZSA9IHZOb2RlLnBhcmVudFZOb2RlO1xyXG4gICAgICAgIGlmIChwYXJlbnRWTm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnRWTm9kZS5kb20gPSBkb207XHJcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyhwYXJlbnRWTm9kZSwgZG9tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkVG9RdWV1ZShjb21wb25lbnQsIGZvcmNlLCBjYWxsYmFjaykge1xyXG4gICAgLy8gVE9ETyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJldmlzZWQgYW5kIGltcHJvdmVkIG9uXHJcbiAgICB2YXIgcXVldWUgPSBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmdldChjb21wb25lbnQpO1xyXG4gICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICAgIHF1ZXVlID0gW107XHJcbiAgICAgICAgY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5zZXQoY29tcG9uZW50LCBxdWV1ZSk7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuZGVsZXRlKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmb3JjZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHF1ZXVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVldWVbaV0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBxdWV1ZS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBxdWV1ZVN0YXRlQ2hhbmdlcyhjb21wb25lbnQsIG5ld1N0YXRlLCBjYWxsYmFjaywgc3luYykge1xyXG4gICAgaWYgKGlzRnVuY3Rpb24obmV3U3RhdGUpKSB7XHJcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZShjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5wcm9wcywgY29tcG9uZW50LmNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgc3RhdGVLZXkgaW4gbmV3U3RhdGUpIHtcclxuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZVtzdGF0ZUtleV0gPSBuZXdTdGF0ZVtzdGF0ZUtleV07XHJcbiAgICB9XHJcbiAgICBpZiAoIWNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlICYmIGlzQnJvd3NlciAmJiAhKHN5bmMgJiYgY29tcG9uZW50Ll9ibG9ja1JlbmRlcikpIHtcclxuICAgICAgICBpZiAoc3luYyB8fCBjb21wb25lbnQuX2Jsb2NrUmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXBwbHlTdGF0ZShjb21wb25lbnQsIGZhbHNlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRUb1F1ZXVlKGNvbXBvbmVudCwgZmFsc2UsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhc3NpZ24oY29tcG9uZW50LnN0YXRlLCBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSk7XHJcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAoKCFjb21wb25lbnQuX2RlZmVyU2V0U3RhdGUgfHwgZm9yY2UpICYmICFjb21wb25lbnQuX2Jsb2NrUmVuZGVyICYmICFjb21wb25lbnQuX3VubW91bnRlZCkge1xyXG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHBlbmRpbmdTdGF0ZSA9IGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlO1xyXG4gICAgICAgIHZhciBwcmV2U3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XHJcbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IGFzc2lnbih7fSwgcHJldlN0YXRlLCBwZW5kaW5nU3RhdGUpO1xyXG4gICAgICAgIHZhciBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcclxuICAgICAgICB2YXIgY29udGV4dCA9IGNvbXBvbmVudC5jb250ZXh0O1xyXG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0ge307XHJcbiAgICAgICAgdmFyIG5leHRJbnB1dCA9IGNvbXBvbmVudC5fdXBkYXRlQ29tcG9uZW50KHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcm9wcywgcHJvcHMsIGNvbnRleHQsIGZvcmNlLCB0cnVlKTtcclxuICAgICAgICB2YXIgZGlkVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCkpIHtcclxuICAgICAgICAgICAgbmV4dElucHV0ID0gaW5mZXJuby5jcmVhdGVWTm9kZSg0MDk2IC8qIFZvaWQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXh0SW5wdXQgPT09IE5PX09QKSB7XHJcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNvbXBvbmVudC5fbGFzdElucHV0O1xyXG4gICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQpKSB7XHJcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGluZmVybm8uY3JlYXRlVk5vZGUoMSAvKiBUZXh0ICovLCBudWxsLCBudWxsLCBuZXh0SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCkpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxhc3RJbnB1dCA9IGNvbXBvbmVudC5fbGFzdElucHV0O1xyXG4gICAgICAgIHZhciB2Tm9kZSA9IGNvbXBvbmVudC5fdk5vZGU7XHJcbiAgICAgICAgdmFyIHBhcmVudERvbSA9IChsYXN0SW5wdXQuZG9tICYmIGxhc3RJbnB1dC5kb20ucGFyZW50Tm9kZSkgfHwgKGxhc3RJbnB1dC5kb20gPSB2Tm9kZS5kb20pO1xyXG4gICAgICAgIGNvbXBvbmVudC5fbGFzdElucHV0ID0gbmV4dElucHV0O1xyXG4gICAgICAgIGlmIChkaWRVcGRhdGUpIHtcclxuICAgICAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGNvbXBvbmVudC5fbGlmZWN5Y2xlO1xyXG4gICAgICAgICAgICBpZiAoIXN1YkxpZmVjeWNsZSkge1xyXG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5fbGlmZWN5Y2xlID0gc3ViTGlmZWN5Y2xlO1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRDb250ZXh0ID0gY29tcG9uZW50LmdldENoaWxkQ29udGV4dCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuX2NoaWxkQ29udGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGFzc2lnbih7fSwgY29udGV4dCwgY29tcG9uZW50Ll9jaGlsZENvbnRleHQsIGNoaWxkQ29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29tcG9uZW50Ll9wYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBzdWJMaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgY29tcG9uZW50Ll9pc1NWRywgZmFsc2UpO1xyXG4gICAgICAgICAgICBzdWJMaWZlY3ljbGUudHJpZ2dlcigpO1xyXG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByb3BzLCBwcmV2U3RhdGUpO1xyXG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJVcGRhdGUgJiYgaW5mZXJuby5vcHRpb25zLmFmdGVyVXBkYXRlKHZOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRvbSA9IHZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudFRvRE9NTm9kZU1hcCA9IGNvbXBvbmVudC5fY29tcG9uZW50VG9ET01Ob2RlTWFwO1xyXG4gICAgICAgIGNvbXBvbmVudFRvRE9NTm9kZU1hcCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGNvbXBvbmVudCwgbmV4dElucHV0LmRvbSk7XHJcbiAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pO1xyXG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZihjYWxsYmFjaykpIHtcclxuICAgICAgICBpZiAoY29tcG9uZW50Ll9ibG9ja1JlbmRlcikge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc3RhdGUgPSBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZTtcclxuICAgICAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxufVxyXG52YXIgQ29tcG9uZW50ID0gZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB0aGlzLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xyXG4gICAgdGhpcy5faWdub3JlU2V0U3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX2RlZmVyU2V0U3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc3luY1NldFN0YXRlID0gdHJ1ZTtcclxuICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xyXG4gICAgdGhpcy5fbGFzdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuX3ZOb2RlID0gbnVsbDtcclxuICAgIHRoaXMuX3VubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLl9saWZlY3ljbGUgPSBudWxsO1xyXG4gICAgdGhpcy5fY2hpbGRDb250ZXh0ID0gbnVsbDtcclxuICAgIHRoaXMuX3BhdGNoID0gbnVsbDtcclxuICAgIHRoaXMuX2lzU1ZHID0gZmFsc2U7XHJcbiAgICB0aGlzLl9jb21wb25lbnRUb0RPTU5vZGVNYXAgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwgaW5mZXJuby5FTVBUWV9PQko7XHJcbiAgICAvKiogQHR5cGUge29iamVjdH0gKi9cclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgaW5mZXJuby5FTVBUWV9PQko7IC8vIGNvbnRleHQgc2hvdWxkIG5vdCBiZSBtdXRhYmxlXHJcbn07XHJcbkNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyIChuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcclxufTtcclxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIGZvcmNlVXBkYXRlIChjYWxsYmFjaykge1xyXG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlzQnJvd3NlciAmJiBhcHBseVN0YXRlKHRoaXMsIHRydWUsIGNhbGxiYWNrKTtcclxufTtcclxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlIChuZXdTdGF0ZSwgY2FsbGJhY2spIHtcclxuICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuX2Jsb2NrU2V0U3RhdGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHF1ZXVlU3RhdGVDaGFuZ2VzKHRoaXMsIG5ld1N0YXRlLCBjYWxsYmFjaywgdGhpcy5fc3luY1NldFN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3dFcnJvcigpO1xyXG4gICAgfVxyXG59O1xyXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlU3luYyA9IGZ1bmN0aW9uIHNldFN0YXRlU3luYyAobmV3U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuX2Jsb2NrU2V0U3RhdGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHF1ZXVlU3RhdGVDaGFuZ2VzKHRoaXMsIG5ld1N0YXRlLCBudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3dFcnJvcigpO1xyXG4gICAgfVxyXG59O1xyXG5Db21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XHJcbn07XHJcbkNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSwgcHJldkNvbnRleHQpIHtcclxufTtcclxuQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzLCBjb250ZXh0KSB7XHJcbn07XHJcbkNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xyXG59O1xyXG5Db21wb25lbnQucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCAoKSB7XHJcbn07XHJcbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIF91cGRhdGVDb21wb25lbnQgKHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcmV2UHJvcHMsIG5leHRQcm9wcywgY29udGV4dCwgZm9yY2UsIGZyb21TZXRTdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93RXJyb3Iobm9PcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93RXJyb3IoKTtcclxuICAgIH1cclxuICAgIGlmICgocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBpbmZlcm5vLkVNUFRZX09CSikgfHwgcHJldlN0YXRlICE9PSBuZXh0U3RhdGUgfHwgZm9yY2UpIHtcclxuICAgICAgICBpZiAocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBpbmZlcm5vLkVNUFRZX09CSikge1xyXG4gICAgICAgICAgICBpZiAoIWZyb21TZXRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nU2V0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IGFzc2lnbih7fSwgbmV4dFN0YXRlLCB0aGlzLl9wZW5kaW5nU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgfHwgZm9yY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICAgICAgaW5mZXJuby5vcHRpb25zLmJlZm9yZVJlbmRlciAmJiBpbmZlcm5vLm9wdGlvbnMuYmVmb3JlUmVuZGVyKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcmVuZGVyID0gdGhpcy5yZW5kZXIobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJSZW5kZXIgJiYgaW5mZXJuby5vcHRpb25zLmFmdGVyUmVuZGVyKHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTk9fT1A7XHJcbn07XG5cbnJldHVybiBDb21wb25lbnQ7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1jb21wb25lbnQvZGlzdC9pbmZlcm5vLWNvbXBvbmVudC5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./src/ts/App.tsx ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _inferno = __webpack_require__(/*! inferno */ 0);\n\nvar _infernoComponent = __webpack_require__(/*! inferno-component */ 1);\n\nvar _infernoComponent2 = _interopRequireDefault(_infernoComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar container = document.getElementById('app');\n\nvar MyComponent = function (_Component) {\n    _inherits(MyComponent, _Component);\n\n    function MyComponent(props) {\n        _classCallCheck(this, MyComponent);\n\n        var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));\n\n        _this.state = {\n            counter: 0\n        };\n        return _this;\n    }\n\n    _createClass(MyComponent, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return (0, _inferno.createVNode)(2, 'div', null, [(0, _inferno.createVNode)(2, 'h1', null, 'Header!???---------'), (0, _inferno.createVNode)(2, 'span', null, ['Counter is at: ', this.state.counter]), (0, _inferno.createVNode)(2, 'button', null, 'aaaaa', {\n                'onclick': function onclick(e) {\n                    _this2.setState(Object.assign({}, _this2.state, { counter: _this2.state.counter + 1 }));\n                }\n            })]);\n        }\n    }]);\n\n    return MyComponent;\n}(_infernoComponent2.default);\n\n(0, _inferno.render)((0, _inferno.createVNode)(16, MyComponent), container);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy9BcHAudHN4P2JhOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW5kZXIsIHZlcnNpb259IGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbnRhaW5lciA6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8YW55ICwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb3VudGVyOiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+SGVhZGVyIT8/Py0tLS0tLS0tLTwvaDE+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q291bnRlciBpcyBhdDogeyB0aGlzLnN0YXRlLmNvdW50ZXIgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlICwgY291bnRlciA6IHRoaXMuc3RhdGUuY291bnRlciArMSB9KVxuICAgICAgICAgICAgICAgIH19PmFhYWFhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbnJlbmRlcig8TXlDb21wb25lbnQgLz4gLCBjb250YWluZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cy9BcHAudHN4Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7Ozs7OztBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUdBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);