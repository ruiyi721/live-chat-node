if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),c={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"live-chat"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/239.c3a9021f.css",revision:null},{url:"/css/252.e3269b5b.css",revision:null},{url:"/css/89.7082c6fb.css",revision:null},{url:"/css/chunk-vendors.94fda3de.css",revision:null},{url:"/css/index.1846866a.css",revision:null},{url:"/img/icons.d7e2d6fd.svg",revision:null},{url:"/index.html",revision:"269895c0a5302206f639b212622fce70"},{url:"/js/239.316680cc.js",revision:null},{url:"/js/252.bee6b8f5.js",revision:null},{url:"/js/795.c97959bb.js",revision:null},{url:"/js/83.2e3b8a17.js",revision:null},{url:"/js/89.0aa37a39.js",revision:null},{url:"/js/954.e4811bf0.js",revision:null},{url:"/js/chunk-vendors.33396036.js",revision:null},{url:"/js/index.d0356164.js",revision:null},{url:"/manifest.json",revision:"30e207267f2c3b1a867f1a7b4fba16b2"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
