import{_ as a}from"./wd-tag.2e86503e.js";import{d as s,r as e,o as l,c as t,w as c,a as u,b as o,e as p,f as n,F as d,h as r,j as f,i as m,g as i,t as _}from"./index-5b39df8e.js";import{_ as y}from"./demo-block.528ea9ea.js";import{b as g,_ as k,a as v}from"./page-wraper.5f136bdc.js";import"./useTranslate.58e1bf0a.js";const b=v(s({__name:"Index",setup(s){const v=e([{plain:!0,closable:!0,type:"primary",value:"标签一"},{plain:!0,closable:!0,type:"primary",value:"标签二"},{plain:!0,closable:!0,type:"primary",value:"标签三"}]),b=e(["标签一","标签二"]);function w({value:a}){a&&(b.value=[...b.value,a])}return(s,e)=>{const C=r(f("wd-tag"),a),x=m,j=r(f("demo-block"),y),A=i,F=r(f("wd-icon"),g),h=r(f("page-wraper"),k);return l(),t(x,null,{default:c((()=>[u(h,null,{default:c((()=>[u(j,{title:"基本用法"},{default:c((()=>[u(x,null,{default:c((()=>[u(C,{"custom-class":"space"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"primary"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"danger"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"warning"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"success"},{default:c((()=>[o("标签")])),_:1})])),_:1})])),_:1}),u(j,{title:"幽灵标签"},{default:c((()=>[u(x,null,{default:c((()=>[u(C,{"custom-class":"space",plain:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",plain:"",type:"primary"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",plain:"",type:"danger"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",plain:"",type:"warning"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",plain:"",type:"success"},{default:c((()=>[o("标签")])),_:1})])),_:1})])),_:1}),u(j,{title:"标记标签"},{default:c((()=>[u(x,null,{default:c((()=>[u(C,{"custom-class":"space",mark:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"primary",mark:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"danger",mark:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"warning",mark:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"success",mark:""},{default:c((()=>[o("标签")])),_:1})])),_:1})])),_:1}),u(j,{title:"幽灵标记标签"},{default:c((()=>[u(x,null,{default:c((()=>[u(C,{"custom-class":"space",mark:"",plain:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"primary",mark:"",plain:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"danger",mark:"",plain:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"warning",mark:"",plain:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"success",mark:"",plain:""},{default:c((()=>[o("标签")])),_:1})])),_:1})])),_:1}),u(j,{title:"圆角标签"},{default:c((()=>[u(x,null,{default:c((()=>[u(C,{"custom-class":"space",round:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"primary",round:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"danger",round:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"warning",round:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",type:"success",round:""},{default:c((()=>[o("标签")])),_:1})])),_:1})])),_:1}),u(j,{title:"设置图标"},{default:c((()=>[u(x,null,{default:c((()=>[u(C,{"custom-class":"space",icon:"clock",mark:""},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",mark:"","use-icon-slot":""},{icon:c((()=>[u(F,{name:"dong"})])),default:c((()=>[u(A,null,{default:c((()=>[o("插槽")])),_:1})])),_:1})])),_:1})])),_:1}),u(j,{title:"自定义颜色"},{default:c((()=>[u(x,null,{default:c((()=>[u(C,{"custom-class":"space",color:"#0083ff","bg-color":"#d0e8ff"},{default:c((()=>[o("标签")])),_:1}),u(C,{"custom-class":"space",color:"#FAA21E","bg-color":"#FAA21E",plain:""},{default:c((()=>[o("标签")])),_:1})])),_:1})])),_:1}),u(j,{title:"可关闭"},{default:c((()=>[u(x,null,{default:c((()=>[(l(!0),p(d,null,n(v.value,((a,s)=>(l(),t(C,{key:s,"custom-class":"space",round:"",closable:"",onClick:a=>function(a){console.log("click:index"+a)}(s),onClose:a=>{return e=s,v.value=v.value.filter(((a,s)=>s!==e)),void console.log("close:index"+e);var e}},{default:c((()=>[o(_(a.value),1)])),_:2},1032,["onClick","onClose"])))),128))])),_:1})])),_:1}),u(j,{title:"新增标签"},{default:c((()=>[u(x,null,{default:c((()=>[(l(!0),p(d,null,n(b.value,((a,s)=>(l(),t(C,{key:s,"custom-class":"space",round:"",closable:"",onClose:a=>{return e=s,void(b.value=b.value.filter(((a,s)=>s!==e)));var e}},{default:c((()=>[o(_(a),1)])),_:2},1032,["onClose"])))),128)),u(C,{"custom-class":"space",round:"",dynamic:"",onConfirm:w}),u(C,{"custom-class":"space",round:"",dynamic:"",onConfirm:w},{add:c((()=>[u(F,{name:"pin",size:"12px"}),u(A,{style:{"margin-left":"4px"}},{default:c((()=>[o("自定义")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-10d0f291"]]);export{b as default};
