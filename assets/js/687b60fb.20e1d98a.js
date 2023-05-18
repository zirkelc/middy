"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[7783],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=l(a),h=r,u=s["".concat(p,".").concat(h)]||s[h]||c[h]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={title:"Upgrade 0.x -> 1.x",sidebar_position:1e4},o=void 0,d={unversionedId:"upgrade/0-1",id:"upgrade/0-1",title:"Upgrade 0.x -> 1.x",description:"Independent packages structure",source:"@site/docs/upgrade/0-1.md",sourceDirName:"upgrade",slug:"/upgrade/0-1",permalink:"/docs/upgrade/0-1",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/0-1.md",tags:[],version:"current",lastUpdatedAt:1684425732,formattedLastUpdatedAt:"May 18, 2023",sidebarPosition:1e4,frontMatter:{title:"Upgrade 0.x -> 1.x",sidebar_position:1e4},sidebar:"tutorialSidebar",previous:{title:"Upgrade 1.x -> 2.x",permalink:"/docs/upgrade/1-2"},next:{title:"AWS Event Examples",permalink:"/docs/category/aws-event-examples"}},p={},l=[{value:"Independent packages structure",id:"independent-packages-structure",level:2},{value:"Header normalization in <code>http-header-normalizer</code>",id:"header-normalization-in-http-header-normalizer",level:2},{value:"Node.js 10 and 12 now supported / Node.js 6 and 8 now dropped",id:"nodejs-10-and-12-now-supported--nodejs-6-and-8-now-dropped",level:2}],m={toc:l},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"independent-packages-structure"},"Independent packages structure"),(0,r.kt)("p",null,"Version 1.x of Middy features decoupled independent packages published on npm under the ",(0,r.kt)("inlineCode",{parentName:"p"},"@middy")," namespace. The core middleware engine has been moved to ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@middy/core"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/core"))," and all the other middlewares are moved into their own packages as well. This allows to only install the features that are needed and to keep your Lambda dependencies small. See the list below to check which packages you need based on the middlewares you use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core middleware functionality -> ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/core"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/core"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cache")," -> ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/cache"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/cache"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cors")," -> ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-cors"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-cors"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"doNotWaitForEmptyEventLoop")," -> ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/do-not-wait-for-empty-event-loop"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/do-not-wait-for-empty-event-loop"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpContentNegotiation")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-content-negotiation"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-content-negotiation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpErrorHandler")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-error-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-error-handler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpEventNormalizer")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-event-normalizer"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-event-normalizer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpHeaderNormalizer")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-header-normalizer"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-header-normalizer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpMultipartBodyParser")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-json-body-parser"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-json-body-parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpPartialResponse")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-partial-response"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-partial-response"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsonBodyParser")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-json-body-parser"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-json-body-parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s3KeyNormalizer")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/s3-key-normalizer"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/s3-key-normalizer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secretsManager")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/secrets-manager"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/secrets-manager"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssm")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/ssm"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/ssm"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validator")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/validator"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/validator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"urlEncodeBodyParser")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-urlencode-body-parser"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/http-urlencode-body-parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warmup")," ->  ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/warmup"},(0,r.kt)("inlineCode",{parentName:"a"},"@middy/warmup")))),(0,r.kt)("h2",{id:"header-normalization-in-http-header-normalizer"},"Header normalization in ",(0,r.kt)("inlineCode",{parentName:"h2"},"http-header-normalizer")),(0,r.kt)("p",null,"In Middy 0.x the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpHeaderNormalizer")," middleware normalizes HTTP header names into their own canonical format, for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"Sec-WebSocket-Key")," (notice the casing). In Middy 1.x this behavior has been changed to provide header names in lowercase format (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"sec-webSocket-key"),"). This new behavior is more consistent with what Node.js core ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," package does and what other famous http frameworks like Express or Fastify do, so this is considered a more intuitive approach.\nWhen updating to Middy 1.x, make sure you double check all your references to HTTP headers and switch to the lowercase version to read them.\nAll the middy core modules have been already updated to support the new format, so you should worry only about your userland code."),(0,r.kt)("h2",{id:"nodejs-10-and-12-now-supported--nodejs-6-and-8-now-dropped"},"Node.js 10 and 12 now supported / Node.js 6 and 8 now dropped"),(0,r.kt)("p",null,"Version 1.x of Middy no longer supports Node.js versions 6.x and 8.x as these versions have been dropped by the AWS Lambda runtime itself and not supported anymore by the Node.js community. You are highly encouraged to move to Node.js 12 or 10, which are the new supported versions in Middy 1.x."))}c.isMDXComponent=!0}}]);