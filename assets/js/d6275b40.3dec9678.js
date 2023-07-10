"use strict";(self.webpackChunkocen=self.webpackChunkocen||[]).push([[3310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=d(n),u=s,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:s,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10366:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={},i="Trigger Disbursement Response",a={type:"api",id:"trigger-disbursement-response",unversionedId:"trigger-disbursement-response",title:"Trigger Disbursement Response",description:"",slug:"/trigger-disbursement-response",frontMatter:{},api:{servers:[{url:"https://ocenapis.borrowagent.com"}],tags:["Disbursement Lender to BA"],description:"This API is to be used when the borrower wants the money to be disbursed immediately.",operationId:"triggerDisbursementResponse",requestBody:{content:{"application/json":{schema:{type:"object",required:["metadata","loanId","requestId","payment","response"],properties:{metadata:{title:"metadata",type:"object",description:"Metadata specific to each API request.",required:["version","orgId","timestamp","traceId"],properties:{version:{type:"string"},orgId:{type:"string"},timestamp:{type:"string"},traceId:{type:"string"}}},loanId:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},requestId:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},response:{type:"object",description:"Status of response. Whether success or has encountered error",required:["error"],properties:{error:{type:"string"}}},payment:{type:"object",properties:{id:{type:"string",examples:["e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"]},amount:{type:"string"},date:{type:"string"},status:{type:"string",enum:["SUCCESS","FAILURE","PENDING_AUTH"]},installmentNumber:{type:"string"},txnRefNo:{type:"string",examples:[4618602124]}}}}}}}},responses:{200:{description:"Acknowledgement of Request Received",headers:{"X-Rate-Limit":{description:"calls per hour allowed by the user",schema:{type:"integer",format:"int32"}}},content:{"application/json":{schema:{type:"object",required:["error","traceId","timestamp"],properties:{error:{type:"string",examples:["0"]},traceId:{type:"string",examples:["e8cc6822-d4bb-4eb1-9e1b-4996fbff8acb"]},timestamp:{type:"string",examples:["2018-12-06T11:39:57.153Z"]}}}}}}},method:"post",path:"/v4.0.0alpha/disbursement/triggerDisbursementResponse",parameters:[],security:[{bearerAuth:[]},{oAuth2Client:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"},oAuth2Client:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://ocen.com/auth/oauth2/token/",scopes:{}}}}},jsonRequestBodyExample:{metadata:{version:"string",orgId:"string",timestamp:"string",traceId:"string"},loanId:"string",requestId:"string",response:{error:"string"},payment:{id:"string",amount:"string",date:"string",status:"SUCCESS",installmentNumber:"string",txnRefNo:"string"}},info:{version:"1.0.0",title:"ispirt.in/",contact:{email:"community@ispirt.in",url:"https://ispirt.in/"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},"x-logo":{url:"./images/logo.svg"},description:"# Introduction\n\nOCEN 4.0: Open Credit Enablement Network specification APIs\n\nIndia is starved of access to formal, affordable credit. There is a massive market opportunity to be tapped here that has been inhibited because the current rails for flow of capital to the untapped market are broken.\n\nThey are broken for the lenders, to be able to reach out to these prospective borrowers and surface creditworthy borrowers. Few of the many reasons include high cost of borrower acquisition and time consuming custom third party tie-ups with loan originators.\n\nThey are broken for the marketplaces to connect their customers with lenders. The custom integrations and manual processes are costly and time consuming. The Turnaround Time to get loans deposited to customers is high and their ability to provide custom financial products quickly is restricted, owing to implementation challenges.\n\nSourcing, identity verification, underwriting, disbursement, recollections and dispute management are few of the many responsibilities managed by a lender today. Historically, the best lenders have had to excel at each of these skills in order to maximize their profit pools and serve the larger and larger markets.\n\nOCEN is an initiative to unbundle lending and enable the creation of specialized entities, each specialized at one part of the job. Therefore, we envision the future of lending to be a partnership between multiple firms individually focused on sourcing/distribution, identity verification, underwriting, capital arrangement, recollections, etc. The entities like marketplaces who have high business-connect with their customers (businesses or individuals), can embed credit offerings in their applications now. These entities are referred to as \u2018Borrower Agents\u2019 (BAs) and were previously referred to as  'Loan Service Providers' (LSPs).\n\nBA is a departure from the Direct Sourcing Agent (DSA) model and is an 'agent of the borrower'. BA explains to borrowers their 'bill of rights' ensuring transparency and safeguarding of borrower interests. It educates them about the various credit product offerings, pricing and more details. It helps them get access to formal, affordable credit at low interest rates and collaborates with lenders to create more tailored offerings for borrowers.\n\nA reference pilot was created to showcase the power of the above idea in the GST SAHAY pilot project that used the OCEN 3.3 APIs. In its simplest form, it's a loan marketplace that enables SMEs to compare loan offers from multiple lenders and choose the best one. In its more advanced version, this BA would be akin to a borrower\u2019s financial advisor, looking after their interests, fetching the best offers and advising the customer to make good decisions.\n\nIn the longer run, it is envisioned that many more BAs (with apps) will be created. Each of these would focus on distinct borrower pools and build the specialized experiences suited to their customers. This would allow lenders to focus purely on their underwriting and collections logic and cater to diverse collaborations with the BAs.\n\nThis is a manifestation of our efforts to democratise credit.\n\n# Terminology\n\nFollowing is the list of all abbreviations used in the document\n\n| Acronym | Expansion |\n| --- | --- |\n| AA | Account Aggregator |\n| BA | Borrower Agent |\n| LSP | Loan Service Provider (see BA) |\n| OCEN | Open Credit Enablement Network |\n\n# Changes in Version 4.0\n\nThis is version 4.0 of the OCEN Specification. This is an update to the earlier OCEN APIs Specification v3.3 used by the GST SAHAY pilot.\n\nOCEN v3.3 API Specification is implemented by the LSP and the Lender entities. The entities directly communicate with each other as there is only one LSP in the architecture.  \n\nThe new OCEN 4.0 version enables multiple participants in the ecosystem across various roles.  Additionally, apart from the API specification, this version also includes 3 new components (Auth service, Product registry and Participant Registry) that enable the coordination between the multiple participants in the system. \n\n# Participant Roles \n\nOCEN 4.0 supports the following different roles for participants:\n- Lender - Creates and owns the product \n- Borrower Agent (BA) - Creates a Product Group - the network of participants needed to fulfil all the needs to the product such as collections partner, disbursement partner, etc and serves as the agent of the borrower by surfacing the offers and enabling the loan application process  \n- Derived Data Provider (DDP) - Enables better underwriting for the lender by providing additional data about the borrower or about the market of the product \n- Disbursement Agent (DA) - Enables disbursement of the loan\n- Collections Agent (CA) - Enables monitoring and collections post disbursement\n\n# OCEN 4.0 Components\n\nApart from the API specification for the participants to communicate with each other, OCEN 4.0 includes 3 components that enable coordination between the different participants in the system - \n- Auth Service\n- Product registry and \n- Participant Registry \n\n## Auth Service\nThe Auth service addresses two main concerns in the ecosystem:\n\n1. Identity of the entity accessing an endpoint\n2. Integrity and non-repudiation so entities cannot deny their actions after performing any operation\n\nThe Auth service enables both concerns by providing API access keys for authentication of every request as well as signing every request/response with the security certificates.\n\n## Product Registry\n\nWeb portal where Lenders in the OCEN ecosystem register their products. Once a product is created, participants such as BAs registered in the Participant registry will be able to view and subscribe to these products. The Product Registry allows BAs and other participants to easily discover new products for their borrowers from different lenders. The Product Registry also enables Lenders to reach new borrowers via the BAs that subscribe to the products. \n\n## Participant Registry\n\nWeb portal where all the participants in the OCEN ecosystem register themselves. Post approval, participants will be able to fetch access keys to use in making the API calls. \n\n# High Level Architecture\nThe following is a high-level sequence diagram of the OCEN 4.0 flow for the initial phases from Product creation through loan granting that highlights the role of the above components. The end-to-end flow can be split into 3 phases:\n1. Onboarding\n2. Loan Application and Processing\n3. Post-Disbursement\n\n> To be updated\n\n![OCEN - High level architecture]\n\n# Participant Overview\nBelow are the technical requirements and the end-to-end flow from the perspective of each participant in the ecosystem.\n\n## Lender Overview\nBelow is the overview of the end-to-end flow from the perspective of a Lender.\n\n### Onboarding Phase\nLenders first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls.\n\nLenders will then create the product in the Product Registry portal with all necessary attributes such as:\n- Product category\n- Borrower types\n- Data requirements\n- Loan workflow configurations - Collections, Disbursement, etc.\n \nOnce a product has been created and added to the portal, all participants will be able to discover the product. Participants can then subscribe to any of the existing products that need their role as part of the product\u2019s loan workflow.\n\nThe Lender will serve as the OWNER of the product and is the only participant who can change the product attributes subsequently.\n\nPost product-creation, Lenders get added to Product Groups by Borrower Agents to serve borrowers in their network. They then start receiving Loan Application requests.\n\n*There are no API calls and implementation in this phase.*\n\n### Loan Application and Processing Phase\nLenders receive Loan Application requests from the Borrower Agent, request Consent from the borrower and initiate the loan Offer. Upon acceptance of the Offer, the Lender performs the borrower KYC, confirms the loan disbursement and repayment terms with the borrower and then grants the loan. \n\nThe handshake and the steps in this phase follow the APIs defined in the APIs list. \n\n### Post-Disbursement Phase\nPost-disbursement of the loan, any disputes from the borrower are handled by the Lender via the Loan Dispute APIs in the APIs list.\n\n### Metadata APIs\nIn addition to the above, the Lender will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network.\n\n## BA Overview\nBelow is the overview of the end-to-end flow from the perspective of a Borrower Agent participant across the 3 phases of the OCEN 4.0 flow.\n\n### Onboarding Phase\nBAs first need to be onboarded onto the Participant Registry with their basic data. Once approved, they can use the API access key from the Participant Registry portal for making the API calls.\n\nBorrower Agents in the ecosystem will then be able to drive the product life cycle by inviting other necessary participants needed in the product\u2019s loan workflow. Once registered in the portal, BAs can create a Product Group and invite other participants (Collections, Disbursement partners and Derived Data Providers) for a particular product.\n\nBAs also need to select an SRO who will manage any dispute resolution issues for them and will serve as the guardrails against bad actors in the ecosystem.\n\nThere are no API calls and implementation in this phase.\n\n### Loan Application and Processing Phase\nBAs forward the Loan Application requests to the Lender. They then drive the Loan Application process with the lender by enabling the Lender to get Consent from the borrower and then to provide the loan Offer. Upon acceptance of the Offer by the borrower, the BA enables the Lender to perform the borrower KYC, confirm the loan disbursement and repayment terms with the borrower and then to grant the loan. \n\nThe handshake and the steps in this phase follow the APIs defined in the APIs list. \n\n### Post-Disbursement Phase\nPost-disbursement of the loan, any disputes from the borrower are forwarded to the Lender by the BA via the Loan Dispute APIs (see APIs list).\n\n### Metadata APIs\nIn addition to the above, the BA will maintain a Heartbeat API (see APIs list) to indicate the health status of their systems to the rest of the network.\n\n# API Design Principles\n\n## Async design\nBy design, all APIs are designed to enable end-to-end flows asynchronously. All requests use the requestId field for the purposes for mapping responses to their respective requests. And each request generates a standard acknowledgement from the other end while the callee (typically Lender) processes the request. API callers (typically BA) can poll for the status of the operation using a webhook. Thus each operation will have two separate APIs - one from the caller to submit the request and another async response back from the callee when the operation has completed. \n\nFor example: Create Loan Application operation has the following 2 APIs:\n- CreateLoanApplicationRequest -> Request sent by BA to the Lender\n- CreateLoanApplicationResponse -> Async Response sent by Lender to BA\n\n## Idempotency\nAll request calls should be idempotent on the requestId field i.e. two calls to CreateLoanApplication with the same requestId shouldn\u2019t result in two applications to be created. Callees are expected to return the same response as sent earlier for a duplicate request.\n\n## Complete Request Objects \nAll API calls and interactions are designed to include complete request objects instead of just the object identifiers in the request / responses. This design is to enable caller and callee to be able to process the request without needing to look up the attributes and other details.\n\n## Security\n\n> To be updated\n\nAll participants must follow the security requirements while transmitting data over API calls. On a high level, these are the security aspects that need to be ensured.\n\n1. HTTPS - All API calls must be done securely over HTTPS\n2. Two-way TLS -  The system should use Two-way TLS to ensure that both parties can send the information securely\n3. Digital Signature - All communication between the participants should be digitally signed as per the JSON Web Signature Specification\n4. Post participant registration with the Participant Registry, the private / public keys for authentication will be available in the portal\n\n### What is two-way TLS/SSL\nThe credit system that we are building is an asynchronous system and we need to ensure that both systems follow Transport Layer Security (TLS) Protocol to communicate with each other. In Normal TLS, the client first checks the authenticity of the server. However, the server does not try to identify the client. Since, in our case, we need to verify the identities of both the systems involved, \u201cTwo Way SSL\u201d needs to be used. \"Two-Way SSL\" is usually called TLS/SSL with client certificate authentication because both parties authenticate each other.\n\n# API List\n\nFollowing is the list of all APIs part of the OCEN 4.0 specification.\n\n## Loan Application APIs\n| API Name | Caller | Callee | Description |\n| ---- | ---- | ---- | ---- | \n| Create Loan Applications Request | BA | Lender | Create Loan applications endpoint available on Lender to be used by BA | \n| Create Loan Applications Response | Lender | BA | This is the response for Create Loan Applications but invoked by the lender. No offers are rolled out as part of this API. If the lender system finds preliminary information sufficient for doing the loan processing, it will send \u201cPROCESSING\u201d as the status. Otherwise, it can reject the application citing a reason for the same. | \n\n## Consent APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Consent Handle Request | BA | Lender | Create consent handle with Account Aggregator. This API is used to request the lenders to send a consent request for fetching the bank account statements, GST historical data. The lender (FIU) checks with the AA and creates a consent handle internally once this API is triggered | \n| Consent Handle Response | Lender | BA | Invoked by lender to send consent handle created in Account Aggregator. | \n| Consent State Update Request | BA | Lender | Invoked by BA to inform Lenders of the consent journey state once the customer has interacted with Account Aggregator | \n| Consent Status Request | Lender | BA | Invoked by Lender to get consent handle status from BA | \n| Consent Status Response | BA | Lender | Invoked by BA to send consent status to Lender | \n\n## Offers APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n|Generate Offers Request | BA | Lender | The BA sends this request to the lender to get the list of offers that the lender is willing to provide for the loan applications already shared. | \n| Generate Offers Response | Lender | BA | This API is invoked by the lender informing the borrower regarding the various loan offers that have been generated corresponding to each of the loan applications. This is a bulk API, where multiple loan offers can be sent to the borrower in one shot. | \n| Set Offer Request | BA | Lender | This API is invoked by the BA to inform the lender about the offer that the borrower has chosen for a particular loan application. | \n| Set Offer Response | Lender | BA | This API is invoked by the lender and is the asynchronous response to Set Offer Request API. | \n\n## KYC APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Trigger KYC Request | BA | Lender | Request by BA to initiate the KYC process of the borrower after successfully accepting the final offer. (OKYC if applicable and Udyam) | \n| Trigger KYC Response | Lender | BA | Response sent by Lender with the url for KYC details submission.  | \n| KYC Status Request | BA | Lender | Request sent by BA to get the KYC status. This API will be triggered just after the user completes the KYC process. The lender is supposed to provide a reference number in the first call. This method can be called later to know the status of KYC. | \n| KYC Status Response | Lender | BA | This API is called by the lender to inform the status of the KYC process. Lender is also supposed to inform the BA about the action required for | completing the KYC. | \n\n## Loan Acceptance APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Loan Agreement Request | BA | Lender | Request sent by BA to lender to initiate the loan acceptance steps beginning with asking for the loan agreement |\n| Loan Agreement Response | Lender | BA | Response given by the lender with the loan agreement for the borrower | \n| Trigger Loan Acceptance Request | BA | Lender | Request sent by BA to lender to send an OTP to phone number associated with verified by individual KYC | \n| Trigger Loan Acceptance Response | Lender | BA | Response given by the lender for TriggerOTPRequest | \n| Verify Loan Acceptance Request | BA | Lender | This API is invoked by the BA when the user enters the OTP received on the mobile number and agrees to the terms of the agreement. The asynchronous response for this API should include the lender acknowledging the receipt of OTP and verifying if the user has entered the correct OTP that was shared by the lender. | \n| Verify Loan Acceptance Response | Lender | BA | This API is invoked by the Lender  when the OTP entered by the user is shared through the BA. This API acknowledges the receipt of OTP and verifies if the user has entered the correct OTP that was shared by the lender on the mobile number associated with the disbursement account. | \n\n## Repayment Plan APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Set Repayment Plan Request | BA | Lender | This API is invoked by the BA to inform the lender system about the details of the repayment plan that will be used by the borrower. | \n| Set Repayment Plan Response | Lender | BA | This API is invoked by the lender to the BA giving the payment url where he can enter details of repayment. | \n| Set Repayment Plan Status Request | BA | Lender | This API is used by BA to check the status of a previously initiated set repayment plan request. This API is called once the payment page of the lender is loaded and the borrower choses a repayment method associated with the chosen repayment plan. | \n| Set Repayment Plan Status Response | Lender | BA | This API is used by lenders to inform BA about the status of a previously initiated set Repayment.The API returns the status of the repayment plan that the borrower has chosen. In case, the borrower has chosen e-mandate as the repayment method in payment page url, the status of the repayment plan becomes ACTIVE only after successful authorization of the e-mandate on the PSP by the borrower. | \n| Confirm Repayment Request | Lender | BA | This API is used by lenders to inform BA about the status of a repayment handled directly by the lender (Triggered on Lender side - Payment on the branch or auto E-Mandate repayment). |\n\n## Grant Loan APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Grant Loan Request | BA | Lender | This API is invoked by the BA once the borrower completes successful signing of the loan agreement to create the actual loan in the lender\u2019s system. | \n| Grant Loan Response | Lender | BA | This method is called be the Lender when the Grant Loan processing is completed. This informs the borrower about the status of the loan in the lender system. Upon successful creation of a loan in the system, the lender returns all the details of the loan. | \n\n## Disbursement APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Set Disbursement Account Request | BA | Lender | This API is invoked by the BA to inform the lender about the disbursement account that the borrower has chosen. | \n| Set Disbursement Account Response | Lender | BA | This API is invoked by the lender to inform the BA regarding whether the lender has successfully set the disbursement account which was sent in SetDisbursementAccountRequest. |\n| Trigger Disbursement Request | BA | Lender | This API is to be used when the borrower wants the money to be disbursed immediately. |\n| Trigger Disbursement Response | Lender | BA | Response given by the lender for TriggerDisbursement |\n| Trigger Disbursement Status Request | BA | Lender | This API is to be used by BA to check the status of a previously initiated disbursement request. |\n| Trigger Disbursement Status Response | Lender | BA | Response given by lender for  a trigger Disbursement Status Request. |\n\n## Trigger Repayment APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Trigger Repayment Request | BA | Lender | This API is invoked by the BA to inform the lender to trigger a repayment. This API will not be called when payment is routed to lender via collection agent. | \n| Trigger Repayment Response | Lender | BA | This API is invoked by the lender to the BA giving the lender payment page url from where the borrower can make the payment. Lender also generates an id for the payment which becomes the reference for BA to check the status of repayment. | \n| Trigger Repayment Status Request | BA | Lender | This API is used by BA to check the status of a previously initiated repayment transaction. In the case where collection is handled by Collection Management System (CMS), once the BA receives payment confirmation (including transaction reference number) from the Collection Management System, BA will send a request to the lender to check if a payment has been credited against the transaction Reference Number. | \n| Trigger Repayment Status Response | Lender | BA | This API is used by BA to check the status of a previously initiated repayment transaction. In the case where collection is handled by Collection Management System (CMS), once the BA receives payment confirmation (including transaction reference number) from the Collection Management System, BA will send a request to the lender to check if a payment has been credited against the transaction Reference Number. | \n\n## Loan Details APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Get Loan Request | BA | Lender | This API is invoked by the BA when the BA wants to get the details of the loan. | \n| Get Loan Response | Lender | BA | This method is called by the Lender and it returns all the details of the loan. | \n| Loan Summary Request | BA | Lender | Request raised by the BA to get the current summary of the loan | \n| Loan Summary Response | Lender | BA | Response given by lender for LoanSummary Request | \n| Loan Statement Request | BA | Lender | Request raised for getting the current loan account statement | \n| Loan Statement Response | Lender | BA | Response giving the Loan account statement | \n| List Loans Request | BA | Lender | This API is invoked by BA to get the list of loans given by lender for a borrower | \n| List Loans Response | Lender | BA | This API gives get the list of loans given by lender for a borrower | \n\n## Dispute APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Raise Dispute Request | BA | Lender | Request raised by BA to create a dispute in lender system |\n| Raise Dispute Response | Lender | BA | Response given to BA by lender post RaiseDisputeRequest |\n| Dispute Status Request | BA | Lender | This API is invoked by the BA to get the status of a dispute |\n| Dispute Status Response | Lender | BA | This API is invoked by the Lender to send the status of a dispute |\n\n## Analytics APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Analytics Heartbeat Push Request | All | OCEN 4.0 Auth Service | This API is used by participants to indicate healthy status of their service. |\n| Analytics Metrics Push Request | All | OCEN 4.0 Auth Service | This API is used by participants to send metrics for analytics. |\n\n## Derived Data Provider APIs\n| API Name | Caller | Callee | Description | \n| ---- | ---- | ---- | ---- | \n| Register Derived Data Provider Schema | Derived Data Provider | Product Registry | This API is used by the Dervied Data Provider to register the schema with the Product Registry. Once registered, Lenders will be able to lookup the schema from the Product Regitsry and fetch data from the Derived Data Provider to underwrite the loan. |\n| Get Schema by Derived Data Provider ID | Lender | Product Registry | This API is used by the Lender to lookup all schemas supported by a data provider. |\n| Get Schema by Schema ID | Lender | Product Registry | This API is used by the Lender to lookup schema supported by a data provider using the schema ID. |\n| Delete Schema by Schema ID | Derived Data Provider | Product Registry | This API is used by the Derived Data Provider to delete a registered schema from the Product Registr12y. |\n\n# API Details\n"},postman:{name:"Trigger Disbursement Response",description:{content:"This API is to be used when the borrower wants the money to be disbursed immediately.",type:"text/plain"},url:{path:["v4.0.0alpha","disbursement","triggerDisbursementResponse"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "metadata": {\n        "version": "<string>",\n        "orgId": "<string>",\n        "timestamp": "<string>",\n        "traceId": "<string>"\n    },\n    "loanId": "<string>",\n    "requestId": "<string>",\n    "payment": {\n        "id": "<string>",\n        "amount": "<string>",\n        "date": "<string>",\n        "status": "<string>",\n        "installmentNumber": "<string>",\n        "txnRefNo": "<string>"\n    },\n    "response": {\n        "error": "<string>"\n    }\n}'}}},source:"@site/static/dist.json",sourceDirName:".",permalink:"/api/trigger-disbursement-response",previous:{title:"Trigger Disbursement Request",permalink:"/api/trigger-disbursement-request"},next:{title:"Trigger Disbursement Status Request",permalink:"/api/trigger-disbursement-status-request"}},l=[],d={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"trigger-disbursement-response"},"Trigger Disbursement Response"),(0,s.kt)("p",null,"This API is to be used when the borrower wants the money to be disbursed immediately."),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,s.kt)("div",null)))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"metadata"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Metadata specific to each API request.")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"version"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"orgId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"timestamp"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"traceId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"loanId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"requestId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"response"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,"Status of response. Whether success or has encountered error")),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"payment"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"amount"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"status"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"FAILURE"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"PENDING_AUTH"),"]")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"installmentNumber"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"txnRefNo"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,s.kt)("table",{style:{display:"table",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("div",{style:{display:"flex"}},(0,s.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,s.kt)("code",null,"200")),(0,s.kt)("div",null,(0,s.kt)("p",null,"Acknowledgement of Request Received"))),(0,s.kt)("div",null,(0,s.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,s.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,s.kt)("div",null)))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"traceId"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("code",null,"timestamp"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}h.isMDXComponent=!0}}]);