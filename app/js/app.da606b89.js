(function(e){function n(n){for(var c,r,a=n[0],i=n[1],l=n[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==o[a]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},o={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1f296037":"08f9261a","chunk-20105c03":"199f1b73","chunk-37c53fb6":"a60ab845","chunk-3e4cac4a":"238f117d","chunk-4483a226":"ae2729b5","chunk-2d40946b":"f10236b4","chunk-1fa2b3f0":"a4a87e02","chunk-3f4a65c4":"24489b2b","chunk-4680d043":"4b1a9a80","chunk-626b6fc8":"6b759dcf","chunk-648173b2":"ff03eee0","chunk-cf36163a":"50314952","chunk-4f569792":"8ef601bc","chunk-2d0e95df":"76739a05"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1f296037":1,"chunk-20105c03":1,"chunk-37c53fb6":1,"chunk-3e4cac4a":1,"chunk-4483a226":1,"chunk-2d40946b":1,"chunk-1fa2b3f0":1,"chunk-3f4a65c4":1,"chunk-4680d043":1,"chunk-626b6fc8":1,"chunk-648173b2":1,"chunk-cf36163a":1,"chunk-4f569792":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-1f296037":"92442ba3","chunk-20105c03":"17a08210","chunk-37c53fb6":"195e1f50","chunk-3e4cac4a":"478cb899","chunk-4483a226":"6b941a64","chunk-2d40946b":"f4d40193","chunk-1fa2b3f0":"75f2c8bc","chunk-3f4a65c4":"d31fe6fc","chunk-4680d043":"12ed0051","chunk-626b6fc8":"edd8e463","chunk-648173b2":"f9bbcd79","chunk-cf36163a":"2c8d1dd6","chunk-4f569792":"7dfaa3cc","chunk-2d0e95df":"31d6cfe0"}[e]+".css",o=i.p+c,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===o))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){l=h[a],d=l.getAttribute("data-href");if(d===c||d===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=u);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var h=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="https://cdn.jsdelivr.net/gh/TuGe7025/dist@appv1.0.6/app/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var f=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var c=t("0261"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"app",attrs:{id:"app"}},[t("el-backtop",{attrs:{right:100,bottom:0,"visibility-height":100}},[t("i",{ref:"cdtop",staticClass:"cd-top animated slideInDown delay-.8s"})]),t("router-view")],1)},o=[],u=(t("7a56"),t("a0f8"),t("e9c6")),a=t.n(u);c["default"].use(a.a);var i={data:function(){return{timer:"",d:""}},created:function(){window.addEventListener("load",this.handleResize)},beforeDestroy:function(){window.removeEventListener("load",this.handleResize)},mounted:function(){this.d=Math.round((new Date).getTime()/1e3),setTimeout((function(){void 0!==window.L2Dwidget&&window.L2Dwidget.init({pluginRootPath:"live2dw/",pluginJsPath:"lib/",pluginModelPath:"model/rem/",tagMode:!1,debug:!1,model:{jsonPath:"../live2dw/model/rem/rem.json"},display:{position:"right",width:200,height:200},mobile:{show:!0},log:!1})}),1e3)},methods:{handleResize:function(){var e=document.documentElement.clientWidth||document.body.clientWidth;e>980&&(window.location.href="http://tuge7025.com/")}}},l=i,d=(t("5c0b"),t("e90a")),h=Object(d["a"])(l,r,o,!1,null,null,null),f=h.exports,s=t("1bee");c["default"].use(s["a"]);var p=s["a"].prototype.push;s["a"].prototype.push=function(e){return p.call(this,e).catch((function(e){return e}))};var b=[{path:"/",name:"Home",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-2d40946b"),t.e("chunk-626b6fc8")]).then(t.bind(null,"bb51"))}},{path:"/About",name:"About",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-4f569792")]).then(t.bind(null,"f820"))}},{path:"/Leave",name:"Leave",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-20105c03"),t.e("chunk-3e4cac4a")]).then(t.bind(null,"2efc"))}},{path:"/Friends",name:"Friends",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-20105c03"),t.e("chunk-37c53fb6")]).then(t.bind(null,"6c40"))}},{path:"/Front_end",name:"Front_end",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-2d40946b"),t.e("chunk-cf36163a")]).then(t.bind(null,"56f1"))}},{path:"/Detail/:id",name:"Detail",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-20105c03"),t.e("chunk-4483a226")]).then(t.bind(null,"c84b"))}},{path:"/After_end",name:"After_end",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-2d40946b"),t.e("chunk-648173b2")]).then(t.bind(null,"9104"))}},{path:"/Acg",name:"Acg",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-2d40946b"),t.e("chunk-4680d043")]).then(t.bind(null,"aa13"))}},{path:"/Rests",name:"Rests",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-2d40946b"),t.e("chunk-3f4a65c4")]).then(t.bind(null,"9e08"))}},{path:"/search_result/:id",name:"search_result",component:function(){return Promise.all([t.e("chunk-1f296037"),t.e("chunk-2d40946b"),t.e("chunk-1fa2b3f0")]).then(t.bind(null,"c759"))}},{path:"*",name:"404",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))}}],m=new s["a"]({mode:"history",linkActiveClass:"is-active",linkExactActiveClass:"active",routes:b}),k=m,v=t("9fad");c["default"].use(v["a"]);var g=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=t("82ae"),y=t.n(w),P=t("157a"),_=t.n(P);c["default"].prototype.$axios=y.a,c["default"].use(_.a),c["default"].config.productionTip=!1,k.beforeEach((function(e,n,t){window.scrollTo(0,0),document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,t()})),new c["default"]({router:k,store:g,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var c=t("8425"),r=t.n(c);r.a},8425:function(e,n,t){}});