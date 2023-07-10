"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[5729],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>y});var s=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,s,l=function(t,e){if(null==t)return{};var n,s,l={},i=Object.keys(t);for(s=0;s<i.length;s++)n=i[s],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)n=i[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=s.createContext({}),p=function(t){var e=s.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=p(t.components);return s.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),u=p(n),k=l,y=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return n?s.createElement(y,r(r({ref:e},d),{},{components:n})):s.createElement(y,r({ref:e},d))}));function y(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=k;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a[u]="string"==typeof t?t:l,r[1]=a;for(var p=2;p<i;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12881:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=n(87462),l=(n(67294),n(3905));const i={},r="Trigger KYC Response",a={type:"api",id:"trigger-kyc-response",unversionedId:"trigger-kyc-response",title:"Trigger KYC Response",description:"",slug:"/trigger-kyc-response",frontMatter:{},api:{servers:[{url:"https://ocenapis.borrowagent.com"}],tags:["KYC"],description:"This API is called by the lender in response to trigger KYC requests. The lender returns the url for KYC details submission. The KYC process will be carried out on the lender server.",operationId:"TriggerKYCResponse",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","response","productData","loanApplicationId","kyc"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId","requestId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"},requestId:{type:"string",description:"UUID used to tie request and response and for idempotency"}}},response:{type:"object",description:"Status of response. Whether success or has encountered error",required:["error"],properties:{error:{type:"string"}}},productData:{title:"productData",type:"object",description:"Product Metadata specific to each API request.",required:["networkId","productId"],properties:{productId:{type:"string"},networkId:{type:"string"}}},loanApplicationId:{type:"string",examples:["t8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},kyc:{type:"object",properties:{kycRefNo:{type:"string"},individualKYC:{type:"object",properties:{kycRefNo:{type:"string"},type:{type:"string",enum:["CKYC","UDYAM","OFFLINE_AADHAAR"]},url:{type:"string"},status:{type:"string",enum:["SUCCESS","REJECTED","PENDING","ACTION_REQUIRED"]},description:{type:"string"},udyamRegistrationNumber:{type:"string"},businessType:{type:"string",enum:["MICRO","SMALL","MEDIUM"]},businessCategory:{type:"string",enum:["SERVICE","MANUFACTURING"]},businessName:{type:"string"},businessAddress:{},businessEmail:{type:"string"},businessPhoneNumber:{type:"string"},incorporationDate:{type:"string"},businessCommencementDate:{type:"string"},udyamRegistrationDate:{type:"string"},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."},fullName:{type:"string"},dob:{type:"string"},address:{title:"Root",type:"object",required:["hba","srl","pinCode","state","country"],properties:{hba:{type:"string",examples:["<House/Building/Apartment>"]},srl:{type:"string",examples:["<Street/Road/Lane>"]},landmark:{type:"string"},als:{type:"string",examples:["<Area/Locality/Sector>"]},vtc:{type:"string",examples:["<Village/Town/City>"]},pinCode:{type:"string",examples:[""]},po:{type:"string",examples:[""]},district:{type:"string",examples:[""]},state:{type:"string",examples:[""]},country:{type:"string",examples:[""]},url:{type:"string",examples:["<digital address>"]},latitude:{type:"string",examples:[""]},longitude:{type:"string",examples:[""]},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}}}},entityKYC:{type:"object",properties:{kycRefNo:{type:"string"},type:{type:"string",enum:["CKYC","UDYAM","OFFLINE_AADHAAR"]},url:{type:"string"},status:{type:"string",enum:["SUCCESS","REJECTED","PENDING","ACTION_REQUIRED"]},description:{type:"string"},udyamRegistrationNumber:{type:"string"},businessType:{type:"string",enum:["MICRO","SMALL","MEDIUM"]},businessCategory:{type:"string",enum:["SERVICE","MANUFACTURING"]},businessName:{type:"string"},businessAddress:{},businessEmail:{type:"string"},businessPhoneNumber:{type:"string"},incorporationDate:{type:"string"},businessCommencementDate:{type:"string"},udyamRegistrationDate:{type:"string"},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."},fullName:{type:"string"},dob:{type:"string"},address:{title:"Root",type:"object",required:["hba","srl","pinCode","state","country"],properties:{hba:{type:"string",examples:["<House/Building/Apartment>"]},srl:{type:"string",examples:["<Street/Road/Lane>"]},landmark:{type:"string"},als:{type:"string",examples:["<Area/Locality/Sector>"]},vtc:{type:"string",examples:["<Village/Town/City>"]},pinCode:{type:"string",examples:[""]},po:{type:"string",examples:[""]},district:{type:"string",examples:[""]},state:{type:"string",examples:[""]},country:{type:"string",examples:[""]},url:{type:"string",examples:["<digital address>"]},latitude:{type:"string",examples:[""]},longitude:{type:"string",examples:[""]},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}}}},extensibleData:{type:"object",description:"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements."}}}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/offers/triggerKycResponse",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string",requestId:"string"},response:{error:"string"},productData:{productId:"string",networkId:"string"},loanApplicationId:"string",kyc:{kycRefNo:"string",individualKYC:{kycRefNo:"string",type:"CKYC",url:"string",status:"SUCCESS",description:"string",udyamRegistrationNumber:"string",businessType:"MICRO",businessCategory:"SERVICE",businessName:"string",businessEmail:"string",businessPhoneNumber:"string",incorporationDate:"string",businessCommencementDate:"string",udyamRegistrationDate:"string",extensibleData:{},fullName:"string",dob:"string",address:{hba:"string",srl:"string",landmark:"string",als:"string",vtc:"string",pinCode:"string",po:"string",district:"string",state:"string",country:"string",url:"string",latitude:"string",longitude:"string",extensibleData:{}}},entityKYC:{kycRefNo:"string",type:"CKYC",url:"string",status:"SUCCESS",description:"string",udyamRegistrationNumber:"string",businessType:"MICRO",businessCategory:"SERVICE",businessName:"string",businessEmail:"string",businessPhoneNumber:"string",incorporationDate:"string",businessCommencementDate:"string",udyamRegistrationDate:"string",extensibleData:{},fullName:"string",dob:"string",address:{hba:"string",srl:"string",landmark:"string",als:"string",vtc:"string",pinCode:"string",po:"string",district:"string",state:"string",country:"string",url:"string",latitude:"string",longitude:"string",extensibleData:{}}},extensibleData:{}}},info:{version:"1.0.0",title:"OCEN",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Trigger KYC Response",description:{content:"This API is called by the lender in response to trigger KYC requests. The lender returns the url for KYC details submission. The KYC process will be carried out on the lender server.",type:"text/plain"},url:{path:["v4.0.0alpha","offers","triggerKycResponse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>",\n        "requestId": "<string>"\n    },\n    "response": {\n        "error": "<string>"\n    },\n    "productData": {\n        "networkId": "<string>",\n        "productId": "<string>"\n    },\n    "loanApplicationId": "<string>",\n    "kyc": {\n        "kycRefNo": "<string>",\n        "individualKYC": {\n            "kycRefNo": "<string>",\n            "type": "<string>",\n            "url": "<string>",\n            "status": "<string>",\n            "description": "<string>",\n            "udyamRegistrationNumber": "<string>",\n            "businessType": "<string>",\n            "businessCategory": "<string>",\n            "businessName": "<string>",\n            "businessAddress": "schema type not provided",\n            "businessEmail": "<string>",\n            "businessPhoneNumber": "<string>",\n            "incorporationDate": "<string>",\n            "businessCommencementDate": "<string>",\n            "udyamRegistrationDate": "<string>",\n            "extensibleData": "<object>",\n            "fullName": "<string>",\n            "dob": "<string>",\n            "address": {\n                "hba": "<string>",\n                "srl": "<string>",\n                "pinCode": "<string>",\n                "state": "<string>",\n                "country": "<string>",\n                "landmark": "<string>",\n                "als": "<string>",\n                "vtc": "<string>",\n                "po": "<string>",\n                "district": "<string>",\n                "url": "<string>",\n                "latitude": "<string>",\n                "longitude": "<string>",\n                "extensibleData": "<object>"\n            }\n        },\n        "entityKYC": {\n            "kycRefNo": "<string>",\n            "type": "<string>",\n            "url": "<string>",\n            "status": "<string>",\n            "description": "<string>",\n            "udyamRegistrationNumber": "<string>",\n            "businessType": "<string>",\n            "businessCategory": "<string>",\n            "businessName": "<string>",\n            "businessAddress": "schema type not provided",\n            "businessEmail": "<string>",\n            "businessPhoneNumber": "<string>",\n            "incorporationDate": "<string>",\n            "businessCommencementDate": "<string>",\n            "udyamRegistrationDate": "<string>",\n            "extensibleData": "<object>",\n            "fullName": "<string>",\n            "dob": "<string>",\n            "address": {\n                "hba": "<string>",\n                "srl": "<string>",\n                "pinCode": "<string>",\n                "state": "<string>",\n                "country": "<string>",\n                "landmark": "<string>",\n                "als": "<string>",\n                "vtc": "<string>",\n                "po": "<string>",\n                "district": "<string>",\n                "url": "<string>",\n                "latitude": "<string>",\n                "longitude": "<string>",\n                "extensibleData": "<object>"\n            }\n        },\n        "extensibleData": "<object>"\n    }\n}'}}},source:"@site/apis/OCEN/loan.json",sourceDirName:"OCEN",permalink:"/ocen-docs/apis/trigger-kyc-response",previous:{title:"Trigger KYC Request",permalink:"/ocen-docs/apis/trigger-kyc-request"},next:{title:"KYC Status Request",permalink:"/ocen-docs/apis/kyc-status-request"}},o=[],p={toc:o},d="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,s.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"trigger-kyc-response"},"Trigger KYC Response"),(0,l.kt)("p",null,"This API is called by the lender in response to trigger KYC requests. The lender returns the url for KYC details submission. The KYC process will be carried out on the lender server."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"metadata"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Metadata specific to each API request.")),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"version"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"orgId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"timestamp"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"traceId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"requestId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"UUID used to tie request and response and for idempotency")))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"response"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Status of response. Whether success or has encountered error")),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"error"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"productData"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Product Metadata specific to each API request.")),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"productId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"networkId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"loanApplicationId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"kyc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"kycRefNo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"individualKYC"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"kycRefNo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"CKYC"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UDYAM"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OFFLINE_AADHAAR"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"url"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"status"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"REJECTED"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PENDING"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ACTION_REQUIRED"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"description"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"udyamRegistrationNumber"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessType"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"MICRO"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SMALL"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MEDIUM"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessCategory"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"SERVICE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MANUFACTURING"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessName"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessAddress"),(0,l.kt)("span",{style:{opacity:"0.6"}}," "))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessEmail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessPhoneNumber"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"incorporationDate"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessCommencementDate"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"udyamRegistrationDate"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"extensibleData"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"fullName"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"dob"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"address"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"hba"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"srl"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"landmark"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"als"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"vtc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"pinCode"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"po"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"district"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"state"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"country"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"url"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"latitude"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"longitude"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"extensibleData"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"entityKYC"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"kycRefNo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"CKYC"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UDYAM"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OFFLINE_AADHAAR"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"url"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"status"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"REJECTED"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PENDING"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ACTION_REQUIRED"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"description"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"udyamRegistrationNumber"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessType"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"MICRO"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SMALL"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MEDIUM"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessCategory"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"SERVICE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MANUFACTURING"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessName"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessAddress"),(0,l.kt)("span",{style:{opacity:"0.6"}}," "))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessEmail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessPhoneNumber"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"incorporationDate"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"businessCommencementDate"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"udyamRegistrationDate"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"extensibleData"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"fullName"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"dob"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"address"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"hba"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"srl"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"landmark"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"als"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"vtc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"pinCode"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"po"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"district"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"state"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"country"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"url"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"latitude"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"longitude"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"extensibleData"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"extensibleData"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"This API schema is for additional keys & values according to specific need. User can add JSON objects as per the requirements.")))))))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Acknowledgement of Request Received"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"error"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"traceId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"timestamp"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);