(this["webpackJsonpes6-spread-operator-practice"]=this["webpackJsonpes6-spread-operator-practice"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),l=n(6),i=n(3);var u=function(e){return c.a.createElement("div",{className:"form"},c.a.createElement("input",{onChange:e.onChange,type:"text",value:e.item,placeholder:"Add Item"}),c.a.createElement("button",{onClick:e.onClick},c.a.createElement("span",null,"Add")))};var m=function(e){return c.a.createElement("li",{onClick:function(){e.onChecked(e.id)}},e.item)};var s=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),d=s[0],p=s[1];function f(e){console.log(e),p((function(t){return t.filter((function(t,n){return n!==e}))}))}return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List")),c.a.createElement(u,{onChange:function(e){r(e.target.value)},item:n,onClick:function(e){p((function(e){return[].concat(Object(l.a)(e),[n])})),r("")}}),c.a.createElement("div",null,c.a.createElement("ul",null,d.map((function(e,t){return c.a.createElement(m,{id:t,key:t,item:e,onChecked:f})})))))};o.a.render(c.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.13be24ab.chunk.js.map