"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[5394],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(n),y=r,k=c["".concat(o,".").concat(y)]||c[y]||u[y]||i;return n?l.createElement(k,a(a({ref:e},d),{},{components:n})):l.createElement(k,a({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7544:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var l=n(87462),r=(n(67294),n(3905));const i={},a="Get Loan Response",s={type:"api",id:"get-loan-response",unversionedId:"get-loan-response",title:"Get Loan Response",description:"",slug:"/get-loan-response",frontMatter:{},api:{servers:[{url:"https://ocenapis.borrowagent.com"}],tags:["Loan Details"],description:"This method is called by the Lender and it returns all the details of the loan.",operationId:"getLoanResponse",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","response","productData","loanId","lenderAccount","loanStatus","createdDate","startDate","endDate","summary"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},response:{type:"object",description:"Status of response. Whether success or has encountered error",required:["error"],properties:{error:{type:"string"}}},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},loanId:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},lenderAccount:{type:"object",required:["accountDataType","data"]},loanStatus:{type:"string",enum:["GRANTED","REJECTED","ACTIVE","DEFAULTED","OVERDUE","ACTION_REQUIRED"]},createdDate:{type:"string"},startDate:{type:"string"},endDate:{type:"string"},summary:{type:"object",required:["nextRepayment","currentRepayment","principalPaid","interestPaid","penaltyPaid","principalPending","interestPending","amountDisbursed","amountRepaid","tenure","description"],properties:{nextRepayment:{type:"object",required:["id"],properties:{totalAmount:{type:"string"},date:{type:"string"},status:{type:"string",enum:["SUCCESS","FAILURE","PENDING_AUTH"]},installmentNumber:{type:"string"},txnRefNo:{type:"string",examples:[4618602124]},id:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},description:{type:"string"},principal:{type:"string"},interestAmount:{type:"string"},fee:{type:"string"},penalty:{type:"string"},useSavedPaymentOption:{type:"boolean",examples:[!1]},paymentMethodType:{type:"string",default:"",enum:["UPI","EMANDATE_UPI","NETBANKING","ENACH","DEBIT_CARD"]},paymentUrl:{type:"string",examples:["https://abc-bank/payment"]},url:{type:"string"},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}},currentRepayment:{type:"object",required:["id"],properties:{totalAmount:{type:"string"},date:{type:"string"},status:{type:"string",enum:["SUCCESS","FAILURE","PENDING_AUTH"]},installmentNumber:{type:"string"},txnRefNo:{type:"string",examples:[4618602124]},id:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},description:{type:"string"},principal:{type:"string"},interestAmount:{type:"string"},fee:{type:"string"},penalty:{type:"string"},useSavedPaymentOption:{type:"boolean",examples:[!1]},paymentMethodType:{type:"string",default:"",enum:["UPI","EMANDATE_UPI","NETBANKING","ENACH","DEBIT_CARD"]},paymentUrl:{type:"string",examples:["https://abc-bank/payment"]},url:{type:"string"},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}},principalPaid:{type:"string"},interestPaid:{type:"string"},penaltyPaid:{type:"string"},principalPending:{type:"string"},interestPending:{type:"string"},amountDisbursed:{type:"string"},amountRepaid:{type:"string"},tenure:{type:"object",required:["duration","unit"],properties:{duration:{type:"string"},unit:{type:"string",enum:["MONTH","DAY","YEAR"]}}},description:{type:"string",examples:["short description for the loan"]}}}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/loanDetails/getloanResponse",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},response:{error:"string"},productData:{productId:"string",networkId:"string"},loanId:"string",lenderAccount:{},loanStatus:"GRANTED",createdDate:"string",startDate:"string",endDate:"string",summary:{nextRepayment:{totalAmount:"string",date:"string",status:"SUCCESS",installmentNumber:"string",txnRefNo:"string",id:"string",description:"string",principal:"string",interestAmount:"string",fee:"string",penalty:"string",useSavedPaymentOption:!0,paymentMethodType:"UPI",paymentUrl:"string",url:"string",extensibleData:{}},currentRepayment:{totalAmount:"string",date:"string",status:"SUCCESS",installmentNumber:"string",txnRefNo:"string",id:"string",description:"string",principal:"string",interestAmount:"string",fee:"string",penalty:"string",useSavedPaymentOption:!0,paymentMethodType:"UPI",paymentUrl:"string",url:"string",extensibleData:{}},principalPaid:"string",interestPaid:"string",penaltyPaid:"string",principalPending:"string",interestPending:"string",amountDisbursed:"string",amountRepaid:"string",tenure:{duration:"string",unit:"MONTH"},description:"string"}},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Get Loan Response",description:{content:"This method is called by the Lender and it returns all the details of the loan.",type:"text/plain"},url:{path:["v4.0.0alpha","loanDetails","getloanResponse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "response": {\n        "error": "<string>"\n    },\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "loanId": "<string>",\n    "lenderAccount": "<object>",\n    "loanStatus": "<string>",\n    "createdDate": "<string>",\n    "startDate": "<string>",\n    "endDate": "<string>",\n    "summary": {\n        "nextRepayment": {\n            "id": "<string>",\n            "totalAmount": "<string>",\n            "date": "<string>",\n            "status": "<string>",\n            "installmentNumber": "<string>",\n            "txnRefNo": "<string>",\n            "description": "<string>",\n            "principal": "<string>",\n            "interestAmount": "<string>",\n            "fee": "<string>",\n            "penalty": "<string>",\n            "useSavedPaymentOption": "<boolean>",\n            "paymentMethodType": "",\n            "paymentUrl": "<string>",\n            "url": "<string>",\n            "extensibleData": "<object>"\n        },\n        "currentRepayment": {\n            "id": "<string>",\n            "totalAmount": "<string>",\n            "date": "<string>",\n            "status": "<string>",\n            "installmentNumber": "<string>",\n            "txnRefNo": "<string>",\n            "description": "<string>",\n            "principal": "<string>",\n            "interestAmount": "<string>",\n            "fee": "<string>",\n            "penalty": "<string>",\n            "useSavedPaymentOption": "<boolean>",\n            "paymentMethodType": "",\n            "paymentUrl": "<string>",\n            "url": "<string>",\n            "extensibleData": "<object>"\n        },\n        "principalPaid": "<string>",\n        "interestPaid": "<string>",\n        "penaltyPaid": "<string>",\n        "principalPending": "<string>",\n        "interestPending": "<string>",\n        "amountDisbursed": "<string>",\n        "amountRepaid": "<string>",\n        "tenure": {\n            "duration": "<string>",\n            "unit": "<string>"\n        },\n        "description": "<string>"\n    }\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/apis/get-loan-response",previous:{title:"Get Loan Request",permalink:"/apis/get-loan-request"},next:{title:"List Loans Request",permalink:"/apis/list-loans-request"}},o=[],p={toc:o},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-loan-response"},"Get Loan Response"),(0,r.kt)("p",null,"This method is called by the Lender and it returns all the details of the loan."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Metadata specific to each API request.")),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"version"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"orgId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"timestamp"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"traceId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"requestId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"response"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Status of response. Whether success or has encountered error")),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"error"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"productData"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Product Metadata specific to each API request.")),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"productId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"networkId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loanId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lenderAccount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loanStatus"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"GRANTED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REJECTED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTIVE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULTED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"OVERDUE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTION_REQUIRED"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"createdDate"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"startDate"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"endDate"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"summary"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"nextRepayment"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"totalAmount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"status"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PENDING_AUTH"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"installmentNumber"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"txnRefNo"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"principal"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"interestAmount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"fee"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"penalty"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"useSavedPaymentOption"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"paymentMethodType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"UPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EMANDATE_UPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NETBANKING"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ENACH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBIT_CARD"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"paymentUrl"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"extensibleData"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"currentRepayment"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"totalAmount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"status"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILURE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PENDING_AUTH"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"installmentNumber"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"txnRefNo"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"principal"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"interestAmount"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"fee"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"penalty"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"useSavedPaymentOption"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"paymentMethodType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"UPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EMANDATE_UPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NETBANKING"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ENACH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBIT_CARD"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"paymentUrl"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"extensibleData"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"principalPaid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"interestPaid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"penaltyPaid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"principalPending"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"interestPending"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"amountDisbursed"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"amountRepaid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"tenure"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"duration"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"unit"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"MONTH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"YEAR"),"]")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Acknowledgement of Request Received"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"error"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"traceId"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"timestamp"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}c.isMDXComponent=!0}}]);