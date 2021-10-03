"use strict";(self.webpackChunklubycon_home=self.webpackChunklubycon_home||[]).push([[691],{8953:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3366),i=n(7462),a=n(7294),o=n(5505),s=n(600),l=n(7663),c=n(8348),d=n(7761),u=n(2717);function f(e){return(0,u.Z)("MuiPaper",e)}(0,n(5495).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=n(5893),h=["className","component","elevation","square","variant"],m=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},g=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===n.variant&&(0,i.Z)({boxShadow:t.shadows[n.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.Fq)("#fff",m(n.elevation)),", ").concat((0,l.Fq)("#fff",m(n.elevation)),")")}))})),v=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiPaper"}),a=n.className,l=n.component,c=void 0===l?"div":l,u=n.elevation,m=void 0===u?1:u,v=n.square,b=void 0!==v&&v,y=n.variant,E=void 0===y?"elevation":y,w=(0,r.Z)(n,h),_=(0,i.Z)({},n,{component:c,elevation:m,square:b,variant:E}),S=function(e){var t=e.square,n=e.elevation,r=e.variant,i=e.classes,a={root:["root",r,!t&&"rounded","elevation"===r&&"elevation".concat(n)]};return(0,s.Z)(a,f,i)}(_);return(0,p.jsx)(g,(0,i.Z)({as:c,ownerState:_,className:(0,o.Z)(S.root,a),ref:t},w))}))},9308:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(3366),i=n(7462),a=n(7294),o=n(5505),s=n(8297),l=n(600),c=n(8348),d=n(7761),u=n(9240),f=n(2717);function p(e){return(0,f.Z)("MuiTypography",e)}(0,n(5495).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=n(5893),m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,u.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiTypography"}),a=function(e){return b[e]||e}(n.color),c=(0,s.Z)((0,i.Z)({},n,{color:a})),f=c.align,y=void 0===f?"inherit":f,E=c.className,w=c.component,_=c.gutterBottom,S=void 0!==_&&_,x=c.noWrap,Z=void 0!==x&&x,O=c.paragraph,k=void 0!==O&&O,R=c.variant,N=void 0===R?"body1":R,L=c.variantMapping,z=void 0===L?v:L,M=(0,r.Z)(c,m),I=(0,i.Z)({},c,{align:y,color:a,className:E,component:w,gutterBottom:S,noWrap:Z,paragraph:k,variant:N,variantMapping:z}),T=w||(k?"p":z[N]||v[N])||"span",W=function(e){var t=e.align,n=e.gutterBottom,r=e.noWrap,i=e.paragraph,a=e.variant,o=e.classes,s={root:["root",a,"inherit"!==e.align&&"align".concat((0,u.Z)(t)),n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return(0,l.Z)(s,p,o)}(I);return(0,h.jsx)(g,(0,i.Z)({as:T,ref:t,ownerState:I,className:(0,o.Z)(W.root,E)},M))}))},7719:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var r=n(7294),i=n(8246),a=n(933),o=n(3366),s=n(8406),l=["size","direction"],c={left:"-45deg",right:"135deg",up:"45deg",down:"-135deg"},d=(0,s.Z)((function(e){return{icon:{display:"inline-block",width:function(e){return e.size+"px"},height:function(e){return e.size+"px"},textIndent:"-9999px",borderTop:"2px solid "+e.palette.text.primary,borderLeft:"2px solid "+e.palette.text.primary,transition:"all 0.3s ease-in-out",color:"transparent",textDecoration:"none",transform:function(e){return"rotate("+c[e.direction]+")"},cursor:"pointer","&:hover":{borderColor:e.palette.text.primary,borderWidth:5},"&::before":{display:"block",height:"200%",width:"200%",marginLeft:"50%",marginTop:"-50%",content:'""',transform:"rotate(45deg)"}}}})),u=function(e){var t=e.size,n=void 0===t?40:t,i=e.direction,a=void 0===i?"down":i,s=(0,o.Z)(e,l),c=d({size:n,direction:a});return r.createElement("a",Object.assign({className:c.icon},s))},f=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),p="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,h=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),m="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(h):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var g=["top","right","bottom","left","width","height","size","weight"],v="undefined"!=typeof MutationObserver,b=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&s()}function o(){m(a)}function s(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(o,t);i=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){p&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),v?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){p&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;g.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),y=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},E=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||h},w=k(0,0,0,0);function _(e){return parseFloat(e)||0}function S(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+_(e["border-"+n+"-width"])}),0)}function x(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return w;var r=E(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],a=e["padding-"+i];t[i]=_(a)}return t}(r),a=i.left+i.right,o=i.top+i.bottom,s=_(r.width),l=_(r.height);if("border-box"===r.boxSizing&&(Math.round(s+a)!==t&&(s-=S(r,"left","right")+a),Math.round(l+o)!==n&&(l-=S(r,"top","bottom")+o)),!function(e){return e===E(e).document.documentElement}(e)){var c=Math.round(s+a)-t,d=Math.round(l+o)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return k(i.left,i.top,s,l)}var Z="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof E(e).SVGGraphicsElement}:function(e){return e instanceof E(e).SVGElement&&"function"==typeof e.getBBox};function O(e){return p?Z(e)?function(e){var t=e.getBBox();return k(0,0,t.width,t.height)}(e):x(e):w}function k(e,t,n,r){return{x:e,y:t,width:n,height:r}}var R=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=k(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=O(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),N=function(e,t){var n,r,i,a,o,s,l,c=(r=(n=t).x,i=n.y,a=n.width,o=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),y(l,{x:r,y:i,width:a,height:o,top:i,right:r+a,bottom:o+i,left:r}),l);y(this,{target:e,contentRect:c})},L=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new f,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof E(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new R(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof E(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new N(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),z="undefined"!=typeof WeakMap?new WeakMap:new f,M=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=b.getInstance(),r=new L(t,n,this);z.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){M.prototype[e]=function(){var t;return(t=z.get(this))[e].apply(t,arguments)}}));var I=void 0!==h.ResizeObserver?h.ResizeObserver:M;function T(e,t){var n=(null!=t?t:{}).gutter,i=void 0===n?0:n,a=(0,r.useState)(0),o=a[0],s=a[1],l=(0,r.useCallback)((function(){window.scroll({top:o+i,behavior:"smooth"})}),[i,o]),c=(0,r.useCallback)((function(){if(e.current){var t=e.current,n=t.offsetTop+t.clientHeight;s(n)}}),[e]);return function(e,t){var n=(0,r.useRef)(null),i=(0,r.useRef)(t);(0,r.useEffect)((function(){if(null!==e.current)return n.current=new I((function(e){i.current(e[0].contentRect)})),n.current.observe(e.current),function(){var e;return null===(e=n.current)||void 0===e?void 0:e.disconnect()}}),[e])}(e,c),l}var W=(0,s.Z)((function(e){var t,n;return{root:{position:"relative",height:"100vh"},wrapper:(t={position:"absolute",top:"45%",left:"50%",transform:"translate(-50%, -50%)"},t[e.breakpoints.down("md")]={top:"30%"},t),title:(n={fontStyle:"italic",fontSize:"3.5rem",textAlign:"center",whiteSpace:"nowrap"},n[e.breakpoints.down("md")]={fontSize:"2rem"},n),titlePoint:{color:e.palette.secondary.main},description:{textAlign:"center",fontWeight:200,fontSize:"1.4rem",fontStyle:"italic"},bottomArrow:{position:"absolute",bottom:"20%",left:"50%",transform:"translateX(-50%)"}}})),C=function(){var e=(0,r.useRef)(null),t=W(),n=(0,a.q_)({from:{opacity:0,transform:"translateX(-30px)"},to:{opacity:1,transform:"translateX(0)"}}),i=(0,a.q_)({from:{opacity:0,transform:"translateX(30px)"},to:{opacity:1,transform:"translateX(0)"}}),o=(0,a.q_)({from:{opacity:0,transform:"translateY(-30px)"},to:{opacity:1,transform:"translateY(0)"},delay:300}),s=T(e);return r.createElement("div",{ref:e,className:t.root},r.createElement("div",{className:t.wrapper},r.createElement(a.q.h1,{style:n,className:t.title},"Growth",r.createElement("span",{className:t.titlePoint},".")," And Share"),r.createElement(a.q.h2,{style:i,className:t.description},"This is ",r.createElement("strong",null,"Lubycon"))),r.createElement("div",{className:t.bottomArrow},r.createElement(a.q.div,{style:o},r.createElement(u,{onClick:s}))))},q=n(5616),A=n(9308),B=n(4320),P=n(5491),H=n(2597),V=n(530),j=(0,s.Z)((function(e){var t=e.palette,n=e.spacing;return{root:{position:"relative"},info:{marginTop:n(2),textAlign:"center"},title:{fontWeight:"bold"},links:{margin:n(2)+"px 0 0 0",padding:0,display:"flex",justifyContent:"center"},linkIcon:{listStyle:"none",margin:"0 "+n(1)+"px","& i":{color:t.text.secondary,transition:"transform 0.2s ease-in-out, opacity 0.2s ease-in-out","&:hover":{transform:"translate(0, -5px)",opacity:.8}}}}})),X=function(e){var t=e.member,n=e.backgroundColor,i=void 0===n?"transparent":n,a=t.profileImg,o=(0,r.useState)(0),s=o[0],l=o[1],c=(0,r.useCallback)((function(e){null!=e&&l(e.clientWidth)}),[]),d=(0,r.useMemo)((function(){return Object.entries(t.social).filter((function(e){var t=e[1];return Boolean(t)}))}),[t.social]),u=j();return r.createElement("div",{className:u.root},r.createElement("div",{ref:c},r.createElement(V.Z,{size:s,imageSrc:a,backgroundColor:i})),r.createElement("div",{className:u.info},r.createElement(A.Z,{display:"block",component:"h3",variant:"subtitle1",className:u.title},t.name.ko," / ",t.name.en),t.company&&r.createElement(A.Z,{variant:"caption"},t.company),r.createElement(A.Z,{display:"block",variant:"caption"},t.role)),r.createElement("div",null,r.createElement("ul",{className:u.links},d.length>0?d.map((function(e){var t=e[0],n=e[1];return r.createElement("li",{key:t,className:u.linkIcon},r.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.createElement("i",{className:""+H.HE[t]})))})):r.createElement("li",{className:u.linkIcon}))))},G=n(2235),D=n(2846),F=(0,s.Z)((function(e){var t,n,r=e.spacing,i=e.typography,a=e.breakpoints;return{root:(t={padding:r(15)+"px 0"},t[a.down("md")]={padding:r(10)+"px 0"},t),title:(n={fontWeight:i.fontWeightBold,textAlign:"center"},n[a.down("md")]={fontSize:i.h6.fontSize},n),description:{marginBottom:r(10)}}})),U=function(){var e=F(),t=(0,P.d)("lubycon");return r.createElement("section",{className:e.root},r.createElement(q.Z,null,r.createElement(A.Z,{variant:"h4",component:"h2",gutterBottom:!0,className:e.title},"루비콘 팀의 멤버들이에요"),r.createElement(A.Z,{className:e.description}),r.createElement(B.ZP,{container:!0,spacing:2},t.map((function(e){return r.createElement(B.ZP,{item:!0,key:e.id,xs:6,sm:3},r.createElement(D.Z,null,r.createElement(X,{member:e,backgroundColor:G.Z[100]})))})))))},J=n(1004),Y=n(4010),K=[{title:"스터디",image:"https://assets.lubycon.io/illusts/books.png",description:'우리는 관심있는 분야가 있다면 함께 스터디하고 싶은 멤버들을 모아서 자체 스터디를 하고 있어요.\n최근 팀 내에서 가장 핫한 주제는 "나의 성장 뿐 아니라 팀의 성장을 이끌 수 있는 사람이 되는 것"입니다.'},{title:"멘토링",image:"https://assets.lubycon.io/illusts/roadsign.png",description:"우리는 멘토링을 통해 아직 성장의 방향을 잡지 못한 분들을 도와드리고 있어요.\n\n우리가 지금까지 쌓아왔던 모든 경험들이 다른 사람들에게 분명 도움이 될 것이라고 믿거든요."},{title:"커뮤니티",image:"https://assets.lubycon.io/illusts/networking.png",description:"루비콘 팀이 운영하는 커뮤니티인 루비콘 허브는 함께 프로젝트를 진행하는 팀과 같은 직군이 모인 챕터로 구성되어 있어요.\n많은 사람들이 빠른 정보 공유와 투명한 커뮤니케이션을 통해 성장하기를 바라요."},{title:"프로젝트",image:"https://assets.lubycon.io/illusts/laptop.png",description:"루비콘 팀의 프로젝트는 스스로 필요한 제품을 개발하는 것 뿐만 아니라 UI Kit처럼 다른 사람들의 생산성을 높힐 수 있는 제품을 개발하기도 해요."}],Q=(0,s.Z)((function(e){var t,n,r=e.palette,i=e.spacing,a=e.typography,o=e.breakpoints;return{root:(t={padding:i(15)+"px 0",backgroundColor:r.grey[100]},t[o.down("md")]={padding:i(10)+"px 0"},t),title:(n={fontWeight:a.fontWeightBold},n[o.down("md")]={fontSize:a.h6.fontSize},n),description:{marginBottom:i(5)}}})),$=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=Q(),o=(0,a.q_)({opacity:t?1:0,transform:t?"translateX(0)":"translateX(-50px)"}),s=(0,a.q_)({opacity:t?1:0,transform:t?"translateX(0)":"translateX(-50px)",delay:300});return r.createElement("section",{className:i.root},r.createElement(q.Z,null,r.createElement(Y.mU,{onImpressionStart:function(){return n(!0)}},r.createElement(a.q.div,{style:o},r.createElement(A.Z,{variant:"h4",component:"h2",gutterBottom:!0,className:i.title},"함께 성장하고 공유하기")),r.createElement(a.q.div,{style:s},r.createElement(A.Z,{className:i.description},"루비콘 팀의 이니셔티브는 ",r.createElement("strong",null,"성장과 공유"),"에요. 루비콘 팀은 이 이니셔티브를 달성하기 위한 여러가지 활동을 하고 있어요.",r.createElement("br",null))),r.createElement(B.ZP,{container:!0,spacing:2},K.map((function(e,t){var n=e.title,i=e.image,a=e.description;return r.createElement(B.ZP,{key:t,item:!0,xs:12,sm:3},r.createElement(D.Z,null,r.createElement(J.Z,{title:n,image:i,description:a})))}))))))},ee=n(78),te=(0,s.Z)((function(e){var t,n,r=e.palette,i=e.spacing,a=e.typography,o=e.breakpoints;return{root:(t={padding:i(15)+"px 0",backgroundColor:r.grey[100],textAlign:"center"},t[o.down("md")]={padding:i(10)+"px 0"},t),title:(n={fontWeight:a.fontWeightBold},n[o.down("md")]={fontSize:a.h6.fontSize},n),description:{marginBottom:i(10)}}})),ne=function(){var e=te();return r.createElement("section",{className:e.root},r.createElement(q.Z,null,r.createElement(A.Z,{variant:"h4",component:"h2",gutterBottom:!0,className:e.title},"문의하기"),r.createElement(A.Z,{className:e.description},"제휴 문의나 루비콘이 진행하고 있는 프로젝트에 대한 문의는 help@lubycon.io로 보내주세요!"),r.createElement(ee.Z,{href:"mailto:help@lubycon.io",target:"_blank",variant:"contained",color:"primary",size:"large"},"지금 바로 문의하기")))},re=n(7753),ie=n(5444),ae=n(1496),oe=(0,s.Z)((function(e){var t,n,r,i=e.spacing,a=e.typography,o=e.breakpoints;return{root:{position:"relative",height:"100vh"},text:(t={},t[o.down("md")]={order:1,paddingTop:0},t),title:(n={fontWeight:a.fontWeightBold},n[o.down("md")]={fontSize:a.h6.fontSize},n),description:{marginBottom:i(10)},image:(r={width:550,paddingLeft:i(10)},r[o.down("md")]={order:0,width:300,paddingLeft:0},r),bottomArrow:{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)"}}})),se=function(){var e=(0,r.useRef)(null),t=(0,r.useState)(!1),n=t[0],i=t[1],o=oe(),s=(0,ie.useStaticQuery)("984440124").thumbnail,l=(0,a.q_)({opacity:n?1:0,transform:n?"translateX(0)":"translateX(-50px)"}),c=(0,a.q_)({opacity:n?1:0,transform:n?"translateX(0)":"translateX(-50px)",delay:300}),d=T(e);return r.createElement(q.Z,{component:"section"},r.createElement(B.ZP,{ref:e,container:!0,justifyContent:"center",alignItems:"center",className:o.root},r.createElement(B.ZP,{item:!0,xs:12,sm:!0,className:o.text},r.createElement(Y.mU,{onImpressionStart:function(){return i(!0)}},r.createElement(a.q.div,{style:l},r.createElement(A.Z,{variant:"h4",component:"h2",gutterBottom:!0,className:o.title},"안녕하세요. 우리는 루비콘 입니다 ",r.createElement(re.Z,{emoji:"👋",name:"Hi"}))),r.createElement(a.q.div,{style:c},r.createElement(A.Z,{className:o.description},"루비콘은 국내 IT업계에 선한 영향을 만들어내고 싶은 개발자들과 디자이너들이 모인 팀이에요.",r.createElement("br",null),"우리는 지속적으로 새로운 것들에 도전하며 실패하고, 그 과정 속에서 배운 것들을 공유해요. 그리고 이런 공유 활동은 루비콘 팀 뿐만 아니라 팀 외부에서도 이루어지고 있어요.")))),r.createElement(B.ZP,{item:!0,xs:"auto",className:o.image},r.createElement(ae.Z,{fluid:s.childImageSharp.fluid})),r.createElement("div",{className:o.bottomArrow},r.createElement(u,{onClick:d}))))},le=n(9559).k.getPageLogger("main_page"),ce=function(){return(0,r.useEffect)((function(){le.view()}),[]),r.createElement(i.Z,null,r.createElement(C,null),r.createElement(se,null),r.createElement($,null),r.createElement(U,null),r.createElement(ne,null))}},1496:function(e,t,n){var r=n(5318);t.Z=void 0;var i,a=r(n(1506)),o=r(n(5354)),s=r(n(7316)),l=r(n(7154)),c=r(n(7294)),d=r(n(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),n=t.resolutions,r=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,n=e.fixed,r=m(t||n||[]);return r&&r.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),v=function(e){var t=f(e),n=h(t);return g[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,E=y&&window.IntersectionObserver,w=new WeakMap;function _(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:a}),n&&c.default.createElement("source",{media:i,srcSet:n,sizes:a}))}))}function S(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function x(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function Z(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function O(e,t){var n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:n)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var k=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),w.set(e,t)),function(){n.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+o+s+n+r+t+a+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=c.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(L,(0,l.default)({ref:t,src:n},a,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,i(r),s):s})),L=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,i=e.src,a=e.style,o=e.onLoad,d=e.onError,f=e.loading,p=e.draggable,h=e.ariaHidden,m=(0,s.default)(e,u);return c.default.createElement("img",(0,l.default)({"aria-hidden":h,sizes:n,srcSet:r,src:i},m,{onLoad:o,onError:d,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=y&&v(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&E&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||y&&(b||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=c.default.createRef(),n.placeholderRef=t.placeholderRef||c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)(n)),n.handleRef=n.handleRef.bind((0,a.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:v(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=v(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=f(e),(n=h(t))&&(g[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=f(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,S=e.draggable,O=h||g;if(!O)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,l.default)({opacity:k?1:0,transition:z?"opacity "+b+"ms":"none"},s),I="boolean"==typeof v?"lightgray":v,T={transitionDelay:b+"ms"},W=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&T,s,u),C={title:t,alt:this.state.isVisible?"":n,style:W,className:p,itemProp:E},q=this.state.isHydrated?m(O):O[0];if(h)return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),I&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&T)}),q.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:C,imageVariants:O,generateSources:Z}),q.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:C,imageVariants:O,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,_(O),c.default.createElement(L,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:n,title:t,loading:w},q,{imageVariants:O}))}}));if(g){var A=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},a);return"inherit"===a.display&&delete A.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},I&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&T)}),q.base64&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:C,imageVariants:O,generateSources:Z}),q.tracedSVG&&c.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:C,imageVariants:O,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,_(O),c.default.createElement(L,{alt:n,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:n,title:t,loading:w},q,{imageVariants:O}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function T(e){return function(t,n,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[n]=e,i),t,"prop",r)}}z.propTypes={resolutions:M,sizes:I,fixed:T(d.default.oneOfType([M,d.default.arrayOf(M)])),fluid:T(d.default.oneOfType([I,d.default.arrayOf(I)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var W=z;t.Z=W}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e13ba58ebbb41e5e34e5.js.map