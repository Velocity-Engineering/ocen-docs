"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[5969],{3905:(t,e,l)=>{l.d(e,{Zo:()=>y,kt:()=>u});var n=l(67294);function o(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){o(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function r(t,e){if(null==t)return{};var l,n,o=function(t,e){if(null==t)return{};var l,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(o[l]=t[l]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(o[l]=t[l])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},y=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,y=r(t,["components","mdxType","originalType","parentName"]),d=s(l),k=o,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return l?n.createElement(u,i(i({ref:e},y),{},{components:l})):n.createElement(u,i({ref:e},y))}));function u(t,e){var l=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=l.length,i=new Array(a);i[0]=k;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r[d]="string"==typeof t?t:o,i[1]=r;for(var s=2;s<a;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},33739:(t,e,l)=>{l.r(e),l.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var n=l(87462),o=(l(67294),l(3905));const a={},i="Get Product Metadata.",r={type:"api",id:"get-product-metadata",unversionedId:"get-product-metadata",title:"Get Product Metadata.",description:"",slug:"/get-product-metadata",frontMatter:{},api:{operationId:"getProductMetadata",tags:["Product Registry"],parameters:[{name:"id",in:"path",description:"Product ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"Returns a product",content:{"application/json":{schema:{type:"object",properties:{data:{type:"object",required:["id","name","description","status","version"],properties:{id:{type:"string"},name:{type:"string"},type:{type:"string"},description:{type:"string"},creater:{type:"string"},is_enable:{type:"boolean"},is_private:{type:"boolean"},approved_at:{type:"integer",format:"int64"},is_aa_required:{type:"boolean"},dedupe:{type:"object",properties:{source:{type:"object",properties:{url:{type:"string"}}}}},network:{type:"object",required:["id","name","description"],properties:{id:{type:"string"},name:{type:"string"},description:{type:"string"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"}}}}}},lender:{type:"object",properties:{allowed:{type:"boolean"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"}}}}}},loan_service:{type:"object",properties:{allowed:{type:"boolean"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"}}}}}},benchmark_data:{type:"object",properties:{allowed:{type:"boolean"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"}}}},fields:{type:"array",items:{type:"object",required:["name","description"],properties:{name:{type:"string"},description:{type:"string"}}}}}},disbursement:{type:"object",properties:{allowed:{type:"boolean"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"},data:{type:"object"}}}},fields:{type:"array",items:{type:"object",required:["name","description"],properties:{name:{type:"string"},description:{type:"string"}}}}}},collection:{type:"object",properties:{allowed:{type:"boolean"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"}}}}}},collateral:{type:"object",properties:{allowed:{type:"boolean"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"}}}}}},monitoring:{type:"object",properties:{allowed:{type:"boolean"},partners:{type:"array",items:{type:"object",required:["id","type","name","status"],properties:{id:{type:"string"},type:{type:"string"},name:{type:"string"},status:{type:"string"}}}}}}}}}}}}},400:{description:"Invalid request"},404:{description:"Not found"}},description:"Get Product Metadata.",method:"get",path:"/products/{id}/metadata",security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},info:{version:"1.0.0",title:"Product Registry",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"}},postman:{name:"Get Product Metadata.",description:{type:"text/plain"},url:{path:["products",":id","metadata"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) Product ID",type:"text/plain"},type:"any",value:"<string>",key:"id"}]},method:"GET"}},source:"@site/apis/products/products.json",sourceDirName:"products",permalink:"/apis/get-product-metadata",previous:{title:"Trigger Collections Response",permalink:"/apis/trigger-collections-response"},next:{title:"Get Fields By Participant Type.",permalink:"/apis/get-fields-by-participant-type"}},p=[],s={toc:p},y="wrapper";function d(t){let{components:e,...l}=t;return(0,o.kt)(y,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-product-metadata"},"Get Product Metadata."),(0,o.kt)("p",null,"Get Product Metadata."),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Product ID")))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"200")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Returns a product"))),(0,o.kt)("div",null,(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("div",null)))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"description"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"creater"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"is_enable"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"is_private"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"approved_at"),(0,o.kt)("span",{style:{opacity:"0.6"}}," int64"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"is_aa_required"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"dedupe"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"source"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"url"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"network"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"description"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"lender"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"loan_service"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"benchmark_data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fields"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"description"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"disbursement"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fields"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"description"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"collection"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"collateral"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"monitoring"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowed"),(0,o.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partners"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,o.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"id"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"name"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"status"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))))))))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"400")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid request"))),(0,o.kt)("div",null))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,o.kt)("code",null,"404")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Not found"))),(0,o.kt)("div",null))))))}d.isMDXComponent=!0}}]);