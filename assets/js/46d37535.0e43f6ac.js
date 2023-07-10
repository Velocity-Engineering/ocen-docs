"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[5126],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(n),y=o,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||a;return n?r.createElement(m,i(i({ref:e},d),{},{components:n})):r.createElement(m,i({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},23345:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Get Payment Methods Request",l={type:"api",id:"get-payment-methods-request",unversionedId:"get-payment-methods-request",title:"Get Payment Methods Request",description:"",slug:"/get-payment-methods-request",frontMatter:{},api:{servers:[{url:"https://ocenapis.lender.com"}],tags:["Collections"],description:"This endpoint is initiated by the BA on the Collections Partner before the Set Repayment Plan request to present the borrower with the available repayment methods.",operationId:"Get",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","productData"],properties:{metaData:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},productId:{type:"string"}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/collectionsPartner/getPaymentMethodsRequest",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metaData:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},productData:{productId:"string",networkId:"string"},productId:"string"},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Get Payment Methods Request",description:{content:"This endpoint is initiated by the BA on the Collections Partner before the Set Repayment Plan request to present the borrower with the available repayment methods.",type:"text/plain"},url:{path:["v4.0.0alpha","collectionsPartner","getPaymentMethodsRequest"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "metaData": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "productId": "<string>"\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/apis/get-payment-methods-request",previous:{title:"Trigger Repayment Status Response",permalink:"/apis/trigger-repayment-status-response"},next:{title:"Get Payment Methods Response",permalink:"/apis/get-payment-methods-response"}},s=[],p={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-payment-methods-request"},"Get Payment Methods Request"),(0,o.kt)("p",null,"This endpoint is initiated by the BA on the Collections Partner before the Set Repayment Plan request to present the borrower with the available repayment methods."),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"metaData"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Metadata specific to each API request.")),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"version"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"orgId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"timestamp"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"traceId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"requestId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"productData"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Product Metadata specific to each API request.")),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"productId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"networkId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"productId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Acknowledgement of Request Received"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"error"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"traceId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"timestamp"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}c.isMDXComponent=!0}}]);