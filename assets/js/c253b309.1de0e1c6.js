"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[1614],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,i=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),y=s,k=u["".concat(l,".").concat(y)]||u[y]||c[y]||i;return n?r.createElement(k,a(a({ref:e},d),{},{components:n})):r.createElement(k,a({ref:e},d))}));function k(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=n.length,a=new Array(i);a[0]=y;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[u]="string"==typeof t?t:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6470:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const i={},a="Trigger Disbursement Status Response",o={type:"api",id:"trigger-disbursement-status-response",unversionedId:"trigger-disbursement-status-response",title:"Trigger Disbursement Status Response",description:"",slug:"/trigger-disbursement-status-response",frontMatter:{},api:{servers:[{url:"https://ocenapis.borrowagent.com"}],tags:["Disbursement"],description:"This API is the response given by lender for  a trigger Disbursement Status Request.",operationId:"triggerDisbursementStatusResponse",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","loanId","productData","payment","response"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},loanId:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},response:{type:"object",description:"Status of response. Whether success or has encountered error",required:["error"],properties:{error:{type:"string"}}},payment:{type:"object",properties:{id:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},amount:{type:"string"},date:{type:"string"},status:{type:"string",enum:["SUCCESS","FAILURE","PENDING_AUTH"]},installmentNumber:{type:"string"},txnRefNo:{type:"string",examples:[4618602124]}}}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/disbursement/triggerDisbursementStatusResponse",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},loanId:"string",productData:{productId:"string",networkId:"string"},response:{error:"string"},payment:{id:"string",amount:"string",date:"string",status:"SUCCESS",installmentNumber:"string",txnRefNo:"string"}},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Trigger Disbursement Status Response",description:{content:"This API is the response given by lender for  a trigger Disbursement Status Request.",type:"text/plain"},url:{path:["v4.0.0alpha","disbursement","triggerDisbursementStatusResponse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "loanId": "<string>",\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "payment": {\n        "id": "<string>",\n        "amount": "<string>",\n        "date": "<string>",\n        "status": "<string>",\n        "installmentNumber": "<string>",\n        "txnRefNo": "<string>"\n    },\n    "response": {\n        "error": "<string>"\n    }\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/apis/trigger-disbursement-status-response",previous:{title:"Trigger Disbursement Status Request",permalink:"/apis/trigger-disbursement-status-request"},next:{title:"Trigger Repayment Request",permalink:"/apis/trigger-repayment-request"}},l=[],p={toc:l},d="wrapper";function u(t){let{components:e,...n}=t;return(0,s.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"trigger-disbursement-status-response"},"Trigger Disbursement Status Response"),(0,s.kt)("p",null,"This API is the response given by lender for  a trigger Disbursement Status Request."),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,s.kt)("div",null)))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"metadata"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Metadata specific to each API request.")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"version"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"orgId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"timestamp"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"traceId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"requestId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"loanId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"productData"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Product Metadata specific to each API request.")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"productId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"networkId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"response"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Status of response. Whether success or has encountered error")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"payment"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"amount"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"status"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"FAILURE"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"PENDING_AUTH"),"]")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"installmentNumber"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"txnRefNo"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{style:{display:"flex"}},(0,s.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,s.kt)("code",null,"200")),(0,s.kt)("div",null,(0,s.kt)("p",null,"Acknowledgement of Request Received"))),(0,s.kt)("div",null,(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,s.kt)("div",null)))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"traceId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"timestamp"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);