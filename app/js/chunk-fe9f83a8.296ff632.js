(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe9f83a8"],{"4de6":function(t,e,n){},"6c40":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"About"}},[n("HeaderNav"),t._m(0),n("div",{staticClass:"Friends-main"},[n("div",{staticClass:"breadth clearfix animated fadeInUp delay-.6s"},[t._m(1),n("p",{staticClass:"txt-p"},[n("font",{staticStyle:{"vertical-align":"inherit"}},[n("font",{staticStyle:{"vertical-align":"inherit"}},[t._v("欢迎交换友链哦")])],1)],1),n("ul",{staticClass:"friends-ul"},t._l(t.fruends,(function(e,i){return n("li",{key:i},[n("a",{attrs:{href:e.url,title:e.brief}},[n("img",{attrs:{src:e.img}}),n("div",[n("h4",[t._v(t._s(e.from_name))]),n("p",[t._v(t._s(e.brief)+"！")])])])])})),0),t._m(2),n("Respond",{attrs:{comments:t.comments,commentNum:t.commentNum,avatar:t.avatar},on:{doSend:function(e){return t.doSend(e)},doChidSend:function(e){return t.doChidSend(arguments)}}})],1)]),n("Footer")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About-top animated fadeIn delay-.6s"},[n("div",{staticClass:"About-banner"},[n("h2",{staticClass:"About-title"},[t._v("友链")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"txt-h3"},[n("div",{staticClass:"animated infinite tada delay-.6s",staticStyle:{width:"0.12rem"}},[t._v("HI")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friends-cont"},[n("p",[n("b",[t._v("本站信息：")])]),n("p",[t._v("站名：梦回初")]),n("p",[t._v("简介：一个前端小菜鸟的小站！")]),n("p",[t._v("链接："),n("a",{attrs:{href:"http://tuge7025.com/"}},[t._v("http://tuge7025.com/")])]),n("p",[t._v("头像："),n("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/TuGe7025/dist@v1.0.2/web/img/img-top.48059f08.jpg"}},[t._v("https://cdn.jsdelivr.net/gh/TuGe7025/dist@v1.0.2/web/img/img-top.48059f08.jpg")])])])}],s=(n("c483"),n("a0f8"),n("c471")),d=n.n(s),r=(n("5e74"),n("8042")),o=n("c330"),c=n("fd2d"),u=n("a982"),l=n("0261");l["default"].use(r["a"]),l["default"].use(d.a);var m={data:function(){return{commentNum:0,avatar:"https://cdn.jsdelivr.net/gh/TuGe7025/images@v1.0.2/niming.png",comments:[],fruends:[]}},components:{HeaderNav:o["a"],Footer:c["a"],Respond:u["a"]},mounted:function(){var t=this;this.$axios.get("http://tuge7025.com:3000/getleave?leave=Friends").then((function(e){t.comments=e.data.data,t.commentNum=e.data.length})),this.$axios.get("http://tuge7025.com:3000/getfriends").then((function(e){t.fruends=e.data.data}))},methods:{doSend:function(t){""===t.user_id&&(t.user_id="一位不愿透露姓名的游客"),this.$axios.post("http://tuge7025.com:3000/addleave",{user_id:t.user_id,email:t.email,url:t.url,content:t.content,img:t.img,leavepage:"Friends"}).then((function(t){})),setTimeout((function(){window.location.href="/Friends"}),300)},doChidSend:function(t){""===t[0].user_id&&(t[0].user_id="一位不愿透露姓名的游客"),this.$axios.post("http://tuge7025.com:3000/addreply",{user_id:t[0].user_id,email:t[0].email,url:t[0].url,content:t[0].content,leave_id:t[0].leave_id,from_id:t[0].from_id,img:t[0].img,leavepage:"Friends"}).then((function(t){})),setTimeout((function(){window.location.href="/Friends"}),300)}}},f=m,v=(n("a6ee"),n("e90a")),h=Object(v["a"])(f,i,a,!1,null,"097d9eda",null);e["default"]=h.exports},a6ee:function(t,e,n){"use strict";var i=n("4de6"),a=n.n(i);a.a}}]);