(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{91850:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(85893),i=t(4942),s=t(60065),l=t(67294),c=t(87049),o=t(72642),a=t(16323),u=t(42440),d=t(30799),h=t(38584);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e){var n=e.pages,t=e.currentPage,p=e.handlePageChange,x=l.useState({top:!1,left:!1,bottom:!1,right:!1}),j=(0,s.Z)(x,2),m=j[0],g=j[1],v=function(e,n){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&g(f(f({},m),{},(0,i.Z)({},e,n)))}};return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsxs)(o.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:v("left",!0),children:[(0,r.jsx)(a.Z,{}),"Table of Contents"]}),(0,r.jsx)(c.ZP,{variant:"temporary",open:m.left,className:"drawer-left temporary",onClose:v("left",!1),ModalProps:{keepMounted:!0},children:(0,r.jsx)("nav",{className:"sidenav",children:(0,r.jsx)(u.Z,{onClick:v("left",!1),onKeyDown:v("left",!1),children:n.map((function(e,n){return(0,r.jsx)(d.ZP,{children:(0,r.jsx)(h.Z,{style:{color:t===n+1?"black":"white",cursor:t===n+1?"default":"pointer"},onClick:function(){return p(event,n+1)},primary:e})},n)}))})})}),(0,r.jsx)(c.ZP,{variant:"permanent",anchor:"left",open:m.left,onClose:v("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",xl:"block"}},children:(0,r.jsx)("nav",{style:{marginTop:"8rem"},className:"sidenav",children:(0,r.jsx)(u.Z,{onClick:v("left",!1),onKeyDown:v("left",!1),children:n.map((function(e,n){return(0,r.jsx)(d.ZP,{children:(0,r.jsx)(h.Z,{style:{color:t===n+1?"black":"white",cursor:t===n+1?"default":"pointer"},onClick:function(){return p(event,n+1)},primary:e})},n)}))})})})]})}},90929:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return C},default:function(){return O}});var r=t(85893),i=t(67294),s=t(5004),l=t(11163),c=t(4942),o=t(41664),a=t(63076);var u=t(91850),d=t(54065),h=t(72642),p=t(60065),f=t(86243),x=(t(4298),t(40333)),j=t(47376),m=t(19536),g=t(19755);function v(e){var n=(0,i.useState)([]),s=n[0],c=(n[1],i.useState(!1)),o=(0,p.Z)(c,2),a=o[0],u=o[1],d=(0,l.useRouter)(),v=e.currentHeader,y=function(){return u(!1)},b=e.content.content,k=e.content.title;(0,i.useEffect)((function(){globalThis.jQuery=g;window.addEventListener("keydown",(function(e){"Escape"===e.key&&y()}))}),[y]);var w=function(e){var n=(0,f.n)(e),t=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type||"h2"===n.type?(t.push([n]),s.push(n)):t[t.length-1].push(n)),e}),[]);return t}(b),Z=function(){var e=t(36340),n=e.Deck,i=e.Slide,s=e.Heading;e.CodePane;return(0,r.jsxs)(n,{style:{height:"100%",width:"100%",backgroundColor:"#fff"},children:[(0,r.jsxs)(i,{children:[(0,r.jsx)(h.Z,{onClick:y,style:{position:"absolute",width:"50px"},children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)(s,{size:1,children:k})]}),w.map((function(e,n){return(0,r.jsxs)(i,{children:[(0,r.jsx)(h.Z,{onClick:y,style:{position:"absolute",width:"50px"},children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)("div",{className:"slides",style:{overflow:"auto",height:"100%"},children:e.map((function(e,n){return"h1"===e.type||"h2"===e.type?(0,r.jsx)(s,{children:e.props.children},n):"CodeEditor"===e.type?void 0:(0,r.jsx)("div",{children:e},n)}))})]},n)}))]})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(h.Z,{className:"brutalist-button",onClick:function(){if("frontpage"===v.className)u(!0);else{var e=v.children[0].props.children.props.children[0],n=s.findIndex((function(n){return n.props.children[0]===e}))+1;d.push("/workshops/".concat(d.query.slug,"/?page=").concat(d.query.page,"&slideIndex=").concat(n),void 0,{shallow:!0,scroll:!1}),u(!0)}},children:[(0,r.jsx)(j.Z,{}),"Presentation Mode"]}),(0,r.jsx)(x.Z,{open:a,onClose:y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsx)(Z,{})})]})})}var y=t(54776),b=t(29163),k=t(96214),w=t(93619);function Z(e){var n=(0,i.useState)(!1),t=n[0],s=n[1],l=(0,i.useState)(""),c=l[0],o=l[1];(0,i.useEffect)((function(){o(window.localStorage.getItem("code")||"")}),[]);var a=function(){s(!t)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{position:"fixed",top:300,right:0,display:t?"none":"block"},children:(0,r.jsx)(h.Z,{onClick:a,style:{backgroundColor:"black"},children:t?(0,r.jsx)(w.Z,{style:{color:"white"}}):(0,r.jsx)(k.Z,{style:{color:"white"}})})}),(0,r.jsx)(y.Z,{direction:"left",in:t,style:{position:"fixed",width:"100%",height:"100%",top:300},mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{onClick:a,style:{backgroundColor:"black"},children:(0,r.jsx)(w.Z,{style:{color:"white"}})}),(0,r.jsx)(b.Z,{minLines:10,onChange:function(e){window.localStorage.setItem("code",e)},defaultCode:c})]})})]})}var N=t(21023),C=!0;function O(e){var n=e.workshops,t=e.guides,p=e.insights,f=e.authors,x=e.uploads,j=(0,l.useRouter)(),m=j.query.slug,g=n.find((function(e){return e.slug===m})),y=g.title,b=g.content,k=function(e,n){var t=e.excerpt,i=e.title,l=e.dependencies||[],u=n.workshops,d=n.guides,h=n.insights,p=n.authors,f=Object.keys(l).map((function(e){var n=l[e];return{title:e,items:Object.keys(n).map((function(e){var t=n[e],r=u.find((function(n){return n.slug===e})),i=h.find((function(n){return n.slug===e})),s=d.find((function(n){return n.slug===e})),l=r||i||s||author||null,o=(0,c.Z)({},e,{title:l.title,excerpt:t.excerpt,required:t.required,recommended:t.recommended,link:l?"/".concat(l.itemPath):"#"});return{title:l.title,allItems:o}}))}})).map((function(e){return(0,r.jsxs)("div",{className:"frontpage-item dependency",children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("ul",{children:e.items.map((function(e){var n=e.allItems[Object.keys(e.allItems)[0]],t=(0,s.Z)(n.excerpt),i=n.required,l=n.recommended,c=i?"required":l?"recommended":"";return(0,r.jsxs)("li",{className:c,children:[(0,r.jsx)(o.default,{href:n.link,children:e.title}),(0,r.jsx)("p",{children:t})]},n)}))})]},e.title)})),x=Object.keys(e).map((function(n){var t=e[n];return"dependencies"===n||"workshops"===n||"insights"===n||"installations"===n||"excerpt"===n||"title"===n||"cover_image"===n||"content"===n||"slug"===n||"path"===n||"itemPath"===n?null:{title:n,items:t}})).filter((function(e){return null!==e})).map((function(e){return(0,r.jsxs)("div",{className:"frontpage-item",children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("ul",{children:e.items&&Object.keys(e.items).map((function(n){var t=e.items[n];if("description"===n){var i=(0,s.Z)(t);return(0,r.jsx)("li",{children:(0,r.jsx)("p",{children:i})},n)}if("authors"===e.title){var l=p.find((function(e){return e.title===t})),c="/authors/".concat(l.slug),a=n.charAt(0).toUpperCase()+n.slice(1);return(0,r.jsxs)("li",{className:"authors-list",children:[(0,r.jsx)(o.default,{href:c,children:t}),(0,r.jsx)("li",{children:a})]},n)}if("editors"===e.title){var u=p.find((function(e){return e.title===t})),d="/authors/".concat(u.slug),h=n.charAt(0).toUpperCase()+n.slice(1);return(0,r.jsxs)("li",{className:"authors-list",children:[(0,r.jsx)(o.default,{href:d,children:t}),(0,r.jsx)("li",{children:h})]},n)}if("string"===typeof t){var f=(0,s.Z)(t);return(0,r.jsx)("li",{className:"frontpage-list",children:f},n)}if("object"===typeof t){if(t.link){var x=(0,s.Z)(t.excerpt);return(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:t.link,children:n}),(0,r.jsx)("p",{children:x})]},n)}if(t.excerpt){var j=(0,s.Z)(t.excerpt);return(0,r.jsxs)("li",{className:"authors-list",children:[n,(0,r.jsx)("p",{children:j})]},n)}return(0,r.jsx)("div",{children:Object.keys(t).map((function(e){var n=(0,s.Z)(t[e]);return(0,r.jsx)("p",{className:"frontpage-list",children:n},e)}))})}}))})]},e.title)})),j=0===x.length&&0===f.length;return(0,r.jsxs)("div",{className:"frontpage",children:[(0,r.jsx)("h1",{children:i}),t&&(0,r.jsx)("div",{className:"excerpt",children:(0,r.jsx)("p",{children:t})}),!j&&(0,r.jsxs)(a.ZP,{columns:{sm:1,md:2},spacing:2,children:[f,x]})]})}(g,{workshops:n,guides:t,insights:p,authors:f,uploads:x}),C=function(e){var n=(0,s.Z)(e,x),t=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?t.push([n]):t[t.length-1].push(n)),e}),[]);return t.unshift(k),t.map((function(e,n){return void 0!=e.props&&e.props.className.includes("frontpage")?k:(0,r.jsx)("div",{className:"page-content",children:e.map((function(e,n){return(0,r.jsx)(i.Fragment,{children:e},n)}))},n)}))},O=(0,i.useState)(1),P=O[0],S=O[1],E=(0,i.useState)(C(b)),_=E[0],I=E[1],q=(0,i.useState)([]),D=q[0],T=q[1],F=(0,i.useState)([]),H=F[0],L=F[1],M=(0,i.useState)(null),R=M[0],U=M[1];(0,i.useEffect)((function(){var e=_.map((function(e,n){return 0===n?"Introduction":e.props.children[0].props.children.props.children[0]}));L(e)}),[P]),(0,i.useEffect)((function(){I(C(b)),S(1),T(k);var e=new URLSearchParams(window.location.search),n=Number(e.get("page"));n&&(S(n),T(_[n-1]))}),[m]),(0,i.useEffect)((function(){D&&void 0!=D&&U(D.props)}),[D]);var z=function(e){return(0,r.jsxs)("div",{className:"pagination",children:[(0,r.jsxs)(h.Z,{className:"previous-page",onClick:function(){return A(event,Number(e)-1)},disabled:1===e,children:[(0,r.jsx)(N.Z,{}),"Previous"]}),(0,r.jsx)(u.Z,{pages:H,currentPage:e,handlePageChange:A}),(0,r.jsx)(v,{currentHeader:R,content:g,title:y}),(0,r.jsxs)(h.Z,{className:"next-page",onClick:function(){return A(event,Number(e)+1)},disabled:e===_.length,children:["Next",(0,r.jsx)(w.Z,{})]})]})},A=function(e,n){window.scrollTo({top:0,behavior:"smooth"});var t=Number(n);j.push("/workshops/".concat(m,"/?page=").concat(t),void 0,{shallow:!0,scroll:!1}),S(t),T(_[t-1])};return(0,r.jsx)(d.Z,{maxWidth:"xl",style:{display:"flex"},children:(0,r.jsx)("div",{className:"card-page",children:(0,r.jsxs)("div",{className:"workshop-container",children:[z(P),D,z(P),(0,r.jsx)(Z,{})]})})})}},40382:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops/[slug]",function(){return t(90929)}])},68211:function(){}},function(e){e.O(0,[774,164,635,757,571,340,609,145,49,731,928,263,4,888,179],(function(){return n=40382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);