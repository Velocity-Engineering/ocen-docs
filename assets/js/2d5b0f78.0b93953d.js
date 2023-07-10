"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[5453],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2},i="OCEN 4.0",s={unversionedId:"ocen_4_0",id:"ocen_4_0",title:"OCEN 4.0",description:"The OCEN model has been being built incrementally in phases, with reinforced learnings from each of the previous pilots.",source:"@site/docs/ocen_4_0.md",sourceDirName:".",slug:"/ocen_4_0",permalink:"/docs/ocen_4_0",draft:!1,editUrl:"https://github.com/iSPIRT/OCEN-Documentation/tree/main/docs/ocen_4_0.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Participant Roles",permalink:"/docs/participant_roles"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ocen-40"},"OCEN 4.0"),(0,o.kt)("p",null,"The OCEN model has been being built incrementally in phases, with reinforced learnings from each of the previous pilots. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OCEN 4.0")," is the latest implementation, versioned ",(0,o.kt)("em",{parentName:"p"},"4.0")," for its API specification. The goal for OCEN 4.0 is to build an ecosystem of participants that creates a cambrian explosion of cash-flow based loan products across different sectors and different types of borrowers. This builds on previous pilots with the following key changes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Registries:")," OCEN 4.0 introduces two separate registries for Products and Participants that are maintained via SROs. The registries allow for creation and discoverability of new products and participants in the ecosystem. The SRO in this model ensures a strong dispute resolution system via authorized mediation. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Partipant Roles:")," OCEN 4.0 adds new specialized ",(0,o.kt)("a",{parentName:"p",href:"#participant-roles"},"participants roles")," to promote specialization and to enhance system efficiency. For example, by establishing a local network of participants, the burden on lenders is reduced, resulting in increased credit accessibility in underprivileged areas.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Product Groups:")," OCEN 4.0 introduces the notion of a Product Group for serving a product. The Product Group enables a group of different participants to come together to serve a particular Product to a set of borrowers via a Borrower Agent. BAs will create & manage Product Groups while Lenders will create the Products. All participants can browse the Products and Product Groups on the Product Registry and collaborate using Product Groups. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"OCEN 4.0 APIs:")," The previous sepcification is also updated such that the APIs across various products, actions and roles require minimal integration effort. The APIs across all participants are standardized so that a one-time integration can unlock future collaborations with new parties to serve new products."))))}d.isMDXComponent=!0}}]);