(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2p7l":function(e,t,r){"use strict";var n=r("R/WZ"),o=r("30+C"),a=r("oa/T"),i=r("ofer"),l=r("q1tI"),c=r.n(l),s=Object(n.a)((function(e){var t,r,n=e.typography,o=e.breakpoints;return{root:{backgroundColor:"transparent",border:"none",boxShadow:"none",borderRadius:0},content:{padding:0},title:(t={fontWeight:n.fontWeightBold,marginBottom:16,fontSize:24},t[o.down("md")]={fontSize:18},t),description:(r={whiteSpace:"pre-line",fontSize:18},r[o.down("md")]={fontSize:14},r)}}));t.a=function(e){var t=e.title,r=e.description,n=s();return c.a.createElement(o.a,{className:n.root},c.a.createElement(a.a,{className:n.content},c.a.createElement(i.a,{variant:"h6",className:n.title},t),c.a.createElement(i.a,{className:n.description},r)))}},"4JlD":function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,l){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?a(i(e),(function(i){var l=encodeURIComponent(n(i))+r;return o(e[i])?a(e[i],(function(e){return l+encodeURIComponent(n(e))})).join(t):l+encodeURIComponent(n(e[i]))})).join(t):l?encodeURIComponent(n(l))+r+encodeURIComponent(n(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},"5PpS":function(e,t,r){var n=r("gurg"),o=r("M5Nb"),a=r("o/O1"),i=r("fgrJ");e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},Bf0q:function(e,t,r){"use strict";var n=r("q1tI"),o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;t.a=function(e){var t=e.children,r=e.defer,a=void 0!==r&&r,i=e.fallback,l=void 0===i?null:i,c=n.useState(!1),s=c[0],p=c[1];return o((function(){a||p(!0)}),[a]),n.useEffect((function(){a&&p(!0)}),[a]),n.createElement(n.Fragment,null,s?t:l)}},GNUg:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("R/WZ"),i=r("hlFM"),l=r("ofer"),c=r("jxKE"),s=r("CvqG"),p=r("ih+B"),m=r("tr08"),d=r("lopY"),u=r("Bf0q"),f=r("pxO4"),g=r.n(f),h=function(e){var t=e.size,r=e.color,n=e.className;return o.a.createElement("svg",{width:t,height:t,className:n},o.a.createElement("circle",{cx:t/2,cy:t/2,r:t/2,fill:r}))},b=r("rePB");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(e){var t=e.x,r=e.y,n=e.radius,o=e.degree/180*Math.PI;return{x:t+n*Math.cos(o),y:r+n*Math.sin(o)}},w=function(e){var t=e.size,r=e.color,a=e.degree,i=e.className,l=Object(n.useMemo)((function(){return function(e){var t=x(y(y({},e),{},{degree:0})),r=x(y({},e)),n=e.x,o=e.y,a=e.radius,i=e.degree,l=i>180?1:0,c=359.9===i;return"M "+t.x+" "+t.y+" A "+a+" "+a+" 0 "+l+" 1 "+r.x+" "+r.y+" L "+n+" "+o+" "+(c?"z":"")}({x:t/2,y:t/2,radius:t/2,degree:a})}),[t,a]);return o.a.createElement("svg",{width:t,height:t,className:i},o.a.createElement("path",{d:l,fill:r}))},E=function(e){var t=e.width,r=e.height,n=e.points,a=e.color,i=e.className,l=n.map((function(e){var n=e[0],o=e[1];return t*n+", "+r*o})).join(" ");return o.a.createElement("svg",{width:t,height:r,className:i},o.a.createElement("polygon",{points:l,fill:a}))},O=Object(a.a)((function(e){var t,r,n,o,a=e.breakpoints;return{svgWrapper:{position:"absolute",top:0,left:0,width:"100%"},redCircle:(t={position:"absolute",top:100,right:"25%"},t[a.down("md")]={top:100,right:"10%"},t),yellowArc:(r={position:"absolute",top:180,right:"20%",transform:"rotate(-16deg)"},r[a.down("md")]={top:350,right:"10%"},r),greenArc:(n={position:"absolute",top:750,left:"5%",transform:"rotate(29.31deg)"},n[a.down("md")]={top:550},n),blueTriangle:(o={position:"absolute",top:1200,right:"40%",transform:"rotate(25.35deg)"},o[a.down("md")]={top:750},o)}})),S=function(e,t){return!0===t?e/3.5:e},j=function(){var e=O(),t=Object(m.a)(),r=Object(d.a)(t.breakpoints.down("md")),a=Object(n.useMemo)((function(){return{redCircle:S(204,r),yellowArc:S(710,r),greenArc:S(350,r),blueTriangle:{width:S(80,r),height:S(100,r)}}}),[r]);return o.a.createElement(u.a,null,o.a.createElement("div",{className:e.svgWrapper},o.a.createElement(g.a,{speed:.5},o.a.createElement(h,{size:a.redCircle,color:"#E73C22",className:e.redCircle})),o.a.createElement(g.a,{speed:3},o.a.createElement(w,{size:a.yellowArc,color:"#F1AD25",className:e.yellowArc,degree:180})),o.a.createElement(g.a,{speed:1.5},o.a.createElement(w,{size:a.greenArc,color:"#00C090",className:e.greenArc,degree:180})),o.a.createElement(g.a,{speed:5},o.a.createElement(E,{width:a.blueTriangle.width,height:a.blueTriangle.height,color:"#2248E6",className:e.blueTriangle,points:[[.8,0],[1,.95],[0,1]]}))))},k=r("TEvF"),A=r.n(k),z=Object(a.a)((function(e){var t,r,n,o,a=e.typography,i=e.breakpoints;return{root:{height:"100vh",backgroundColor:"#F4F6F9",padding:"0 "+(0,e.spacing)(2)+"px"},contentsArea:{zIndex:1},svgArea:{zIndex:0},subtitleWrapper:{backgroundColor:"#C5E5DD",padding:"0 14px"},subtitle:(t={whiteSpace:"nowrap",fontWeight:a.fontWeightBold,fontSize:24,lineHeight:1,transform:"translateY(-8px)"},t[i.down("md")]={fontSize:16},t),title:(r={fontWeight:a.fontWeightBold,fontSize:56,marginTop:22,lineHeight:"81px"},r[i.down("md")]={fontSize:24,marginTop:0},r),description:(n={textAlign:"center",marginTop:32,fontSize:18},n[i.down("md")]={fontSize:14,marginTop:16},n),cta:(o={marginTop:78,fontSize:24,fontWeight:a.fontWeightBold,padding:"8px 50px"},o[i.down("md")]={fontSize:16,marginTop:30},o)}})),N=new Date,W=function(e){var t=e.onClickApply,r=z(),a=Object(n.useMemo)((function(){var e=A()(c.c,N);return e<=0?"D-Day":"D-"+e}),[]);return console.log(a),o.a.createElement(i.a,{className:r.root,display:"flex",justifyContent:"center",alignItems:"center"},o.a.createElement(i.a,{display:"flex",flexDirection:"column",alignItems:"center",className:r.contentsArea},o.a.createElement("div",{className:r.subtitleWrapper},o.a.createElement(s.a,{delay:0},o.a.createElement(l.a,{variant:"h1",className:r.subtitle},"루비콘 실무자 멘토링 프로젝트 ",a))),o.a.createElement(s.a,{delay:0},o.a.createElement(l.a,{variant:"h2",className:r.title},"성장을 통해 나의 가치를 높여보세요.")),o.a.createElement(s.a,{delay:0},o.a.createElement(l.a,{className:r.description},"나름 열심히 공부하고 있는데 내가 맞는 방향으로 가고 있는 걸까요?",o.a.createElement("br",null),"동료들과 건설적인 피드백을 주고받으며 성장하고 싶은데 그런 환경을 찾기가 어려운가요?",o.a.createElement("br",null),"도대체 어떻게 하면 좋은 제품을 만들 수 있을까요?",o.a.createElement("br",null),"이런 질문들에 대한 해답을 스스로 찾을 수 있도록, 루비콘이 도와드릴게요!")),o.a.createElement(p.a,{className:r.cta,color:"primary",variant:"contained",href:"/mentoring/apply-forms/",size:"large",expiry:c.c,showTimer:!1,onClick:t},"지금 바로 멘티로 참여하기")),o.a.createElement("div",{className:r.svgArea},o.a.createElement(j,null)))},T=r("k0/U"),C=r("Ji2X"),B=r("tRbT"),_=r("2p7l"),I=[{title:"✨ EXPERIENCE",description:"프로덕트 아이데이션부터 릴리즈까지 내가 만들고 싶은 프로덕트를 만들어볼 수 있어요. 팀원들과의 토론, 의사 결정 과정에서 커뮤니케이션 스킬뿐만 아니라 일정을 관리하는 역량도 키워봅시다."},{title:"🛰 NETWORKING",description:'멘토링 프로젝트가 종료되어도 루비콘 팀의 커뮤니티인 "루비콘 허브"에서 멤버들과 계속 소통할 수 있어요. 함께 일했던 팀뿐만 아니라 챕터나 길드 같은 다양한 조직에 소속되어 지속적인 활동을 이어나가보세요!'},{title:"🎓 LESSON",description:"멘토는 챕터별 코드/디자인 리뷰, 세미나, 팀별 자료 공유, 1:1 커피챗 등 다양한 방법으로 여러분의 하드 스킬, 소프트 스킬 전반에 대한 역량을 키우기 위해 노력할 거예요."},{title:"💼 CAREER",description:"취업이나 이직을 할 때 뭐부터 준비해야 할지 막막하신가요? 요청에 따라 멘토들의 이직/취업 경험, 면접관으로써의 입장을 들어보고 도움을 구할 수 있어요."}],P=Object(a.a)((function(e){var t,r,n=e.spacing,o=e.typography,a=e.breakpoints;return{root:(t={padding:n(34)+"px 0",zIndex:1},t[a.down("md")]={padding:n(10)+"px 0"},t),title:(r={fontWeight:o.fontWeightBold,marginBottom:82,fontSize:56},r[a.down("md")]={fontSize:24,marginBottom:40},r)}})),R=function(){var e=P();return o.a.createElement("section",{className:e.root},o.a.createElement(C.a,null,o.a.createElement(l.a,{component:"h2",className:e.title},"루비콘 팀과 함께 경험해보세요!"),o.a.createElement(B.a,{container:!0,spacing:4},I.map((function(e,t){var r=e.title,n=e.description;return o.a.createElement(B.a,{item:!0,xs:12,sm:6,md:3,key:t},o.a.createElement(s.a,null,o.a.createElement(_.a,{key:t,title:r,description:n})))})))))},M=r("wb2y"),L=r("nxyq"),D=[{title:"팀별 아이템 선정 및 기획",startWeek:1,endWeek:3},{title:"디자인 및 개발 진행",startWeek:4,endWeek:6},{title:"프로젝트 중간 점검",startWeek:7,endWeek:9},{title:"프로젝트 릴리즈 및 최종 결과 공유",startWeek:10,endWeek:12}],F=Object(a.a)((function(e){var t,r=e.typography,n=e.breakpoints,o=e.spacing;return{title:{fontWeight:r.fontWeightBold,marginBottom:16,fontSize:18},wholeTimeline:{borderRadius:8,backgroundColor:"#00C090",color:"#ffffff",textAlign:"center",padding:"12px 0",fontWeight:r.fontWeightBold,fontSize:16},divider:{borderBottom:"1px dashed #000000",margin:"18px 0 12px",height:0},weekDescription:{fontSize:13,fontWeight:r.fontWeightBold,color:"#505050",marginBottom:10},weekTitle:(t={fontWeight:r.fontWeightBold,color:"#505050"},t[n.down("md")]={fontSize:16,marginBottom:o(2)},t)}})),K=function(){var e=F();return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(l.a,{className:e.title},"Team Activities"),o.a.createElement("div",{className:e.wholeTimeline},o.a.createElement(L.a,{emoji:"✨",name:"twinkle"})," Toy Project ",o.a.createElement(L.a,{emoji:"✨",name:"twinkle"}))),o.a.createElement(M.a,{className:e.divider}),o.a.createElement(B.a,{container:!0},D.map((function(t){var r=t.title,n=t.startWeek,a=t.endWeek;return o.a.createElement(B.a,{item:!0,xs:12,md:3,key:r},o.a.createElement(s.a,null,o.a.createElement(l.a,{className:e.weekDescription},"week ",n," - ",a),o.a.createElement(l.a,{className:e.weekTitle},r)))}))))},Y=[{title:"MVP 개념 이해하기",color:"#B9BEC4"},{title:"아름다운 커뮤니케이션 스킬에 관하여",color:"#8D9098"},{title:"정확한 일정 산출 - 에스티메이션과 벨로시티 측정하기\b",color:"#96A5B2"},{title:"기획할 때 너무 많은 시간을 쓰지마라. 어차피 뇌피셜이다.",color:"#989DA2"},{title:"Lightening Talk...",color:"#B9BEC5"}],q=Object(a.a)((function(e){var t,r,n=e.typography,o=e.breakpoints;return{root:(t={marginTop:52},t[o.down("md")]={marginTop:24},t),title:{fontWeight:n.fontWeightBold,marginBottom:16,fontSize:18},sessionList:{marginLeft:-12,overflow:"hidden"},sessionItem:{flexGrow:1,marginBottom:18,marginLeft:12},session:(r={color:"#ffffff",padding:"12px 16px",borderRadius:8,whiteSpace:"nowrap",textAlign:"center",fontWeight:n.fontWeightBold},r[o.down("md")]={fontSize:14,padding:"10px 8px"},r[o.down("xs")]={fontSize:12},r)}})),H=function(){var e=q();return o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{className:e.title},"Mentoring Sessions"),o.a.createElement(i.a,{display:"flex",flexWrap:"wrap",className:e.sessionList},Y.map((function(t){var r=t.title,n=t.color;return o.a.createElement(s.a,{key:r,className:e.sessionItem},o.a.createElement(l.a,{className:e.session,style:{backgroundColor:n}},r))}))))},X=Object(a.a)((function(e){var t,r,n,o=e.spacing,a=e.typography,i=e.breakpoints;return{title:(t={fontWeight:a.fontWeightBold,textAlign:"center",marginBottom:12},t[i.down("md")]={fontSize:24},t),description:(r={marginBottom:o(5),textAlign:"center",fontSize:18},r[i.down("md")]={marginBottom:o(4),fontSize:16},r),curriculumWrapper:(n={padding:"88px 0 115px",backgroundColor:"#F4F6F9"},n[i.down("md")]={padding:o(5)+"px 0"},n)}})),U=function(){var e=X();return o.a.createElement("section",null,o.a.createElement(C.a,null,o.a.createElement(l.a,{variant:"h4",component:"h2",className:e.title},"멘토링 프로젝트 커리큘럼"),o.a.createElement(l.a,{className:e.description},"루비콘 멘토링 프로젝트는 총 12주동안 진행되며 세부 사항은 변경될 수 있습니다.",o.a.createElement("br",null),"참여할 멘티들이 모두 정해지면 멘토링 시작 일정을 조율하는 시간이 있으니 너무 고민하지마세요.",o.a.createElement("br",null),"또한 모든 멘토링 과정은 무료로 진행됩니다.")),o.a.createElement(i.a,{className:e.curriculumWrapper,display:"flex",flexDirection:"column"},o.a.createElement(C.a,null,o.a.createElement(K,null),o.a.createElement(H,null))))},G=r("TxQ5"),J=r("Kou7"),Q=Object(a.a)((function(e){var t,r,n,o,a,i=e.palette,l=e.spacing,c=e.typography,s=e.breakpoints;return{root:{position:"relative"},info:(t={marginTop:l(3),textAlign:"center"},t[s.down("md")]={marginTop:l(1)},t),title:(r={fontWeight:c.fontWeightBold,color:"#6a6a6a",fontSize:24,marginBottom:6},r[s.down("md")]={fontSize:18,marginBottom:0},r),role:(n={fontWeight:c.fontWeightBold,marginBottom:4},n[s.down("md")]={fontSize:14},n),company:(o={},o[s.down("md")]={fontSize:12},o),links:(a={margin:l(2)+"px 0 0 0",padding:0,display:"flex",justifyContent:"center"},a[s.down("md")]={marginTop:l(1)},a),linkIcon:{listStyle:"none",margin:"0 "+l(1)+"px","& i":{color:i.text.secondary,transition:"transform 0.2s ease-in-out, opacity 0.2s ease-in-out","&:hover":{transform:"translate(0, -5px)",opacity:.8}}}}})),Z=function(e){var t,r,a,i=e.member,s=e.backgroundColor,p=void 0===s?"transparent":s,m=i.profileImg,d=Object(n.useState)(0),u=d[0],f=d[1],g=Object(n.useCallback)((function(e){return null!=e&&f(e.clientWidth),{current:e}}),[]),h=Object(n.useMemo)((function(){return Object.entries(i.social).filter((function(e){var t=e[1];return Boolean(t)}))}),[i.social]),b=Q();return o.a.createElement("div",{className:b.root},o.a.createElement("div",{ref:g},o.a.createElement(J.a,{size:u,imageSrc:null!==(t=null===(r=m.childImageSharp)||void 0===r||null===(a=r.fluid)||void 0===a?void 0:a.src)&&void 0!==t?t:"",backgroundColor:p})),o.a.createElement("div",{className:b.info},o.a.createElement(l.a,{display:"block",className:b.title},i.name.en),o.a.createElement(l.a,{display:"block",className:b.role},i.role),i.company&&o.a.createElement(l.a,{className:b.company},i.company)),o.a.createElement("div",null,o.a.createElement("ul",{className:b.links},h.length>0?h.map((function(e){var t=e[0],r=e[1];return o.a.createElement("li",{key:t,className:b.linkIcon},o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:""+c.e[t]})))})):o.a.createElement("li",{className:b.linkIcon}))))},V=Object(a.a)((function(e){var t,r,n,o,a=e.spacing,i=e.typography,l=e.breakpoints;return{root:(t={padding:a(15)+"px 0"},t[l.down("md")]={padding:a(10)+"px 0"},t),title:(r={fontWeight:i.fontWeightBold,textAlign:"center"},r[l.down("md")]={fontSize:20,marginBottom:a(1)},r),description:(n={marginBottom:a(10),textAlign:"center",fontSize:18},n[l.down("md")]={fontSize:16,marginBottom:a(4)},n),grid:(o={width:"20%"},o[l.down("sm")]={width:"50%"},o)}})),$=function(){var e=V(),t=Object(G.a)().filter((function(e){return["Evan","Daniel","Ryan","Yurim","Youngjin"].includes(e.id)}));return o.a.createElement("section",{className:e.root},o.a.createElement(C.a,null,o.a.createElement(l.a,{variant:"h4",component:"h2",className:e.title},"멘토링 프로젝트를 함께할 멘토들이에요"),o.a.createElement(l.a,{className:e.description},"멘토들은 각자 1개의 팀을 맡아서 3개월 동안 여러분을 도와줄 거예요. ",o.a.createElement(L.a,{emoji:"🙌",name:"hi"}),o.a.createElement("br",null),"프로젝트에 참여하는 모든 멘티는 다른 팀의 멘토나 멘티들과도 자유롭게 소통할 수 있으니 ",o.a.createElement("br",null),"멘토의 포지션이 내 포지션과 다르더라도 걱정 마세요."),o.a.createElement(B.a,{container:!0},t.map((function(t){return o.a.createElement(B.a,{item:!0,key:t.id,xs:6,sm:4,md:"auto",className:e.grid},o.a.createElement(s.a,null,o.a.createElement(Z,{member:t,backgroundColor:"#FCD1CA"})))})))))},ee=r("bUFH"),te=Object(a.a)((function(e){var t,r,n,o,a=e.spacing,i=e.typography,l=e.breakpoints,c=e.palette;return{root:(t={padding:a(15)+"px 0"},t[l.down("md")]={padding:a(5)+"px 0"},t),logo:{width:74},title:(r={fontWeight:i.fontWeightBold,textAlign:"center",fontSize:56,marginTop:44,marginBottom:14},r[l.down("md")]={fontSize:30,marginTop:30},r),description:(n={textAlign:"center",marginBottom:54,fontSize:18},n[l.down("md")]={fontSize:16},n),cta:(o={fontSize:24,fontWeight:i.fontWeightBold,padding:"8px 50px"},o[l.down("md")]={fontSize:16},o),mailLink:{color:c.primary.main}}})),re=function(e){var t=e.onClickApply,r=te(),n=Object(ee.a)(!0);return o.a.createElement("section",{className:r.root},o.a.createElement(C.a,null,o.a.createElement(i.a,{display:"flex",flexDirection:"column",alignItems:"center"},o.a.createElement("img",{src:n,alt:"루비콘 로고",className:r.logo})),o.a.createElement(l.a,{variant:"h4",component:"h2",className:r.title},"지금 바로 참여하세요!"),o.a.createElement(l.a,{className:r.description},"루비콘은 12주 동안의 프로젝트를 완수할 수 있는 최소한의 책임감을 가진 멘티와 함께하기를,",o.a.createElement("br",null),"모든 팀원에게 루비콘 멘토링이 열정있는 사람들과의 좋은 기억으로 남기를 바랍니다.",o.a.createElement("br",null),"기타 문의사항이 있다면"," ",o.a.createElement("a",{className:r.mailLink,href:"mailto:lubycon@gmail.com",target:"_blank",rel:"noreferrer"},"lubycon@gmail.com"),"으로 보내주세요!"),o.a.createElement("div",null,o.a.createElement(p.a,{className:r.cta,color:"primary",variant:"contained",href:"/mentoring/apply-forms/",size:"large",expiry:c.c,onClick:t},"지금 바로 멘티로 참여하기"))))},ne=r("jWrc"),oe=r("s4NR"),ae=r("Wbzz"),ie=r("vT/v"),le=Object(ne.a)("mentoring_project_intro_page");t.default=function(){var e=Object(ae.useStaticQuery)("1801685982").thumbnail;return Object(n.useEffect)((function(){le.view()}),[]),Object(n.useEffect)((function(){var e,t,r=document.referrer,n=null!==(e=location.search)&&void 0!==e?e:"",o=Object(oe.parse)(n.replace("?","")).utm_source;le.impression("mentoring_project_intro_referrer",{referrer:r,utmSource:null!==(t=Array.isArray(o)?o.join(","):o)&&void 0!==t?t:"unknown"})}),[]),o.a.createElement(T.a,{pageName:"루비콘 멘토링 프로젝트"},o.a.createElement(ie.a,{title:"루비콘 멘토링 프로젝트",description:"우리는 단순히 제품을 개발하는 것이 아닌, 치열하게 문제를 정의하고 해결하는 것에 집중합니다.",image:e.childImageSharp.fluid.src}),o.a.createElement(W,{onClickApply:function(){return le.click("apply_button",{position:"intro_section"})}}),o.a.createElement(R,null),o.a.createElement(U,null),o.a.createElement($,null),o.a.createElement(re,{onClickApply:function(){return le.click("apply_button",{position:"bottom_section"})}}))}},HbP6:function(e,t,r){(function(r){var n,o,a;"undefined"!=typeof window&&window,o=[],void 0===(a="function"==typeof(n=function(){return function e(t,r){"use strict";var n=Object.create(e.prototype),o=0,a=0,i=0,l=0,c=[],s=!0,p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},m=null,d=!1;try{var u=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(k){}var f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,g=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var r in t)if(void 0!==e.style[t[r]+"Transform"])return t[r]+"Transform"}return"transform"}();n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},r&&Object.keys(r).forEach((function(e){n.options[e]=r[e]})),r&&r.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,r=!0;if(n.options.breakpoints.forEach((function(n){"number"!=typeof n&&(r=!1),null!==e&&n<e&&(t=!1),e=n})),t&&r)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax");var h="string"==typeof t?document.querySelectorAll(t):[t];if(h.length>0){if(n.elems=h,n.options.wrapper&&!n.options.wrapper.nodeType){var b=document.querySelector(n.options.wrapper);if(!b)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=b}var v,y=function e(){for(var t=0;t<c.length;t++)n.elems[t].style.cssText=c[t].style;var r,o;c=[],a=window.innerHeight,l=window.innerWidth,r=l,o=n.options.breakpoints,v=r<o[0]?"xs":r>=o[0]&&r<o[1]?"sm":r>=o[1]&&r<o[2]?"md":"lg",w(),function(){for(var e=0;e<n.elems.length;e++){var t=x(n.elems[e]);c.push(t)}}(),j(),s&&(window.addEventListener("resize",e),s=!1,S())},x=function(e){var t,r=e.getAttribute("data-rellax-percentage"),o=e.getAttribute("data-rellax-speed"),i=e.getAttribute("data-rellax-xs-speed"),c=e.getAttribute("data-rellax-mobile-speed"),s=e.getAttribute("data-rellax-tablet-speed"),p=e.getAttribute("data-rellax-desktop-speed"),m=e.getAttribute("data-rellax-vertical-speed"),d=e.getAttribute("data-rellax-horizontal-speed"),u=e.getAttribute("data-rellax-vertical-scroll-axis"),f=e.getAttribute("data-rellax-horizontal-scroll-axis"),g=e.getAttribute("data-rellax-zindex")||0,h=e.getAttribute("data-rellax-min"),b=e.getAttribute("data-rellax-max"),y=e.getAttribute("data-rellax-min-x"),x=e.getAttribute("data-rellax-max-x"),w=e.getAttribute("data-rellax-min-y"),O=e.getAttribute("data-rellax-max-y"),S=!0;i||c||s||p?t={xs:i,sm:c,md:s,lg:p}:S=!1;var j=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(j=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var k=n.options.vertical&&(r||n.options.center)?j:0,A=n.options.horizontal&&(r||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,z=k+e.getBoundingClientRect().top,N=e.clientHeight||e.offsetHeight||e.scrollHeight,W=A+e.getBoundingClientRect().left,T=e.clientWidth||e.offsetWidth||e.scrollWidth,C=r||(k-z+a)/(N+a),B=r||(A-W+l)/(T+l);n.options.center&&(B=.5,C=.5);var _=S&&null!==t[v]?Number(t[v]):o||n.options.speed,I=m||n.options.verticalSpeed,P=d||n.options.horizontalSpeed,R=u||n.options.verticalScrollAxis,M=f||n.options.horizontalScrollAxis,L=E(B,C,_,I,P),D=e.style.cssText,F="",K=/transform\s*:/i.exec(D);if(K){var Y=K.index,q=D.slice(Y),H=q.indexOf(";");F=H?" "+q.slice(11,H).replace(/\s/g,""):" "+q.slice(11).replace(/\s/g,"")}return{baseX:L.x,baseY:L.y,top:z,left:W,height:N,width:T,speed:_,verticalSpeed:I,horizontalSpeed:P,verticalScrollAxis:R,horizontalScrollAxis:M,style:D,transform:F,zindex:g,min:h,max:b,minX:y,maxX:x,minY:w,maxY:O}},w=function(){var e=o,t=i;if(o=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,i=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var r=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;o=r-n.options.wrapper.offsetTop}return!(e==o||!n.options.vertical)||!(t==i||!n.options.horizontal)},E=function(e,t,r,o,a){var i={},l=(a||r)*(100*(1-e)),c=(o||r)*(100*(1-t));return i.x=n.options.round?Math.round(l):Math.round(100*l)/100,i.y=n.options.round?Math.round(c):Math.round(100*c)/100,i},O=function e(){window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",e),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",e),m=p(S)},S=function e(){w()&&!1===s?(j(),m=p(e)):(m=null,window.addEventListener("resize",O),window.addEventListener("orientationchange",O),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",O,!!d&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",O,!!d&&{passive:!0}))},j=function(){for(var e,t=0;t<n.elems.length;t++){var r=c[t].verticalScrollAxis.toLowerCase(),s=c[t].horizontalScrollAxis.toLowerCase(),p=-1!=r.indexOf("x")?o:0,m=-1!=r.indexOf("y")?o:0,d=-1!=s.indexOf("x")?i:0,u=(m+(-1!=s.indexOf("y")?i:0)-c[t].top+a)/(c[t].height+a),f=(p+d-c[t].left+l)/(c[t].width+l),h=(e=E(f,u,c[t].speed,c[t].verticalSpeed,c[t].horizontalSpeed)).y-c[t].baseY,b=e.x-c[t].baseX;null!==c[t].min&&(n.options.vertical&&!n.options.horizontal&&(h=h<=c[t].min?c[t].min:h),n.options.horizontal&&!n.options.vertical&&(b=b<=c[t].min?c[t].min:b)),null!=c[t].minY&&(h=h<=c[t].minY?c[t].minY:h),null!=c[t].minX&&(b=b<=c[t].minX?c[t].minX:b),null!==c[t].max&&(n.options.vertical&&!n.options.horizontal&&(h=h>=c[t].max?c[t].max:h),n.options.horizontal&&!n.options.vertical&&(b=b>=c[t].max?c[t].max:b)),null!=c[t].maxY&&(h=h>=c[t].maxY?c[t].maxY:h),null!=c[t].maxX&&(b=b>=c[t].maxX?c[t].maxX:b);var v=c[t].zindex,y="translate3d("+(n.options.horizontal?b:"0")+"px,"+(n.options.vertical?h:"0")+"px,"+v+"px) "+c[t].transform;n.elems[t].style[g]=y}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=c[e].style;s||(window.removeEventListener("resize",y),s=!0),f(m),m=null},y(),n.refresh=y,n}console.warn("Rellax: The elements you're trying to select don't exist.")}})?n.apply(t,o):n)||(e.exports=a)}).call(this,r("yLpj"))},IDKB:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},M5Nb:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},Q98u:function(e,t,r){"use strict";var n=r("5PpS"),o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&o(t,e,r);return a(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(r("q1tI")),p=c(r("HbP6"));t.default=function(e){var t=e.children,r=e.className,o=e.zIndex,a=e.speed,i=e.mobile,c=e.tablet,m=e.desktop,d=e.percentage,u=e.xs,f=e.style,g=l(e,["children","className","zIndex","speed","mobile","tablet","desktop","percentage","xs","style"]),h=s.useState(null),b=n(h,2),v=b[0],y=b[1],x=s.useRef(null);return s.useEffect((function(){return x.current&&y(new p.default(x.current,g)),function(){v&&v.destroy()}}),[x]),s.default.createElement("div",{ref:x,"data-rellax-speed":a&&a.toString(),"data-rellax-xs-speed":u&&u.toString(),"data-rellax-mobile-speed":i&&i.toString(),"data-rellax-tablet-speed":c&&c.toString(),"data-rellax-desktop-speed":m&&m.toString(),"data-rellax-zindex":o&&o.toString(),"data-rellax-percentage":d&&d.toString(),className:r,style:f},t)}},fgrJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},gurg:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},hlFM:function(e,t,r){"use strict";var n=r("KQm4"),o=r("wx14"),a=(r("17x9"),r("bv9d"));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(o.a)({},Object(a.a)(r,e(Object(o.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(n.a)(e.filterProps)),t};r("E9XD");var l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?Object(a.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},c=r("rePB"),s=r("LybE");function p(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var m=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=p(e.theme,o)||{};return Object(s.a)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=p(i,e)||e,a&&(t=a(t))),!1===n?t:Object(c.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function d(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var u=l(m({prop:"border",themeKey:"borders",transform:d}),m({prop:"borderTop",themeKey:"borders",transform:d}),m({prop:"borderRight",themeKey:"borders",transform:d}),m({prop:"borderBottom",themeKey:"borders",transform:d}),m({prop:"borderLeft",themeKey:"borders",transform:d}),m({prop:"borderColor",themeKey:"palette"}),m({prop:"borderRadius",themeKey:"shape"})),f=l(m({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),m({prop:"display"}),m({prop:"overflow"}),m({prop:"textOverflow"}),m({prop:"visibility"}),m({prop:"whiteSpace"})),g=l(m({prop:"flexBasis"}),m({prop:"flexDirection"}),m({prop:"flexWrap"}),m({prop:"justifyContent"}),m({prop:"alignItems"}),m({prop:"alignContent"}),m({prop:"order"}),m({prop:"flex"}),m({prop:"flexGrow"}),m({prop:"flexShrink"}),m({prop:"alignSelf"}),m({prop:"justifyItems"}),m({prop:"justifySelf"})),h=l(m({prop:"gridGap"}),m({prop:"gridColumnGap"}),m({prop:"gridRowGap"}),m({prop:"gridColumn"}),m({prop:"gridRow"}),m({prop:"gridAutoFlow"}),m({prop:"gridAutoColumns"}),m({prop:"gridAutoRows"}),m({prop:"gridTemplateColumns"}),m({prop:"gridTemplateRows"}),m({prop:"gridTemplateAreas"}),m({prop:"gridArea"})),b=l(m({prop:"position"}),m({prop:"zIndex",themeKey:"zIndex"}),m({prop:"top"}),m({prop:"right"}),m({prop:"bottom"}),m({prop:"left"})),v=l(m({prop:"color",themeKey:"palette"}),m({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=m({prop:"boxShadow",themeKey:"shadows"});function x(e){return e<=1?"".concat(100*e,"%"):e}var w=m({prop:"width",transform:x}),E=m({prop:"maxWidth",transform:x}),O=m({prop:"minWidth",transform:x}),S=m({prop:"height",transform:x}),j=m({prop:"maxHeight",transform:x}),k=m({prop:"minHeight",transform:x}),A=(m({prop:"size",cssProperty:"width",transform:x}),m({prop:"size",cssProperty:"height",transform:x}),l(w,E,O,S,j,k,m({prop:"boxSizing"}))),z=r("+Hmc"),N=l(m({prop:"fontFamily",themeKey:"typography"}),m({prop:"fontSize",themeKey:"typography"}),m({prop:"fontStyle",themeKey:"typography"}),m({prop:"fontWeight",themeKey:"typography"}),m({prop:"letterSpacing"}),m({prop:"lineHeight"}),m({prop:"textAlign"})),W=r("/P46"),T=r("cNwE"),C=function(e){var t=Object(W.a)(e);return function(e,r){return t(e,Object(o.a)({defaultTheme:T.a},r))}},B=i(l(u,f,g,h,b,v,y,A,z.b,N)),_=C("div")(B,{name:"MuiBox"});t.a=_},kd2E:function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,a){t=t||"&",r=r||"=";var i={};if("string"!=typeof e||0===e.length)return i;var l=/\+/g;e=e.split(t);var c=1e3;a&&"number"==typeof a.maxKeys&&(c=a.maxKeys);var s=e.length;c>0&&s>c&&(s=c);for(var p=0;p<s;++p){var m,d,u,f,g=e[p].replace(l,"%20"),h=g.indexOf(r);h>=0?(m=g.substr(0,h),d=g.substr(h+1)):(m=g,d=""),u=decodeURIComponent(m),f=decodeURIComponent(d),n(i,u)?o(i[u])?i[u].push(f):i[u]=[i[u],f]:i[u]=f}return i};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"o/O1":function(e,t,r){var n=r("IDKB");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"oa/T":function(e,t,r){"use strict";var n=r("wx14"),o=r("Ff2n"),a=r("q1tI"),i=r("iuhU"),l=r("H2TA"),c=a.forwardRef((function(e,t){var r=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,p=Object(o.a)(e,["classes","className","component"]);return a.createElement(s,Object(n.a)({className:Object(i.a)(r.root,l),ref:t},p))}));t.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},pxO4:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("Q98u")),a=r("Q98u");Object.defineProperty(t,"RellaxWrapper",{enumerable:!0,get:function(){return a.default}}),t.default=o.default},s4NR:function(e,t,r){"use strict";t.decode=t.parse=r("kd2E"),t.encode=t.stringify=r("4JlD")},wb2y:function(e,t,r){"use strict";var n=r("wx14"),o=r("Ff2n"),a=r("q1tI"),i=r("iuhU"),l=r("H2TA"),c=r("ye/S"),s=a.forwardRef((function(e,t){var r=e.absolute,l=void 0!==r&&r,c=e.classes,s=e.className,p=e.component,m=void 0===p?"hr":p,d=e.flexItem,u=void 0!==d&&d,f=e.light,g=void 0!==f&&f,h=e.orientation,b=void 0===h?"horizontal":h,v=e.role,y=void 0===v?"hr"!==m?"separator":void 0:v,x=e.variant,w=void 0===x?"fullWidth":x,E=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(m,Object(n.a)({className:Object(i.a)(c.root,s,"fullWidth"!==w&&c[w],l&&c.absolute,u&&c.flexItem,g&&c.light,"vertical"===b&&c.vertical),role:y,ref:t},E))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}}]);
//# sourceMappingURL=component---src-pages-mentoring-intro-tsx-1f2e40d8f4dcb248d872.js.map