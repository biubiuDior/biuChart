"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[354],{83164:function(z,l,n){n.r(l),n.d(l,{default:function(){return B}});var S=n(5574),f=n.n(S),r=n(62435),v={sideLayout:"sideLayout___SQBmd",content:"content___fq9SB"},c=n(97183),L=n(68508),d=n(57498),j=n(31298),C=n(45007),y=n(6586),e=n(86074),Z=c.Z.Sider,k=function(G){var i=(0,d.useLocation)(),K=(0,C.I0)(),M=(0,r.useState)([]),h=f()(M,2),g=h[0],A=h[1],N=(0,r.useState)([]),m=f()(N,2),T=m[0],p=m[1];(0,r.useEffect)(function(){K({type:"menu/getMenuData"}).then(function(o){D(o)})},[i.pathname]);var D=function(u){var s=[];u.map(function(a,O){if(a.path===i.pathname&&a.component==="../layouts/Side")a.children.map(function(t,$){s.push({key:t.path,label:t.name,title:t.name,icon:(0,e.jsx)(y.Z,{type:t.icon})})});else if(a.path===i.pathname){var Q=u.filter(function(t){return a.parent===t.path})[0];Q.children.map(function(t,$){s.push({key:t.path,label:t.name,title:t.name,icon:(0,e.jsx)(y.Z,{type:t.icon})})})}}),A(s);var x=s[0].key;s.map(function(a,O){i.pathname===a.key&&(x=a.key)}),p(x)},E=function(u){p([u.key]),d.history.push({pathname:u.key})};return(0,e.jsx)("div",{className:v.sideLayout,children:(0,e.jsxs)(c.Z,{children:[(0,e.jsx)(Z,{children:(0,e.jsx)(L.Z,{mode:"inline",selectedKeys:T,items:g,onClick:function(u){return E(u)}})}),(0,e.jsx)(c.Z,{className:v.content,children:(0,e.jsx)(j.$B,{children:(0,e.jsx)(d.Outlet,{})})})]})})},B=k}}]);
