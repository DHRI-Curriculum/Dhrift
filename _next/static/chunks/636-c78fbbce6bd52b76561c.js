(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{40947:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(85893),o=n(87757),i=n.n(o),s=n(92137),a=n(81253),c=n(67294),u=n(4298),d=n(5152),l=n(72642),p=n(66652),_=n(50594),f=n(62681),m=n(59062),x=n(82167),h=(0,d.default)((function(){return Promise.all([n.e(281),n.e(569),n.e(746)]).then(n.bind(n,31746))}),{ssr:!1,loadableGenerated:{webpack:function(){return[31746]},modules:["../components/CodeEditorComponent.js -> ./EditorComponent"]}});function y(e){var t=e.defaultCode,n=void 0===t?"# Write your code here":t,o=e.minLines,d=e.codeOnChange,y=(0,a.Z)(e,["defaultCode","minLines","codeOnChange"]),v=(0,c.useState)(n),j=v[0],g=v[1],E=(0,c.useState)(!1),b=(E[0],E[1],(0,c.useState)(!1)),P=(b[0],b[1]),w=(0,c.useState)(null),M=(w[0],w[1],(0,c.useState)(!1)),S=M[0],C=M[1],L=(0,c.useState)(!1),O=L[0],T=L[1],I=(0,c.useState)(null),R=I[0],D=I[1],k=(0,c.useRef)(null),N=(0,c.useState)(!1),Z=N[0],W=N[1],B=(0,c.useReducer)((function(e){return e+1}),0),A=(B[0],B[1]),U=(0,c.useContext)(f.G),K=U.hasLoadPyodideBeenCalled,J=U.isPyodideLoading,H=U.setIsPyodideLoading,z=U.isPyodideReady,q=U.setIsPyodideReady;(0,c.useEffect)((function(){z&&H(!1)}),[K,H,z]);var F=y.allSnippets,G="string"===typeof y.snippets?y.snippets.split(","):[],Q=[];void 0!=G&&G.forEach((function(e){var t=F.find((function(t){return t.slug===e.trim()}));void 0!=t&&Q.push(t)}));var $=function(){var e=(0,s.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),C(!1),T(!1),D(null),k.current="",pyodide.globals.clear(),pyodide.globals.set("print",(function(e){k.current=k.current+String(e)+"\n"})),pyodide.globals.set("input",(function(e){prompt(e)})),e.next=10,pyodide.loadPackagesFromImports(t);case 10:return Q.forEach((function(e,t){pyodide.runPython("\nfile".concat(t+1," = ").concat(JSON.stringify(e.content),"\n            "))})),e.next=13,pyodide.runPythonAsync(t).then((function(e){C(!0),k.current=k.current+"\n"+e,A()})).catch((function(e){T(!0),D(e)})).finally((function(){W(!1)}));case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,r.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){z||function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){q(!0),P(!0)}))}})]}),(0,r.jsxs)("div",{className:"editorContainer",children:[(0,r.jsx)(x.Z,{snippets:Q}),(0,r.jsxs)("div",{className:"buttonsContainer",children:[!J&&!Z&&(0,r.jsxs)(l.Z,{onClick:function(){$(j)},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px"},children:[(0,r.jsx)(p.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),(J||Z)&&(0,r.jsx)(m.Z,{style:{marginLeft:"10px",marginTop:"10px"}}),(0,r.jsx)(l.Z,{variant:"text",onClick:function(){g(n)},style:{color:"#32c259",fontSize:"16px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px",float:"right"},children:"Revert Code"})]}),(0,r.jsx)(h,{code:j,onChange:function(e){d?d(e):g(e)},maxLines:"Infinity",minLines:o})]}),S&&(0,r.jsxs)("div",{id:"output",style:{margin:"10px",padding:"10px",border:"1px solid #32c259",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",overflow:"auto",font:"1.3rem Inconsolata, monospace",whiteSpace:"pre-wrap"},children:[(0,r.jsx)(_.Z,{onClick:function(){C(!1)},style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),k.current]}),O&&(0,r.jsxs)("div",{id:"error",style:{font:"1.3rem Inconsolata, monospace",margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto",whiteSpace:"pre-wrap"},children:[(0,r.jsx)(_.Z,{onClick:function(){T(!1)},style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),String(R)]})]})}},35595:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(85893),o=n(96156),i=n(87757),s=n.n(i),a=n(92137),c=n(67294),u=n(96540),d=n(4298),l=n(5152),p=n(72642),_=n(6867),f=n(66652),m=n(62681),x=n(59062),h=n(62640),y=n(2658),v=n(54386),j=(0,l.default)((function(){return Promise.all([n.e(281),n.e(569),n.e(746)]).then(n.bind(n,31746))}),{ssr:!1,loadableGenerated:{webpack:function(){return[31746]},modules:["../components/EditorWithTabs.js -> ./EditorComponent"]}});function g(e){var t=e.defaultCode,n=void 0===t?"# Write your code here":t,i=(0,c.useState)(0),l=i[0],g=i[1],E=(0,c.useState)(!1),b=(E[0],E[1],(0,c.useState)([])),P=b[0],w=b[1],M=(0,c.useState)(n),S=M[0],C=M[1],L=(0,c.useState)(!1),O=(L[0],L[1],(0,c.useState)(!1)),T=(O[0],O[1]),I=(0,c.useState)(null),R=(I[0],I[1],(0,c.useRef)(null)),D=(0,c.useRef)(null),k=(0,c.useContext)(m.G),N=k.hasLoadPyodideBeenCalled,Z=k.isPyodideLoading,W=k.setIsPyodideLoading,B=k.isPyodideReady,A=k.setIsPyodideReady;(0,c.useEffect)((function(){B&&W(!1)}),[N,W,B]);var U=function(e){C(e)},K=function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R.current.innerHTML="",D.current.innerHTML="",pyodide.globals.set("print",(function(e){J(e)})),pyodide.globals.set("input",(function(e){prompt(e)})),e.next=6,pyodide.loadPackagesFromImports(t);case 6:return e.next=8,pyodide.runPythonAsync(t).then((function(e){J(e)})).catch((function(e){H(e)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function J(e){var t=R.current;t.innerText+=e+"\n",t.scrollTop=t.scrollHeight}function H(e){var t=D.current;t.innerText+=e+"\n",t.scrollTop=t.scrollHeight}var z=function(){return(0,r.jsxs)("div",{children:[!Z&&(0,r.jsxs)(p.Z,{onClick:function(){K(S)},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px"},children:[(0,r.jsx)(f.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),Z&&(0,r.jsx)(x.Z,{style:{marginLeft:"10px",marginTop:"10px"}})]})};(0,c.useEffect)((function(){l<P.length&&w(P.map((function(e,t){return t===l?{name:e.name,code:S,id:e.id}:e})))}),[l,S]);var q=function(){return(0,r.jsx)("div",{className:"tabs-container",children:P.map((function(e,t){return function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.random().toString(36).substr(2,7);return(0,r.jsx)(h.Z,{label:e,uniqueid:o,onClick:function(){g(n),C(t)},style:{fontSize:"20px",fontWeight:"bold",color:l===n?"#32c259":"white",borderBottom:l===n?"2px solid #32c259":"none"}},n)}(e.name,e.code,t)}))})};return(0,c.useEffect)((function(){w([{name:"Tab 1",code:n}]),g(0)}),[]),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/pyodide.js"}),(0,r.jsx)(d.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/pyodide.asm.js",onLoad:function(){B||function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){A(!0),T(!0)}))}})]}),(0,r.jsx)("div",{className:"editorContainer",children:(0,r.jsxs)(v.Z,{children:[(0,r.jsx)("div",{className:"tab-bar-left",sx:{flexGrow:1},children:(0,r.jsx)(_.Z,{onClick:function(){!function(){var e=P;e.push({name:"Tab "+(P.length+1),code:n}),w(e),g(P.length-1)}()},style:(0,o.Z)({margin:"10px",height:"25px",width:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px",cursor:"pointer"},"outline","none"),children:(0,r.jsx)(u.Z,{style:{margin:"10px",fontSize:"20px"}})})}),(0,r.jsx)("div",{children:q()}),(0,r.jsx)("div",{className:"tab-bar-right",style:{marginLeft:"auto",marginRight:-12},children:z()})]})}),(0,r.jsxs)("div",{className:"tab-content",children:[(0,r.jsx)("div",{className:"editor-container",children:(0,r.jsx)("div",{className:"editor",children:(0,r.jsx)(j,{code:S,onChange:U})})}),(0,r.jsx)("div",{className:"output-container",children:(0,r.jsxs)("div",{className:"output",children:[(0,r.jsx)("div",{className:"output-header",children:(0,r.jsx)(y.Z,{variant:"h6",style:{fontSize:"20px",fontWeight:"bold",color:"#32c259",marginBottom:"10px"},children:"Output"})}),(0,r.jsxs)("div",{className:"output-body",children:[(0,r.jsx)("div",{className:"output-body-output",ref:R}),(0,r.jsx)("div",{className:"output-body-error",ref:D})]})]})})]})]})}},82167:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(85893),o=n(87329),i=n(48623),s=n(66856),a=n(29525),c=n(66083),u=n(7212),d=n(282),l=n(67294),p=n(87714);function _(e){var t=(0,l.useState)([]),n=t[0],_=(t[1],(0,l.useState)(!1)),f=_[0],m=_[1],x=(0,l.useState)(null),h=x[0],y=x[1],v=(0,l.useState)([]),j=v[0],g=v[1],E=function(){return m(!1)};(0,l.useEffect)((function(){if(localStorage.getItem("filenames"))localStorage.getItem("filenames");else localStorage.setItem("filenames",JSON.stringify([]))}),[]);var b=function(e){var t=new FileReader;t.readAsText(e);t.onload=function(){var r={filename:e.name,content:t.result};console.log(r);[].concat((0,o.Z)(n),[r]);g([].concat((0,o.Z)(j),[r])),localStorage.setItem("filenames",[].concat((0,o.Z)(j.map((function(e){return e.filename}))),[r.filename]).join(","))}};d.Z,i.Z,c.Z,a.Z,u.Z,s.Z,d.Z,d.Z;return(0,r.jsx)("div",{className:"file-list",children:e.snippets.map((function(e,t){return(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{title:"variable file"+(t+1),children:(0,r.jsx)("div",{className:"file-item",style:{color:"white"},children:e.slug})})},t)}))})}},69260:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return JSInterpreterComponent}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73935);function JSInterpreterComponent(){var JSoutput=function(e){var t="[";if("object"==typeof e&&e.length)for(var n=0;n<e.length;n++)if("object"==typeof e[n]&&e[n].length){t+=(0==n?"":" ")+"[";for(var r=0;r<e[n].length;r++)t+=e[n][r]+(r==e[n].length-1?"]"+(n==e.length-1?"]":",")+"\n":", ")}else t+=e[n]+(n==e.length-1?"]":", ");else t=e;return t},writeln=function(e){e||(e=""),document.getElementById("JSoutput").value+=JSoutput(e)+"\n"},JSrun=function JSrun(){var str,outnode=document.getElementById("JSoutput"),code=document.getElementById("JSprogram").value;console.log(code),outnode.value="";try{var result=eval(code);writeln(result)}catch(e){writeln(e)}void 0!=str&&(outnode.value+=str)},keyUp=function(e){77==e.which&&e.ctrlKey&&JSrun()},htmlWindow=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"HTMLWindow",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"HTMLWindow-header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:"HTML Window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"HTMLWindow-body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{id:"HTMLprogram",className:"HTMLWindow-textarea",placeholder:"HTML code here"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"HTMLWindow-footer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"HTMLWindow-button",onClick:function(){var e=document.getElementById("HTMLoutput"),t=document.getElementById("HTMLprogram").value;e.value="";try{react_dom__WEBPACK_IMPORTED_MODULE_1__.render(t,document.getElementById("HTMLoutput"))}catch(n){writeln(n)}},children:"Run"})})]})},htmlOutput=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"HTMLOutput",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"HTMLOutput-header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:"HTML Output"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"HTMLOutput-body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{id:"HTMLoutput",className:"HTMLOutput-textarea",placeholder:"HTML output here"})})]})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"JSInterpreter",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"JSInterpreter-header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"JS Interpreter"})}),htmlWindow(),htmlOutput(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"JSInterpreter-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"JSInterpreter-sidebar",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"JSInterpreter-sidebar-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{id:"JSprogram",onKeyUp:keyUp})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"JSInterpreter-sidebar-footer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:JSrun,children:"Run"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"JSInterpreter-output",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"JSInterpreter-output-header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Output"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"JSInterpreter-output-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{id:"JSoutput",readOnly:!0})})]})]})]})}},81365:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(34699),o=n(85893),i=n(87757),s=n.n(i),a=n(92137),c=n(67294),u=n(4298),d=n(62681),l=n(59062),p=n(19755);function _(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){var e=(0,c.useContext)(d.G),t=e.hasLoadPyodideBeenCalled,n=e.isPyodideLoading,i=e.setIsPyodideLoading,f=e.isPyodideReady,m=e.setIsPyodideReady;function x(e){return new Promise((function(t){return setTimeout(t,e)}))}var h=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),y="#"+h;function v(){return(v=(0,a.Z)(s().mark((function e(){var t,n,o,i,c,u,d,l,f,m,h,v,j;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v=function(){return(v=(0,a.Z)(s().mark((function e(t){var o,a,u,p,m,h,y,v,g,E;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:o=e.sent,j.pause(),a=_(t.split("\n")),e.prev=5,a.s();case 7:if((u=a.n()).done){e.next=44;break}p=u.value,m=c.push(p),j.set_prompt("incomplete"===m.syntax_check?l:d),e.t0=m.syntax_check,e.next="syntax-error"===e.t0?14:"incomplete"===e.t0?16:"complete"===e.t0?17:18;break;case 14:return j.error(m.formatted_error.trimEnd()),e.abrupt("continue",42);case 16:return e.abrupt("continue",42);case 17:return e.abrupt("break",19);case 18:throw new Error("Unexpected type ".concat(ty));case 19:return h=i(m),e.prev=20,e.next=23,h;case 23:y=e.sent,v=(0,r.Z)(y,1),void 0!==(g=v[0])&&j.echo(n.callKwargs(g,{separator:"\n[[;orange;]<long output truncated>]\n"})),pyodide.isPyProxy(g)&&g.destroy(),e.next=38;break;case 30:if(e.prev=30,e.t1=e.catch(20),"PythonError"!==e.t1.constructor.name){e.next=37;break}E=m.formatted_error||e.t1.message,j.error(E.trimEnd()),e.next=38;break;case 37:throw e.t1;case 38:return e.prev=38,m.destroy(),h.destroy(),e.finish(38);case 42:e.next=7;break;case 44:e.next=49;break;case 46:e.prev=46,e.t2=e.catch(5),a.e(e.t2);case 49:return e.prev=49,a.f(),e.finish(49);case 52:return j.resume(),e.next=55,x(10);case 55:o();case 56:case"end":return e.stop()}}),e,null,[[5,46,49,52],[20,30,38,42]])})))).apply(this,arguments)},h=function(e){return v.apply(this,arguments)},m=function(){return(m=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.ready,j.ready=new Promise((function(e){return t=e})),e.next=4,n;case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},f=function(){return m.apply(this,arguments)},t=pyodide.globals.get("dict")(),pyodide.runPython("\n                import sys\n                from pyodide import to_js\n                from pyodide.console import PyodideConsole, repr_shorten, BANNER\n                import __main__\n               \n                pyconsole = PyodideConsole(__main__.__dict__)\n                import builtins\n                async def await_fut(fut):\n                  res = await fut\n                  if res is not None:\n                    builtins._ = res\n                  return to_js([res], depth=1)\n                def clear_console():\n                  pyconsole.buffer = []\n            ",t),n=t.get("repr_shorten"),o=t.get("BANNER"),i=t.get("await_fut"),c=t.get("pyconsole"),u=t.get("clear_console"),t.destroy(),d=">>> ",l="... ",j=p(y).terminal(h,{greetings:o,prompt:d,enabled:!1,completionEscape:!1,completion:function(e,t){t(c.complete(e).toJs()[0])},keymap:{"CTRL+C":function(){var e=(0,a.Z)(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(),j.echo_command(),j.echo("KeyboardInterrupt"),j.set_command(""),j.set_prompt(d);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}),c.stdout_callback=function(e){return j.echo(e,{newline:!1})},c.stderr_callback=function(e){j.error(e.trimEnd())},j.ready=Promise.resolve(),pyodide._module.on_fatal=function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers."),j.error("The cause of the fatal error was:"),j.error(t),j.error("Look in the browser console for more details."),e.next=6,j.ready;case 6:return j.pause(),e.next=9,x(15);case 9:j.pause();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){window.jQuery=p,f&&(i(!1),function(){v.apply(this,arguments)}())}),[t,i,f]),(0,o.jsxs)("div",{className:"PythonREPL",children:[(0,o.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/jquery.terminal@2.27.1/css/jquery.terminal.css",rel:"stylesheet"}),(0,o.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,o.jsx)(u.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){f||function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){console.log("Pyodide version: "+pyodide.version),m(!0)}))}}),(0,o.jsx)("div",{className:"terminal",id:h,children:n&&(0,o.jsx)(l.Z,{})})]})}n(29288)},81215:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893),o=n(26880),i=n.n(o),s=n(94068);function a(){var e=s.EmulatorState.create({fs:s.FileSystem.create({"/home":{},"/home/README":{content:"This is a text file"},"/home/nested/directory":{},"/home/nested/directory/file":{content:"End of nested directory!"}})});return(0,r.jsx)(i(),{theme:{background:"#141313",promptSymbolColor:"#6effe6",commandColor:"#fcfcfc",outputColor:"#fcfcfc",errorOutputColor:"#ff89bd",fontSize:"1.1rem",spacing:"1%",fontFamily:"monospace",width:"100%",minHeight:"5vh",padding:"10px"},emulatorState:e})}}}]);