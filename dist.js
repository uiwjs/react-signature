(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["@uiw/react-signature"] = factory(require("react"));
	else
		root["@uiw/react-signature"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__442__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 192
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(442),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ },

/***/ 540
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(192);
} else // removed by dead control flow
{}


/***/ },

/***/ 442
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

/***/ }

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OptionContext: () => (/* reexport */ OptionContext),
  OptionDispatchContext: () => (/* reexport */ OptionDispatchContext),
  PointerContext: () => (/* reexport */ PointerContext),
  PointerDispatchContext: () => (/* reexport */ PointerDispatchContext),
  "default": () => (/* binding */ src),
  defaultOptions: () => (/* reexport */ defaultOptions),
  defaultStyle: () => (/* reexport */ defaultStyle),
  getBoundingClientRect: () => (/* reexport */ getBoundingClientRect),
  getClinetXY: () => (/* reexport */ getClinetXY),
  getStroke: () => (/* reexport */ R),
  getStrokeOutlinePoints: () => (/* reexport */ P),
  getStrokePoints: () => (/* reexport */ L),
  getSvgPathFromStroke: () => (/* reexport */ getSvgPathFromStroke),
  initialState: () => (/* reexport */ initialState),
  reducer: () => (/* reexport */ reducer),
  reducerOption: () => (/* reexport */ reducerOption),
  useDispatch: () => (/* reexport */ useDispatch),
  useEvent: () => (/* reexport */ useEvent),
  useOptionDispatch: () => (/* reexport */ useOptionDispatch),
  useOptionStore: () => (/* reexport */ useOptionStore),
  useStore: () => (/* reexport */ useStore)
});

;// ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

;// ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
;// ./src/store.tsx
var initialState={};var PointerContext=/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(initialState);var PointerDispatchContext=/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(function(){});function reducer(tasks,action){if(action&&Object.keys(action).length===0)return initialState;return _objectSpread2(_objectSpread2({},tasks),action);}var useStore=function useStore(){return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(PointerContext);};var useDispatch=function useDispatch(){return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(PointerDispatchContext);};
;// ./src/options.tsx
var defaultOptions={size:6,smoothing:0.46,thinning:0.73,streamline:0.5,easing:function easing(t){return t;},start:{taper:0,easing:function easing(t){return t;},cap:true},end:{taper:0,easing:function easing(t){return t;},cap:true}};var OptionContext=/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(defaultOptions);var OptionDispatchContext=/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(function(){});function reducerOption(tasks,action){return _objectSpread2(_objectSpread2({},tasks),action);}var useOptionStore=function useOptionStore(){return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(OptionContext);};var useOptionDispatch=function useOptionDispatch(){return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(OptionDispatchContext);};
;// ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

;// ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

;// ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

;// ./src/utils.ts
/**
 * Turn the points returned from perfect-freehand into SVG path data.
 */function getSvgPathFromStroke(stroke){if(!stroke.length)return'';var d=stroke.reduce(function(acc,_ref,i,arr){var _ref2=_slicedToArray(_ref,2),x0=_ref2[0],y0=_ref2[1];var _arr=_slicedToArray(arr[(i+1)%arr.length],2),x1=_arr[0],y1=_arr[1];acc.push(x0,y0,(x0+x1)/2,(y0+y1)/2);return acc;},['M'].concat(_toConsumableArray(stroke[0]),['Q']));d.push('Z');return d.join(' ');}var getBoundingClientRect=function getBoundingClientRect(el){var rect=el===null||el===void 0?void 0:el.getBoundingClientRect();var offsetX=(rect===null||rect===void 0?void 0:rect.left)||0;var offsetY=(rect===null||rect===void 0?void 0:rect.top)||0;return{offsetX:offsetX,offsetY:offsetY};};var getClinetXY=function getClinetXY(_ref3){var clientX=_ref3.clientX,clientY=_ref3.clientY;return{clientX:clientX,clientY:clientY};};var defaultStyle={'--w-signature-background':'#fff',touchAction:'none',position:'relative',width:'100%',height:'100%',backgroundColor:'var(--w-signature-background)'};// Saves incoming handler to the ref in order to avoid "useCallback hell"
