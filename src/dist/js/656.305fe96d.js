"use strict";(self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[]).push([[656],{4656:function(t,e,o){o.r(e),o.d(e,{default:function(){return D}});var r=o(6252),s=o(3577),a=o(9963);const n=t=>((0,r.dD)("data-v-150940c6"),t=t(),(0,r.Cn)(),t),i={class:"d-flex text-center h-100"},l=n((()=>(0,r._)("p",{class:"mb-5 ft-30 register-ttl"},"Sign Up",-1))),c={class:"mb-3"},u={for:"account"},m={class:"input-area"},d={class:"err-msg ft-12 text-color-red"},g={class:"mb-3"},b={for:"pwd"},p={class:"input-area"},f={class:"err-msg ft-12 text-color-red"},w={type:"submit",class:"register-btn submit"},_=n((()=>(0,r._)("i",{class:"btn-icon sns-icon-google"},null,-1)));function v(t,e,o,n,v,S){const h=(0,r.up)("router-link"),k=(0,r.up)("el-input");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(h,{to:{name:"Login"},class:"register-link"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(t.$t("common.login")),1)])),_:1}),(0,r._)("form",{class:"register-form",onSubmit:e[3]||(e[3]=(0,a.iM)(((...e)=>t.onSubmit&&t.onSubmit(...e)),["prevent"]))},[l,(0,r._)("div",c,[(0,r._)("label",u,(0,s.zw)(t.$t("form.account")),1)]),(0,r._)("div",m,[(0,r.Wm)(k,{modelValue:t.form.account,"onUpdate:modelValue":e[0]||(e[0]=e=>t.form.account=e),id:"account"},null,8,["modelValue"]),(0,r._)("p",d,(0,s.zw)(t.errors.account),1)]),(0,r._)("div",g,[(0,r._)("label",b,(0,s.zw)(t.$t("form.password")),1)]),(0,r._)("div",p,[(0,r.Wm)(k,{modelValue:t.form.password,"onUpdate:modelValue":e[1]||(e[1]=e=>t.form.password=e),id:"pwd"},null,8,["modelValue"]),(0,r._)("p",f,(0,s.zw)(t.errors.password),1)]),(0,r._)("button",w,(0,s.zw)(t.$t("common.register")),1),(0,r._)("button",{class:"register-btn google",onClick:e[2]||(e[2]=(...e)=>t.googleRegister&&t.googleRegister(...e))},[_,(0,r._)("div",null,(0,s.zw)(t.$t("form.login_with_google")),1)])],32)])}var S=o(2262),h=o(2119),k=o(9499),z=o(1174),C=o(2954),V=o(4231),y=o(9150);function $(t={}){const{t:e}=(0,y.QT)(),o=(0,r.Fl)((()=>{const t={account:(0,V.Z_)().required().label(e("form.account")),password:(0,V.Z_)().required().label(e("form.password"))};return(0,V.Ry)(t)})),s={account:"",password:""},{isSubmitting:a,handleSubmit:n,errors:i,values:l,resetForm:c}=(0,C.cI)({initialValues:s,validationSchema:o});Object.keys(s).every((t=>(0,C.U$)(t)));const u=n((async e=>{const o=await z.X.register({account:e.account,password:e.password});t.onSubmitCallback&&t.onSubmitCallback(o)}));return{form:l,errors:i,isSubmitting:a,onSubmit:u,resetForm:c}}var R=$,U=(0,r.aZ)({name:"Register",setup(){const t=(0,h.tv)(),e=(0,S.iH)(),{form:o,errors:r,isSubmitting:s,onSubmit:a}=R({onSubmitCallback:e=>{e&&t.push({name:"Login"})}});async function n(){await(0,k.DJ)().then((t=>{e.value=t}));const o=await z.X.googleAuth(e.value,"register");o&&t.push({name:"Login"})}return{form:o,errors:r,onSubmit:a,googleRegister:n}}}),x=o(3744);const Z=(0,x.Z)(U,[["render",v],["__scopeId","data-v-150940c6"]]);var D=Z}}]);