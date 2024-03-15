import{d as e,r as l,q as o,h as t,j as a,o as n,c as u,w as s,a as c,x as i,S as d,k as r,i as v,b as f}from"./index-5b39df8e.js";import{_ as m}from"./wd-button.666a7a8c.js";import{_ as p}from"./demo-block.528ea9ea.js";import{b as h,m as _,a as w,_ as C}from"./page-wraper.5f136bdc.js";const k=w(e({name:"wd-curtain",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{customClass:{default:""},value:{type:Boolean,default:!1},closePosition:{default:"inset"},src:null,to:null,width:null,closeOnClickModal:{type:Boolean,default:!1},hideWhenClose:{type:Boolean,default:!0}},emits:["beforeenter","enter","afterenter","beforeleave","leave","afterleave","close","closed","click-modal","load","error","click"],setup(e,{emit:f}){const m=e,p=l(!1),w=l(!0),C=l(""),k=l(1);function b(){let e="";m.width&&(e+=`width: ${m.width}px ;`,e+=`height: ${m.width/k.value}px`),C.value=e}function g(){f("beforeenter")}function x(){f("enter")}function y(){f("afterenter")}function j(){f("beforeleave")}function B(){f("leave")}function E(){f("afterleave"),f("closed")}function I(){p.value=!1,f("close")}function L(){f("click-modal")}function $(e){const{height:l,width:o}=e.detail;k.value=o/l,w.value=!0,b(),f("load")}function M(){w.value=!1,f("error")}function V(){m.to&&d({url:m.to}),f("click"),I()}return o((()=>m.value),(()=>{m.value&&w.value?p.value=!0:(p.value=!1,I())}),{deep:!0,immediate:!0}),o((()=>m.width),(()=>{b()}),{deep:!0,immediate:!0}),(l,o)=>{const d=r,f=t(a("wd-icon"),h),m=v,w=t(a("wd-popup"),_);return n(),u(m,null,{default:s((()=>[c(w,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value=e),transition:"zoom-in",position:"center","close-on-click-modal":e.closeOnClickModal,"hide-when-close":e.hideWhenClose,onBeforeEnter:g,onEnter:x,onAfterEnter:y,onBeforeLeave:j,onLeave:B,onAfterLeave:E,onClose:I,onClickModal:L,"custom-class":`wd-curtain ${e.customClass}`},{default:s((()=>[c(m,{class:"wd-curtain__content"},{default:s((()=>[c(d,{src:e.src,class:"wd-curtain__content-img",style:i(C.value),onClick:V,onError:M,onLoad:$},null,8,["src","style"]),c(f,{name:"close-outline",size:"24px","custom-class":`wd-curtain__content-close ${e.closePosition}`,onClick:I},null,8,["custom-class"])])),_:1})])),_:1},8,["modelValue","close-on-click-modal","hide-when-close","custom-class"])])),_:1})}}}),[["__scopeId","data-v-4372c17f"]]),b=w(e({__name:"Index",setup(e){const o=l(!1),i=l(!1),d=l(!1),r=l(!1),h=l(!1),_=l(!1),w=l(!1),b=l(!1),g=l("https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png"),x=l("/pages/index/index");function y(){o.value=!0}function j(){o.value=!1}function B(){i.value=!0}function E(){i.value=!1}function I(){d.value=!0}function L(){d.value=!1}function $(){r.value=!0}function M(){r.value=!1}function V(){h.value=!0}function z(){h.value=!1}function A(){_.value=!0}function O(){_.value=!1}function P(){w.value=!0}function W(){w.value=!1}function q(){b.value=!0}function G(){b.value=!1}return(e,l)=>{const H=t(a("wd-button"),m),S=t(a("demo-block"),p),U=v,D=t(a("wd-curtain"),k),F=t(a("page-wraper"),C);return n(),u(F,null,{default:s((()=>[c(S,{title:"基本用法"},{default:s((()=>[c(H,{onClick:y},{default:s((()=>[f("关闭按钮在内部")])),_:1})])),_:1}),c(S,{title:"修改按钮位置"},{default:s((()=>[c(U,null,{default:s((()=>[c(H,{onClick:B},{default:s((()=>[f("左上")])),_:1}),c(H,{onClick:I},{default:s((()=>[f("顶部")])),_:1}),c(H,{onClick:$},{default:s((()=>[f("右上")])),_:1})])),_:1}),c(U,null,{default:s((()=>[c(H,{onClick:V},{default:s((()=>[f("左下")])),_:1}),c(H,{onClick:A},{default:s((()=>[f("底部")])),_:1}),c(H,{onClick:P},{default:s((()=>[f("右下")])),_:1})])),_:1})])),_:1}),c(S,{title:"点击遮罩关闭"},{default:s((()=>[c(H,{onClick:q},{default:s((()=>[f("点击遮罩关闭")])),_:1})])),_:1}),c(D,{value:o.value,src:g.value,to:x.value,onClose:j,width:280},null,8,["value","src","to"]),c(D,{value:i.value,src:g.value,to:x.value,"close-position":"top-left",width:200,onClose:E},null,8,["value","src","to"]),c(D,{value:d.value,src:g.value,to:x.value,"close-position":"top",width:200,onClose:L},null,8,["value","src","to"]),c(D,{value:r.value,src:g.value,to:x.value,"close-position":"top-right",width:240,onClose:M},null,8,["value","src","to"]),c(D,{value:h.value,src:g.value,to:x.value,"close-position":"bottom-left",width:240,onClose:z},null,8,["value","src","to"]),c(D,{value:_.value,src:g.value,to:x.value,"close-position":"bottom",width:240,onClose:O},null,8,["value","src","to"]),c(D,{value:w.value,src:g.value,to:x.value,"close-position":"bottom-right",width:240,onClose:W},null,8,["value","src","to"]),c(D,{value:b.value,src:g.value,to:x.value,"close-position":"bottom-right",width:240,onClose:G,"close-on-click-modal":!0},null,8,["value","src","to"])])),_:1})}}}),[["__scopeId","data-v-9de87535"]]);export{b as default};
