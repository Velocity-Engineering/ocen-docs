"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[5322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,b=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2},i="Lender Onboarding",s={unversionedId:"participant_onboarding/lender_onboarding",id:"participant_onboarding/lender_onboarding",title:"Lender Onboarding",description:"Below is the overview of the end-to-end flow from the perspective of a Lender.",source:"@site/docs/participant_onboarding/lender_onboarding.md",sourceDirName:"participant_onboarding",slug:"/participant_onboarding/lender_onboarding",permalink:"/ocen-docs/docs/participant_onboarding/lender_onboarding",draft:!1,editUrl:"https://github.com/iSPIRT/OCEN-Documentation/tree/main/docs/participant_onboarding/lender_onboarding.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Participant Overview",permalink:"/ocen-docs/docs/participant_onboarding/participant_overview"},next:{title:"Borrower Agent Onboarding",permalink:"/ocen-docs/docs/participant_onboarding/ba_onboarding"}},l={},p=[{value:"Onboarding Phase",id:"onboarding-phase",level:2},{value:"Loan Application and Processing Phase",id:"loan-application-and-processing-phase",level:2},{value:"Post-Disbursement Phase",id:"post-disbursement-phase",level:2},{value:"Metadata APIs",id:"metadata-apis",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lender-onboarding"},"Lender Onboarding"),(0,o.kt)("p",null,"Below is the overview of the end-to-end flow from the perspective of a Lender."),(0,o.kt)("h2",{id:"onboarding-phase"},"Onboarding Phase"),(0,o.kt)("p",null,"Lenders first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls."),(0,o.kt)("p",null,"Lenders will then create the product in the Product Registry portal with all necessary attributes such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Product category"),(0,o.kt)("li",{parentName:"ol"},"Borrower types"),(0,o.kt)("li",{parentName:"ol"},"Data requirements"),(0,o.kt)("li",{parentName:"ol"},"Loan workflow configurations - Collections, Disbursement, etc.")),(0,o.kt)("p",null,"Once a product has been created and added to the portal, all participants will be able to discover the product. Participants can then subscribe to any of the existing products that need their role as part of the product\u2019s loan workflow."),(0,o.kt)("p",null,"The Lender will serve as the OWNER of the product and is the only participant who can change the product attributes subsequently."),(0,o.kt)("p",null,"Post product-creation, Lenders get added to Product Groups by Borrower Agents to serve borrowers in their network. They then start receiving Loan Application requests."),(0,o.kt)("p",null,"There are no API calls and implementation in this phase."),(0,o.kt)("h2",{id:"loan-application-and-processing-phase"},"Loan Application and Processing Phase"),(0,o.kt)("p",null,"Lenders receive Loan Application requests from the Borrower Agent, request Consent from the borrower and initiate the loan Offer. Upon acceptance of the Offer, the Lender performs the borrower KYC, confirms the loan disbursement and repayment terms with the borrower and then grants the loan."),(0,o.kt)("p",null,"The handshake and the steps in this phase follow the APIs defined in the APIs list."),(0,o.kt)("h2",{id:"post-disbursement-phase"},"Post-Disbursement Phase"),(0,o.kt)("p",null,"Post-disbursement of the loan, any disputes from the borrower are handled by the Lender via the Loan Dispute APIs in the APIs list."),(0,o.kt)("h2",{id:"metadata-apis"},"Metadata APIs"),(0,o.kt)("p",null,"In addition to the above, the Lender will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network."))}u.isMDXComponent=!0}}]);