(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-150feefe"],{"52ff":function(n,t,e){},"897a":function(n,t,e){"use strict";var a=e("52ff"),i=e.n(a);i.a},f4b1:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("html",[e("body",[e("iframe",{attrs:{src:n.routerPath,width:"100%",height:"100%",frameborder:"0",name:"_blank"}})])])},i=[],o=e("ac0d"),c={name:"AIframe",mixins:[o["b"],o["c"]],data:function(){return{fullscreenLoading:!1}},created:function(){this.fullscreenLoading=!0},mounted:function(){window.onresize=function(){}},props:{routerPath:{type:String,default:null}},components:{},methods:{iframeInit:function(){if("sidemenu"!==this.layout){var n=this,t=this.$refs.iframe,e=document.documentElement.clientHeight-(this.multiTab?228:188);t.style.height="".concat(e,"px"),t.attachEvent?t.attachEvent("onload",(function(){n.fullscreenLoading=!1})):t.onload=function(){n.fullscreenLoading=!1}}}}},r=c,u=(e("897a"),e("2877")),f=Object(u["a"])(r,a,i,!1,null,"8eb2c37a",null);t["default"]=f.exports}}]);