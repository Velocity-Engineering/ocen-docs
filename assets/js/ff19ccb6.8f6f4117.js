"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[4704],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,s=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(r),y=i,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||s;return r?n.createElement(m,a(a({ref:e},u),{},{components:r})):n.createElement(m,a({ref:e},u))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=r.length,a=new Array(s);a[0]=y;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[d]="string"==typeof t?t:i,a[1]=o;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},84729:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const s={},a="Trigger Disbursement Status Request",o={type:"api",id:"trigger-disbursement-status-request",unversionedId:"trigger-disbursement-status-request",title:"Trigger Disbursement Status Request",description:"",slug:"/trigger-disbursement-status-request",frontMatter:{},api:{servers:[{url:"https://ocenapis.lender.com"}],tags:["Disbursement"],description:"This API is to be used by BA to check the status of a previously initiated disbursement request.",operationId:"triggerDisbursementStatusRequest",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","loanId","productData","payment"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},loanId:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},payment:{type:"object",properties:{id:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]}}}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/disbursement/triggerDisbursementStatusRequest",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},loanId:"string",productData:{productId:"string",networkId:"string"},payment:{id:"string"}},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Trigger Disbursement Status Request",description:{content:"This API is to be used by BA to check the status of a previously initiated disbursement request.",type:"text/plain"},url:{path:["v4.0.0alpha","disbursement","triggerDisbursementStatusRequest"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "loanId": "<string>",\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "payment": {\n        "id": "<string>"\n    }\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/apis/trigger-disbursement-status-request",previous:{title:"Trigger Disbursement Response",permalink:"/apis/trigger-disbursement-response"},next:{title:"Trigger Disbursement Status Response",permalink:"/apis/trigger-disbursement-status-response"}},l=[],p={toc:l},u="wrapper";function d(t){let{components:e,...r}=t;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trigger-disbursement-status-request"},"Trigger Disbursement Status Request"),(0,i.kt)("p",null,"This API is to be used by BA to check the status of a previously initiated disbursement request."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"metadata"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Metadata specific to each API request.")),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"version"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"orgId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"timestamp"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"traceId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"requestId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"loanId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"productData"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Product Metadata specific to each API request.")),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"productId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"networkId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"payment"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Acknowledgement of Request Received"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"error"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"traceId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"timestamp"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}d.isMDXComponent=!0}}]);