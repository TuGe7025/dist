(function(e){function n(n){for(var c,u,o=n[0],i=n[1],f=n[2],h=0,d=[];h<o.length;h++)u=o[h],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},u={app:0},r={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e95df":"76739a05","chunk-c55b90f2":"e6032b2c","chunk-0b1d3b85":"1d082dae","chunk-5dc509b6":"f87ff447","chunk-9c901c44":"eef507e1","chunk-87fee0d0":"f5f325b6","chunk-673d26a5":"7983bd3f","chunk-2a150120":"4737ca09","chunk-14b3af2a":"8bac3bb1","chunk-68ac6f5c":"0f39c111","chunk-72bbd656":"4d1eed04","chunk-89eff5b2":"9e1514bb","chunk-a656b5a8":"7ba1c444","chunk-d1218e4e":"b5f4af69","chunk-8fb0543e":"ad22463d"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-c55b90f2":1,"chunk-0b1d3b85":1,"chunk-5dc509b6":1,"chunk-9c901c44":1,"chunk-87fee0d0":1,"chunk-673d26a5":1,"chunk-2a150120":1,"chunk-14b3af2a":1,"chunk-68ac6f5c":1,"chunk-72bbd656":1,"chunk-89eff5b2":1,"chunk-a656b5a8":1,"chunk-d1218e4e":1,"chunk-8fb0543e":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-c55b90f2":"aa603ce4","chunk-0b1d3b85":"3fa9888f","chunk-5dc509b6":"96ad3816","chunk-9c901c44":"cc49858c","chunk-87fee0d0":"4f90b3b0","chunk-673d26a5":"53bdde1b","chunk-2a150120":"fcd46bd3","chunk-14b3af2a":"5225bdb3","chunk-68ac6f5c":"a61eb79f","chunk-72bbd656":"2324a310","chunk-89eff5b2":"212397b5","chunk-a656b5a8":"b8cfa672","chunk-d1218e4e":"364b6f64","chunk-8fb0543e":"3afeea7b"}[e]+".css",r=i.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var f=a[o],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===c||h===r))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){f=d[o],h=f.getAttribute("data-href");if(h===c||h===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete u[e],l.parentNode.removeChild(l),t(a)},l.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){u[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=a);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var d=new Error;f=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+u+")",d.name="ChunkLoadError",d.type=c,d.request=u,t[1](d)}r[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:h})}),12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var l=h;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var c=t("0261"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"app",attrs:{id:"app"}},[t("router-view")],1)},r=[],a={data:function(){return{timer:"",d:""}},mounted:function(){this.d=Math.round((new Date).getTime()/1e3),setTimeout((function(){void 0!==window.L2Dwidget&&window.L2Dwidget.init({pluginRootPath:"live2dw/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-hijiki/assets/",tagMode:!1,debug:!1,model:{jsonPath:"../live2dw/live2d-widget-model-hijiki/assets/hijiki.model.json"},display:{position:"left",width:200,height:300},mobile:{show:!0},log:!1})}),300)},methods:{setCss:function(e,n){if(e)for(var t in n)e.style[t]=n[t]}}},o=a,i=(t("5c0b"),t("e90a")),f=Object(i["a"])(o,u,r,!1,null,null,null),h=f.exports,d=t("1bee");c["default"].use(d["a"]);var l=d["a"].prototype.push;d["a"].prototype.push=function(e){return l.call(this,e).catch((function(e){return e}))};var s=[{path:"/",name:"Home",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-87fee0d0"),t.e("chunk-2a150120"),t.e("chunk-89eff5b2")]).then(t.bind(null,"bb51"))}},{path:"/About",name:"About",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-8fb0543e")]).then(t.bind(null,"f820"))}},{path:"/Leave",name:"Leave",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-0b1d3b85"),t.e("chunk-5dc509b6")]).then(t.bind(null,"2efc"))}},{path:"/Friends",name:"Friends",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-0b1d3b85"),t.e("chunk-9c901c44")]).then(t.bind(null,"6c40"))}},{path:"/Front_end",name:"Front_end",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-87fee0d0"),t.e("chunk-2a150120"),t.e("chunk-72bbd656")]).then(t.bind(null,"56f1"))}},{path:"/Detail/:id",name:"Detail",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-87fee0d0"),t.e("chunk-0b1d3b85"),t.e("chunk-673d26a5")]).then(t.bind(null,"c84b"))}},{path:"/After_end",name:"After_end",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-87fee0d0"),t.e("chunk-2a150120"),t.e("chunk-d1218e4e")]).then(t.bind(null,"9104"))}},{path:"/Acg",name:"Acg",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-87fee0d0"),t.e("chunk-2a150120"),t.e("chunk-68ac6f5c")]).then(t.bind(null,"aa13"))}},{path:"/Rests",name:"Rests",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-87fee0d0"),t.e("chunk-2a150120"),t.e("chunk-14b3af2a")]).then(t.bind(null,"9e08"))}},{path:"/search_result/:id",name:"search_result",component:function(){return Promise.all([t.e("chunk-c55b90f2"),t.e("chunk-87fee0d0"),t.e("chunk-2a150120"),t.e("chunk-a656b5a8")]).then(t.bind(null,"c759"))}},{path:"*",name:"404",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))}}],b=new d["a"]({linkActiveClass:"is-active",linkExactActiveClass:"active",routes:s}),p=b,k=t("9fad");c["default"].use(k["a"]);var m=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=t("82ae"),g=t.n(v),w=t("157a"),y=t.n(w);c["default"].prototype.$axios=g.a,c["default"].use(y.a),c["default"].config.productionTip=!1,p.afterEach((function(e,n,t){window.scrollTo(0,0)})),new c["default"]({router:p,store:m,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var c=t("8425"),u=t.n(c);u.a},8425:function(e,n,t){}});