(function(){"use strict";var e={9413:function(e,n,t){var o=t(6252);function r(){return(0,o.f3)("$vfm")}n["Z"]=r},4682:function(e,n,t){t.d(n,{FH:function(){return a},JW:function(){return r}});var o=t(7331);const r="https://live-chat-node.herokuapp.com",a="/";o.T.ZH_TW,o.Y.ZH_TW,o.T.EN,o.Y.EN},7331:function(e,n,t){var o,r;t.d(n,{T:function(){return o},Y:function(){return r}}),function(e){e["ZH_TW"]="zhtw",e["EN"]="en"}(o||(o={})),function(e){e["ZH_TW"]="繁體中文",e["EN"]="English"}(r||(r={}))},9409:function(e,n,t){t.d(n,{ZP:function(){return g},UK:function(){return h},vf:function(){return p}});var o=t(9150),r=t(4231),a=t(7331),i={[a.T.ZH_TW]:()=>t.e(795).then(t.bind(t,4795)),[a.T.EN]:()=>t.e(83).then(t.bind(t,7083))},u={common:{register:"register",login:"login",logout:"logout",confirm:"confirm"},form:{account:"account",password:"password"}},l={common:{register:"註冊",login:"登入",logout:"登出",confirm:"確認"},form:{account:"帳號",password:"密碼"}},c=t(2762);const s=a.T.ZH_TW;(0,r.i_)(c.ZP);let f={};f={en:u,zhtw:l};const d=localStorage.getItem("lang")||"zhtw",m=(0,o.o)({legacy:!1,locale:d,fallbackLocale:"zhtw",messages:f});async function p(e){if(!e)return;document.documentElement.lang=e;const{default:n}=await i[e]();(0,r.i_)(n.yup),localStorage.setItem("lang",e)}function h(){const e=localStorage.getItem("lang");return e&&i[e]?e:s}var g=m},2762:function(e,n,t){var o=t(1250);let r={default:"${path} 是無效的",required:"${path} 為必填",oneOf:"${path} 必須是以下的值之一: ${values}",notOneOf:"${path} 不得是以下的值之一: ${values}",notType:({path:e,type:n,value:t,originalValue:r})=>{let a=null!=r&&r!==t,i=`${e} must be a \`${n}\` type, but the final value was: \`${(0,o["default"])(t,!0)}\``+(a?` (cast from the value \`${(0,o["default"])(r,!0)}\`).`:".");return null===t&&(i+='\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),i},defined:"${path}必須被定義"},a={length:"${path} 必須為${length}個字元",min:"${path} 至少須${min}個字元",max:"${path} 不可大於${max}個字元",matches:'${path} 必須與"${regex}"格式相符',email:"${path} 必須是email",url:'${path} 必須是"網址"',uuid:'${path} 必須是"通用唯一辨識碼"',trim:"${path} 字段前後不得有空格",lowercase:"${path} 必須為小寫",uppercase:"${path} 必須為大寫"},i={min:"${path} 必須大於等於${min}",max:"${path} 必須小於等於${max}",lessThan:"${path} 必須小於${less}",moreThan:"${path} 必須大於${more}",positive:"${path} 必須為正數",negative:"${path} 必須為負數",integer:"${path} 必須為整數"},u={min:'${path} 必須在"${min}"之後',max:'${path} 必須在"${max}"之前'},l={isValue:"${path} 必須為${value}"},c={noUnknown:"${path} 具有未指定的鍵: ${unknown}"},s={min:"${path} 必須至少${min}個項目",max:"${path} 必須少於或等於${max}個項目",length:"${path} 必須為${length}個項目"};n["ZP"]=Object.assign(Object.create(null),{mixed:r,string:a,number:i,date:u,object:c,array:s,boolean:l})},7258:function(e,n,t){t.d(n,{E:function(){return r}});var o=t(1259);const r=(0,o.Q_)("baseStore",{persist:!0,state:()=>{const e=null;return{user:e}},getters:{isLogin(){return!!this.user}},actions:{login(e){e&&(localStorage.setItem("token",e.token),this.user=e)},logout(){localStorage.removeItem("token"),this.user=null}}});n["Z"]=r},3054:function(e,n,t){t.d(n,{S:function(){return o},V:function(){return a}});var o,r=t(6729);(function(e){e["Modal"]="Modal",e["Logout"]="Logout"})(o||(o={}));const a=new r.EventEmitter},2664:function(e,n,t){var o=t(9963),r=t(9409),a=t(5205);(0,a.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var i=t(6252);function u(e,n,t,o,r,a){const u=(0,i.up)("modals-container"),l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(l)],64)}var l=t(9150),c=t(2119),s=t(3054),f=t(7258),d=t(9413);function m(e={}){const n=(0,d.Z)(),t=(0,f.E)(),{t:o}=(0,l.QT)(),a=(0,c.tv)();return s.V.on(s.S.Modal,(t=>{e.modalComponent?n?.show({component:e.modalComponent,bind:{message:t}}):alert(t)})).on(s.S.Logout,(()=>{t.isLogin&&(t.logout(),a.push({name:"Login"}))})),(0,i.bv)((async()=>{await Promise.all([(0,r.vf)((0,r.UK)())])})),{}}var p=m,h=t(7807),g=(0,i.aZ)({setup(){return{...p({modalComponent:h.Z})}}}),v=t(3744);const b=(0,v.Z)(g,[["render",u]]);var $=b,w=t(4682);function y(e,n,t,o,r,a){const u=(0,i.up)("header-component"),l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(l)],64)}var k=(0,i.aZ)({setup(){return{}}});const Z=(0,v.Z)(k,[["render",y]]);var C=Z;const T=[{path:"/",name:"Main",component:C,redirect:"/Home",children:[{path:"/Home",name:"Home",component:()=>Promise.all([t.e(174),t.e(640)]).then(t.bind(t,7640)),meta:{authRequired:!0}}]},{path:"/Login",name:"Login",component:()=>Promise.all([t.e(174),t.e(175)]).then(t.bind(t,3175))}],E=(0,c.p7)({history:(0,c.PO)(w.FH),routes:T});E.beforeEach(((e,n,t)=>{const o=localStorage.getItem("token");"Login"===e.name||o?t():t({name:"Login"})}));var _=E,S=t(1810),M=t(1695);const O={[S.EZ.name]:S.EZ,[h.Z.name]:h.Z,[M["default"].name]:(0,i.RC)((()=>Promise.resolve().then(t.bind(t,1695))))};var L={install:e=>{for(const n in O)e.component(n,O[n])}},j=t(1421),H=t(1259),N=t(7605);t(4415);const P=(0,H.WB)();P.use(N.Z),(0,o.ri)($).use(r.ZP).use(_).use(L).use((0,j.ZP)()).use(P).mount("#app")},1695:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o=t(6252),r=t(3577);const a={class:"border"},i=(0,o._)("p",null,"i am mb header",-1);function u(e,n,t,u,l,c){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",a,[i,(0,o._)("button",{onClick:n[0]||(n[0]=(...n)=>e.test&&e.test(...n))},"call modal"),(0,o.Wm)(s,{to:{name:"Login"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.$t("common.login")),1)])),_:1})])}var l=t(9413),c=t(7807),s=(0,o.aZ)({name:"HeaderComponent",setup(){const e=(0,l.Z)();function n(){e?.show({component:c.Z,bind:{okCallBack:()=>{}}})}return{test:n}}}),f=t(3744);const d=(0,f.Z)(s,[["render",u]]);var m=d},7807:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(6252),r=t(3577);const a=["innerHTML"];function i(e,n,t,i,u,l){const c=(0,o.up)("base-modal");return(0,o.wg)(),(0,o.j4)(c,{ref:e.setModalRef},{header:(0,o.w5)((()=>[(0,o._)("button",{class:"close-btn",onClick:n[0]||(n[0]=n=>e.closeModal())},"×")])),body:(0,o.w5)((()=>[(0,o._)("div",{innerHTML:e.message},null,8,a)])),footer:(0,o.w5)((()=>[(0,o._)("button",{onClick:n[1]||(n[1]=n=>e.confirm())},(0,r.zw)(e.$t("common.confirm")),1)])),_:1},512)}var u=t(2262);function l(){let e=(0,u.iH)(null);function n(){return e}function t(n=null){e=n}function o(){e?.emitClose()}return{getModalRef:n,setModalRef:t,closeModal:o}}function c(e,n,t,r,a,i){const u=(0,o.up)("vue-final-modal");return(0,o.wg)(),(0,o.j4)(u,{class:"base-modal","click-to-close":e.clickToClose},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"header"),(0,o.WI)(e.$slots,"body"),(0,o.WI)(e.$slots,"footer")])),_:3},8,["click-to-close"])}var s=(0,o.aZ)({name:"BaseModal",props:{clickToClose:{type:Boolean,required:!1,default:!1}},setup(e,{emit:n}){return{emitClose:()=>n("update:modelValue")}}}),f=t(3744);const d=(0,f.Z)(s,[["render",c]]);var m=d,p=(0,o.aZ)({name:"Modal",components:{BaseModal:m},props:{okCallBack:{type:Function,required:!1},message:{type:String,required:!1,default:""}},setup(e){const{setModalRef:n,closeModal:t}=l();function o(){e.okCallBack&&e.okCallBack(),t()}return{setModalRef:n,closeModal:t,confirm:o}}});const h=(0,f.Z)(p,[["render",i]]);var g=h}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{83:"2e3b8a17",174:"d3c3620b",175:"d3a01b21",640:"81cccd68",795:"c97959bb"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".ae8f2d14.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="live-chat:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,a.parentNode&&a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={826:0};t.f.miniCss=function(e,n){var t={175:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={826:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,l=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],l=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var s=l(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},o=self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2664)}));o=t.O(o)})();