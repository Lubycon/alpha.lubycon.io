/*! For license information please see 1cc42424933ac71181c924ba27f247d908ae7d8a-da154620301d96ea081d.js.LICENSE.txt */
"use strict";(self.webpackChunklubycon_home=self.webpackChunklubycon_home||[]).push([[356],{4010:function(e,t,n){n.d(t,{mU:function(){return l},zj:function(){return r}});var a=n(7294);function r(e){void 0===e&&(e=!1);var t=(0,a.useState)(e),n=t[0],r=t[1];return[n,(0,a.useCallback)((function(){return r(!0)}),[]),(0,a.useCallback)((function(){return r(!1)}),[])]}var o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};function i(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}var l=(0,a.forwardRef)((function(e,t){var n=e.children,r=i(e,["children"]),l=function(e){var t=e.onImpressionStart,n=e.onImpressionEnd,r=e.rootMargin,o=void 0===r?0:r,i=e.threshold,l=void 0===i?0:i,u=(0,a.useState)(!1),v=u[0],c=u[1],p=(0,a.useCallback)((function(){!0!==v&&(null==t||t(),c(!0))}),[]),s=(0,a.useCallback)((function(){!1!==v&&(null==n||n(),c(!1))}),[]),d=(0,a.useCallback)((function(e){var t=e[0],n=t.intersectionRatio;(0===l?!t.isIntersecting:n<l)?s():p()}),[s,p]),f=(0,a.useMemo)((function(){if("undefined"!=typeof IntersectionObserver)return new IntersectionObserver(d,{rootMargin:o+"px",threshold:l})}),[o,l]);return(0,a.useCallback)((function(e){void 0!==f&&(f.disconnect(),null!==e&&f.observe(e))}),[f])}(o({},r)),u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=(0,a.useCallback)((function(t){e.forEach((function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[e]);return n}(t,l);return a.createElement("div",{ref:u},n)}))},8953:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3366),r=n(7462),o=n(7294),i=n(5505),l=n(600),u=n(7663),v=n(8348),c=n(7761),p=n(2717);function s(e){return(0,p.Z)("MuiPaper",e)}(0,n(5495).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var d=n(5893),f=["className","component","elevation","square","variant"],h=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},g=(0,v.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===n.variant&&(0,r.Z)({boxShadow:t.shadows[n.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,u.Fq)("#fff",h(n.elevation)),", ").concat((0,u.Fq)("#fff",h(n.elevation)),")")}))})),m=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiPaper"}),o=n.className,u=n.component,v=void 0===u?"div":u,p=n.elevation,h=void 0===p?1:p,m=n.square,b=void 0!==m&&m,y=n.variant,Z=void 0===y?"elevation":y,w=(0,a.Z)(n,f),x=(0,r.Z)({},n,{component:v,elevation:h,square:b,variant:Z}),M=function(e){var t=e.square,n=e.elevation,a=e.variant,r=e.classes,o={root:["root",a,!t&&"rounded","elevation"===a&&"elevation".concat(n)]};return(0,l.Z)(o,s,r)}(x);return(0,d.jsx)(g,(0,r.Z)({as:v,ownerState:x,className:(0,i.Z)(M.root,o),ref:t},w))}))},9308:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(3366),r=n(7462),o=n(7294),i=n(5505),l=n(8297),u=n(600),v=n(8348),c=n(7761),p=n(9240),s=n(2717);function d(e){return(0,s.Z)("MuiTypography",e)}(0,n(5495).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(5893),h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,v.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,p.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiTypography"}),o=function(e){return b[e]||e}(n.color),v=(0,l.Z)((0,r.Z)({},n,{color:o})),s=v.align,y=void 0===s?"inherit":s,Z=v.className,w=v.component,x=v.gutterBottom,M=void 0!==x&&x,k=v.noWrap,O=void 0!==k&&k,S=v.paragraph,B=void 0!==S&&S,C=v.variant,P=void 0===C?"body1":C,R=v.variantMapping,j=void 0===R?m:R,W=(0,a.Z)(v,h),q=(0,r.Z)({},v,{align:y,color:o,className:Z,component:w,gutterBottom:M,noWrap:O,paragraph:B,variant:P,variantMapping:j}),I=w||(B?"p":j[P]||m[P])||"span",N=function(e){var t=e.align,n=e.gutterBottom,a=e.noWrap,r=e.paragraph,o=e.variant,i=e.classes,l={root:["root",o,"inherit"!==e.align&&"align".concat((0,p.Z)(t)),n&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,u.Z)(l,d,i)}(q);return(0,f.jsx)(g,(0,r.Z)({as:I,ref:t,ownerState:q,className:(0,i.Z)(N.root,Z)},W))}))}}]);
//# sourceMappingURL=1cc42424933ac71181c924ba27f247d908ae7d8a-da154620301d96ea081d.js.map