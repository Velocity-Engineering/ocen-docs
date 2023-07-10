"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[1236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3},a="Architecture Overview",s={unversionedId:"components/auth_service/architechture",id:"components/auth_service/architechture",title:"Architecture Overview",description:"High-Level View:",source:"@site/docs/components/auth_service/architechture.md",sourceDirName:"components/auth_service",slug:"/components/auth_service/architechture",permalink:"/docs/components/auth_service/architechture",draft:!1,editUrl:"https://github.com/iSPIRT/OCEN-Documentation/tree/main/docs/components/auth_service/architechture.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Design Principles",permalink:"/docs/components/auth_service/design_principles"},next:{title:"Setup",permalink:"/docs/components/auth_service/Setup"}},c={},l=[{value:"High-Level View:",id:"high-level-view",level:3},{value:"Components:",id:"components",level:3},{value:"Communication Flow:",id:"communication-flow",level:3}],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture-overview"},"Architecture Overview"),(0,r.kt)("h3",{id:"high-level-view"},"High-Level View:"),(0,r.kt)("p",null,"The OCEN Auth Service is designed to be an integral component within the larger OCEN ecosystem. It serves as an intermediary that verifies the identity of users and ensures that their actions can be reliably traced and cannot be denied. This plays a critical role in providing security within the OCEN system."),(0,r.kt)("p",null,"The OCEN Auth Service leverages Keycloak, a powerful open-source Identity and Access Management (IAM) platform that supports OAuth 2.0 and OpenID Connect protocols. It is responsible for managing users, their roles, and their permissions within the OCEN environment. It provides a way to secure RESTful services and provide a platform for login and sign-up."),(0,r.kt)("h3",{id:"components"},"Components:"),(0,r.kt)("p",null,"The architecture of OCEN Auth Service involves the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Keycloak:")," Keycloak is at the heart of the OCEN Auth Service. It provides the features necessary for identity verification and non-repudiation. It holds user credentials and can use them to verify user identities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OAuth 2.0 and OpenID Connect Protocols:")," OAuth 2.0 is used for authorization, allowing users to verify their identity without sharing their credentials. OpenID Connect is an extension of OAuth 2.0 that provides authentication, allowing the system to verify the user's identity based on the authentication performed by an authorization server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Endpoints:")," The Auth Service provides three key endpoints:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/token"),": This endpoint is used for obtaining access and/or ID tokens.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/certs"),": This endpoint is used for obtaining the public keys or certificates used to sign Auth Service responses, including tokens.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/.well-known/openid-configuration"),": This endpoint provides OpenID Connect metadata related to the authorization server.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Detached JWS Signatures:")," As mentioned previously the Auth Service uses Detached JWS signatures for integrity and non-repudiation. These signatures provide a way to ensure that the data has not been tampered with while in transit and that the sender cannot deny sending the data."))),(0,r.kt)("h3",{id:"communication-flow"},"Communication Flow:"),(0,r.kt)("p",null,"Here is a simplified communication flow in the OCEN Auth Service architecture:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A client initiates an authentication or authorization request to the OCEN Auth Service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Auth Service uses Keycloak to verify the client's identity and, if successful, issues an access and/or ID token to the client.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The client uses this token to authenticate and authorize itself when communicating with other services within the OCEN ecosystem.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the client sends a request to another service, it includes the token in its request header. The receiving service then sends this token to the OCEN Auth Service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The OCEN Auth Service verifies the token using the public keys obtained from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/certs")," endpoint. If the verification is successful, the receiving service processes the request. If not, it rejects the request."))),(0,r.kt)("p",null,"This architecture provides a robust and secure mechanism for user authentication and authorization in the OCEN ecosystem, ensuring the integrity and non-repudiation of actions performed within the system."))}h.isMDXComponent=!0}}]);