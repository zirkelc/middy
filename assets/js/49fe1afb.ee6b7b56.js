"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(r),y=i,u=l["".concat(p,".").concat(y)]||l[y]||m[y]||o;return r?n.createElement(u,a(a({ref:t},s),{},{components:r})):n.createElement(u,a({ref:t},s))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const o={title:"With TypeScript",position:7},a=void 0,c={unversionedId:"writing-middlewares/with-typescript",id:"writing-middlewares/with-typescript",title:"With TypeScript",description:"here's an example of how you can write a custom middleware for a Lambda receiving events from API Gateway:",source:"@site/docs/writing-middlewares/07-with-typescript.md",sourceDirName:"writing-middlewares",slug:"/writing-middlewares/with-typescript",permalink:"/docs/writing-middlewares/with-typescript",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/writing-middlewares/07-with-typescript.md",tags:[],version:"current",lastUpdatedAt:1684425732,formattedLastUpdatedAt:"May 18, 2023",sidebarPosition:7,frontMatter:{title:"With TypeScript",position:7},sidebar:"tutorialSidebar",previous:{title:"More Examples",permalink:"/docs/writing-middlewares/more-examples"},next:{title:"Routers",permalink:"/docs/category/routers"}},p={},d=[],s={toc:d},l="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"here's an example of how you can write a custom middleware for a Lambda receiving events from API Gateway:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import middy from '@middy/core'\nimport { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'\n\nconst middleware = (): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {\n  const before: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (\n    request\n  ): Promise<void> => {\n    // Your middleware logic\n  }\n\n  const after: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (\n    request\n  ): Promise<void> => {\n    // Your middleware logic\n  }\n\n  return {\n    before,\n    after\n  }\n}\n\nexport default middleware\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": The Middy core team does not use TypeScript often and we can't certainly claim that we are TypeScript experts. We tried our best to come up\nwith type definitions that should give TypeScript users a good experience. There is certainly room for improvement, so we would be more than happy to receive contributions \ud83d\ude0a"),(0,i.kt)("p",null,"See ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," for each middleware for list of dependencies that may be required with transpiling TypeScript."))}m.isMDXComponent=!0}}]);