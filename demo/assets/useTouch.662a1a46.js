import{r as e}from"./index-5b39df8e.js";function a(){const a=e(""),t=e(0),u=e(0),l=e(0),v=e(0),o=e(0),n=e(0);return{touchStart:function(e){const c=e.touches[0];a.value="",t.value=0,u.value=0,l.value=0,v.value=0,o.value=c.clientX,n.value=c.clientY},touchMove:function(e){const c=e.touches[0];t.value=c.clientX-o.value,u.value=c.clientY-n.value,l.value=Math.abs(t.value),v.value=Math.abs(u.value),a.value=l.value>v.value?"horizontal":l.value<v.value?"vertical":""},direction:a,deltaX:t,deltaY:u,offsetX:l,offsetY:v,startX:o,startY:n}}export{a as u};
