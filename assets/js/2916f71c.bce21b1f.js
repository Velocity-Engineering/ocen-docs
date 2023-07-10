"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[1586],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),y=r,k=c["".concat(s,".").concat(y)]||c[y]||u[y]||i;return n?l.createElement(k,a(a({ref:e},d),{},{components:n})):l.createElement(k,a({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},39318:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const i={},a="Trigger Collections Request",o={type:"api",id:"trigger-collections-request",unversionedId:"trigger-collections-request",title:"Trigger Collections Request",description:"",slug:"/trigger-collections-request",frontMatter:{},api:{servers:[{url:"https://ocenapis.lender.com"}],tags:["Collections"],description:"This API is invoked by the Lender to inform the Collections partner to trigger a repayment. This API will only be called when payment is routed to lender via collection agent.",operationId:"triggerCollectionsRequest",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","productData","payment","loanId"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},payment:{type:"object",required:["id"],properties:{totalAmount:{type:"string"},date:{type:"string"},status:{type:"string",enum:["SUCCESS","FAILURE","PENDING_AUTH"]},installmentNumber:{type:"string"},txnRefNo:{type:"string",examples:[4618602124]},id:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},description:{type:"string"},principal:{type:"string"},interestAmount:{type:"string"},fee:{type:"string"},penalty:{type:"string"},useSavedPaymentOption:{type:"boolean",examples:[!1]},paymentMethodType:{type:"string",default:"",enum:["UPI","EMANDATE_UPI","NETBANKING","ENACH","DEBIT_CARD"]},paymentUrl:{type:"string",examples:["https://abc-bank/payment"]},url:{type:"string"},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}},paymentMethod:{type:"object",required:["id","status"],properties:{id:{type:"string"},description:{type:"string"},type:{type:"string",enum:["EMANDATE_UPI","ELIEN","ENACH","ANY"]},status:{type:"string",enum:["INACTIVE","ACTIVE","CANCELLED","PAUSE"]},data:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."},url:{type:"string"},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}},loanId:{type:"string"}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/collectionsPartner/triggerCollectionsRequest",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},productData:{productId:"string",networkId:"string"},payment:{totalAmount:"string",date:"string",status:"SUCCESS",installmentNumber:"string",txnRefNo:"string",id:"string",description:"string",principal:"string",interestAmount:"string",fee:"string",penalty:"string",useSavedPaymentOption:!0,paymentMethodType:"UPI",paymentUrl:"string",url:"string",extensibleData:{}},paymentMethod:{id:"string",description:"string",type:"EMANDATE_UPI",status:"INACTIVE",data:{},url:"string",extensibleData:{}},loanId:"string"},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Trigger Collections Request",description:{content:"This API is invoked by the Lender to inform the Collections partner to trigger a repayment. This API will only be called when payment is routed to lender via collection agent.",type:"text/plain"},url:{path:["v4.0.0alpha","collectionsPartner","triggerCollectionsRequest"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "payment": {\n        "id": "<string>",\n        "totalAmount": "<string>",\n        "date": "<string>",\n        "status": "<string>",\n        "installmentNumber": "<string>",\n        "txnRefNo": "<string>",\n        "description": "<string>",\n        "principal": "<string>",\n        "interestAmount": "<string>",\n        "fee": "<string>",\n        "penalty": "<string>",\n        "useSavedPaymentOption": "<boolean>",\n        "paymentMethodType": "",\n        "paymentUrl": "<string>",\n        "url": "<string>",\n        "extensibleData": "<object>"\n    },\n    "loanId": "<string>",\n    "paymentMethod": {\n        "id": "<string>",\n        "status": "<string>",\n        "description": "<string>",\n        "type": "<string>",\n        "data": "<object>",\n        "url": "<string>",\n        "extensibleData": "<object>"\n    }\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/apis/trigger-collections-request",previous:{title:"Get Payment Methods Response",permalink:"/apis/get-payment-methods-response"},next:{title:"Trigger Collections Response",permalink:"/apis/trigger-collections-response"}},s=[],p={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trigger-collections-request"},"Trigger Collections Request"),(0,r.kt)("p",null,"This API is invoked by the Lender to inform the Collections partner to trigger a repayment. This API will only be called when payment is routed to lender via collection agent."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Metadata specific to each API request.")),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"version"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"orgId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"timestamp"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"traceId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"requestId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"productData"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Product Metadata specific to each API request.")),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"productId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"networkId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"payment"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"totalAmount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"status"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PENDING_AUTH"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"installmentNumber"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"txnRefNo"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"principal"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"interestAmount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"fee"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"penalty"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"useSavedPaymentOption"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"paymentMethodType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"UPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EMANDATE_UPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NETBANKING"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ENACH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBIT_CARD"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"paymentUrl"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"extensibleData"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"paymentMethod"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"EMANDATE_UPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ELIEN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ENACH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ANY"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"status"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"INACTIVE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTIVE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CANCELLED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PAUSE"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"extensibleData"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loanId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Acknowledgement of Request Received"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"error"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"traceId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"timestamp"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}c.isMDXComponent=!0}}]);