"use strict";(self.webpackChunklubycon_home=self.webpackChunklubycon_home||[]).push([[691],{2888:function(t,e,n){n.r(e),n.d(e,{default:function(){return tt}});var i=n(7294),r=n(3547),o=n(3366),s=n(7951),a=["size","direction"],c={left:"-45deg",right:"135deg",up:"45deg",down:"-135deg"},u=function(t){var e=t.size,n=void 0===e?40:e,r=t.direction,u=void 0===r?"down":r,l=(0,o.Z)(t,a);return i.createElement(s.Z,Object.assign({component:"a",sx:{display:"inline-block",width:n+"px",height:n+"px",textIndent:"-9999px",borderTop:2,borderLeft:2,borderColor:"InfoText",transition:"all 0.3s ease-in-out",color:"transparent",textDecoration:"none",transform:"rotate("+c[u]+")",cursor:"pointer","&:hover":{borderColor:"palette.text.primary",borderWidth:5},"&::before":{display:"block",height:"200%",width:"200%",marginLeft:"50%",marginTop:"-50%",content:'""',transform:"rotate(45deg)"}}},l))},l=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,i){return t[0]===e&&(n=i,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(e,n){var i=t(this.__entries__,e);~i?this.__entries__[i][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,i=t(n,e);~i&&n.splice(i,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];t.call(e,r[1],r[0])}},e}()}(),h="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,d=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),f="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(d):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var p=["top","right","bottom","left","width","height","size","weight"],m="undefined"!=typeof MutationObserver,v=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,i=!1,r=0;function o(){n&&(n=!1,t()),i&&a()}function s(){f(o)}function a(){var t=Date.now();if(n){if(t-r<2)return;i=!0}else n=!0,i=!1,setTimeout(s,e);r=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){h&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),m?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){h&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;p.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),b=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},g=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||d},_=Z(0,0,0,0);function y(t){return parseFloat(t)||0}function E(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+y(t["border-"+n+"-width"])}),0)}function w(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return _;var i=g(t).getComputedStyle(t),r=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=t["padding-"+r];e[r]=y(o)}return e}(i),o=r.left+r.right,s=r.top+r.bottom,a=y(i.width),c=y(i.height);if("border-box"===i.boxSizing&&(Math.round(a+o)!==e&&(a-=E(i,"left","right")+o),Math.round(c+s)!==n&&(c-=E(i,"top","bottom")+s)),!function(t){return t===g(t).document.documentElement}(t)){var u=Math.round(a+o)-e,l=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(l)&&(c-=l)}return Z(r.left,r.top,a,c)}var x="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof g(t).SVGGraphicsElement}:function(t){return t instanceof g(t).SVGElement&&"function"==typeof t.getBBox};function O(t){return h?x(t)?function(t){var e=t.getBBox();return Z(0,0,e.width,e.height)}(t):w(t):_}function Z(t,e,n,i){return{x:t,y:e,width:n,height:i}}var S=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Z(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=O(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),k=function(t,e){var n,i,r,o,s,a,c,u=(i=(n=e).x,r=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),b(c,{x:i,y:r,width:o,height:s,top:r,right:i+o,bottom:s+r,left:i}),c);b(this,{target:t,contentRect:u})},M=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new l,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new S(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new k(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),A="undefined"!=typeof WeakMap?new WeakMap:new l,T=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=v.getInstance(),i=new M(e,n,this);A.set(this,i)};["observe","unobserve","disconnect"].forEach((function(t){T.prototype[t]=function(){var e;return(e=A.get(this))[t].apply(e,arguments)}}));var z=void 0!==d.ResizeObserver?d.ResizeObserver:T;function R(t,e){var n=(null!=e?e:{}).gutter,r=void 0===n?0:n,o=(0,i.useState)(0),s=o[0],a=o[1],c=(0,i.useCallback)((function(){window.scroll({top:s+r,behavior:"smooth"})}),[r,s]),u=(0,i.useCallback)((function(){if(t.current){var e=t.current,n=e.offsetTop+e.clientHeight;a(n)}}),[t]);return function(t,e){var n=(0,i.useRef)(null),r=(0,i.useRef)(e);(0,i.useEffect)((function(){if(null!==t.current)return n.current=new z((function(t){r.current(t[0].contentRect)})),n.current.observe(t.current),function(){var t;return null===(t=n.current)||void 0===t?void 0:t.disconnect()}}),[t])}(t,u),c}var C=n(4126),B=function(){var t=(0,i.useRef)(null),e=R(t);return i.createElement(s.Z,{ref:t,sx:{position:"relative",height:"100vh"}},i.createElement(s.Z,{sx:{position:"absolute",top:{md:"45%",xs:"30%"},left:"50%",transform:"translate(-50%, -50%)"}},i.createElement(s.Z,{component:C.E.h1,initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.5},sx:{fontStyle:"italic",fontSize:{md:"3.5rem",xs:"2rem"},textAlign:"center",whiteSpace:"nowrap"}},"Growth",i.createElement(s.Z,{component:"span",sx:{color:"secondary.main"}},".")," ","And Share"),i.createElement(s.Z,{component:C.E.h2,initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:.3,duration:.5},sx:{textAlign:"center",fontWeight:200,fontSize:"1.4rem",fontStyle:"italic"}},"This is ",i.createElement("strong",null,"Lubycon"))),i.createElement(s.Z,{sx:{position:"absolute",bottom:"20%",left:"50%",transform:"translateX(-50%)"}},i.createElement(C.E.div,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5}},i.createElement(u,{onClick:e}))))},W=n(6449),j=n(5616),D=n(9308),L=n(4320),I=n(2846),P=n(1004),G=n(3659),H=n(6991),q=[{title:"스터디",image:"https://assets.lubycon.io/illusts/books.png",description:'우리는 관심있는 분야가 있다면 함께 스터디하고 싶은 멤버들을 모아서 자체 스터디를 하고 있어요.\n최근 팀 내에서 가장 핫한 주제는 "나의 성장 뿐 아니라 팀의 성장을 이끌 수 있는 사람이 되는 것"입니다.'},{title:"루비콘 샌드박스",image:"https://assets.lubycon.io/illusts/roadsign.png",description:"우리는 멘토링을 통해 아직 성장의 방향을 잡지 못한 분들을 도와드리고 있어요.\n\n우리가 지금까지 쌓아왔던 모든 경험들이 다른 사람들에게 분명 도움이 될 것이라고 믿거든요."},{title:"커뮤니티",image:"https://assets.lubycon.io/illusts/networking.png",description:"루비콘 팀이 운영하는 커뮤니티인 루비콘 허브는 함께 프로젝트를 진행하는 팀과 같은 직군이 모인 챕터로 구성되어 있어요.\n많은 사람들이 빠른 정보 공유와 투명한 커뮤니케이션을 통해 성장하기를 바라요."},{title:"프로젝트",image:"https://assets.lubycon.io/illusts/laptop.png",description:"루비콘 팀의 프로젝트는 스스로 필요한 제품을 개발하는 것 뿐만 아니라 UI Kit처럼 다른 사람들의 생산성을 높힐 수 있는 제품을 개발하기도 해요."}],F=function(){var t=(0,i.useState)(!1),e=t[0],n=t[1],r=(0,W.Z)().spacing;return i.createElement(s.Z,{component:"section",sx:{padding:{md:r(15)+" 0",xs:r(10)+" 0"},backgroundColor:H.Z[100]}},i.createElement(j.Z,null,i.createElement(G.mU,{onImpressionStart:function(){return n(!0)}},i.createElement(C.E.div,{variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:50}},initial:"hidden",animate:e?"visible":"hidden"},i.createElement(D.Z,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",fontSize:{md:"h4.fontSize",xs:"h6.fontSize"}}},"함께 성장하고 공유하기")),i.createElement(s.Z,{component:C.E.div,variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:50}},initial:"hidden",animate:e?"visible":"hidden",transition:{delay:.3},sx:{marginBottom:5}},i.createElement(D.Z,null,"루비콘 팀의 이니셔티브는 ",i.createElement("strong",null,"성장과 공유"),"에요. 루비콘 팀은 이 이니셔티브를 달성하기 위한 여러가지 활동을 하고 있어요.",i.createElement("br",null))),i.createElement(L.ZP,{container:!0,spacing:2},q.map((function(t,e){var n=t.title,r=t.image,o=t.description;return i.createElement(L.ZP,{key:e,item:!0,xs:12,sm:3},i.createElement(I.Z,null,i.createElement(P.Z,{title:n,image:r,description:o})))}))))))},V=n(78),U=function(){var t=(0,W.Z)().spacing;return i.createElement(s.Z,{sx:{padding:{md:t(15)+" 0",xs:t(10)+" 0"},textAlign:"center"}},i.createElement(j.Z,null,i.createElement(D.Z,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",fontSize:{md:"h4.fontSize",xs:"h6.fontSize"}}},"문의하기"),i.createElement(D.Z,{sx:{marginBottom:6}},"제휴 문의나 루비콘이 진행하고 있는 프로젝트에 대한 문의는 help@lubycon.io로 보내주세요!"),i.createElement(V.Z,{href:"mailto:help@lubycon.io",target:"_blank",variant:"contained",color:"primary",size:"large"},"지금 바로 문의하기")))},K=n(7753),N=n(751),X=n(2526),J=n(2235),Q={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},Y=function(){var t=(0,N.d)("lubycon"),e=(0,i.useState)(!1),n=e[0],r=e[1];return i.createElement(j.Z,{component:"section",sx:{paddingTop:10,paddingBottom:10}},i.createElement(L.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{position:"relative"}},i.createElement(L.ZP,{item:!0,xs:12,sm:!0,sx:{paddingTop:0}},i.createElement(G.mU,{onImpressionStart:function(){return r(!0)}},i.createElement(C.E.div,{variants:Q,initial:"hidden",animate:n?"visible":"hidden"},i.createElement(D.Z,{variant:"h4",component:"h2",gutterBottom:!0,sx:{fontWeight:"bold",fontSize:{md:"h4.fontSize",xs:"h6.fontSize"}}},"안녕하세요. 우리는 루비콘 입니다 ",i.createElement(K.Z,{emoji:"👋",name:"Hi"}))),i.createElement(C.E.div,{variants:Q,initial:"hidden",animate:n?"visible":"hidden",transition:{delay:.3}},i.createElement(D.Z,{sx:{marginBottom:10}},"루비콘은 국내 IT업계에 선한 영향을 만들어내고 싶은 개발자들과 디자이너들이 모인 팀이에요.",i.createElement("br",null),"우리는 지속적으로 새로운 것들에 도전하며 실패하고, 그 과정 속에서 배운 것들을 공유해요. 그리고 이런 공유 활동은 루비콘 팀 뿐만 아니라 팀 외부에서도 이루어지고 있어요.")))),i.createElement(L.ZP,{container:!0,spacing:2},t.map((function(t){return i.createElement(L.ZP,{item:!0,key:t.id,xs:6,sm:3},i.createElement(I.Z,null,i.createElement(X.Z,{member:t,backgroundColor:J.Z[100]})))})))))},$=n(939),tt=function(){return(0,i.useEffect)((function(){$.C3.view()}),[]),i.createElement(r.Z,null,i.createElement(B,null),i.createElement(Y,null),i.createElement(F,null),i.createElement(U,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f0ddf6c8df01ec482a7d.js.map