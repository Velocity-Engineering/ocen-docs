"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[2412,6561],{54316:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),l=a(86010),o=a(95999),c=a(35281),r=a(12466),i=a(85936);const s={backToTopButton:"backToTopButton_wOPN",backToTopButtonShow:"backToTopButtonShow_bSfi"};function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:c,cancelScroll:s}=(0,r.Ct)();return(0,r.RF)(((e,a)=>{let{scrollY:n}=e;const c=a?.scrollY;c&&(o.current?o.current=!1:n>=c?(s(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,i.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>c(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",c.k.common.backToTopButton,s.backToTopButton,e&&s.backToTopButtonShow),type:"button",onClick:t})}},40874:(e,t,a)=>{a.d(t,{Z:()=>K});var n=a(67294),l=a(87524),o=a(86010),c=a(86668),r=a(69006),i=a(95999),s=a(28362);const m={collapseSidebarButton:"collapseSidebarButton_moHW",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_cCdu"};function u(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,i.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",m.collapseSidebarButton),onClick:t},n.createElement(s.Z,{className:m.collapseSidebarButtonIcon}))}var d=a(35281),b=a(59689),p=a(12466),h=a(87462),E=a(902);const k=Symbol("EmptyContext"),f=n.createContext(k);function v(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(f.Provider,{value:o},t)}var g=a(86043),_=a(52802),I=a(48596),Z=a(39960),N=a(72389);function S(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,i.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function C(e){let{item:t,onItemClick:a,activePath:l,level:r,index:i,...s}=e;const{items:m,label:u,collapsible:b,className:p,href:v}=t,{docs:{sidebar:{autoCollapseCategories:C}}}=(0,c.L)(),T=function(e){const t=(0,N.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,_.Wl)(e):void 0),[e,t])}(t),y=(0,_._F)(t,l),L=(0,I.Mg)(v,l),{collapsed:B,setCollapsed:x}=(0,g.u)({initialState:()=>!!b&&(!y&&t.collapsed)}),{expandedItem:A,setExpandedItem:w}=function(){const e=(0,n.useContext)(f);if(e===k)throw new E.i6("DocSidebarItemsExpandedStateProvider");return e}(),F=function(e){void 0===e&&(e=!B),w(e?null:i),x(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,E.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:y,collapsed:B,updateCollapsed:F}),(0,n.useEffect)((()=>{b&&null!=A&&A!==i&&C&&x(!0)}),[b,A,i,x,C]),n.createElement("li",{className:(0,o.Z)(d.k.docs.docSidebarItemCategory,d.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":B},p)},n.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":L})},n.createElement(Z.Z,(0,h.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":y}),onClick:b?e=>{a?.(t),v?F(!1):(e.preventDefault(),F())}:()=>{a?.(t)},"aria-current":L?"page":void 0,"aria-expanded":b?!B:void 0,href:b?T??"#":T},s),u),v&&b&&n.createElement(S,{categoryLabel:u,onClick:e=>{e.preventDefault(),F()}})),n.createElement(g.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:B},n.createElement(H,{items:m,tabIndex:B?-1:0,onItemClick:a,activePath:l,level:r+1})))}var T=a(13919),y=a(6499);const L={menuExternalLink:"menuExternalLink_pWjA"};function B(e){let{item:t,onItemClick:a,activePath:l,level:c,index:r,...i}=e;const{href:s,label:m,className:u,autoAddBaseUrl:b}=t,p=(0,_._F)(t,l),E=(0,T.Z)(s);return n.createElement("li",{className:(0,o.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",u),key:m},n.createElement(Z.Z,(0,h.Z)({className:(0,o.Z)("menu__link",!E&&L.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},E&&{onClick:a?()=>a(t):void 0},i),m,!E&&n.createElement(y.Z,null)))}const x={menuHtmlItem:"menuHtmlItem_livu"};function A(e){let{item:t,level:a,index:l}=e;const{value:c,defaultStyle:r,className:i}=t;return n.createElement("li",{className:(0,o.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(a),r&&[x.menuHtmlItem,"menu__list-item"],i),key:l,dangerouslySetInnerHTML:{__html:c}})}function w(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(C,(0,h.Z)({item:t},a));case"html":return n.createElement(A,(0,h.Z)({item:t},a));default:return n.createElement(B,(0,h.Z)({item:t},a))}}function F(e){let{items:t,...a}=e;return n.createElement(v,null,t.map(((e,t)=>n.createElement(w,(0,h.Z)({key:t,item:e,index:t},a)))))}const H=(0,n.memo)(F),P={menu:"menu_cfgE",menuWithAnnouncementBar:"menuWithAnnouncementBar_URRx"};function R(e){let{path:t,sidebar:a,className:l}=e;const c=function(){const{isActive:e}=(0,b.nT)(),[t,a]=(0,n.useState)(e);return(0,p.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,i.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",P.menu,c&&P.menuWithAnnouncementBar,l)},n.createElement("ul",{className:(0,o.Z)(d.k.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:a,activePath:t,level:1})))}const M="sidebar_Eg18",W="sidebarWithHideableNavbar_yftk",D="sidebarHidden_FNG8",z="sidebarLogo_y_H6";function U(e){let{path:t,sidebar:a,onCollapse:l,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:m}}}=(0,c.L)();return n.createElement("div",{className:(0,o.Z)(M,s&&W,i&&D)},s&&n.createElement(r.Z,{tabIndex:-1,className:z}),n.createElement(R,{path:t,sidebar:a}),m&&n.createElement(u,{onClick:l}))}const Y=n.memo(U);var O=a(13102),j=a(72961);const G=e=>{let{sidebar:t,path:a}=e;const l=(0,j.e)();return n.createElement("ul",{className:(0,o.Z)(d.k.docs.docSidebarMenu,"menu__list")},n.createElement(H,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function q(e){return n.createElement(O.Zo,{component:G,props:e})}const J=n.memo(q);function K(e){const t=(0,l.i)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Y,e),o&&n.createElement(J,e))}},28362:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),l=a(67294);function o(e){return l.createElement("svg",(0,n.Z)({width:"20",height:"20","aria-hidden":"true"},e),l.createElement("g",{fill:"#7a7a7a"},l.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},86561:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(67294),l=a(95999),o=a(1944),c=a(15638);function r(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(c.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);