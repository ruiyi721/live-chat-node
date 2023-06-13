(function(){"use strict";var e={1174:function(e,n,t){function o(e){return e.then((e=>[void 0,e])).catch((e=>[e,void 0]))}t.d(n,{X:function(){return d}});var r=t(9669),a=t.n(r),i=t(3054),u=t(4682);u.JW;const c=60,s=a().create({baseURL:"/api",withCredentials:!0,headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},timeout:1e3*c});async function l(e,n,...t){const o={url:n,method:e};"get"==e||"GET"==e?o.params=t[0]:(o.data=t[0],o.params=t[1]);try{const e=await s.request(o);return e.data}catch(r){if(r.response)throw r.response;throw r}}function f(e,n,t=!1){if(e&&!n){if(console.warn(e,n),401==e.status&&i.V.emit(i.S.Logout),t){const n=e.data;let t="";if("string"==typeof n)t=n;else{t=n.message;try{Object.values(n.errors||{}).forEach((e=>{t+=`<br>${e[0]}`}))}catch(e){console.error(e)}}i.V.emit(i.S.Modal,t)}return!1}return!0}var d;s.interceptors.request.use((e=>{const n=localStorage.getItem("token");return n&&(e.headers.Authorization=`Bearer ${n}`),e}),(e=>Promise.reject(e))),function(e){async function n(){const[e,n]=await o(l("get","/products"));if(!e)return n}async function t(e){const[n,t]=await o(l("post","/login",e));return f(n,t,!0)?t:null}async function r(e){const[n,t]=await o(l("post","/register",e));return f(n,t,!0)?t:null}async function a(e,n){const[t,r]=await o(l("post",`/google/${n}`,e));return f(t,r,!0)?r:null}async function i(){const[e,n]=await o(l("get","/images/carousel"));return f(e,n)?n:null}async function u(){const[e,n]=await o(l("get","/login/checkauth"));return f(e,n,!0)?n:null}e.getProducts=n,e.login=t,e.register=r,e.googleAuth=a,e.getCarousels=i,e.checkAuth=u}(d||(d={}))},9413:function(e,n,t){var o=t(6252);function r(){return(0,o.f3)("$vfm")}n["Z"]=r},4682:function(e,n,t){t.d(n,{FH:function(){return a},JW:function(){return r}});var o=t(7331);const r="https://live-chat-node.herokuapp.com",a="/";o.T.ZH_TW,o.Y.ZH_TW,o.T.EN,o.Y.EN},7331:function(e,n,t){var o,r;t.d(n,{T:function(){return o},Y:function(){return r}}),function(e){e["ZH_TW"]="zhtw",e["EN"]="en"}(o||(o={})),function(e){e["ZH_TW"]="繁體中文",e["EN"]="English"}(r||(r={}))},9409:function(e,n,t){t.d(n,{ZP:function(){return g},UK:function(){return h},vf:function(){return p}});var o=t(9150),r=t(4231),a=t(7331),i={[a.T.ZH_TW]:()=>t.e(795).then(t.bind(t,4795)),[a.T.EN]:()=>t.e(83).then(t.bind(t,7083))},u={common:{register:"register",login:"login",logout:"logout",confirm:"confirm"},form:{account:"account",password:"password"}},c={common:{register:"註冊",login:"登入",logout:"登出",confirm:"確認"},form:{account:"帳號",password:"密碼"}},s=t(2762);const l=a.T.ZH_TW;(0,r.i_)(s.ZP);let f={};f={en:u,zhtw:c};const d=localStorage.getItem("lang")||"zhtw",m=(0,o.o)({legacy:!1,locale:d,fallbackLocale:"zhtw",messages:f});async function p(e){if(!e)return;document.documentElement.lang=e;const{default:n}=await i[e]();(0,r.i_)(n.yup),localStorage.setItem("lang",e)}function h(){const e=localStorage.getItem("lang");return e&&i[e]?e:l}var g=m},2762:function(e,n,t){var o=t(1250);let r={default:"${path} 是無效的",required:"${path} 為必填",oneOf:"${path} 必須是以下的值之一: ${values}",notOneOf:"${path} 不得是以下的值之一: ${values}",notType:({path:e,type:n,value:t,originalValue:r})=>{let a=null!=r&&r!==t,i=`${e} must be a \`${n}\` type, but the final value was: \`${(0,o["default"])(t,!0)}\``+(a?` (cast from the value \`${(0,o["default"])(r,!0)}\`).`:".");return null===t&&(i+='\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),i},defined:"${path}必須被定義"},a={length:"${path} 必須為${length}個字元",min:"${path} 至少須${min}個字元",max:"${path} 不可大於${max}個字元",matches:'${path} 必須與"${regex}"格式相符',email:"${path} 必須是email",url:'${path} 必須是"網址"',uuid:'${path} 必須是"通用唯一辨識碼"',trim:"${path} 字段前後不得有空格",lowercase:"${path} 必須為小寫",uppercase:"${path} 必須為大寫"},i={min:"${path} 必須大於等於${min}",max:"${path} 必須小於等於${max}",lessThan:"${path} 必須小於${less}",moreThan:"${path} 必須大於${more}",positive:"${path} 必須為正數",negative:"${path} 必須為負數",integer:"${path} 必須為整數"},u={min:'${path} 必須在"${min}"之後',max:'${path} 必須在"${max}"之前'},c={isValue:"${path} 必須為${value}"},s={noUnknown:"${path} 具有未指定的鍵: ${unknown}"},l={min:"${path} 必須至少${min}個項目",max:"${path} 必須少於或等於${max}個項目",length:"${path} 必須為${length}個項目"};n["ZP"]=Object.assign(Object.create(null),{mixed:r,string:a,number:i,date:u,object:s,array:l,boolean:c})},7258:function(e,n,t){t.d(n,{E:function(){return a}});var o=t(1259),r=t(1174);const a=(0,o.Q_)("baseStore",{persist:!0,state:()=>{const e=null,n={images:[]};return{user:e,carousel:n}},getters:{isLogin(){return!!this.user}},actions:{init(){this.getCarousel()},login(e){e&&(localStorage.setItem("token",e.token),this.user=e)},logout(){localStorage.removeItem("token"),this.user=null},async getCarousel(){const e=await r.X.getCarousels();e&&(this.carousel=e)}}});n["Z"]=a},3054:function(e,n,t){t.d(n,{S:function(){return o},V:function(){return a}});var o,r=t(6729);(function(e){e["Modal"]="Modal",e["Logout"]="Logout"})(o||(o={}));const a=new r.EventEmitter},2664:function(e,n,t){var o=t(9963),r=t(9409),a=t(5205);(0,a.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var i=t(6252);function u(e,n,t,o,r,a){const u=(0,i.up)("modals-container"),c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(c)],64)}var c=t(9150),s=t(2119),l=t(3054),f=t(7258),d=t(9413);function m(e={}){const n=(0,d.Z)(),t=(0,f.E)(),{t:o}=(0,c.QT)(),a=(0,s.tv)();return l.V.on(l.S.Modal,(t=>{e.modalComponent?n?.show({component:e.modalComponent,bind:{message:t}}):alert(t)})).on(l.S.Logout,(()=>{t.isLogin&&(t.logout(),a.push({name:"Login"}))})),(0,i.bv)((async()=>{await Promise.all([(0,r.vf)((0,r.UK)()),t.init()])})),{}}var p=m,h=t(7807),g=(0,i.aZ)({setup(){return{...p({modalComponent:h.Z})}}}),v=t(3744);const b=(0,v.Z)(g,[["render",u]]);var w=b,y=t(4682);function $(e,n,t,o,r,a){const u=(0,i.up)("header-component"),c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(c)],64)}var k=(0,i.aZ)({setup(){return{}}});const C=(0,v.Z)(k,[["render",$]]);var Z=C;const T=[{path:"/",name:"Main",component:Z,redirect:"/Home",children:[{path:"/Home",name:"Home",component:()=>t.e(89).then(t.bind(t,3089)),meta:{authRequired:!0}}]},{path:"/Login",name:"Login",component:()=>Promise.all([t.e(954),t.e(239)]).then(t.bind(t,7239))},{path:"/Register",name:"Register",component:()=>Promise.all([t.e(954),t.e(252)]).then(t.bind(t,3252))}],E=(0,s.p7)({history:(0,s.PO)(y.FH),routes:T});var _=E,S=t(1810),M=t(1695);const O={[S.EZ.name]:S.EZ,[h.Z.name]:h.Z,[M["default"].name]:(0,i.RC)((()=>Promise.resolve().then(t.bind(t,1695))))};var j={install:e=>{for(const n in O)e.component(n,O[n])}},L=t(1421),P=t(1259),H=t(7605),W=t(9499);t(4415);const N="463578192557-mlhme4em9hndolues8re3eta9s016noc.apps.googleusercontent.com",x=(0,P.WB)();x.use(H.Z),(0,o.ri)(w).use(r.ZP).use(_).use(j).use((0,L.ZP)()).use(x).use(W.ZP,{clientId:N}).mount("#app")},1695:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o=t(6252),r=t(3577);const a={class:"border"},i=(0,o._)("p",null,"i am mb header",-1);function u(e,n,t,u,c,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",a,[i,(0,o._)("button",{onClick:n[0]||(n[0]=(...n)=>e.test&&e.test(...n))},"call modal"),(0,o.Wm)(l,{to:{name:"Login"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.$t("common.login")),1)])),_:1})])}var c=t(9413),s=t(7807),l=(0,o.aZ)({name:"HeaderComponent",setup(){const e=(0,c.Z)();function n(){e?.show({component:s.Z,bind:{okCallBack:()=>{}}})}return{test:n}}}),f=t(3744);const d=(0,f.Z)(l,[["render",u]]);var m=d},7807:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(6252),r=t(3577);const a=["innerHTML"];function i(e,n,t,i,u,c){const s=(0,o.up)("base-modal");return(0,o.wg)(),(0,o.j4)(s,{ref:e.setModalRef},{header:(0,o.w5)((()=>[(0,o._)("button",{class:"close-btn",onClick:n[0]||(n[0]=n=>e.closeModal())},"×")])),body:(0,o.w5)((()=>[(0,o._)("div",{innerHTML:e.message},null,8,a)])),footer:(0,o.w5)((()=>[(0,o._)("button",{onClick:n[1]||(n[1]=n=>e.confirm())},(0,r.zw)(e.$t("common.confirm")),1)])),_:1},512)}var u=t(2262);function c(){let e=(0,u.iH)(null);function n(){return e}function t(n=null){e=n}function o(){e?.emitClose()}return{getModalRef:n,setModalRef:t,closeModal:o}}function s(e,n,t,r,a,i){const u=(0,o.up)("vue-final-modal");return(0,o.wg)(),(0,o.j4)(u,{class:"base-modal","click-to-close":e.clickToClose},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"header"),(0,o.WI)(e.$slots,"body"),(0,o.WI)(e.$slots,"footer")])),_:3},8,["click-to-close"])}var l=(0,o.aZ)({name:"BaseModal",props:{clickToClose:{type:Boolean,required:!1,default:!1}},setup(e,{emit:n}){return{emitClose:()=>n("update:modelValue")}}}),f=t(3744);const d=(0,f.Z)(l,[["render",s]]);var m=d,p=(0,o.aZ)({name:"Modal",components:{BaseModal:m},props:{okCallBack:{type:Function,required:!1},message:{type:String,required:!1,default:""}},setup(e){const{setModalRef:n,closeModal:t}=c();function o(){e.okCallBack&&e.okCallBack(),t()}return{setModalRef:n,closeModal:t,confirm:o}}});const h=(0,f.Z)(p,[["render",i]]);var g=h}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{83:"2e3b8a17",89:"0aa37a39",239:"316680cc",252:"bee6b8f5",795:"c97959bb",954:"e4811bf0"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{89:"7082c6fb",239:"c3a9021f",252:"e3269b5b"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="live-chat:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={826:0};t.f.miniCss=function(e,n){var t={89:1,239:1,252:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={826:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var l=c(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2664)}));o=t.O(o)})();