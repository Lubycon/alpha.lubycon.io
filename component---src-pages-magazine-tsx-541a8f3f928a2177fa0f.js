(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+g+W":function(e,t,r){var o=r("q0Rj"),n=r("s9h0");function a(t,r,i){return n()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},"0j+7":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},"4TKZ":function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"5Xb1":function(e,t,r){"use strict";r.r(t);var o=r("q1tI"),n=r.n(o),a=r("k0/U"),i=r("R/WZ"),l=r("ZBNC"),c=r("Ji2X"),s=r("tRbT"),p=r("Z3vd"),u=r("A2+M"),f=Object(i.a)((function(e){return Object(l.a)({root:{"& > h2, & > h3, & > h4, & > h5":{marginTop:"1.5rem",marginBottom:"1rem"},"& h2":{fontSize:"2rem",fontWeight:"bold"},"& h3":{fontSize:"1.5rem",fontWeight:"bold"},"& p":{fontSize:"1rem",lineHeight:1.8},"& code.language-text":{color:"#ff3860",backgroundColor:"#f9f1f3",padding:"1px 4px",borderRadius:"4px",fontSize:"0.85rem","&::before, &::after":{content:'""'}},"& blockquote":{position:"relative",padding:16,fontStyle:"italic",backgroundColor:"#eeeeee","&::before":{position:"absolute",top:0,left:0,width:5,height:"100%",content:'""',backgroundColor:"#dddddd"}},"& span.gatsby-resp-image-wrapper":{borderRadius:"8px",overflow:"hidden",margin:"2.5rem 0 1rem","& + small":{display:"block",color:e.palette.text.secondary,marginBottom:"2.5rem"}},"& small":{fontSize:"0.8rem"},"& p > a":{color:e.palette.primary.main,textDecoration:"none","&:active":{color:e.palette.primary.main},"&:hover":{textDecoration:"underline"}}}})})),d=function(e){var t=e.contents,r=f();return n.a.createElement("div",{className:r.root},n.a.createElement(u.MDXRenderer,null,t))},m=Object(o.memo)(d),x=r("wEEd"),g=r("vT/v"),v=r("x0xz"),b=Object(i.a)((function(e){return Object(l.a)({root:{maxWidth:800,margin:"3rem auto"},titleWrapper:{borderBottom:"1px solid "+e.palette.action.hover,marginBottom:"2rem",paddingBottom:"2rem"},title:{fontWeight:700,color:e.palette.text.primary,marginBottom:"1rem"},date:{fontSize:"1rem",margin:0,fontWeight:300},footer:{marginTop:"5rem"},leftIcon:{marginRight:"1rem"},rightIcon:{marginLeft:"1rem"}})})),y=v.logger.getPageLogger("magazine_page");t.default=function(e){var t,r,i,l,u,f,d,v,h,O=e.data,j=e.pageContext,E=b(),w=Object(x.c)({from:{opacity:0,transform:"translateY(-30px)"},to:{opacity:1,transform:"translateY(0)"}}),_=Object(x.c)({from:{opacity:0,transform:"translateY(30px)"},to:{opacity:1,transform:"translateX(0)"},config:{duration:500},delay:400});Object(o.useEffect)((function(){y.view()}),[]);var M=O.mdx;if(!M)return n.a.createElement("div",null,"매거진을 불러오는데 실패했어요");var S=M.frontmatter,R=M.body,B=M.excerpt,I=j.prev,W=j.next;return n.a.createElement(a.a,{pageName:S.title},n.a.createElement(g.a,{title:S.title,description:B,image:null===(t=S.thumbnail)||void 0===t||null===(r=t.childImageSharp)||void 0===r||null===(i=r.fluid)||void 0===i?void 0:i.src}),n.a.createElement(c.a,{"data-type":"markdown",className:E.root},n.a.createElement(s.a,{container:!0},n.a.createElement(s.a,{xs:12,sm:12,md:12,lg:12,item:!0},n.a.createElement(x.a.div,{style:w,className:E.titleWrapper},n.a.createElement("h1",{className:E.title},S.title+(S.draft?" [집필중]":"")),n.a.createElement("p",{className:E.date},S.date)),n.a.createElement(x.a.div,{style:_},n.a.createElement(m,{contents:R})))),n.a.createElement(s.a,{container:!0,className:E.footer,spacing:3,justify:"space-between"},n.a.createElement(s.a,{item:!0},W&&n.a.createElement(p.a,{fullWidth:!0,href:null===(l=W.fields)||void 0===l?void 0:l.path,variant:"outlined"},n.a.createElement("i",{className:"fas fa-angle-left "+E.leftIcon}),null!==(u=null===(f=W.frontmatter)||void 0===f?void 0:f.title)&&void 0!==u?u:"다음 매거진")),n.a.createElement(s.a,{item:!0},I&&n.a.createElement(p.a,{fullWidth:!0,href:null===(d=I.fields)||void 0===d?void 0:d.path,variant:"outlined"},null!==(v=null===(h=I.frontmatter)||void 0===h?void 0:h.title)&&void 0!==v?v:"이전 매거진",n.a.createElement("i",{className:"fas fa-angle-right "+E.rightIcon}))))))}},"A2+M":function(e,t,r){var o=r("X8hv");e.exports={MDXRenderer:o}},IDKB:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},VjHQ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var o=r("+g+W"),n=r("ZGFM"),a=r("0j+7"),i=r("u0WH");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("q1tI"),p=r("7ljp").mdx,u=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,["scope","children"]),l=u(t),f=s.useMemo((function(){if(!r)return null;var e=c({React:s,mdx:p},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return s.createElement(f,c({},a))}},Z5Ud:function(e,t,r){var o=r("IDKB");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},ZGFM:function(e,t,r){var o=r("Z5Ud"),n=r("4TKZ"),a=r("o/O1"),i=r("VjHQ");e.exports=function(e){return o(e)||n(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"o/O1":function(e,t,r){var o=r("IDKB");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},s9h0:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-pages-magazine-tsx-541a8f3f928a2177fa0f.js.map