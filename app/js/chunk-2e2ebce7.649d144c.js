(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e2ebce7"],{"389a":function(t,e,a){"use strict";var n=a("b603"),s=a.n(n);s.a},"56f1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"About"}},[a("HeaderNav"),t._m(0),a("div",{staticClass:"home-main"},[a("div",{staticClass:"breadth animated fadeInUpBig delay-.6s"},[a("div",{staticClass:"centent-l centent-l-f"},[a("Goods",{attrs:{feeds:t.feeds}}),a("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":5,total:t.conetlength},on:{"current-change":t.handleCurrentChange}})],1)])]),a("Footer")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"About-top"},[a("div",{staticClass:"About-banner"},[a("h2",{staticClass:"About-title"},[t._v("前端")])])])}],c=(a("7ca6"),a("a0f8"),a("2cf5")),i=a.n(c),o=(a("0b3b"),a("ded1")),d=a.n(o),r=(a("5e74"),a("8042")),u=a("c330"),l=a("fd2d"),f=a("ff5b"),h=a("0261");h["default"].use(r["a"]),h["default"].use(d.a),h["default"].use(i.a);var g={data:function(){return{calendar:new Date,feeds:[],conetlength:1}},components:{HeaderNav:u["a"],Footer:l["a"],Goods:f["a"]},mounted:function(){var t=this;this.$axios.get("http://admin.tuge7025.com/getarticle/classify1").then((function(e){t.feeds=e.data.data,t.conetlength=e.data.conetlength}))},methods:{handleCurrentChange:function(t){var e=this;this.$axios.get("http://admin.tuge7025.com/getarticle/classify1?page=".concat(t)).then((function(t){e.feeds=t.data.data}))}}},b=g,p=(a("389a"),a("e90a")),v=Object(p["a"])(b,n,s,!1,null,"2c7b3d7e",null);e["default"]=v.exports},b603:function(t,e,a){}}]);