import e from"@csstools/postcss-progressive-custom-properties";import t from"postcss-value-parser";function r(e){return e.includes("conic-gradient(")||e.includes("linear-gradient(")||e.includes("radial-gradient(")||e.includes("repeating-conic-gradient(")||e.includes("repeating-linear-gradient(")||e.includes("repeating-radial-gradient(")}const n=["at","bottom","center","circle","closest-corner","closest-side","ellipse","farthest-corner","farthest-side","from","in","left","right","to","top"],i=e=>"div"===e.type&&","===e.value;function s(e){try{return!1!==t.unit(null==e?void 0:e.value)}catch(e){return!1}}const a=e=>({postcssPlugin:"postcss-double-position-gradients",Declaration(a,{result:o}){if(!r(a.value))return;if(function(e){let t=e.parent;for(;t;)if("atrule"===t.type){if("supports"===t.name&&r(t.params))return!0;t=t.parent}else t=t.parent;return!1}(a))return;let l;try{l=t(a.value)}catch(e){a.warn(o,`Failed to parse value '${a.value}' as a CSS gradient. Leaving the original value intact.`)}if(void 0===l)return;l.walk((e=>{if("function"!==e.type||"conic-gradient"!==(t=e.value)&&"linear-gradient"!==t&&"radial-gradient"!==t&&"repeating-conic-gradient"!==t&&"repeating-linear-gradient"!==t&&"repeating-radial-gradient"!==t)return;var t;const r=e.nodes.filter((e=>"comment"!==e.type&&"space"!==e.type));let a=!1;r.forEach(((t,r,o)=>{if("word"===t.type&&n.includes(t.value)&&(a=!0),"div"===t.type&&","===t.value&&(a=!1),a)return;const l=Object(o[r-1]),c=Object(o[r-2]),u=Object(o[r+1]);if(c.type&&s(l)&&s(t)){const r=c,n={type:"div",value:",",before:i(u)?u.before:"",after:i(u)?"":" "};e.nodes.splice(e.nodes.indexOf(t)-1,0,n,r)}}))}));const c=l.toString();if(c!==a.value){if(e.preserve)return void a.cloneBefore({value:c});a.value=c}}});a.postcss=!0;const o=t=>{const r=Object.assign({enableProgressiveCustomProperties:!0,preserve:!0},t);return r.enableProgressiveCustomProperties&&r.preserve?{postcssPlugin:"postcss-double-position-gradients",plugins:[e(),a(r)]}:a(r)};o.postcss=!0;export{o as default};
