"use strict";(self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[]).push([[954],{2954:function(e,t,r){r.d(t,{U$:function(){return ge},cI:function(){return we}});var n=r(6252),a=r(2262);
/**
  * vee-validate v4.5.11
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function i(e){return"function"===typeof e}function l(e){return null===e||void 0===e}const o=e=>null!==e&&!!e&&"object"===typeof e&&!Array.isArray(e);function u(e){return Number(e)>=0}function s(e){const t=parseFloat(e);return isNaN(t)?e:t}const d={};function c(e){return d[e]}const v=Symbol("vee-validate-form"),f=Symbol("vee-validate-field-instance"),p=Symbol("Default empty value");function h(e){return i(e)&&!!e.__locatorRef}function y(e){return["input","textarea","select"].includes(e)}function m(e,t){return y(e)&&"file"===t.type}function g(e){return!!e&&i(e.validate)}function b(e){return"checkbox"===e||"radio"===e}function S(e){return o(e)||Array.isArray(e)}function O(e){return Array.isArray(e)?0===e.length:o(e)&&0===Object.keys(e).length}function V(e){return/^\[.+\]$/i.test(e)}function A(e){return F(e)&&e.multiple}function F(e){return"SELECT"===e.tagName}function j(e,t){const r=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return"select"===e&&"multiple"in t&&r}function U(e,t){return j(e,t)||m(e,t)}function E(e){return w(e)&&e.target&&"submit"in e.target}function w(e){return!!e&&(!!("undefined"!==typeof Event&&i(Event)&&e instanceof Event)||!(!e||!e.srcElement))}function k(e,t){return t in e&&e[t]!==p}function B(e){return V(e)?e.replace(/\[|\]/gi,""):e}function M(e,t,r){if(!e)return r;if(V(t))return e[B(t)];const n=(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce(((e,t)=>S(e)&&t in e?e[t]:r),e);return n}function I(e,t,r){if(V(t))return void(e[B(t)]=r);const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let i=0;i<n.length;i++){if(i===n.length-1)return void(a[n[i]]=r);n[i]in a&&!l(a[n[i]])||(a[n[i]]=u(n[i+1])?[]:{}),a=a[n[i]]}}function T(e,t){Array.isArray(e)&&u(t)?e.splice(Number(t),1):o(e)&&delete e[t]}function P(e,t){if(V(t))return void delete e[B(t)];const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let n=e;for(let i=0;i<r.length;i++){if(i===r.length-1){T(n,r[i]);break}if(!(r[i]in n)||l(n[r[i]]))break;n=n[r[i]]}const a=r.map(((t,n)=>M(e,r.slice(0,n).join("."))));for(let i=a.length-1;i>=0;i--)O(a[i])&&(0!==i?T(a[i-1],r[i-1]):T(e,r[0]))}function C(e){return Object.keys(e)}function _(e,t){const r=(0,n.FN)();return(null===r||void 0===r?void 0:r.provides[e])||(0,n.f3)(e,t)}function R(e){(0,n.ZK)(`[vee-validate]: ${e}`)}function x(e,t,r){if(Array.isArray(e)){const r=[...e],n=r.indexOf(t);return n>=0?r.splice(n,1):r.push(t),r}return e===t?r:t}function N(e,t){let r,n;return function(...a){const i=this;return r||(r=!0,setTimeout((()=>r=!1),t),n=e.apply(i,a)),n}}function $(e,t=0){let r=null,n=[];return function(...a){return r&&window.clearTimeout(r),r=window.setTimeout((()=>{const t=e(...a);n.forEach((e=>e(t))),n=[]}),t),new Promise((e=>n.push(e)))}}const Y=(e,t,r)=>t.slots.default?"string"!==typeof e&&e?{default:()=>{var e,n;return null===(n=(e=t.slots).default)||void 0===n?void 0:n.call(e,r())}}:t.slots.default(r()):t.slots.default;function q(e){if(D(e))return e._value}function D(e){return"_value"in e}function L(e){if(!w(e))return e;const t=e.target;if(b(t.type)&&D(t))return q(t);if("file"===t.type&&t.files)return Array.from(t.files);if(A(t))return Array.from(t.options).filter((e=>e.selected&&!e.disabled)).map(q);if(F(t)){const e=Array.from(t.options).find((e=>e.selected));return e?q(e):t.value}return t.value}function H(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?o(e)&&e._$$isNormalized?e:o(e)?Object.keys(e).reduce(((t,r)=>{const n=J(e[r]);return!1!==e[r]&&(t[r]=z(n)),t}),t):"string"!==typeof e?t:e.split("|").reduce(((e,t)=>{const r=Z(t);return r.name?(e[r.name]=z(r.params),e):e}),t):t}function J(e){return!0===e?[]:Array.isArray(e)||o(e)?e:[e]}function z(e){const t=e=>"string"===typeof e&&"@"===e[0]?K(e.slice(1)):e;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{})}const Z=e=>{let t=[];const r=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}};function K(e){const t=t=>{const r=M(t,e)||t[e];return r};return t.__locatorRef=e,t}function X(e){return Array.isArray(e)?e.filter(h):C(e).filter((t=>h(e[t]))).map((t=>e[t]))}const G={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Q=Object.assign({},G);const W=()=>Q;async function ee(e,t,r={}){const n=null===r||void 0===r?void 0:r.bails,a={name:(null===r||void 0===r?void 0:r.name)||"{field}",rules:t,bails:null===n||void 0===n||n,formData:(null===r||void 0===r?void 0:r.values)||{}},i=await te(a,e),l=i.errors;return{errors:l,valid:!l.length}}async function te(e,t){if(g(e.rules))return re(t,e.rules,{bails:e.bails});if(i(e.rules)||Array.isArray(e.rules)){const r={field:e.name,form:e.formData,value:t},n=Array.isArray(e.rules)?e.rules:[e.rules],a=n.length,i=[];for(let l=0;l<a;l++){const a=n[l],o=await a(t,r),u="string"!==typeof o&&o;if(u)continue;const s="string"===typeof o?o:ae(r);if(i.push(s),e.bails)return{errors:i}}return{errors:i}}const r=Object.assign(Object.assign({},e),{rules:H(e.rules)}),n=[],a=Object.keys(r.rules),l=a.length;for(let i=0;i<l;i++){const l=a[i],o=await ne(r,t,{name:l,params:r.rules[l]});if(o.error&&(n.push(o.error),e.bails))return{errors:n}}return{errors:n}}async function re(e,t,r){var n;const a=await t.validate(e,{abortEarly:null===(n=r.bails)||void 0===n||n}).then((()=>[])).catch((e=>{if("ValidationError"===e.name)return e.errors;throw e}));return{errors:a}}async function ne(e,t,r){const n=c(r.name);if(!n)throw new Error(`No such validator '${r.name}' exists.`);const a=ie(r.params,e.formData),i={field:e.name,value:t,form:e.formData,rule:Object.assign(Object.assign({},r),{params:a})},l=await n(t,a,i);return"string"===typeof l?{error:l}:{error:l?void 0:ae(i)}}function ae(e){const t=W().generateMessage;return t?t(e):"Field is invalid"}function ie(e,t){const r=e=>h(e)?e(t):e;return Array.isArray(e)?e.map(r):Object.keys(e).reduce(((t,n)=>(t[n]=r(e[n]),t)),{})}async function le(e,t){const r=await e.validate(t,{abortEarly:!1}).then((()=>[])).catch((e=>{if("ValidationError"!==e.name)throw e;return e.inner||[]})),n={},a={};for(const i of r){const e=i.errors;n[i.path]={valid:!e.length,errors:e},e.length&&(a[i.path]=e[0])}return{valid:!r.length,results:n,errors:a}}async function oe(e,t,r){const n=C(e),a=n.map((async n=>{var a,i,l;const o=await ee(M(t,n),e[n],{name:(null===(a=null===r||void 0===r?void 0:r.names)||void 0===a?void 0:a[n])||n,values:t,bails:null===(l=null===(i=null===r||void 0===r?void 0:r.bailsMap)||void 0===i?void 0:i[n])||void 0===l||l});return Object.assign(Object.assign({},o),{path:n})}));let i=!0;const l=await Promise.all(a),o={},u={};for(const s of l)o[s.path]={valid:s.valid,errors:s.errors},s.valid||(i=!1,u[s.path]=s.errors[0]);return{valid:i,results:o,errors:u}}function ue(e,t,r){"object"===typeof r.value&&(r.value=se(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function se(e){if("object"!==typeof e)return e;var t,r,n,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?n=Object.create(e.__proto__||null):"[object Array]"===i?n=Array(e.length):"[object Set]"===i?(n=new Set,e.forEach((function(e){n.add(se(e))}))):"[object Map]"===i?(n=new Map,e.forEach((function(e,t){n.set(se(t),se(e))}))):"[object Date]"===i?n=new Date(+e):"[object RegExp]"===i?n=new RegExp(e.source,e.flags):"[object DataView]"===i?n=new e.constructor(se(e.buffer)):"[object ArrayBuffer]"===i?n=e.slice(0):"Array]"===i.slice(-6)&&(n=new e.constructor(e)),n){for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)ue(n,r[a],Object.getOwnPropertyDescriptor(e,r[a]));for(a=0,r=Object.getOwnPropertyNames(e);a<r.length;a++)Object.hasOwnProperty.call(n,t=r[a])&&n[t]===e[t]||ue(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}var de=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,a,i;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(a=n;0!==a--;)if(!e(t[a],r[a]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(a of t.entries())if(!r.has(a[0]))return!1;for(a of t.entries())if(!e(a[1],r.get(a[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(a of t.entries())if(!r.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(n=t.length,n!=r.length)return!1;for(a=n;0!==a--;)if(t[a]!==r[a])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(r).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,i[a]))return!1;for(a=n;0!==a--;){var l=i[a];if(!e(t[l],r[l]))return!1}return!0}return t!==t&&r!==r};let ce=0;function ve(e,t){const{value:r,initialValue:n,setInitialValue:a}=fe(e,t.modelValue,!t.standalone),{errorMessage:i,errors:l,setErrors:o}=he(e,!t.standalone),u=pe(r,n,l),s=ce>=Number.MAX_SAFE_INTEGER?0:++ce;function d(e){var t;"value"in e&&(r.value=e.value),"errors"in e&&o(e.errors),"touched"in e&&(u.touched=null!==(t=e.touched)&&void 0!==t?t:u.touched),"initialValue"in e&&a(e.initialValue)}return{id:s,path:e,value:r,initialValue:n,meta:u,errors:l,errorMessage:i,setState:d}}function fe(e,t,r){const i=r?_(v,void 0):void 0,l=(0,a.iH)((0,a.SU)(t));function o(){return i?M(i.meta.value.initialValues,(0,a.SU)(e),(0,a.SU)(l)):(0,a.SU)(l)}function u(t){i?i.setFieldInitialValue((0,a.SU)(e),t):l.value=t}const s=(0,n.Fl)(o);if(!i){const e=(0,a.iH)(o());return{value:e,initialValue:s,setInitialValue:u}}const d=t?(0,a.SU)(t):M(i.values,(0,a.SU)(e),(0,a.SU)(s));i.stageInitialValue((0,a.SU)(e),d);const c=(0,n.Fl)({get(){return M(i.values,(0,a.SU)(e))},set(t){i.setFieldValue((0,a.SU)(e),t)}});return{value:c,initialValue:s,setInitialValue:u}}function pe(e,t,r){const i=(0,a.qj)({touched:!1,pending:!1,valid:!0,validated:!!(0,a.SU)(r).length,initialValue:(0,n.Fl)((()=>(0,a.SU)(t))),dirty:(0,n.Fl)((()=>!de((0,a.SU)(e),(0,a.SU)(t))))});return(0,n.YP)(r,(e=>{i.valid=!e.length}),{immediate:!0,flush:"sync"}),i}function he(e,t){const r=t?_(v,void 0):void 0;function i(e){return e?Array.isArray(e)?e:[e]:[]}if(!r){const e=(0,a.iH)([]);return{errors:e,errorMessage:(0,n.Fl)((()=>e.value[0])),setErrors:t=>{e.value=i(t)}}}const l=(0,n.Fl)((()=>r.errorBag.value[(0,a.SU)(e)]||[]));return{errors:l,errorMessage:(0,n.Fl)((()=>l.value[0])),setErrors:t=>{r.setFieldErrorBag((0,a.SU)(e),i(t))}}}let ye;N((()=>{setTimeout((async()=>{await(0,n.Y3)(),null===ye||void 0===ye||ye.sendInspectorState(me),null===ye||void 0===ye||ye.sendInspectorTree(me)}),100)}),100);const me="vee-validate-inspector";function ge(e,t,r){return b(null===r||void 0===r?void 0:r.type)?Ve(e,t,r):be(e,t,r)}function be(e,t,r){const{initialValue:l,validateOnMount:o,bails:u,type:s,checkedValue:d,label:c,validateOnValueUpdate:p,uncheckedValue:h,standalone:y}=Se((0,a.SU)(e),r),m=y?void 0:_(v);let b=!1;const{id:S,value:O,initialValue:V,meta:A,setState:F,errors:j,errorMessage:U}=ve(e,{modelValue:l,standalone:y}),E=()=>{A.touched=!0},w=(0,n.Fl)((()=>{let r=(0,a.SU)(t);const n=(0,a.SU)(null===m||void 0===m?void 0:m.schema);return n&&!g(n)&&(r=Oe(n,(0,a.SU)(e))||r),g(r)||i(r)||Array.isArray(r)?r:H(r)}));async function k(t){var r,n;return(null===m||void 0===m?void 0:m.validateSchema)?null!==(r=(await m.validateSchema(t)).results[(0,a.SU)(e)])&&void 0!==r?r:{valid:!0,errors:[]}:ee(O.value,w.value,{name:(0,a.SU)(c)||(0,a.SU)(e),values:null!==(n=null===m||void 0===m?void 0:m.values)&&void 0!==n?n:{},bails:u})}async function B(){A.pending=!0,A.validated=!0;const e=await k("validated-only");return b&&(e.valid=!0,e.errors=[]),F({errors:e.errors}),A.pending=!1,e}async function I(){const e=await k("silent");return b&&(e.valid=!0),A.valid=e.valid,e}function T(e){return(null===e||void 0===e?void 0:e.mode)&&"force"!==(null===e||void 0===e?void 0:e.mode)?"validated-only"===(null===e||void 0===e?void 0:e.mode)?B():I():B()}const P=(e,t=!0)=>{const r=L(e);O.value=r,!p&&t&&B()};function C(e){A.touched=e}let R;function x(){R=(0,n.YP)(O,p?B:I,{deep:!0})}function N(e){var t;null===R||void 0===R||R();const r=e&&"value"in e?e.value:V.value;F({value:se(r),initialValue:se(r),touched:null!==(t=null===e||void 0===e?void 0:e.touched)&&void 0!==t&&t,errors:(null===e||void 0===e?void 0:e.errors)||[]}),A.pending=!1,A.validated=!1,I(),(0,n.Y3)((()=>{x()}))}function $(e){O.value=e}function Y(e){F({errors:Array.isArray(e)?e:[e]})}(0,n.bv)((()=>{if(o)return B();m&&m.validateSchema||I()})),x();const q={id:S,name:e,label:c,value:O,meta:A,errors:j,errorMessage:U,type:s,checkedValue:d,uncheckedValue:h,bails:u,resetField:N,handleReset:()=>N(),validate:T,handleChange:P,handleBlur:E,setState:F,setTouched:C,setErrors:Y,setValue:$};if((0,n.JJ)(f,q),(0,a.dq)(t)&&"function"!==typeof(0,a.SU)(t)&&(0,n.YP)(t,((e,t)=>{de(e,t)||(A.validated?B():I())}),{deep:!0}),!m)return q;m.register(q),(0,n.Jd)((()=>{b=!0,m.unregister(q)}));const D=(0,n.Fl)((()=>{const e=w.value;return!e||i(e)||g(e)||Array.isArray(e)?{}:Object.keys(e).reduce(((t,r)=>{const n=X(e[r]).map((e=>e.__locatorRef)).reduce(((e,t)=>{const r=M(m.values,t)||m.values[t];return void 0!==r&&(e[t]=r),e}),{});return Object.assign(t,n),t}),{})}));return(0,n.YP)(D,((e,t)=>{if(!Object.keys(e).length)return;const r=!de(e,t);r&&(A.validated?B():I())})),q}function Se(e,t){const r=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:e,validateOnValueUpdate:!0,standalone:!1});if(!t)return r();const n="valueProp"in t?t.valueProp:t.checkedValue;return Object.assign(Object.assign(Object.assign({},r()),t||{}),{checkedValue:n})}function Oe(e,t){if(e)return e[t]}function Ve(e,t,r){const i=(null===r||void 0===r?void 0:r.standalone)?void 0:_(v),l=null===r||void 0===r?void 0:r.checkedValue,o=null===r||void 0===r?void 0:r.uncheckedValue;function u(e){const t=e.handleChange,r=(0,n.Fl)((()=>{const t=(0,a.SU)(e.value),r=(0,a.SU)(l);return Array.isArray(t)?t.includes(r):r===t}));function u(n,u=!0){var s,d;if(r.value===(null===(d=null===(s=n)||void 0===s?void 0:s.target)||void 0===d?void 0:d.checked))return;let c=L(n);i||(c=x((0,a.SU)(e.value),(0,a.SU)(l),(0,a.SU)(o))),t(c,u)}return(0,n.Jd)((()=>{r.value&&u((0,a.SU)(l),!1)})),Object.assign(Object.assign({},e),{checked:r,checkedValue:l,uncheckedValue:o,handleChange:u})}return u(be(e,t,r))}(0,n.aZ)({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>W().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:p},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(e,t){const r=(0,a.Vh)(e,"rules"),i=(0,a.Vh)(e,"name"),l=(0,a.Vh)(e,"label"),o=(0,a.Vh)(e,"uncheckedValue"),u=k(e,"onUpdate:modelValue"),{errors:s,value:d,errorMessage:c,validate:v,handleChange:f,handleBlur:h,setTouched:y,resetField:m,handleReset:g,meta:S,checked:O,setErrors:V}=ge(i,r,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:Ue(e,t),checkedValue:t.attrs.value,uncheckedValue:o,label:l,validateOnValueUpdate:!1}),A=u?function(e,r=!0){f(e,r),t.emit("update:modelValue",d.value)}:f,F=e=>{b(t.attrs.type)||(d.value=L(e))},j=u?function(e){F(e),t.emit("update:modelValue",d.value)}:F,E=(0,n.Fl)((()=>{const{validateOnInput:r,validateOnChange:n,validateOnBlur:a,validateOnModelUpdate:i}=Fe(e),l=[h,t.attrs.onBlur,a?v:void 0].filter(Boolean),o=[e=>A(e,r),t.attrs.onInput].filter(Boolean),u=[e=>A(e,n),t.attrs.onChange].filter(Boolean),s={name:e.name,onBlur:l,onInput:o,onChange:u,"onUpdate:modelValue":e=>A(e,i)};b(t.attrs.type)&&O?s.checked=O.value:s.value=d.value;const c=Ae(e,t);return U(c,t.attrs)&&delete s.value,s})),w=(0,a.Vh)(e,"modelValue");function B(){return{field:E.value,value:d.value,meta:S,errors:s.value,errorMessage:c.value,validate:v,resetField:m,handleChange:A,handleInput:j,handleReset:g,handleBlur:h,setTouched:y,setErrors:V}}return(0,n.YP)(w,(t=>{t===p&&void 0===d.value||t!==je(d.value,e.modelModifiers)&&(d.value=t===p?void 0:t,v())})),t.expose({setErrors:V,setTouched:y,reset:m,validate:v,handleChange:f}),()=>{const r=(0,n.LL)(Ae(e,t)),a=Y(r,t,B);return r?(0,n.h)(r,Object.assign(Object.assign({},t.attrs),E.value),a):a}}});function Ae(e,t){let r=e.as||"";return e.as||t.slots.default||(r="input"),r}function Fe(e){var t,r,n,a;const{validateOnInput:i,validateOnChange:l,validateOnBlur:o,validateOnModelUpdate:u}=W();return{validateOnInput:null!==(t=e.validateOnInput)&&void 0!==t?t:i,validateOnChange:null!==(r=e.validateOnChange)&&void 0!==r?r:l,validateOnBlur:null!==(n=e.validateOnBlur)&&void 0!==n?n:o,validateOnModelUpdate:null!==(a=e.validateOnModelUpdate)&&void 0!==a?a:u}}function je(e,t){return t.number?s(e):e}function Ue(e,t){return b(t.attrs.type)?k(e,"modelValue")?e.modelValue:void 0:k(e,"modelValue")?e.modelValue:t.attrs.value}let Ee=0;function we(e){const t=Ee++;let r=!1;const i=(0,a.iH)({}),l=(0,a.iH)(!1),o=(0,a.iH)(0),u={},s=(0,a.qj)(se((0,a.SU)(null===e||void 0===e?void 0:e.initialValues)||{})),{errorBag:d,setErrorBag:c,setFieldErrorBag:f}=Me(null===e||void 0===e?void 0:e.initialErrors),p=(0,n.Fl)((()=>C(d.value).reduce(((e,t)=>{const r=d.value[t];return r&&r.length&&(e[t]=r[0]),e}),{})));function h(e){const t=i.value[e];return Array.isArray(t)?t[0]:t}function y(e){return!!i.value[e]}const m=(0,n.Fl)((()=>C(i.value).reduce(((e,t)=>{const r=h(t);return r&&(e[t]=(0,a.SU)(r.label||r.name)||""),e}),{}))),b=(0,n.Fl)((()=>C(i.value).reduce(((e,t)=>{var r;const n=h(t);return n&&(e[t]=null===(r=n.bails)||void 0===r||r),e}),{}))),S=Object.assign({},(null===e||void 0===e?void 0:e.initialErrors)||{}),{initialValues:O,originalInitialValues:V,setInitialValues:A}=Be(i,s,null===e||void 0===e?void 0:e.initialValues),F=ke(i,s,O,p),j=null===e||void 0===e?void 0:e.validationSchema,U={formId:t,fieldsByPath:i,values:s,errorBag:d,errors:p,schema:j,submitCount:o,meta:F,isSubmitting:l,fieldArraysLookup:u,validateSchema:(0,a.SU)(j)?re:void 0,validate:Z,register:J,unregister:z,setFieldErrorBag:f,validateField:K,setFieldValue:R,setValues:N,setErrors:_,setFieldError:T,setFieldTouched:Y,setTouched:q,resetForm:D,handleSubmit:X,stageInitialValue:W,unsetInitialValue:Q,setFieldInitialValue:G};function w(e){return Array.isArray(e)}function k(e,t){return Array.isArray(e)?e.forEach(t):t(e)}function B(e){Object.values(i.value).forEach((t=>{t&&k(t,e)}))}function T(e,t){f(e,t)}function _(e){c(e)}function R(e,t,{force:n}={force:!1}){var l;const o=i.value[e],u=se(t);if(!o)return void I(s,e,u);if(w(o)&&"checkbox"===(null===(l=o[0])||void 0===l?void 0:l.type)&&!Array.isArray(t)){const r=se(x(M(s,e)||[],t,void 0));return void I(s,e,r)}let d=t;w(o)||"checkbox"!==o.type||n||r||(d=se(x(M(s,e),t,(0,a.SU)(o.uncheckedValue)))),I(s,e,d)}function N(e){C(s).forEach((e=>{delete s[e]})),C(e).forEach((t=>{R(t,e[t])})),Object.values(u).forEach((e=>e&&e.reset()))}function Y(e,t){const r=i.value[e];r&&k(r,(e=>e.setTouched(t)))}function q(e){C(e).forEach((t=>{Y(t,!!e[t])}))}function D(e){r=!0,(null===e||void 0===e?void 0:e.values)?(A(e.values),N(null===e||void 0===e?void 0:e.values)):(A(V.value),N(V.value)),B((e=>e.resetField())),(null===e||void 0===e?void 0:e.touched)&&q(e.touched),_((null===e||void 0===e?void 0:e.errors)||{}),o.value=(null===e||void 0===e?void 0:e.submitCount)||0,(0,n.Y3)((()=>{r=!1}))}function L(e,t){const r=(0,a.Xl)(e),n=t;if(!i.value[n])return void(i.value[n]=r);const l=i.value[n];l&&!Array.isArray(l)&&(i.value[n]=[l]),i.value[n]=[...i.value[n],r]}function H(e,t){const r=t,n=i.value[r];if(n)if(w(n)||e.id!==n.id){if(w(n)){const t=n.findIndex((t=>t.id===e.id));if(-1===t)return;if(n.splice(t,1),1===n.length)return void(i.value[r]=n[0]);n.length||delete i.value[r]}}else delete i.value[r]}function J(e){const t=(0,a.SU)(e.name);L(e,t),(0,a.dq)(e.name)&&(0,n.YP)(e.name,(async(t,r)=>{await(0,n.Y3)(),H(e,r),L(e,t),(p.value[r]||p.value[t])&&(T(r,void 0),K(t)),await(0,n.Y3)(),y(r)||P(s,r)}));const r=(0,a.SU)(e.errorMessage);r&&(null===S||void 0===S?void 0:S[t])!==r&&K(t),delete S[t]}function z(e){const t=(0,a.SU)(e.name);H(e,t),(0,n.Y3)((()=>{y(t)||(T(t,void 0),P(s,t))}))}async function Z(e){if(B((e=>e.meta.validated=!0)),U.validateSchema)return U.validateSchema((null===e||void 0===e?void 0:e.mode)||"force");const t=await Promise.all(Object.values(i.value).map((t=>{const r=Array.isArray(t)?t[0]:t;return r?r.validate(e).then((e=>({key:(0,a.SU)(r.name),valid:e.valid,errors:e.errors}))):Promise.resolve({key:"",valid:!0,errors:[]})}))),r={},n={};for(const a of t)r[a.key]={valid:a.valid,errors:a.errors},a.errors.length&&(n[a.key]=a.errors[0]);return{valid:t.every((e=>e.valid)),results:r,errors:n}}async function K(e){const t=i.value[e];return t?Array.isArray(t)?t.map((e=>e.validate()))[0]:t.validate():((0,n.ZK)(`field with name ${e} was not found`),Promise.resolve({errors:[],valid:!0}))}function X(e,t){return function(r){return r instanceof Event&&(r.preventDefault(),r.stopPropagation()),q(C(i.value).reduce(((e,t)=>(e[t]=!0,e)),{})),l.value=!0,o.value++,Z().then((n=>{if(n.valid&&"function"===typeof e)return e(se(s),{evt:r,setErrors:_,setFieldError:T,setTouched:q,setFieldTouched:Y,setValues:N,setFieldValue:R,resetForm:D});n.valid||"function"!==typeof t||t({values:se(s),evt:r,errors:n.errors,results:n.results})})).then((e=>(l.value=!1,e)),(e=>{throw l.value=!1,e}))}}function G(e,t){I(O.value,e,se(t))}function Q(e){P(O.value,e)}function W(e,t){I(s,e,t),G(e,t)}async function ee(){const e=(0,a.SU)(j);if(!e)return{valid:!0,results:{},errors:{}};const t=g(e)?await le(e,s):await oe(e,s,{names:m.value,bailsMap:b.value});return t}const te=$(ee,5);async function re(e){const t=await te(),r=U.fieldsByPath.value||{},n=C(U.errorBag.value),a=[...new Set([...C(t.results),...C(r),...n])];return a.reduce(((n,a)=>{const i=r[a],l=(t.results[a]||{errors:[]}).errors,o={errors:l,valid:!l.length};if(n.results[a]=o,o.valid||(n.errors[a]=o.errors[0]),!i)return T(a,l),n;if(k(i,(e=>e.meta.valid=o.valid)),"silent"===e)return n;const u=Array.isArray(i)?i.some((e=>e.meta.validated)):i.meta.validated;return"validated-only"!==e||u?(k(i,(e=>e.setState({errors:o.errors}))),n):n}),{valid:t.valid,results:{},errors:{}})}const ne=X(((e,{evt:t})=>{E(t)&&t.target.submit()}));return(0,n.bv)((()=>{(null===e||void 0===e?void 0:e.initialErrors)&&_(e.initialErrors),(null===e||void 0===e?void 0:e.initialTouched)&&q(e.initialTouched),(null===e||void 0===e?void 0:e.validateOnMount)?Z():U.validateSchema&&U.validateSchema("silent")})),(0,a.dq)(j)&&(0,n.YP)(j,(()=>{var e;null===(e=U.validateSchema)||void 0===e||e.call(U,"validated-only")})),(0,n.JJ)(v,U),{errors:p,meta:F,values:s,isSubmitting:l,submitCount:o,validate:Z,validateField:K,handleReset:()=>D(),resetForm:D,handleSubmit:X,submitForm:ne,setFieldError:T,setErrors:_,setFieldValue:R,setValues:N,setFieldTouched:Y,setTouched:q}}function ke(e,t,r,i){const l={touched:"some",pending:"some",valid:"every"},o=(0,n.Fl)((()=>!de(t,(0,a.SU)(r))));function u(){const t=Object.values(e.value).flat(1).filter(Boolean);return C(l).reduce(((e,r)=>{const n=l[r];return e[r]=t[n]((e=>e.meta[r])),e}),{})}const s=(0,a.qj)(u());return(0,n.m0)((()=>{const e=u();s.touched=e.touched,s.valid=e.valid,s.pending=e.pending})),(0,n.Fl)((()=>Object.assign(Object.assign({initialValues:(0,a.SU)(r)},s),{valid:s.valid&&!C(i.value).length,dirty:o.value})))}function Be(e,t,r){const i=(0,a.iH)(se((0,a.SU)(r))||{}),l=(0,a.iH)(se((0,a.SU)(r))||{});function o(r,n=!1){i.value=se(r),l.value=se(r),n&&C(e.value).forEach((r=>{const n=e.value[r],a=Array.isArray(n)?n.some((e=>e.meta.touched)):null===n||void 0===n?void 0:n.meta.touched;if(!n||a)return;const l=M(i.value,r);I(t,r,se(l))}))}return(0,a.dq)(r)&&(0,n.YP)(r,(e=>{o(e,!0)}),{deep:!0}),{initialValues:i,originalInitialValues:l,setInitialValues:o}}function Me(e){const t=(0,a.iH)({});function r(e){return Array.isArray(e)?e:e?[e]:[]}function n(e,n){n?t.value[e]=r(n):delete t.value[e]}function i(e){t.value=C(e).reduce(((t,n)=>{const a=e[n];return a&&(t[n]=r(a)),t}),{})}return e&&i(e),{errorBag:t,setErrorBag:i,setFieldErrorBag:n}}(0,n.aZ)({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0}},setup(e,t){const r=(0,a.Vh)(e,"initialValues"),i=(0,a.Vh)(e,"validationSchema"),{errors:l,values:o,meta:u,isSubmitting:s,submitCount:d,validate:c,validateField:v,handleReset:f,resetForm:p,handleSubmit:h,submitForm:y,setErrors:m,setFieldError:g,setFieldValue:b,setValues:S,setFieldTouched:O,setTouched:V}=we({validationSchema:i.value?i:void 0,initialValues:r,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount}),A=e.onSubmit?h(e.onSubmit,e.onInvalidSubmit):y;function F(e){w(e)&&e.preventDefault(),f(),"function"===typeof t.attrs.onReset&&t.attrs.onReset()}function j(t,r){const n="function"!==typeof t||r?r:t;return h(n,e.onInvalidSubmit)(t)}function U(){return{meta:u.value,errors:l.value,values:o,isSubmitting:s.value,submitCount:d.value,validate:c,validateField:v,handleSubmit:j,handleReset:f,submitForm:y,setErrors:m,setFieldError:g,setFieldValue:b,setValues:S,setFieldTouched:O,setTouched:V,resetForm:p}}return t.expose({setFieldError:g,setErrors:m,setFieldValue:b,setValues:S,setFieldTouched:O,setTouched:V,resetForm:p,validate:c,validateField:v}),function(){const r="form"===e.as?e.as:(0,n.LL)(e.as),a=Y(r,t,U);if(!e.as)return a;const i="form"===e.as?{novalidate:!0}:{};return(0,n.h)(r,Object.assign(Object.assign(Object.assign({},i),t.attrs),{onSubmit:A,onReset:F}),a)}}});let Ie=0;function Te(e){const t=Ie++,r=_(v,void 0),i=(0,a.iH)([]),o=()=>{},u={fields:(0,a.OT)(i),remove:o,push:o,swap:o,insert:o,update:o,replace:o,prepend:o};if(!r)return R("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),u;if(!(0,a.SU)(e))return R("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),u;let s=0;function d(){const t=M(null===r||void 0===r?void 0:r.values,(0,a.SU)(e),[]);i.value=t.map(f),c()}function c(){const e=i.value.length;for(let t=0;t<e;t++){const r=i.value[t];r.isFirst=0===t,r.isLast=t===e-1}}function f(t){const l=s++,o={key:l,value:(0,n.Fl)((()=>{const n=M(null===r||void 0===r?void 0:r.values,(0,a.SU)(e),[]),o=i.value.findIndex((e=>e.key===l));return-1===o?t:n[o]})),isFirst:!1,isLast:!1};return o}function p(t){const n=(0,a.SU)(e),l=M(null===r||void 0===r?void 0:r.values,n);if(!l||!Array.isArray(l))return;const o=[...l];o.splice(t,1),null===r||void 0===r||r.unsetInitialValue(n+`[${t}]`),null===r||void 0===r||r.setFieldValue(n,o),i.value.splice(t,1),c()}function h(t){const n=(0,a.SU)(e),o=M(null===r||void 0===r?void 0:r.values,n),u=l(o)?[]:o;if(!Array.isArray(u))return;const s=[...u];s.push(t),null===r||void 0===r||r.stageInitialValue(n+`[${s.length-1}]`,t),null===r||void 0===r||r.setFieldValue(n,s),i.value.push(f(t)),c()}function y(t,n){const l=(0,a.SU)(e),o=M(null===r||void 0===r?void 0:r.values,l);if(!Array.isArray(o)||!(t in o)||!(n in o))return;const u=[...o],s=[...i.value],d=u[t];u[t]=u[n],u[n]=d;const v=s[t];s[t]=s[n],s[n]=v,null===r||void 0===r||r.setFieldValue(l,u),i.value=s,c()}function m(t,n){const l=(0,a.SU)(e),o=M(null===r||void 0===r?void 0:r.values,l);if(!Array.isArray(o)||o.length<t)return;const u=[...o],s=[...i.value];u.splice(t,0,n),s.splice(t,0,f(n)),null===r||void 0===r||r.setFieldValue(l,u),i.value=s,c()}function g(t){const n=(0,a.SU)(e);null===r||void 0===r||r.setFieldValue(n,t),d()}function b(t,n){const i=(0,a.SU)(e),l=M(null===r||void 0===r?void 0:r.values,i);!Array.isArray(l)||l.length-1<t||null===r||void 0===r||r.setFieldValue(`${i}[${t}]`,n)}function S(t){const n=(0,a.SU)(e),o=M(null===r||void 0===r?void 0:r.values,n),u=l(o)?[]:o;if(!Array.isArray(u))return;const s=[t,...u];null===r||void 0===r||r.stageInitialValue(n+`[${s.length-1}]`,t),null===r||void 0===r||r.setFieldValue(n,s),i.value.unshift(f(t)),c()}return d(),r.fieldArraysLookup[t]={reset:d},(0,n.Jd)((()=>{delete r.fieldArraysLookup[t]})),{fields:(0,a.OT)(i),remove:p,push:h,swap:y,insert:m,update:b,replace:g,prepend:S}}(0,n.aZ)({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(e,t){const{push:r,remove:n,swap:i,insert:l,replace:o,update:u,prepend:s,fields:d}=Te((0,a.Vh)(e,"name"));function c(){return{fields:d.value,push:r,remove:n,swap:i,insert:l,update:u,replace:o,prepend:s}}return t.expose({push:r,remove:n,swap:i,insert:l,update:u,replace:o,prepend:s}),()=>{const e=Y(void 0,t,c);return e}}}),(0,n.aZ)({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const r=(0,n.f3)(v,void 0),a=(0,n.Fl)((()=>null===r||void 0===r?void 0:r.errors.value[e.name]));function i(){return{message:a.value}}return()=>{if(!a.value)return;const r=e.as?(0,n.LL)(e.as):e.as,l=Y(r,t,i),o=Object.assign({role:"alert"},t.attrs);return r||!Array.isArray(l)&&l||!(null===l||void 0===l?void 0:l.length)?!Array.isArray(l)&&l||(null===l||void 0===l?void 0:l.length)?(0,n.h)(r,o,l):(0,n.h)(r||"span",o,a.value):l}}})}}]);