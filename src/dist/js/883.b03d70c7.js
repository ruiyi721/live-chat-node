"use strict";(self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[]).push([[883],{4883:function(o,a,n){n.r(a),n.d(a,{default:function(){return _}});var t=n(6252),e=n(9963),l=n(3577);const c=o=>((0,t.dD)("data-v-5655b292"),o=o(),(0,t.Cn)(),o),s={class:"d-flex justify-content-center align-items-center h-75"},u=c((()=>(0,t._)("div",{class:"my-2"},[(0,t._)("label",{for:"account"},"account")],-1))),i=c((()=>(0,t._)("div",{class:"my-2"},[(0,t._)("label",{for:"pwd"},"password")],-1))),r={type:"submit",class:"login-btn"};function d(o,a,n,c,d,m){const p=(0,t.up)("el-input");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("form",{class:"login-form",onSubmit:a[2]||(a[2]=(0,e.iM)(((...a)=>o.login&&o.login(...a)),["prevent"]))},[u,(0,t.Wm)(p,{modelValue:o.loginFormData.account,"onUpdate:modelValue":a[0]||(a[0]=a=>o.loginFormData.account=a),id:"account"},null,8,["modelValue"]),i,(0,t.Wm)(p,{modelValue:o.loginFormData.password,"onUpdate:modelValue":a[1]||(a[1]=a=>o.loginFormData.password=a),id:"pwd"},null,8,["modelValue"]),(0,t._)("button",r,(0,l.zw)(o.$t("common.login")),1)],32)])}var m=n(2262),p=n(2119),g=n(1174),v=n(7258),f=(0,t.aZ)({name:"Login",setup(){const o=(0,v.Z)(),a=(0,p.tv)(),n=(0,m.iH)({account:"",password:""}),t=a=>{o.login(a)};async function e(){const o=await g.X.login(n.value);o&&(t(o),localStorage.setItem("token",o.token),n.value.account="",n.value.password="",a.push({name:"Home"}))}return{loginFormData:n,login:e}}}),w=n(3744);const b=(0,w.Z)(f,[["render",d],["__scopeId","data-v-5655b292"]]);var _=b}}]);