import{d as e,r as a,q as l,v as t,N as u,m as o,o as r,c as s,w as n,n as i,u as d,i as c,a as m,z as f,x as v,e as p,b as y,t as _,F as b,p as g,a5 as k,g as h,h as w,j as C,y as x}from"./index-5b39df8e.js";import{z as V,k as $,B as F,E as T,i as B,j as S,M as D,D as M,b as P,m as H,F as L,a as z}from"./page-wraper.5f136bdc.js";import{g as j,_ as K}from"./wd-datetime-picker-view.cd85c672.js";import{u as q}from"./useTranslate.58e1bf0a.js";const I=z(e({name:"wd-datetime-picker",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{customClass:{default:""},customViewClass:{default:""},customLabelClass:{default:""},customValueClass:{default:""},label:null,placeholder:null,disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingColor:{default:"#4D80F0"},title:null,cancelButtonText:null,confirmButtonText:null,required:{type:Boolean,default:!1},size:null,labelWidth:{default:"33%"},useDefaultSlot:{type:Boolean,default:!1},useLabelSlot:{type:Boolean,default:!1},error:{type:Boolean,default:!1},alignRight:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!1},columnsHeight:{default:217},valueKey:{default:"value"},labelKey:{default:"label"},modelValue:null,type:{default:"datetime"},minDate:{default:new Date((new Date).getFullYear()-10,0,1).getTime()},maxDate:{default:new Date((new Date).getFullYear()+10,11,31).getTime()},minHour:{default:0},maxHour:{default:23},minMinute:{default:0},maxMinute:{default:59},filter:null,formatter:null,displayFormat:null,beforeConfirm:null,displayFormatTabLabel:null,defaultValue:null,zIndex:{default:15},prop:null,rules:{default:()=>[]}},emits:["change","open","toggle","cancel","confirm","update:modelValue"],setup(e,{expose:z,emit:I}){const O=e,{translate:A}=q("datetime-picker"),W=a(),U=a(),R=a([]),Y=a(!1),E=a(!0),G=a(!1),N=a([]),J=a(""),Q=a(""),X=a(!1),Z=a(!1),ee=a(!1),{proxy:ae}=x(),le=V();l((()=>O.modelValue),((e,a)=>{M(e,a)||("array"===F(e)?(G.value=!0,J.value=T(ie(!0)),Q.value=T(ie(!0,!0))):J.value=T(ie()),k((()=>{ke(!1,!1,!0)})))}),{deep:!0,immediate:!0}),l((()=>O.displayFormat),(e=>{e&&"function"!==F(e)&&console.error("The type of displayFormat must be Function")}),{deep:!0,immediate:!0}),l((()=>O.filter),(e=>{e&&"function"!==F(e)&&console.error("The type of filter must be Function")}),{deep:!0,immediate:!0}),l((()=>O.formatter),(e=>{e&&"function"!==F(e)&&console.error("The type of formatter must be Function")}),{deep:!0,immediate:!0}),l((()=>O.beforeConfirm),(e=>{e&&"function"!==F(e)&&console.error("The type of beforeConfirm must be Function")}),{deep:!0,immediate:!0}),l((()=>O.displayFormatTabLabel),(e=>{e&&"function"!==F(e)&&console.error("The type of displayFormatTabLabel must be Function")}),{deep:!0,immediate:!0}),l((()=>O.defaultValue),(e=>{"array"===F(e)||G.value?(J.value=T(ie(!0)),Q.value=T(ie(!0,!0))):J.value=T(ie())}),{deep:!0,immediate:!0});const{parent:te}=$(L),ue=t((()=>te&&O.prop&&te.errorMessages&&te.errorMessages[O.prop]?te.errorMessages[O.prop]:"")),oe=t((()=>{let e=!1;if(te&&te.props.rules){const a=te.props.rules;for(const l in a)Object.prototype.hasOwnProperty.call(a,l)&&l===O.prop&&Array.isArray(a[l])&&(e=a[l].some((e=>e.required)))}return O.required||O.rules.some((e=>e.required))||e})),re=e=>{if(!e)return;const{type:a}=O,{startSymbol:l,formatter:t}=e,u=e.correctValue(J.value),o=e.correctValue(Q.value),r=l?e.getPickerValue(u,a):e.getPickerValue(o,a),s=l?e.getPickerValue(o,a):e.getPickerValue(u,a),n=e.getOriginColumns();return(i=n).map(((e,a)=>e.values.map(((u,o)=>{const n=function(e,a,l,t,u,o){const{type:r}=O,s=a[l];if("datetime"===r){const a=o[0],l=o[1],r=o[2],n=o[3],i=o[4];if("year"===s.type)return e?t>a:t<a;if("month"===s.type&&u[0]===a)return e?t>l:t<l;if("date"===s.type&&u[0]===a&&u[1]===l)return e?t>r:t<r;if("hour"===s.type&&u[0]===a&&u[1]===l&&u[2]===r)return e?t>n:t<n;if("minute"===s.type&&u[0]===a&&u[1]===l&&u[2]===r&&u[3]===n)return e?t>i:t<i}else if("year-month"===r){const a=o[0],l=o[1];if("year"===s.type)return e?t>a:t<a;if("month"===s.type&&u[0]===a)return e?t>l:t<l}else if("date"===r){const a=o[0],l=o[1],r=o[2];if("year"===s.type)return e?t>a:t<a;if("month"===s.type&&u[0]===a)return e?t>l:t<l;if("date"===s.type&&u[0]===a&&u[1]===l)return e?t>r:t<r}else if("time"===r){const a=o[0],l=o[1];if("hour"===s.type)return e?t>a:t<a;if("minute"===s.type&&u[0]===a)return e?t>l:t<l}return!1}(l,i,a,u,r,s);return{label:t?t(e.type,D(u)):D(u),value:u,disabled:n}}))));var i};function se(e){let a="before"===e?J.value:Q.value,l=[];return a&&(l=j(a,O.type)),l.map((e=>({[O.labelKey]:D(e),[O.valueKey]:e})))}function ne(){}function ie(e,a){const{modelValue:l,defaultValue:t}=O;return e?a?l[1]||(t&&B(t)?t[1]:""):l[0]||(t&&B(t)?t[0]:""):S(l||t)?l||t:""}function de(){O.disabled||O.readonly||(I("open"),G.value?(Y.value=!0,E.value=!0,J.value=T(ie(!0,!1)),Q.value=T(ie(!0,!0))):(Y.value=!0,J.value=T(ie())),ke(!0,!1,!0))}function ce(){E.value=!E.value;const e=E.value?W.value:U.value;e.setColumns(e.updateColumns()),I("toggle",E.value?J.value:Q.value)}function me({value:e}){J.value=T(e),G.value?(N.value=[ge(),T(N.value[1])],I("change",{value:[e,Q.value]}),W.value&&W.value.setColumns(W.value.updateColumns()),U.value&&U.value.setColumns(U.value.updateColumns())):I("change",{value:J.value})}function fe({value:e}){Q.value=T(e),N.value=[T(N.value[0]),ge(1)],I("change",{value:[J.value,e]}),W.value&&W.value.setColumns(W.value.updateColumns()),U.value&&U.value.setColumns(U.value.updateColumns())}function ve(){Y.value=!1,setTimeout((()=>{G.value?(J.value=T(ie(!0)),Q.value=T(ie(!0,!0))):J.value=T(ie())}),200),I("cancel")}function pe(){if(O.loading||ee.value)return;if(X.value)return void(Z.value=!0);const{beforeConfirm:e}=O;e?e(G.value?[J.value,Q.value]:J.value,(e=>{e&&be()}),ae.$.exposed):be()}function ye(){X.value=!0}function _e(){X.value=!1,setTimeout((()=>{Z.value&&(Z.value=!1,pe())}),50)}function be(){if(O.loading||ee.value||O.disabled)return void(Y.value=!1);const e=G.value?[J.value,Q.value]:J.value;Y.value=!1,I("update:modelValue",e),I("confirm",{value:e}),ke(!1,!0)}function ge(e=0){if(G.value){let a=[];return a=0===e?W.value&&W.value.getSelects&&W.value.getSelects()||J.value&&se("before"):U.value&&U.value.getSelects&&U.value.getSelects()||Q.value&&se("after"),he(a,!0)}}function ke(e=!1,a=!1,l=!1){if(G.value){const t=l?J.value&&se("before")||[]:W.value&&W.value.getSelects&&W.value.getSelects()||[],u=l?Q.value&&se("after")||[]:U.value&&U.value.getSelects&&U.value.getSelects()||[];R.value=e?R.value:[O.modelValue[0]||a?he(t):"",O.modelValue[1]||a?he(u):""],N.value=[he(t,!0),he(u,!0)]}else{const e=l?J.value&&se("before")||[]:W.value&&W.value.getSelects&&W.value.getSelects()||[];R.value=T(O.modelValue||a?he(e):"")}}function he(e,a=!1){if(0===e.length)return"";if(a&&O.displayFormatTabLabel)return O.displayFormatTabLabel(e);if(O.displayFormat)return O.displayFormat(e);if(O.formatter){return(e=>{const a={datetime:["year","month","date","hour","minute"],date:["year","month","date"],time:["hour","minute"],"year-month":["year","month"]};return e.map(((e,l)=>O.formatter(a[O.type][l],e.value)))})(e).join("")}switch(O.type){case"date":return`${e[0].label}-${e[1].label}-${e[2].label}`;case"year-month":return`${e[0].label}-${e[1].label}`;case"time":return`${e[0].label}:${e[1].label}`;case"datetime":return`${e[0].label}-${e[1].label}-${e[2].label} ${e[3].label}:${e[4].label}`}}return u((()=>{const{modelValue:e}=O;"array"===F(e)?(G.value=!0,J.value=T(ie(!0)),Q.value=T(ie(!0,!0))):J.value=T(ie())})),o((()=>{ke(!1,!1,!0)})),z({open:function(){de()},close:function(){ve()},setLoading:function(e){ee.value=e}}),(a,l)=>{const t=c,u=h,o=w(C("wd-icon"),P),k=w(C("wd-datetime-picker-view"),K),x=w(C("wd-popup"),H);return r(),s(t,{class:i(`wd-picker ${e.disabled?"is-disabled":""} ${e.size?"is-"+e.size:""}  ${d(le).border.value?"is-border":""} ${e.alignRight?"is-align-right":""} ${e.error?"is-error":""} ${e.customClass}`)},{default:n((()=>[m(t,{class:"wd-picker__field",onClick:de},{default:n((()=>[e.useDefaultSlot?f(a.$slots,"default",{key:0},void 0,!0):(r(),s(t,{key:1,class:"wd-picker__cell"},{default:n((()=>[e.label||e.useLabelSlot?(r(),s(t,{key:0,class:i(`wd-picker__label ${e.customLabelClass} ${d(oe)?"is-required":""}`),style:v(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:n((()=>[e.label?(r(),p(b,{key:0},[y(_(e.label),1)],64)):f(a.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):g("",!0),m(t,{class:"wd-picker__body"},{default:n((()=>[m(t,{class:"wd-picker__value-wraper"},{default:n((()=>[m(t,{class:i(`wd-picker__value ${e.customValueClass}`)},{default:n((()=>[G.value?(r(),s(t,{key:0},{default:n((()=>[m(u,{class:i(R.value[0]?"":"wd-picker__placeholder")},{default:n((()=>[y(_(R.value[0]?R.value[0]:e.placeholder),1)])),_:1},8,["class"]),y(" "+_(d(A)("to"))+" ",1),m(u,{class:i(R.value[1]?"":"wd-picker__placeholder")},{default:n((()=>[y(_(R.value[1]?R.value[1]:e.placeholder),1)])),_:1},8,["class"])])),_:1})):(r(),s(t,{key:1,class:i(R.value?"":"wd-picker__placeholder")},{default:n((()=>[y(_(R.value?R.value:e.placeholder||d(A)("placeholder")),1)])),_:1},8,["class"]))])),_:1},8,["class"]),e.disabled||e.readonly?g("",!0):(r(),s(o,{key:0,"custom-class":"wd-picker__arrow",name:"arrow-right"}))])),_:1}),d(ue)?(r(),s(t,{key:0,class:"wd-picker__error-message"},{default:n((()=>[y(_(d(ue)),1)])),_:1})):g("",!0)])),_:1})])),_:3}))])),_:3}),m(x,{modelValue:Y.value,"onUpdate:modelValue":l[2]||(l[2]=e=>Y.value=e),position:"bottom","hide-when-close":!1,"close-on-click-modal":e.closeOnClickModal,"safe-area-inset-bottom":e.safeAreaInsetBottom,"z-index":e.zIndex,onClose:ve,"custom-class":"wd-picker__popup"},{default:n((()=>[m(t,{class:"wd-picker__wraper"},{default:n((()=>[m(t,{class:"wd-picker__toolbar",onTouchmove:ne},{default:n((()=>[m(t,{class:"wd-picker__action wd-picker__action--cancel",onClick:ve},{default:n((()=>[y(_(e.cancelButtonText||d(A)("cancel")),1)])),_:1}),e.title?(r(),s(t,{key:0,class:"wd-picker__title"},{default:n((()=>[y(_(e.title),1)])),_:1})):g("",!0),m(t,{class:i("wd-picker__action "+(e.loading||ee.value?"is-loading":"")),onClick:pe},{default:n((()=>[y(_(e.confirmButtonText||d(A)("confirm")),1)])),_:1},8,["class"])])),_:1}),G.value?(r(),s(t,{key:0,class:"wd-picker__region-tabs"},{default:n((()=>[m(t,{class:i(`wd-picker__region ${E.value?"is-active":""} `),onClick:ce},{default:n((()=>[m(t,null,{default:n((()=>[y(_(d(A)("start")),1)])),_:1}),m(t,{class:"wd-picker__region-time"},{default:n((()=>[y(_(N.value[0]),1)])),_:1})])),_:1},8,["class"]),m(t,{class:i("wd-picker__region "+(E.value?"":"is-active")),onClick:ce},{default:n((()=>[m(t,null,{default:n((()=>[y(_(d(A)("end")),1)])),_:1}),m(t,{class:"wd-picker__region-time"},{default:n((()=>[y(_(N.value[1]),1)])),_:1})])),_:1},8,["class"])])),_:1})):g("",!0),m(t,{class:i(E.value?"wd-picker__show":"wd-picker__hidden")},{default:n((()=>[m(k,{"custom-class":e.customViewClass,ref_key:"datetimePickerView",ref:W,type:e.type,modelValue:J.value,"onUpdate:modelValue":l[0]||(l[0]=e=>J.value=e),loading:e.loading||ee.value,"loading-color":e.loadingColor,"columns-height":e.columnsHeight,"value-key":e.valueKey,"label-key":e.labelKey,formatter:e.formatter,filter:e.filter,"column-formatter":"array"===d(F)(e.modelValue)?re:void 0,"max-hour":e.maxHour,"min-hour":e.minHour,"max-date":e.maxDate,"min-date":e.minDate,"max-minute":e.maxMinute,"min-minute":e.minMinute,"start-symbol":!0,onChange:me,onPickstart:ye,onPickend:_e},null,8,["custom-class","type","modelValue","loading","loading-color","columns-height","value-key","label-key","formatter","filter","column-formatter","max-hour","min-hour","max-date","min-date","max-minute","min-minute"])])),_:1},8,["class"]),m(t,{class:i(E.value?"wd-picker__hidden":"wd-picker__show")},{default:n((()=>[m(k,{"custom-class":e.customViewClass,ref_key:"datetimePickerView1",ref:U,type:e.type,modelValue:Q.value,"onUpdate:modelValue":l[1]||(l[1]=e=>Q.value=e),loading:e.loading||ee.value,"loading-color":e.loadingColor,"columns-height":e.columnsHeight,"value-key":e.valueKey,"label-key":e.labelKey,formatter:e.formatter,filter:e.filter,"column-formatter":"array"===d(F)(e.modelValue)?re:void 0,"max-hour":e.maxHour,"min-hour":e.minHour,"max-date":e.maxDate,"min-date":e.minDate,"max-minute":e.maxMinute,"min-minute":e.minMinute,"start-symbol":!1,onChange:fe,onPickstart:ye,onPickend:_e},null,8,["custom-class","type","modelValue","loading","loading-color","columns-height","value-key","label-key","formatter","filter","column-formatter","max-hour","min-hour","max-date","min-date","max-minute","min-minute"])])),_:1},8,["class"])])),_:1})])),_:1},8,["modelValue","close-on-click-modal","safe-area-inset-bottom","z-index"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-ab88b61b"]]);export{I as _};
