"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[4785],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),y=o,k=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58569:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Trigger Loan Acceptance Response",s={type:"api",id:"trigger-loan-acceptance-response",unversionedId:"trigger-loan-acceptance-response",title:"Trigger Loan Acceptance Response",description:"",slug:"/trigger-loan-acceptance-response",frontMatter:{},api:{servers:[{url:"https://ocenapis.borrowagent.com"}],tags:["Loan Acceptance"],description:"SMS Format for the OTP [#] {6Digit OTP} is the One Time Password (OTP) to complete the loan process with {Lender Name}. {appToken} >- Eg- 467866 is the One Time Password (OTP) to complete the loan process with ABC Bank. \\#0aBCD7DMr7s >- This API is invoked by the Lender when the Lender triggers the credential verification process from the borrower.",operationId:"triggerLoanAcceptanceResponse",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","productData","response","credBlock"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},response:{type:"object",description:"Status of response. Whether success or has encountered error",required:["error"],properties:{error:{type:"string"}}},loanApplicationIds:{type:"array",items:{type:"string"}},credBlock:{type:"object",properties:{data:{type:"object",properties:{otpSessionKey:{type:"string"},maskedPhoneNumber:{type:"string",examples:["XXXXXXX775"]}}},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/loanAcceptance/triggerLoanAcceptanceResponse",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},productData:{productId:"string",networkId:"string"},response:{error:"string"},loanApplicationIds:["string"],credBlock:{data:{otpSessionKey:"string",maskedPhoneNumber:"string"},extensibleData:{}}},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Trigger Loan Acceptance Response",description:{content:"SMS Format for the OTP [#] {6Digit OTP} is the One Time Password (OTP) to complete the loan process with {Lender Name}. {appToken} >- Eg- 467866 is the One Time Password (OTP) to complete the loan process with ABC Bank. \\#0aBCD7DMr7s >- This API is invoked by the Lender when the Lender triggers the credential verification process from the borrower.",type:"text/plain"},url:{path:["v4.0.0alpha","loanAcceptance","triggerLoanAcceptanceResponse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "response": {\n        "error": "<string>"\n    },\n    "credBlock": {\n        "data": {\n            "otpSessionKey": "<string>",\n            "maskedPhoneNumber": "<string>"\n        },\n        "extensibleData": "<object>"\n    },\n    "loanApplicationIds": [\n        "<string>",\n        "<string>"\n    ]\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/apis/trigger-loan-acceptance-response",previous:{title:"Trigger Loan Acceptance Request",permalink:"/apis/trigger-loan-acceptance-request"},next:{title:"Verify Loan Acceptance Request",permalink:"/apis/verify-loan-acceptance-request"}},l=[],p={toc:l},c="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trigger-loan-acceptance-response"},"Trigger Loan Acceptance Response"),(0,o.kt)("p",null,"SMS Format for the OTP ","[#]"," {6Digit OTP} is the One Time Password (OTP) to complete the loan process with {Lender Name}. {appToken} >- Eg- 467866 is the One Time Password (OTP) to complete the loan process with ABC Bank. ","#","0aBCD7DMr7s >- This API is invoked by the Lender when the Lender triggers the credential verification process from the borrower."),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"metadata"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Metadata specific to each API request.")),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"version"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"orgId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"timestamp"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"traceId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"requestId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"productData"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Product Metadata specific to each API request.")),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"productId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"networkId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"response"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Status of response. Whether success or has encountered error")),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"error"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"loanApplicationIds"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"credBlock"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"otpSessionKey"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"maskedPhoneNumber"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"extensibleData"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Acknowledgement of Request Received"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"error"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"traceId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"timestamp"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}d.isMDXComponent=!0}}]);