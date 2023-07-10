"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[5197],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),y=s,k=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function k(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[d]="string"==typeof t?t:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5381:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={},o="Set Disbursement Account Response",i={type:"api",id:"set-disbursement-account-response",unversionedId:"set-disbursement-account-response",title:"Set Disbursement Account Response",description:"",slug:"/set-disbursement-account-response",frontMatter:{},api:{servers:[{url:"https://ocenapis.borrowagent.com"}],tags:["Disbursement"],description:"This API is invoked by the lender to inform the BA regarding whether the lender has successfully set the disbursement account which was sent in SetDisbursementAccountRequest.",operationId:"setDisbursementAccountResponse",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","productData","loanApplicationId","account","response"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},loanApplicationId:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},loanId:{type:"string"},response:{type:"object",description:"Status of response. Whether success or has encountered error",required:["error"],properties:{error:{type:"string"}}},account:{type:"object",required:["accountDataType","data"],properties:{id:{type:"string",examples:[""]},description:{type:"string",examples:[""]},status:{type:"string",enum:["ACTIVE","INACTIVE"]},accountDataType:{type:"string",enum:["ACCOUNT","VPA"]},data:{type:"object",properties:{accountType:{type:"string",enum:["CURRENT","SAVING","OVERDRAFT"]},accountIFSC:{type:"string",examples:["ICK000856"]},accountNumber:{type:"string",examples:["11250789101486249090"]},vpa:{type:"string",examples:[""]},maskedAccountNumber:{type:"string",examples:["XXXXXXXXX9090"]}}},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/disbursement/setDisbursementAccountResponse",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},productData:{productId:"string",networkId:"string"},loanApplicationId:"string",loanId:"string",response:{error:"string"},account:{id:"string",description:"string",status:"ACTIVE",accountDataType:"ACCOUNT",data:{accountType:"CURRENT",accountIFSC:"string",accountNumber:"string",vpa:"string",maskedAccountNumber:"string"},extensibleData:{}}},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Set Disbursement Account Response",description:{content:"This API is invoked by the lender to inform the BA regarding whether the lender has successfully set the disbursement account which was sent in SetDisbursementAccountRequest.",type:"text/plain"},url:{path:["v4.0.0alpha","disbursement","setDisbursementAccountResponse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "loanApplicationId": "<string>",\n    "account": {\n        "accountDataType": "<string>",\n        "data": {\n            "accountType": "<string>",\n            "accountIFSC": "<string>",\n            "accountNumber": "<string>",\n            "vpa": "<string>",\n            "maskedAccountNumber": "<string>"\n        },\n        "id": "<string>",\n        "description": "<string>",\n        "status": "<string>",\n        "extensibleData": "<object>"\n    },\n    "response": {\n        "error": "<string>"\n    },\n    "loanId": "<string>"\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/ocen-docs/apis/set-disbursement-account-response",previous:{title:"Set Disbursement Account Request",permalink:"/ocen-docs/apis/set-disbursement-account-request"},next:{title:"Trigger Disbursement Request",permalink:"/ocen-docs/apis/trigger-disbursement-request"}},l=[],p={toc:l},c="wrapper";function d(t){let{components:e,...n}=t;return(0,s.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"set-disbursement-account-response"},"Set Disbursement Account Response"),(0,s.kt)("p",null,"This API is invoked by the lender to inform the BA regarding whether the lender has successfully set the disbursement account which was sent in SetDisbursementAccountRequest."),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,s.kt)("div",null)))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"metadata"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Metadata specific to each API request.")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"version"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"orgId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"timestamp"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"traceId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"requestId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"productData"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Product Metadata specific to each API request.")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"productId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"networkId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"loanApplicationId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"loanId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"response"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Status of response. Whether success or has encountered error")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"account"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"description"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"status"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"ACTIVE"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"INACTIVE"),"]")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"accountDataType"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"ACCOUNT"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"VPA"),"]")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"accountType"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"CURRENT"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"SAVING"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"OVERDRAFT"),"]")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"accountIFSC"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"accountNumber"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"vpa"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"maskedAccountNumber"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"extensibleData"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))))),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{style:{display:"flex"}},(0,s.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,s.kt)("code",null,"200")),(0,s.kt)("div",null,(0,s.kt)("p",null,"Acknowledgement of Request Received"))),(0,s.kt)("div",null,(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,s.kt)("div",null)))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"traceId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"timestamp"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}d.isMDXComponent=!0}}]);