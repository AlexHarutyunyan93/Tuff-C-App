(this.webpackJsonpeca=this.webpackJsonpeca||[]).push([[0],{63:function(e,t,a){e.exports=a.p+"static/media/logo.267c36b9.svg"},76:function(e,t,a){e.exports=a(99)},81:function(e,t,a){},82:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(81),a(10)),i=a(29),u=(a(82),a(20)),s=a(41),m=a(129),E=a(69),g=a(137),d=a(61),f=a.n(d);function h(){var e=r.a.useState(null),t=Object(s.a)(e,2),a=t[0],n=t[1],c=function(){n(null)};return r.a.createElement("div",{className:"mobile-header-nav"},r.a.createElement(m.a,{className:"mobile-menu-button","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)}},r.a.createElement(f.a,null)),r.a.createElement(E.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:c},r.a.createElement(g.a,{onClick:c},r.a.createElement(u.a,{exact:!0,to:"/"},"HOME")),r.a.createElement(g.a,{onClick:c},r.a.createElement(u.a,{to:"/about"},"ABOUT US")),r.a.createElement(g.a,{onClick:c},r.a.createElement(u.a,{to:"/service"},"SERVICE")),r.a.createElement(g.a,{onClick:c},r.a.createElement(u.a,{to:"/contacts"},"CONTACTS"))))}var p=a(63),v=a.n(p),b=a(134);var y=function(e){var t=e.setLanguage,a=e.language,n=e.basicInfo,c=n&&n.header.nav;return r.a.createElement("header",{id:"header"},r.a.createElement(b.a,{maxWidth:"lg",className:"header-container container"},r.a.createElement("div",{className:"logo"},r.a.createElement(u.a,{exact:!0,to:"/"},r.a.createElement("img",{src:v.a,alt:"Logo"}))),r.a.createElement(h,null),r.a.createElement("nav",{className:"header-navbar"},n&&c.map((function(e,t){return r.a.createElement(u.a,{key:t,exact:e.exact,to:e.path},e.name[a])}))),r.a.createElement("select",{defaultValue:a,name:"language",id:"languages",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"1"},"En"),r.a.createElement("option",{value:"2"},"Ru"),r.a.createElement("option",{value:"3"},"Am"))))},O=a(18),N=a(14),j="GET_ENTITY_REQUEST",T="GET_ENTITY_SUCCESS",w="GET_ENTITY_FAILURE",S="GET_BASIC_INFO_REQUEST",A="GET_BASIC_INFO_SUCCESS",C="GET_BASIC_INFO_FAILURE",I="special-categories/?reference=",L="SET_LANGUAGE",k={getEntity:function(e){return fetch(I+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(U).then((function(e){return e})).catch((function(e){return e}))},getBasicInfo:function(){return fetch(I+"basicInfo",{method:"GET",headers:{"Content-Type":"application/json"}}).then(U).then((function(e){return e})).catch((function(e){return e}))}};function U(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){e.status;var n=a&&a.message||e.statusText;return Promise.reject(n)}return a}))}var R={setLanguage:function(e){return localStorage.setItem("currentLanguage",e),e}};var _={setLanguage:function(e){var t=R.setLanguage(e);return{type:L,payload:t}}};var W=Object(O.b)((function(e){var t=e.entity;return{language:e.language.currentLanguage,basicInfo:t.basicInfo&&t.basicInfo.categoryFields}}),(function(e){return Object(o.a)({},Object(N.bindActionCreators)(_,e))}))((function(e){var t=e.setLanguage,a=e.language,n=e.basicInfo;return r.a.createElement(y,{setLanguage:t,language:a,basicInfo:n})})),x=(a(89),a(90),Object(n.lazy)((function(){return a.e(3).then(a.bind(null,141))}))),B=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,142))})),G=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,143))})),F=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,144))})),M=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,145))})),P=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,146))}));var z=function(e){var t=e.slider,a=e.info_1,c=e.home_about_us,l=e.loading,i=e.language;return r.a.createElement("div",{className:"homepage-wrapper"},l?"Loading":r.a.createElement("div",null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(x,{slider:t,language:i}),r.a.createElement(B,Object(o.a)({},a,{language:i})),r.a.createElement(G,Object(o.a)({},c,{language:i})),r.a.createElement(F,null),r.a.createElement(M,null),r.a.createElement(P,null))))},D={getEntity:function(e){return function(t){t({type:j}),k.getEntity(e).then((function(e){return t(function(e){return{type:T,payload:e}}(e))})).catch((function(e){return t(function(e){return{type:w,error:e}}(e))}))}},getBasicInfo:function(){return function(e){e({type:S}),k.getBasicInfo().then((function(t){return e({type:A,payload:t})})).catch((function(t){return e(function(e){return{type:C,error:e}}(t))}))}}};var H=Object(O.b)((function(e){var t=e.entity,a=e.language;return{entity:t.entity&&t.entity.categoryFields,loading:t.loading,language:a.currentLanguage}}),(function(e){return Object(o.a)({},Object(N.bindActionCreators)(D,e))}))((function(e){var t=e.getEntity,a=e.entity,c=e.loading,l=e.language;return Object(n.useEffect)((function(){return t("home_page")}),[]),r.a.createElement(z,Object(o.a)({},a,{loading:c,language:l}))})),Y=(a(91),a(56)),V=a(133),J=a(65),q=a.n(J),K=["http://localhost:4000/images/1.jpg","http://localhost:4000/images/2.jpg","http://localhost:4000/images/3.jpg","http://localhost:4000/images/4.jpg"];var Q=function(e){e.language;var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"about-us-content"},r.a.createElement("header",{className:"about-us-content-header-wrapper"},r.a.createElement(b.a,{maxWidth:"lg",className:"about-us-content-header"},r.a.createElement("h1",null,"ABOUT US"),r.a.createElement("nav",null,r.a.createElement("a",{href:"#"},"HOME"),"/",r.a.createElement("a",{href:"#"},"ABOUT US")))),r.a.createElement(b.a,{maxWidth:"lg",className:"about-us-content-main-wrapper"},r.a.createElement(V.a,{className:"about-us-content-main",elevation:3},r.a.createElement("p",null,"NIASH LLC was established in 2000. Being a stable and dynamically developing transporting company, having qualified specialists, the company offers a complex spectrum of transporting services within the Republic of Armenia, that includes"),r.a.createElement("div",{className:"about-us-content-info"},r.a.createElement("ul",null,r.a.createElement("li",null,"Logistics"),r.a.createElement("li",null,"Loading and uploading the goods"),r.a.createElement("li",null,"Warehousing")),r.a.createElement("p",null,"The company has production warehouses for rent\u2024\u2024"),r.a.createElement("p",null,"There is a railway near the company\u2019s territory, which allows to perform rail transportation within the RA."),r.a.createElement("p",null,"THE COMPANY IS SUPPLEMENTED WITH RUSSIAN AND FOREIGN PRODUCTION TRUCKS , PARTICULARLY"),r.a.createElement("h2",null,"MAN, SCANIA, MERCEDES, DAF, IVECO"))),r.a.createElement("aside",null,r.a.createElement("div",{className:"aside-slider"},r.a.createElement("h2",null,"GALLERY"),r.a.createElement(Y.Carousel,{showIndicators:!1,autoPlay:!0,showThumbs:!1,infiniteLoop:!0,interval:4e3,transitionTime:1e3,stopOnHover:!1},K.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{alt:"special category",src:e}))})))),r.a.createElement("div",{className:"aside-video"},r.a.createElement("h2",null,"Video"),r.a.createElement("div",{className:"video-container",onClick:function(){return l(!0)}},c?r.a.createElement("embed",{src:"http://localhost:3001/video/movie_1.mp4"}):r.a.createElement("img",{src:K[0],alt:"video"}),!c&&r.a.createElement(q.a,{className:"youtube-icon",fontSize:"large"}))),r.a.createElement("div",{className:"link-to-socium"},r.a.createElement("h2",null,"FIND US ON FACEBOOK")))))};var $=Object(O.b)((function(e){return{language:e.language.currentLanguage}}),(function(e){return{}}))((function(e){var t=e.language;return r.a.createElement(Q,{language:t})})),X=a(24),Z=(a(97),a(135));var ee=function(){return r.a.createElement("div",{className:"contact-content-wrapper"},r.a.createElement("header",{className:"contact-content-header-wrapper"},r.a.createElement(b.a,{maxWidth:"lg",className:"contact-content-header"},r.a.createElement("h1",null,"CONTACTS"),r.a.createElement("nav",null,r.a.createElement("a",{href:"/"},"HOME"),"/",r.a.createElement("a",{href:"/contacts"},"CONTACTS")))),r.a.createElement("div",{className:"contact-content-main-wrapper"},r.a.createElement(b.a,{maxWidth:"lg",className:"contact-content-main"},r.a.createElement(V.a,{className:"adress-section",elevation:3},r.a.createElement("p",null,"Address:"),r.a.createElement("p",{className:"got-to-right"},"Republic of Armenia,"),r.a.createElement("p",{className:"got-to-right"},"Artik"),r.a.createElement("p",{className:"got-to-right"},"Arin Berd 3/3"),r.a.createElement("p",null,"Tel:"),r.a.createElement("p",{className:"got-to-right"},"+374 (10) 478175"),r.a.createElement("p",{className:"got-to-right"},"+374 (77) 478175"),r.a.createElement("p",null,"E-mail:"),r.a.createElement("p",{className:"got-to-right"},"prtem-tapem-qar@info.am")),r.a.createElement(V.a,{className:"form-wrapper",elevation:3},r.a.createElement("h2",null,"WRITE TO US"),r.a.createElement("form",{className:"form",action:"#",noValidate:!0,autoComplete:"off"},r.a.createElement(Z.a,{id:"contact-name",label:"Name",name:"name"}),r.a.createElement(Z.a,{id:"contact-email",label:"Email",name:"email"}),r.a.createElement(Z.a,{id:"contact-subject",label:"Subject",name:"subject"}),r.a.createElement(Z.a,{id:"outlined-multiline-static",label:"Message",name:"message",multiline:!0,rows:"4",variant:"outlined"}),r.a.createElement(m.a,{color:"primary"},"Send"))))))};function te(){return r.a.createElement(ee,null)}var ae=function(){return r.a.createElement("main",null,r.a.createElement(X.d,null,r.a.createElement(X.b,{exact:!0,path:"/",render:function(){return r.a.createElement(H,null)}}),r.a.createElement(X.b,{path:"/about",render:function(){return r.a.createElement($,null)}}),r.a.createElement(X.b,{path:"/contacts",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(X.a,{from:"*",to:"/"})))};function ne(){return r.a.createElement(ae,null)}a(98);var re=a(66),ce=a.n(re);var le=function(e){return Object(i.a)(e),r.a.createElement("footer",null,r.a.createElement(b.a,{className:"footer-container",maxWidth:"lg"},r.a.createElement("h2",null,"Albert \xa9 2020"),r.a.createElement("div",{className:"socium"},r.a.createElement(ce.a,{className:"soc-icon"}))))};function oe(){return r.a.createElement(le,null)}var ie=function(e){return Object(i.a)(e),r.a.createElement("div",{className:"root-wrapper"},r.a.createElement(W,null),r.a.createElement(ne,null),r.a.createElement(oe,null))};function ue(e){return Object(i.a)(e),r.a.createElement(ie,null)}var se=a(15),me=Object(se.a)(),Ee=a(67),ge={cards:[]};var de={entity:null,basicInfo:null,loading:!0,error:""};var fe={defaultLanguage:"1",currentLanguage:localStorage.getItem("currentLanguage")||"1"};var he=Object(N.combineReducers)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEST":return Object(o.a)({},e);default:return e}},entity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(o.a)({},e,{entity:null,loading:!0});case T:return Object(o.a)({},e,{entity:t.payload,loading:!1});case w:return Object(o.a)({},e,{entity:null,loading:!1});case S:return Object(o.a)({},e);case A:return Object(o.a)({},e,{basicInfo:t.payload});case C:return Object(o.a)({},e,{error:"Can not resolve basic info"});default:return e}},language:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(o.a)({},e,{currentLanguage:t.payload});default:return e}}}),pe=a(68),ve=Object(N.createStore)(he,Object(pe.composeWithDevTools)(Object(N.applyMiddleware)(Ee.a)));var be=Object(O.b)(null,(function(e){return Object(o.a)({},Object(N.bindActionCreators)(D,e))}))((function(e){var t=e.getBasicInfo;return Object(n.useEffect)((function(){me.listen((function(e,t){})),t()})),r.a.createElement("div",{className:"App"},r.a.createElement(X.c,{history:me},r.a.createElement(ue,null)))})),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(O.a,{store:ve},r.a.createElement(be,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Oe(t,e)}))}}()}},[[76,1,2]]]);
//# sourceMappingURL=main.e9f07e61.chunk.js.map