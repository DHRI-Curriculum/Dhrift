(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{65310:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/[slug]",function(){return r(19838)}])},9954:function(n,e,r){"use strict";r.d(e,{Z:function(){return m}});var t=r(14924),s=r(26042),i=r(69396),o=r(828),a=r(85893),l=r(67294),c=r(58826),u=r(11057),d=r(16323),f=r(78462),p=r(70891),h=r(79953);function m(n){var e=n.pages,r=n.currentPage,m=n.handlePageChange,x=(0,o.Z)(l.useState({top:!1,left:!1,bottom:!1,right:!1}),2),v=x[0],j=x[1],g=function(n,e){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&j((0,i.Z)((0,s.Z)({},v),(0,t.Z)({},n,e)))}};return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsxs)(u.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:g("left",!0),children:[(0,a.jsx)(d.Z,{}),"Table of Contents"]}),(0,a.jsx)(c.ZP,{variant:"temporary",open:v.left,className:"drawer-left temporary",onClose:g("left",!1),ModalProps:{keepMounted:!0},children:(0,a.jsx)("nav",{className:"sidenav",children:(0,a.jsx)(f.Z,{onClick:g("left",!1),onKeyDown:g("left",!1),children:e.map((function(n,e){return(0,a.jsx)(p.ZP,{children:(0,a.jsx)(h.Z,{style:{color:r===e+1?"black":"white",cursor:r===e+1?"default":"pointer"},onClick:function(){return m(event,e+1)},primary:n})},e)}))})})}),(0,a.jsx)(c.ZP,{variant:"permanent",anchor:"left",open:v.left,onClose:g("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",xl:"block"}},children:(0,a.jsx)("nav",{style:{marginTop:"8rem"},className:"sidenav",children:(0,a.jsx)(f.Z,{onClick:g("left",!1),onKeyDown:g("left",!1),children:e.map((function(n,e){return(0,a.jsx)(p.ZP,{children:(0,a.jsx)(h.Z,{style:{color:r===e+1?"black":"white",cursor:r===e+1?"default":"pointer"},onClick:function(){return m(event,e+1)},primary:n})},e)}))})})})]})}},19838:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return u},default:function(){return d}});var t=r(85893),s=(r(41664),r(67294)),i=r(61754),o=r(11163),a=r(15054),l=r(26447),c=(r(20637),r(9954),r(61608),r(27948)),u=!0;function d(n){n.workshops;var e=n.guides,r=(n.insights,n.authors,(0,o.useRouter)().query.slug),u=e.find((function(n){return n.slug===r})).content,d=function(n){var e=(0,i.Z)(n),r=[];e.props.children.reduce((function(n,e){return"string"===typeof e||("h1"===e.type?r.push([e]):r[r.length-1].push(e)),n}),[]);return r.map((function(n,e){return(0,t.jsx)("div",{children:n.map((function(n,e){return(0,t.jsx)(s.Fragment,{children:n},e)}))},e)}))},f=(0,s.useState)(1),p=f[0],h=f[1],m=(0,s.useState)([]),x=m[0],v=m[1],j=(0,s.useState)([]),g=j[0],y=j[1],k=(0,s.useState)([]),Z=(k[0],k[1]),w=x.map((function(n,e){var r=void 0;return r=0===e?n.props.children[0].props.children:n.props.children[0].props.children.props.children[0],(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:p===e+1?"active":"",onClick:function(){return b(event,e+1)},children:r})},e)}));(0,s.useEffect)((function(){v(d(u)),y(d(u)[0]),Z(w)}),[u]);var N=function(n){return(0,t.jsx)(l.Z,{className:"pagination",children:(0,t.jsx)(a.Z,{count:x.length,page:n,onChange:b,siblingCount:2,boundaryCount:2})})},b=function(n,e){h(e),y(x[e-1]),window.scrollTo({top:0,behavior:"smooth"})};return(0,t.jsxs)(c.Z,{maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:[(0,t.jsx)("div",{className:"sidebar",sx:{display:{md:"none"}}}),(0,t.jsx)("div",{className:"content card-page",children:(0,t.jsxs)("div",{className:"workshop-container",children:[(0,t.jsx)("div",{children:N(p)}),g,(0,t.jsx)("div",{children:N(p)})]})})]})}}},function(n){n.O(0,[774,164,635,757,571,340,355,788,826,58,20,626,754,888,179],(function(){return e=65310,n(n.s=e);var e}));var e=n.O();_N_E=e}]);