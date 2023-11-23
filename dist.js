(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["@uiw/react-signature"] = factory(require("react"));
	else
		root["@uiw/react-signature"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__787__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
var f=__webpack_require__(787),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(426);
} else {}


/***/ }),

/***/ 787:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src),
  defaultOptions: () => (/* reexport */ defaultOptions),
  defaultStyle: () => (/* reexport */ defaultStyle),
  getBoundingClientRect: () => (/* reexport */ getBoundingClientRect),
  getClinetXY: () => (/* reexport */ getClinetXY),
  getStroke: () => (/* reexport */ ae),
  getStrokeOutlinePoints: () => (/* reexport */ ce),
  getStrokePoints: () => (/* reexport */ me),
  getSvgPathFromStroke: () => (/* reexport */ getSvgPathFromStroke)
});

;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
;// CONCATENATED MODULE: ../node_modules/perfect-freehand/dist/esm/index.js
function $(e,t,u,x=h=>h){return e*x(.5-t*(.5-u))}function se(e){return[-e[0],-e[1]]}function l(e,t){return[e[0]+t[0],e[1]+t[1]]}function a(e,t){return[e[0]-t[0],e[1]-t[1]]}function b(e,t){return[e[0]*t,e[1]*t]}function he(e,t){return[e[0]/t,e[1]/t]}function R(e){return[e[1],-e[0]]}function B(e,t){return e[0]*t[0]+e[1]*t[1]}function ue(e,t){return e[0]===t[0]&&e[1]===t[1]}function ge(e){return Math.hypot(e[0],e[1])}function de(e){return e[0]*e[0]+e[1]*e[1]}function A(e,t){return de(a(e,t))}function G(e){return he(e,ge(e))}function ie(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function L(e,t,u){let x=Math.sin(u),h=Math.cos(u),y=e[0]-t[0],n=e[1]-t[1],f=y*h-n*x,d=y*x+n*h;return[f+t[0],d+t[1]]}function K(e,t,u){return l(e,b(a(t,e),u))}function ee(e,t,u){return l(e,b(t,u))}var{min:C,PI:xe}=Math,pe=.275,V=xe+1e-4;function ce(e,t={}){let{size:u=16,smoothing:x=.5,thinning:h=.5,simulatePressure:y=!0,easing:n=r=>r,start:f={},end:d={},last:D=!1}=t,{cap:S=!0,easing:j=r=>r*(2-r)}=f,{cap:q=!0,easing:c=r=>--r*r*r+1}=d;if(e.length===0||u<=0)return[];let p=e[e.length-1].runningLength,g=f.taper===!1?0:f.taper===!0?Math.max(u,p):f.taper,T=d.taper===!1?0:d.taper===!0?Math.max(u,p):d.taper,te=Math.pow(u*x,2),_=[],M=[],H=e.slice(0,10).reduce((r,i)=>{let o=i.pressure;if(y){let s=C(1,i.distance/u),W=C(1,1-s);o=C(1,r+(W-r)*(s*pe))}return(r+o)/2},e[0].pressure),m=$(u,h,e[e.length-1].pressure,n),U,X=e[0].vector,z=e[0].point,F=z,O=z,E=F,J=!1;for(let r=0;r<e.length;r++){let{pressure:i}=e[r],{point:o,vector:s,distance:W,runningLength:I}=e[r];if(r<e.length-1&&p-I<3)continue;if(h){if(y){let v=C(1,W/u),Z=C(1,1-v);i=C(1,H+(Z-H)*(v*pe))}m=$(u,h,i,n)}else m=u/2;U===void 0&&(U=m);let le=I<g?j(I/g):1,fe=p-I<T?c((p-I)/T):1;m=Math.max(.01,m*Math.min(le,fe));let re=(r<e.length-1?e[r+1]:e[r]).vector,Y=r<e.length-1?B(s,re):1,be=B(s,X)<0&&!J,ne=Y!==null&&Y<0;if(be||ne){let v=b(R(X),m);for(let Z=1/13,w=0;w<=1;w+=Z)O=L(a(o,v),o,V*w),_.push(O),E=L(l(o,v),o,V*-w),M.push(E);z=O,F=E,ne&&(J=!0);continue}if(J=!1,r===e.length-1){let v=b(R(s),m);_.push(a(o,v)),M.push(l(o,v));continue}let oe=b(R(K(re,s,Y)),m);O=a(o,oe),(r<=1||A(z,O)>te)&&(_.push(O),z=O),E=l(o,oe),(r<=1||A(F,E)>te)&&(M.push(E),F=E),H=i,X=s}let P=e[0].point.slice(0,2),k=e.length>1?e[e.length-1].point.slice(0,2):l(e[0].point,[1,1]),Q=[],N=[];if(e.length===1){if(!(g||T)||D){let r=ee(P,G(R(a(P,k))),-(U||m)),i=[];for(let o=1/13,s=o;s<=1;s+=o)i.push(L(r,P,V*2*s));return i}}else{if(!(g||T&&e.length===1))if(S)for(let i=1/13,o=i;o<=1;o+=i){let s=L(M[0],P,V*o);Q.push(s)}else{let i=a(_[0],M[0]),o=b(i,.5),s=b(i,.51);Q.push(a(P,o),a(P,s),l(P,s),l(P,o))}let r=R(se(e[e.length-1].vector));if(T||g&&e.length===1)N.push(k);else if(q){let i=ee(k,r,m);for(let o=1/29,s=o;s<1;s+=o)N.push(L(i,k,V*3*s))}else N.push(l(k,b(r,m)),l(k,b(r,m*.99)),a(k,b(r,m*.99)),a(k,b(r,m)))}return _.concat(N,M.reverse(),Q)}function me(e,t={}){var q;let{streamline:u=.5,size:x=16,last:h=!1}=t;if(e.length===0)return[];let y=.15+(1-u)*.85,n=Array.isArray(e[0])?e:e.map(({x:c,y:p,pressure:g=.5})=>[c,p,g]);if(n.length===2){let c=n[1];n=n.slice(0,-1);for(let p=1;p<5;p++)n.push(K(n[0],c,p/4))}n.length===1&&(n=[...n,[...l(n[0],[1,1]),...n[0].slice(2)]]);let f=[{point:[n[0][0],n[0][1]],pressure:n[0][2]>=0?n[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,D=0,S=f[0],j=n.length-1;for(let c=1;c<n.length;c++){let p=h&&c===j?n[c].slice(0,2):K(S.point,n[c],y);if(ue(S.point,p))continue;let g=ie(p,S.point);if(D+=g,c<j&&!d){if(D<x)continue;d=!0}S={point:p,pressure:n[c][2]>=0?n[c][2]:.5,vector:G(a(S.point,p)),distance:g,runningLength:D},f.push(S)}return f[0].vector=((q=f[1])==null?void 0:q.vector)||[0,0],f}function ae(e,t={}){return ce(me(e,t),t)}var _e=(/* unused pure expression or super */ null && (ae));

;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/utils.ts
/**
 * Turn the points returned from perfect-freehand into SVG path data.
 */function getSvgPathFromStroke(stroke){if(!stroke.length)return'';var d=stroke.reduce(function(acc,_ref,i,arr){var _ref2=_slicedToArray(_ref,2),x0=_ref2[0],y0=_ref2[1];var _arr=_slicedToArray(arr[(i+1)%arr.length],2),x1=_arr[0],y1=_arr[1];acc.push(x0,y0,(x0+x1)/2,(y0+y1)/2);return acc;},['M'].concat(_toConsumableArray(stroke[0]),['Q']));d.push('Z');return d.join(' ');}var defaultOptions={size:6,smoothing:0.46,thinning:0.73,streamline:0.5,easing:function easing(t){return t;},start:{taper:0,easing:function easing(t){return t;},cap:true},end:{taper:0,easing:function easing(t){return t;},cap:true}};var getBoundingClientRect=function getBoundingClientRect(el){var rect=el===null||el===void 0?void 0:el.getBoundingClientRect();var offsetX=(rect===null||rect===void 0?void 0:rect.left)||0;var offsetY=(rect===null||rect===void 0?void 0:rect.top)||0;return{offsetX:offsetX,offsetY:offsetY};};var getClinetXY=function getClinetXY(_ref3){var clientX=_ref3.clientX,clientY=_ref3.clientY;// const { clientX, clientY } = e.type === 'touchmove' ? (e as TouchEvent).touches[0] : (e as MouseEvent);
return{clientX:clientX,clientY:clientY};};var defaultStyle={'--w-signature-background':'#fff',touchAction:'none',position:'relative',width:'100%',height:'100%',backgroundColor:'var(--w-signature-background)'};
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(246);
;// CONCATENATED MODULE: ./src/index.tsx
var _excluded=["className","prefixCls","style","readonly","onPointer","options","children"];var Signature=/*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(function(props,ref){var className=props.className,_props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-signature':_props$prefixCls,style=props.style,_props$readonly=props.readonly,readonly=_props$readonly===void 0?false:_props$readonly,onPointer=props.onPointer,options=props.options,children=props.children,others=_objectWithoutProperties(props,_excluded);var cls=[className,prefixCls].filter(Boolean).join(' ');var $svg=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);var $path=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();var pointsRef=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref,function(){return $svg.current;},[$svg.current]);var handlePointerDown=function handlePointerDown(e){var _getBoundingClientRec=getBoundingClientRect($svg.current),offsetY=_getBoundingClientRec.offsetY,offsetX=_getBoundingClientRec.offsetX;var clientX=e.clientX||e.nativeEvent.clientX;var clientY=e.clientY||e.nativeEvent.clientY;pointsRef.current=[[clientX-offsetX,clientY-offsetY]];var pathElm=document.createElementNS('http://www.w3.org/2000/svg','path');$path.current=pathElm;$svg.current.appendChild(pathElm);};var handlePointerMove=function handlePointerMove(e){if($path.current){var _$path$current;var _getBoundingClientRec2=getBoundingClientRect($svg.current),offsetY=_getBoundingClientRec2.offsetY,offsetX=_getBoundingClientRec2.offsetX;var _getClinetXY=getClinetXY(e),clientX=_getClinetXY.clientX,clientY=_getClinetXY.clientY;pointsRef.current=[].concat(_toConsumableArray(pointsRef.current),[[clientX-offsetX,clientY-offsetY]]);var stroke=ae(pointsRef.current,_objectSpread2(_objectSpread2({},defaultOptions),options));var pathData=getSvgPathFromStroke(stroke);(_$path$current=$path.current)===null||_$path$current===void 0?void 0:_$path$current.setAttribute('d',pathData);}};var handlePointerUp=function handlePointerUp(){var result=pointsRef.current||[];onPointer&&onPointer(result);$path.current=undefined;pointsRef.current=undefined;};(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function(){if(readonly)return;document.addEventListener('pointermove',handlePointerMove);document.addEventListener('pointerup',handlePointerUp);return function(){if(readonly)return;document.removeEventListener('pointermove',handlePointerMove);document.removeEventListener('pointerup',handlePointerUp);};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",_objectSpread2(_objectSpread2({},others),{},{ref:$svg,className:cls,onPointerDown:handlePointerDown,style:_objectSpread2(_objectSpread2({},defaultStyle),style),children:children}));});/* harmony default export */ const src = (Signature);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});