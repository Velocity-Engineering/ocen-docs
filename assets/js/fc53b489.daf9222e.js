"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[8684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,b=d["".concat(p,".").concat(u)]||d[u]||h[u]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3},i="Borrower Agent Onboarding",s={unversionedId:"participant_onboarding/ba_onboarding",id:"participant_onboarding/ba_onboarding",title:"Borrower Agent Onboarding",description:"Below is the overview of the end-to-end flow from the perspective of a Borrower Agent participant across the 3 phases of the OCEN 4.0 flow.",source:"@site/docs/participant_onboarding/ba_onboarding.md",sourceDirName:"participant_onboarding",slug:"/participant_onboarding/ba_onboarding",permalink:"/docs/participant_onboarding/ba_onboarding",draft:!1,editUrl:"https://github.com/iSPIRT/OCEN-Documentation/tree/main/docs/participant_onboarding/ba_onboarding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lender Onboarding",permalink:"/docs/participant_onboarding/lender_onboarding"},next:{title:"FAQs",permalink:"/docs/faqs"}},p={},l=[{value:"Onboarding Phase",id:"onboarding-phase",level:2},{value:"Loan Application and Processing Phase",id:"loan-application-and-processing-phase",level:2},{value:"Post-Disbursement Phase",id:"post-disbursement-phase",level:2},{value:"Metadata APIs",id:"metadata-apis",level:2}],c={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"borrower-agent-onboarding"},"Borrower Agent Onboarding"),(0,o.kt)("p",null,"Below is the overview of the end-to-end flow from the perspective of a Borrower Agent participant across the 3 phases of the OCEN 4.0 flow."),(0,o.kt)("h2",{id:"onboarding-phase"},"Onboarding Phase"),(0,o.kt)("p",null,"BAs first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls."),(0,o.kt)("p",null,"Borrower Agents in the ecosystem will then be able to drive the product life cycle by inviting other necessary participants needed in the product\u2019s loan workflow. Once registered in the portal, BAs can create a Product Group and invite other participants (Collections, Disbursement partners and Derived Data Providers) for a particular product."),(0,o.kt)("p",null,"BAs also need to select an SRO who will manage any dispute resolution issues for them and will serve as the guardrails against bad actors in the ecosystem."),(0,o.kt)("p",null,"There are no API calls and implementation in this phase."),(0,o.kt)("h2",{id:"loan-application-and-processing-phase"},"Loan Application and Processing Phase"),(0,o.kt)("p",null,"BAs forward the Loan Application requests to the Lender. They then drive the Loan Application process with the lender by enabling the Lender to get Consent from the borrower and then to provide the loan Offer. Upon acceptance of the Offer by the borrower, the BA enables the Lender to perform the borrower KYC, confirm the loan disbursement and repayment terms with the borrower and then to grant the loan."),(0,o.kt)("p",null,"The handshake and the steps in this phase follow the APIs defined in the APIs list."),(0,o.kt)("h2",{id:"post-disbursement-phase"},"Post-Disbursement Phase"),(0,o.kt)("p",null,"Post-disbursement of the loan, any disputes from the borrower are forwarded to the Lender by the BA via the Loan Dispute APIs (see APIs list)."),(0,o.kt)("h2",{id:"metadata-apis"},"Metadata APIs"),(0,o.kt)("p",null,"In addition to the above, the BA will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network."))}h.isMDXComponent=!0}}]);