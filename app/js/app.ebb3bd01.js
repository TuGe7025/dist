(function(e){function n(n){for(var c,r,a=n[0],i=n[1],d=n[2],l=0,h=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&h.push(u[r][0]),u[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},u={app:0},o=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e95df":"76739a05","chunk-6f142bd9":"45be24b4","chunk-0b1d3b85":"1d082dae","chunk-345454b8":"7c54d6fb","chunk-4edbf708":"b942de7d","chunk-74f524e1":"6ff5b25e","chunk-9ff42c8c":"b83c2402","chunk-a889c086":"fd495b7c","chunk-1fa2b3f0":"a4a87e02","chunk-281956de":"1abd36a5","chunk-2e2ebce7":"649d144c","chunk-61b857c9":"8fedeb62","chunk-8f603a16":"f2c01b1f","chunk-d424c45e":"dfca38eb"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-6f142bd9":1,"chunk-0b1d3b85":1,"chunk-345454b8":1,"chunk-4edbf708":1,"chunk-74f524e1":1,"chunk-9ff42c8c":1,"chunk-a889c086":1,"chunk-1fa2b3f0":1,"chunk-281956de":1,"chunk-2e2ebce7":1,"chunk-61b857c9":1,"chunk-8f603a16":1,"chunk-d424c45e":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-6f142bd9":"55a6ee0a","chunk-0b1d3b85":"3fa9888f","chunk-345454b8":"347d920a","chunk-4edbf708":"cc49858c","chunk-74f524e1":"ae38737b","chunk-9ff42c8c":"7dfaa3cc","chunk-a889c086":"a3b3c73f","chunk-1fa2b3f0":"75f2c8bc","chunk-281956de":"50782cc5","chunk-2e2ebce7":"eb13666d","chunk-61b857c9":"f3f31660","chunk-8f603a16":"0ce8b98c","chunk-d424c45e":"4344c69b"}[e]+".css",u=i.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var d=o[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===u))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){d=h[a],l=d.getAttribute("data-href");if(l===c||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],f.parentNode.removeChild(f),t(o)},f.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var h=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}u[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="https://cdn.jsdelivr.net/gh/TuGe7025/dist@appv1.0.2/app/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var f=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var c=t("0261"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"app",attrs:{id:"app"}},[t("el-backtop",{attrs:{right:100,bottom:0,"visibility-height":100}},[t("i",{ref:"cdtop",staticClass:"cd-top animated slideInDown delay-.8s"})]),t("router-view")],1)},u=[],o=(t("7a56"),t("a0f8"),t("e9c6")),a=t.n(o);c["default"].use(a.a);var i={data:function(){return{timer:"",d:""}},created:function(){window.addEventListener("load",this.handleResize)},beforeDestroy:function(){window.removeEventListener("load",this.handleResize)},mounted:function(){this.d=Math.round((new Date).getTime()/1e3),setTimeout((function(){void 0!==window.L2Dwidget&&window.L2Dwidget.init({pluginRootPath:"live2dw/",pluginJsPath:"lib/",pluginModelPath:"model/rem/",tagMode:!1,debug:!1,model:{jsonPath:"../live2dw/model/rem/rem.json"},display:{position:"left",width:200,height:200},mobile:{show:!0},log:!1})}),1e3)},methods:{handleResize:function(){var e=document.documentElement.clientWidth||document.body.clientWidth;e>980&&(window.location.href="http://tuge7025.com/")}}},d=i,l=(t("5c0b"),t("e90a")),h=Object(l["a"])(d,r,u,!1,null,null,null),f=h.exports,s=t("1bee");c["default"].use(s["a"]);var b=s["a"].prototype.push;s["a"].prototype.push=function(e){return b.call(this,e).catch((function(e){return e}))};var p=[{path:"/",name:"Home",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-a889c086"),t.e("chunk-8f603a16")]).then(t.bind(null,"bb51"))}},{path:"/About",name:"About",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-9ff42c8c")]).then(t.bind(null,"f820"))}},{path:"/Leave",name:"Leave",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-0b1d3b85"),t.e("chunk-74f524e1")]).then(t.bind(null,"2efc"))}},{path:"/Friends",name:"Friends",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-0b1d3b85"),t.e("chunk-4edbf708")]).then(t.bind(null,"6c40"))}},{path:"/Front_end",name:"Front_end",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-a889c086"),t.e("chunk-2e2ebce7")]).then(t.bind(null,"56f1"))}},{path:"/Detail/:id",name:"Detail",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-0b1d3b85"),t.e("chunk-345454b8")]).then(t.bind(null,"c84b"))}},{path:"/After_end",name:"After_end",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-a889c086"),t.e("chunk-d424c45e")]).then(t.bind(null,"9104"))}},{path:"/Acg",name:"Acg",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-a889c086"),t.e("chunk-281956de")]).then(t.bind(null,"aa13"))}},{path:"/Rests",name:"Rests",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-a889c086"),t.e("chunk-61b857c9")]).then(t.bind(null,"9e08"))}},{path:"/search_result/:id",name:"search_result",component:function(){return Promise.all([t.e("chunk-6f142bd9"),t.e("chunk-a889c086"),t.e("chunk-1fa2b3f0")]).then(t.bind(null,"c759"))}},{path:"*",name:"404",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))}}],m=new s["a"]({mode:"history",linkActiveClass:"is-active",linkExactActiveClass:"active",routes:p}),k=m,v=t("9fad");c["default"].use(v["a"]);var g=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=t("82ae"),y=t.n(w),P=t("157a"),_=t.n(P);c["default"].prototype.$axios=y.a,c["default"].use(_.a),c["default"].config.productionTip=!1,k.afterEach((function(e,n,t){window.scrollTo(0,0)})),new c["default"]({router:k,store:g,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var c=t("8425"),r=t.n(c);r.a},8425:function(e,n,t){}});