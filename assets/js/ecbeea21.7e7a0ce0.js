"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"Introduction",slug:"/"},o=void 0,s={unversionedId:"intro/intro",id:"intro/intro",title:"Introduction",description:"What is middy",source:"@site/docs/intro/01-intro.md",sourceDirName:"intro",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/01-intro.md",tags:[],version:"current",lastUpdatedAt:1699475407,formattedLastUpdatedAt:"Nov 8, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Intro to Middy",permalink:"/docs/category/intro-to-middy"},next:{title:"Getting started",permalink:"/docs/intro/getting-started"}},d={},l=[{value:"What is middy",id:"what-is-middy",level:2},{value:"A quick example",id:"a-quick-example",level:2},{value:"Why?",id:"why",level:2}],p={toc:l},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-middy"},"What is middy"),(0,a.kt)("p",null,"Middy is a very simple ",(0,a.kt)("strong",{parentName:"p"},"middleware engine")," that allows you to simplify your ",(0,a.kt)("strong",{parentName:"p"},"AWS Lambda")," code when using ",(0,a.kt)("strong",{parentName:"p"},"Node.js"),"."),(0,a.kt)("p",null,"If you have used web frameworks like Express, then you will be familiar with the concepts adopted in Middy and you will be able to get started very quickly."),(0,a.kt)("p",null,"A middleware engine allows you to focus on the strict business logic of your Lambda and then attach additional common elements like authentication, authorization, validation, serialization, etc. in a modular and reusable way by decorating the main business logic."),(0,a.kt)("h2",{id:"a-quick-example"},"A quick example"),(0,a.kt)("p",null,"Code is better than 10,000 words, so let's jump into an example."),(0,a.kt)("p",null,"Let's assume you are building a JSON API to process a payment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="handler.js"',title:'"handler.js"'},"// import core\nimport middy from '@middy/core' // esm Node v14+\n//const middy = require('@middy/core') // commonjs Node v12+\n\n// import some middlewares\nimport jsonBodyParser from '@middy/http-json-body-parser'\nimport httpErrorHandler from '@middy/http-error-handler'\nimport validator from '@middy/validator'\nimport { transpileSchema } from '@middy/validator/transpile'\n\n// This is your common handler, in no way different than what you are used to doing every day in AWS Lambda\nconst lambdaHandler = async (event, context) => {\n  // we don't need to deserialize the body ourself as a middleware will be used to do that\n  const { creditCardNumber, expiryMonth, expiryYear, cvc, nameOnCard, amount } =\n    event.body\n\n  // do stuff with this data\n  // ...\n\n  const response = { result: 'success', message: 'payment processed correctly' }\n  return { statusCode: 200, body: JSON.stringify(response) }\n}\n\n// Notice that in the handler you only added base business logic (no deserialization,\n// validation or error handler), we will add the rest with middlewares\n\nconst schema = {\n  type: 'object',\n  properties: {\n    body: {\n      type: 'object',\n      properties: {\n        creditCardNumber: {\n          type: 'string',\n          minLength: 12,\n          maxLength: 19,\n          pattern: '\\\\d+'\n        },\n        expiryMonth: { type: 'integer', minimum: 1, maximum: 12 },\n        expiryYear: { type: 'integer', minimum: 2017, maximum: 2027 },\n        cvc: { type: 'string', minLength: 3, maxLength: 4, pattern: '\\\\d+' },\n        nameOnCard: { type: 'string' },\n        amount: { type: 'number' }\n      },\n      required: ['creditCardNumber'] // Insert here all required event properties\n    }\n  }\n}\n\n// Let's \"middyfy\" our handler, then we will be able to attach middlewares to it\nconst handler = middy()\n  .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object\n  .use(validator({ eventSchema: transpileSchema(schema) })) // validates the input\n  .use(httpErrorHandler()) // handles common http errors and returns proper responses\n  .handler(lambdaHandler)\n")),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("p",null,"One of the main strengths of serverless and AWS Lambda is that, from a developer\nperspective, your focus is mostly shifted toward implementing business logic."),(0,a.kt)("p",null,"Anyway, when you are writing a handler, you still have to deal with some common technical concerns\noutside business logic, like input parsing and validation, output serialization,\nerror handling, etc."),(0,a.kt)("p",null,"Very often, all this necessary code ends up polluting the pure business logic code in\nyour handlers, making the code harder to read and to maintain."),(0,a.kt)("p",null,"In other contexts, like generic web frameworks (",(0,a.kt)("a",{parentName:"p",href:"http://fastify.io"},"fastify"),", ",(0,a.kt)("a",{parentName:"p",href:"https://hapijs.com/"},"hapi"),", ",(0,a.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"express"),", etc.), this\nproblem has been solved using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.packtpub.com/mapt/book/web_development/9781783287314/4/ch04lvl1sec33/middleware"},"middleware pattern"),"."),(0,a.kt)("p",null,"This pattern allows developers to isolate these common technical concerns into\n",(0,a.kt)("em",{parentName:"p"},'"steps"')," that ",(0,a.kt)("em",{parentName:"p"},"decorate")," the main business logic code.\nMiddleware functions are generally written as independent modules and then plugged into\nthe application in a configuration step, thus not polluting the main business logic\ncode that remains clean, readable, and easy to maintain."),(0,a.kt)("p",null,"Since we couldn't find a similar approach for AWS Lambda handlers, we decided\nto create middy, our own middleware framework for serverless in AWS land."))}c.isMDXComponent=!0}}]);