function useEvent(handler){var callbackRef=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(handler);(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function(){callbackRef.current=handler;});return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function(event){return callbackRef.current&&callbackRef.current(event);},[]);}
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(540);
;// ./src/Signature.tsx
var _excluded=["className","prefixCls","style","readonly","onPointer","children"];var Signature=/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function(props,ref){var className=props.className,_props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-signature':_props$prefixCls,style=props.style,_props$readonly=props.readonly,readonly=_props$readonly===void 0?false:_props$readonly,onPointer=props.onPointer,children=props.children,others=_objectWithoutProperties(props,_excluded);var cls=[className,prefixCls].filter(Boolean).join(' ');var $svg=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);var $path=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();var pointsRef=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();var pointCount=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(0);var pointId=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)();var dispatch=useDispatch();(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref,function(){return{svg:$svg.current,dispatch:dispatch,clear:function clear(){return dispatch({});}};},[$svg.current,dispatch]);var handlePointerDown=useEvent(function(e){if(readonly)return;pointCount.current+=1;var _getBoundingClientRec=getBoundingClientRect($svg.current),offsetY=_getBoundingClientRec.offsetY,offsetX=_getBoundingClientRec.offsetX;var evn=e;var clientX=evn.clientX||evn.nativeEvent.clientX;var clientY=evn.clientY||evn.nativeEvent.clientY;pointsRef.current=[[clientX-offsetX,clientY-offsetY]];var pathElm=document.createElementNS('http://www.w3.org/2000/svg','path');$path.current=pathElm;$svg.current.appendChild(pathElm);dispatch(_defineProperty({},pointId+pointCount.current,pointsRef.current));document.addEventListener('pointermove',handlePointerMove);});var handlePointerMove=useEvent(function(e){if($path.current){var _getBoundingClientRec2=getBoundingClientRect($svg.current),offsetY=_getBoundingClientRec2.offsetY,offsetX=_getBoundingClientRec2.offsetX;var _getClinetXY=getClinetXY(e),clientX=_getClinetXY.clientX,clientY=_getClinetXY.clientY;pointsRef.current=[].concat(_toConsumableArray(pointsRef.current),[[clientX-offsetX,clientY-offsetY]]);dispatch(_defineProperty({},pointId+pointCount.current,pointsRef.current));}});var handlePointerUp=useEvent(function(){if(!pointsRef.current)return;var result=pointsRef.current||[];onPointer&&props.onPointer(result);// Remove the temporary path element from DOM
if($path.current&&$svg.current&&$svg.current.contains($path.current)){$svg.current.removeChild($path.current);}$path.current=undefined;pointsRef.current=undefined;document.removeEventListener('pointermove',handlePointerMove);});(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function(){var _$svg$current;document.addEventListener('pointerup',handlePointerUp);(_$svg$current=$svg.current)===null||_$svg$current===void 0?void 0:_$svg$current.addEventListener('pointerdown',handlePointerDown);return function(){var _$svg$current2;document.removeEventListener('pointerup',handlePointerUp);(_$svg$current2=$svg.current)===null||_$svg$current2===void 0?void 0:_$svg$current2.removeEventListener('pointerdown',handlePointerDown);};},[]);var svgStyle=_objectSpread2(_objectSpread2({},defaultStyle),style);return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",_objectSpread2(_objectSpread2({},others),{},{ref:$svg,className:cls,style:svgStyle,children:children}));});
;// ../node_modules/perfect-freehand/dist/esm/index.mjs
const{PI:e}=Math,t=e+1e-4,n=.5,r=[1,1];function i(e,t,n,r=e=>e){return e*r(.5-t*(.5-n))}const{min:a}=Math;function o(e,t,n){let r=a(1,t/n);return a(1,e+(a(1,1-r)-e)*(r*.275))}function s(e){return[-e[0],-e[1]]}function c(e,t){return[e[0]+t[0],e[1]+t[1]]}function l(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function u(e,t){return[e[0]-t[0],e[1]-t[1]]}function d(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function f(e,t){return[e[0]*t,e[1]*t]}function p(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function m(e,t){return[e[0]/t,e[1]/t]}function h(e){return[e[1],-e[0]]}function g(e,t){let n=t[0];return e[0]=t[1],e[1]=-n,e}function ee(e,t){return e[0]*t[0]+e[1]*t[1]}function _(e,t){return e[0]===t[0]&&e[1]===t[1]}function v(e){return Math.hypot(e[0],e[1])}function y(e,t){let n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function b(e){return m(e,v(e))}function x(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function S(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=e[0]-t[0],o=e[1]-t[1],s=a*i-o*r,c=a*r+o*i;return[s+t[0],c+t[1]]}function C(e,t,n,r){let i=Math.sin(r),a=Math.cos(r),o=t[0]-n[0],s=t[1]-n[1],c=o*a-s*i,l=o*i+s*a;return e[0]=c+n[0],e[1]=l+n[1],e}function w(e,t,n){return c(e,f(u(t,e),n))}function te(e,t,n,r){let i=n[0]-t[0],a=n[1]-t[1];return e[0]=t[0]+i*r,e[1]=t[1]+a*r,e}function T(e,t,n){return c(e,f(t,n))}const E=[0,0],D=[0,0],O=[0,0];function k(e,n){let r=T(e,b(h(u(e,c(e,[1,1])))),-n),i=[],a=1/13;for(let n=a;n<=1;n+=a)i.push(S(r,e,t*2*n));return i}function A(e,n,r){let i=[],a=1/r;for(let r=a;r<=1;r+=a)i.push(S(n,e,t*r));return i}function j(e,t,n){let r=u(t,n),i=f(r,.5),a=f(r,.51);return[u(e,i),u(e,a),c(e,a),c(e,i)]}function M(e,n,r,i){let a=[],o=T(e,n,r),s=1/i;for(let n=s;n<1;n+=s)a.push(S(o,e,t*3*n));return a}function ne(e,t,n){return[c(e,f(t,n)),c(e,f(t,n*.99)),u(e,f(t,n*.99)),u(e,f(t,n))]}function N(e,t,n){return e===!1||e===void 0?0:e===!0?Math.max(t,n):e}function re(e,t,n){return e.slice(0,10).reduce((e,r)=>{let i=r.pressure;return t&&(i=o(e,r.distance,n)),(e+i)/2},e[0].pressure)}function P(e,n={}){let{size:r=16,smoothing:a=.5,thinning:f=.5,simulatePressure:m=!0,easing:_=e=>e,start:v={},end:b={},last:x=!1}=n,{cap:S=!0,easing:w=e=>e*(2-e)}=v,{cap:T=!0,easing:P=e=>--e*e*e+1}=b;if(e.length===0||r<=0)return[];let F=e[e.length-1].runningLength,I=N(v.taper,r,F),L=N(b.taper,r,F),R=(r*a)**2,z=[],B=[],V=re(e,m,r),H=i(r,f,e[e.length-1].pressure,_),U,W=e[0].vector,G=e[0].point,K=G,q=G,J=K,Y=!1;for(let n=0;n<e.length;n++){let{pressure:a}=e[n],{point:s,vector:h,distance:v,runningLength:b}=e[n],x=n===e.length-1;if(!x&&F-b<3)continue;f?(m&&(a=o(V,v,r)),H=i(r,f,a,_)):H=r/2,U===void 0&&(U=H);let S=b<I?w(b/I):1,T=F-b<L?P((F-b)/L):1;H=Math.max(.01,H*Math.min(S,T));let k=(x?e[n]:e[n+1]).vector,A=x?1:ee(h,k),j=ee(h,W)<0&&!Y,M=A!==null&&A<0;if(j||M){g(E,W),p(E,E,H);for(let e=0;e<=1;e+=.07692307692307693)d(D,s,E),C(D,D,s,t*e),q=[D[0],D[1]],z.push(q),l(O,s,E),C(O,O,s,t*-e),J=[O[0],O[1]],B.push(J);G=q,K=J,M&&(Y=!0);continue}if(Y=!1,x){g(E,h),p(E,E,H),z.push(u(s,E)),B.push(c(s,E));continue}te(E,k,h,A),g(E,E),p(E,E,H),d(D,s,E),q=[D[0],D[1]],(n<=1||y(G,q)>R)&&(z.push(q),G=q),l(O,s,E),J=[O[0],O[1]],(n<=1||y(K,J)>R)&&(B.push(J),K=J),V=a,W=h}let X=[e[0].point[0],e[0].point[1]],Z=e.length>1?[e[e.length-1].point[0],e[e.length-1].point[1]]:c(e[0].point,[1,1]),Q=[],$=[];if(e.length===1){if(!(I||L)||x)return k(X,U||H)}else{I||L&&e.length===1||(S?Q.push(...A(X,B[0],13)):Q.push(...j(X,z[0],B[0])));let t=h(s(e[e.length-1].vector));L||I&&e.length===1?$.push(Z):T?$.push(...M(Z,t,H,29)):$.push(...ne(Z,t,H))}return z.concat($,B.reverse(),Q)}const F=[0,0];function I(e){return e!=null&&e>=0}function L(e,t={}){let{streamline:i=.5,size:a=16,last:o=!1}=t;if(e.length===0)return[];let s=.15+(1-i)*.85,l=Array.isArray(e[0])?e:e.map(({x:e,y:t,pressure:r=n})=>[e,t,r]);if(l.length===2){let e=l[1];l=l.slice(0,-1);for(let t=1;t<5;t++)l.push(w(l[0],e,t/4))}l.length===1&&(l=[...l,[...c(l[0],r),...l[0].slice(2)]]);let u=[{point:[l[0][0],l[0][1]],pressure:I(l[0][2])?l[0][2]:.25,vector:[...r],distance:0,runningLength:0}],f=!1,p=0,m=u[0],h=l.length-1;for(let e=1;e<l.length;e++){let t=o&&e===h?[l[e][0],l[e][1]]:w(m.point,l[e],s);if(_(m.point,t))continue;let r=x(t,m.point);if(p+=r,e<h&&!f){if(p<a)continue;f=!0}d(F,m.point,t),m={point:t,pressure:I(l[e][2])?l[e][2]:n,vector:b(F),distance:r,runningLength:p},u.push(m)}return u[0].vector=u[1]?.vector||[0,0],u}function R(e,t={}){return P(L(e,t),t)}var z=(/* unused pure expression or super */ null && (R));
//# sourceMappingURL=index.mjs.map
;// ./src/Paths.tsx
var Paths_excluded=["renderPath","container"];var Paths=function Paths(){var data=useStore();return/*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment,{children:Object.keys(data).map(function(key,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(CreatePath,{keyName:key,index:index,data:data[key]},key);})});};var CreatePath=function CreatePath(_ref){var _ref$data=_ref.data,data=_ref$data===void 0?[]:_ref$data,index=_ref.index,keyName=_ref.keyName;var _useOptionStore=useOptionStore(),renderPath=_useOptionStore.renderPath,container=_useOptionStore.container,options=_objectWithoutProperties(_useOptionStore,Paths_excluded);var stroke=R(data,options);var pathData=getSvgPathFromStroke(stroke);var dom=renderPath?renderPath(pathData,keyName,data,index,container):null;if(dom)return dom;return/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:pathData});};
;// ./src/index.tsx
var src_excluded=["children","options","renderPath","defaultPoints"];var src_Signature=/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function(_ref,ref){var children=_ref.children,options=_ref.options,renderPath=_ref.renderPath,defaultPoints=_ref.defaultPoints,props=_objectWithoutProperties(_ref,src_excluded);var _useReducer=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(reducer,Object.assign({},defaultPoints)),_useReducer2=_slicedToArray(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];var _useReducer3=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(reducerOption,Object.assign(_objectSpread2(_objectSpread2({},defaultOptions),{},{renderPath:renderPath}),options)),_useReducer4=_slicedToArray(_useReducer3,2),stateOption=_useReducer4[0],dispatchOption=_useReducer4[1];(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function(){return dispatchOption(_objectSpread2(_objectSpread2({},options),{},{renderPath:renderPath}));},[options,renderPath]);return/*#__PURE__*/(0,jsx_runtime.jsx)(PointerContext.Provider,{value:state,children:/*#__PURE__*/(0,jsx_runtime.jsx)(PointerDispatchContext.Provider,{value:dispatch,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Signature,_objectSpread2(_objectSpread2({},props),{},{ref:ref,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OptionContext.Provider,{value:stateOption,children:/*#__PURE__*/(0,jsx_runtime.jsx)(OptionDispatchContext.Provider,{value:dispatchOption,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Paths,{})})}),children]}))})});});/* harmony default export */ const src = (src_Signature);
/******/ 	return __webpack_exports__;
/******/ })()
;
});