(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2p7l":function(t,e,n){"use strict";var r=n("R/WZ"),i=n("30+C"),o=n("oa/T"),a=n("ofer"),c=n("q1tI"),s=n.n(c),l=Object(r.a)((function(t){var e,n,r=t.typography,i=t.breakpoints;return{root:{backgroundColor:"transparent",border:"none",boxShadow:"none",borderRadius:0},content:{padding:0},title:(e={fontWeight:r.fontWeightBold,marginBottom:16,fontSize:24},e[i.down("md")]={fontSize:18},e),description:(n={whiteSpace:"pre-line",fontSize:18},n[i.down("md")]={fontSize:14},n)}}));e.a=function(t){var e=t.title,n=t.description,r=l();return s.a.createElement(i.a,{className:r.root},s.a.createElement(o.a,{className:r.content},s.a.createElement(a.a,{variant:"h6",className:r.title},e),s.a.createElement(a.a,{className:r.description},n)))}},QeBL:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("k0/U"),a=n("wEEd"),c=n("zLVn"),s=n("R/WZ"),l=n("ZBNC"),u={left:"-45deg",right:"135deg",up:"45deg",down:"-135deg"},d=Object(s.a)((function(t){return Object(l.a)({icon:{display:"inline-block",width:function(t){return t.size+"px"},height:function(t){return t.size+"px"},textIndent:"-9999px",borderTop:"2px solid "+t.palette.text.primary,borderLeft:"2px solid "+t.palette.text.primary,transition:"all 0.3s ease-in-out",color:"transparent",textDecoration:"none",transform:function(t){return"rotate("+u[t.direction]+")"},cursor:"pointer","&:hover":{borderColor:t.palette.text.primary,borderWidth:5},"&::before":{display:"block",height:"200%",width:"200%",marginLeft:"50%",marginTop:"-50%",content:'""',transform:"rotate(45deg)"}}})})),f=function(t){var e=t.size,n=void 0===e?40:e,r=t.direction,o=void 0===r?"down":r,a=Object(c.a)(t,["size","direction"]),s=d({size:n,direction:o});return i.a.createElement("a",Object.assign({className:s.icon},a))},h=n("bdgK");function p(t,e){var n=(null!=e?e:{}).gutter,i=void 0===n?0:n,o=Object(r.useState)(0),a=o[0],c=o[1],s=Object(r.useCallback)((function(){window.scroll({top:a+i,behavior:"smooth"})}),[i,a]),l=Object(r.useCallback)((function(){if(t.current){var e=t.current,n=e.offsetTop+e.clientHeight;c(n)}}),[t]);return function(t,e){var n=Object(r.useRef)(null),i=Object(r.useRef)(e);Object(r.useEffect)((function(){if(null!==t.current)return n.current=new h.a((function(t){i.current(t[0].contentRect)})),n.current.observe(t.current),function(){var t;return null===(t=n.current)||void 0===t?void 0:t.disconnect()}}),[t])}(t,l),s}var m=Object(s.a)((function(t){var e,n;return Object(l.a)({root:{position:"relative",height:"100vh"},wrapper:(e={position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)"},e[t.breakpoints.down("md")]={top:"30%"},e),title:(n={fontStyle:"italic",fontSize:"3.5rem",textAlign:"center",whiteSpace:"nowrap"},n[t.breakpoints.down("md")]={fontSize:"2rem"},n),titlePoint:{color:t.palette.secondary.main},description:{textAlign:"center",fontWeight:200,fontSize:"1.4rem",fontStyle:"italic"},bottomArrow:{position:"absolute",bottom:"20%",left:"50%",transform:"translateX(-50%)"}})})),b=function(){var t=Object(r.useRef)(null),e=m(),n=Object(a.c)({from:{opacity:0,transform:"translateX(-30px)"},to:{opacity:1,transform:"translateX(0)"}}),o=Object(a.c)({from:{opacity:0,transform:"translateX(30px)"},to:{opacity:1,transform:"translateX(0)"}}),c=Object(a.c)({from:{opacity:0,transform:"translateY(-30px)"},to:{opacity:1,transform:"translateY(0)"},delay:300}),s=p(t);return i.a.createElement("div",{ref:t,className:e.root},i.a.createElement("div",{className:e.wrapper},i.a.createElement(a.a.h1,{style:n,className:e.title},"Growth",i.a.createElement("span",{className:e.titlePoint},".")," And Share"),i.a.createElement(a.a.h2,{style:o,className:e.description},"This is ",i.a.createElement("strong",null,"Lubycon"))),i.a.createElement("div",{className:e.bottomArrow},i.a.createElement(a.a.div,{style:c},i.a.createElement(f,{onClick:s}))))},v=n("Ji2X"),g=n("ofer"),y=n("tRbT"),_=n("TxQ5"),E=n("Db4T"),w=n("V/ii"),O=n.n(w),x=n("CvqG"),j=Object(s.a)((function(t){var e,n,r=t.spacing,i=t.typography,o=t.breakpoints;return{root:(e={padding:r(15)+"px 0"},e[o.down("md")]={padding:r(10)+"px 0"},e),title:(n={fontWeight:i.fontWeightBold,textAlign:"center"},n[o.down("md")]={fontSize:i.h6.fontSize},n),description:{marginBottom:r(10)}}})),S=function(){var t=j(),e=Object(_.a)("lubycon");return i.a.createElement("section",{className:t.root},i.a.createElement(v.a,null,i.a.createElement(g.a,{variant:"h4",component:"h2",gutterBottom:!0,className:t.title},"루비콘 팀의 멤버들이에요"),i.a.createElement(g.a,{className:t.description}),i.a.createElement(y.a,{container:!0,spacing:2},e.map((function(t){return i.a.createElement(y.a,{item:!0,key:t.id,xs:6,sm:3},i.a.createElement(x.a,null,i.a.createElement(E.a,{member:t,backgroundColor:O.a[100]})))})))))},z=n("2p7l"),k=n("PGGK"),A=[{title:"🎓 스터디",description:'우리는 관심있는 분야가 있다면 함께 스터디하고 싶은 멤버들을 모아서 자체 스터디를 하고 있어요.\n최근 팀 내에서 가장 핫한 주제는 "나의 성장 뿐 아니라 팀의 성장을 이끌 수 있는 사람이 되는 것"입니다.'},{title:"🌱 멘토링",description:"우리는 멘토링을 통해 아직 성장의 방향을 잡지 못한 분들을 도와드리고 있어요.\n\n우리가 지금까지 쌓아왔던 모든 경험들이 다른 사람들에게 분명 도움이 될 것이라고 믿거든요."},{title:"🤝 커뮤니티",description:"루비콘 팀이 운영하는 커뮤니티인 루비콘 허브는 함께 프로젝트를 진행하는 팀과 같은 직군이 모인 챕터로 구성되어 있어요.\n많은 사람들이 빠른 정보 공유와 투명한 커뮤니케이션을 통해 성장하기를 바라요."},{title:"💻 프로젝트",description:"루비콘 팀의 프로젝트는 스스로 필요한 제품을 개발하는 것 뿐만 아니라 UI Kit처럼 다른 사람들의 생산성을 높힐 수 있는 제품을 개발하기도 해요."}],N=Object(s.a)((function(t){var e,n,r=t.palette,i=t.spacing,o=t.typography,a=t.breakpoints;return{root:(e={padding:i(15)+"px 0",backgroundColor:r.grey[100]},e[a.down("md")]={padding:i(10)+"px 0"},e),title:(n={fontWeight:o.fontWeightBold},n[a.down("md")]={fontSize:o.h6.fontSize},n),description:{marginBottom:i(5)}}})),T=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1],o=N(),c=Object(a.c)({opacity:e?1:0,transform:e?"translateX(0)":"translateX(-50px)"}),s=Object(a.c)({opacity:e?1:0,transform:e?"translateX(0)":"translateX(-50px)",delay:300});return i.a.createElement("section",{className:o.root},i.a.createElement(v.a,null,i.a.createElement(k.a,{onImpressionStart:function(){return n(!0)}},i.a.createElement(a.a.div,{style:c},i.a.createElement(g.a,{variant:"h4",component:"h2",gutterBottom:!0,className:o.title},"함께 성장하고 공유하기")),i.a.createElement(a.a.div,{style:s},i.a.createElement(g.a,{className:o.description},"루비콘 팀의 이니셔티브는 ",i.a.createElement("strong",null,"성장과 공유"),"에요. 루비콘 팀은 이 이니셔티브를 달성하기 위한 여러가지 활동을 하고 있어요.",i.a.createElement("br",null))),i.a.createElement(y.a,{container:!0,spacing:2},A.map((function(t,e){var n=t.title,r=t.description;return i.a.createElement(y.a,{key:e,item:!0,xs:12,sm:3},i.a.createElement(x.a,null,i.a.createElement(z.a,{title:n,description:r})))}))))))},M=n("Z3vd"),R=Object(s.a)((function(t){var e,n,r=t.palette,i=t.spacing,o=t.typography,a=t.breakpoints;return{root:(e={padding:i(15)+"px 0",backgroundColor:r.grey[100],textAlign:"center"},e[a.down("md")]={padding:i(10)+"px 0"},e),title:(n={fontWeight:o.fontWeightBold},n[a.down("md")]={fontSize:o.h6.fontSize},n),description:{marginBottom:i(10)}}})),W=function(){var t=R();return i.a.createElement("section",{className:t.root},i.a.createElement(v.a,null,i.a.createElement(g.a,{variant:"h4",component:"h2",gutterBottom:!0,className:t.title},"문의하기"),i.a.createElement(g.a,{className:t.description},"제휴 문의나 루비콘이 진행하고 있는 프로젝트에 대한 문의는 help@lubycon.io로 보내주세요!"),i.a.createElement(M.a,{href:"mailto:help@lubycon.io",target:"_blank",variant:"contained",color:"primary",size:"large"},"지금 바로 문의하기")))},B=n("nxyq"),C=n("Wbzz"),L=n("9eSz"),X=n.n(L),D=Object(s.a)((function(t){var e,n,r,i=t.spacing,o=t.typography,a=t.breakpoints;return{root:{position:"relative",height:"100vh"},text:(e={},e[a.down("md")]={order:1,paddingTop:0},e),title:(n={fontWeight:o.fontWeightBold},n[a.down("md")]={fontSize:o.h6.fontSize},n),description:{marginBottom:i(10)},image:(r={width:550,paddingLeft:i(10)},r[a.down("md")]={order:0,width:300,paddingLeft:0},r),bottomArrow:{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)"}}})),I=function(){var t=Object(r.useRef)(null),e=Object(r.useState)(!1),n=e[0],o=e[1],c=D(),s=Object(C.useStaticQuery)("984440124").thumbnail,l=Object(a.c)({opacity:n?1:0,transform:n?"translateX(0)":"translateX(-50px)"}),u=Object(a.c)({opacity:n?1:0,transform:n?"translateX(0)":"translateX(-50px)",delay:300}),d=p(t);return i.a.createElement(v.a,{component:"section"},i.a.createElement(y.a,{ref:t,container:!0,justify:"center",alignItems:"center",className:c.root},i.a.createElement(y.a,{item:!0,xs:12,sm:!0,className:c.text},i.a.createElement(k.a,{onImpressionStart:function(){return o(!0)}},i.a.createElement(a.a.div,{style:l},i.a.createElement(g.a,{variant:"h4",component:"h2",gutterBottom:!0,className:c.title},"안녕하세요. 우리는 루비콘 입니다 ",i.a.createElement(B.a,{emoji:"👋",name:"Hi"}))),i.a.createElement(a.a.div,{style:u},i.a.createElement(g.a,{className:c.description},"루비콘은 국내 IT업계에 선한 영향을 만들어내고 싶은 개발자들과 디자이너들이 모인 팀이에요.",i.a.createElement("br",null),"우리는 지속적으로 새로운 것들에 도전하며 실패하고, 그 과정 속에서 배운 것들을 공유해요. 그리고 이런 공유 활동은 루비콘 팀 뿐만 아니라 팀 외부에서도 이루어지고 있어요.")))),i.a.createElement(y.a,{item:!0,xs:"auto",className:c.image},i.a.createElement(X.a,{fluid:s.childImageSharp.fluid})),i.a.createElement("div",{className:c.bottomArrow},i.a.createElement(f,{onClick:d}))))},q=n("x0xz").logger.getPageLogger("main_page");e.default=function(){return Object(r.useEffect)((function(){q.view()}),[]),i.a.createElement(o.a,null,i.a.createElement(b,null),i.a.createElement(I,null),i.a.createElement(T,null),i.a.createElement(S,null),i.a.createElement(W,null))}},bdgK:function(t,e,n){"use strict";(function(t){n("E9XD");var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,l=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&s()}function c(){a(o)}function s(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);i=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),u=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},f=g(0,0,0,0);function h(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+h(t["border-"+n+"-width"])}),0)}function m(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return f;var r=d(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=h(o)}return e}(r),o=i.left+i.right,a=i.top+i.bottom,c=h(r.width),s=h(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=p(r,"left","right")+o),Math.round(s+a)!==n&&(s-=p(r,"top","bottom")+a)),!function(t){return t===d(t).document.documentElement}(t)){var l=Math.round(c+o)-e,u=Math.round(s+a)-n;1!==Math.abs(l)&&(c-=l),1!==Math.abs(u)&&(s-=u)}return g(i.left,i.top,c,s)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function v(t){return i?b(t)?function(t){var e=t.getBBox();return g(0,0,e.width,e.height)}(t):m(t):f}function g(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=v(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n,r,i,o,a,c,s,l=(r=(n=e).x,i=n.y,o=n.width,a=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(c.prototype),u(s,{x:r,y:i,width:o,height:a,top:i,right:r+o,bottom:a+i,left:r}),s);u(this,{target:t,contentRect:l})},E=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new r,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=l.getInstance(),r=new E(e,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));var x=void 0!==o.ResizeObserver?o.ResizeObserver:O;e.a=x}).call(this,n("yLpj"))},nxyq:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r);e.a=function(t){var e=t.emoji,n=t.name;return i.a.createElement("span",{role:"img","aria-label":n},e)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3c6871540e4e091d7dac.js.map