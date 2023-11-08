"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[3181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),m=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(r),u=n,f=c["".concat(s,".").concat(u)]||c[u]||p[u]||a;return r?i.createElement(f,o(o({ref:t},d),{},{components:r})):i.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<a;m++)o[m]=r[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=r(7462),n=(r(7294),r(3905));const a={title:"History"},o=void 0,l={unversionedId:"intro/history",id:"intro/history",title:"History",description:"A brief history of Middy",source:"@site/docs/intro/08-history.md",sourceDirName:"intro",slug:"/intro/history",permalink:"/docs/intro/history",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/08-history.md",tags:[],version:"current",lastUpdatedAt:1699475407,formattedLastUpdatedAt:"Nov 8, 2023",sidebarPosition:8,frontMatter:{title:"History"},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/docs/intro/hooks"},next:{title:"Influence",permalink:"/docs/intro/influence"}},s={},m=[{value:"A brief history of Middy",id:"a-brief-history-of-middy",level:2}],d={toc:m},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"a-brief-history-of-middy"},"A brief history of Middy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Middy was started in the early days of AWS Lambda (~2016) and it was initially only used to remove duplication in a big serverless project with tons of lambdas. Only in August 2017 Middy's source code was released on GitHub making it an open source project."),(0,n.kt)("li",{parentName:"ul"},"2017-08-03: First commit"),(0,n.kt)("li",{parentName:"ul"},"2017-09-04: v0.2.1 First release"),(0,n.kt)("li",{parentName:"ul"},"2020-04-25: ",(0,n.kt)("a",{parentName:"li",href:"https://loige.co/middy-1-is-here/"},"v1.0.0")," Released"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://loige.co/2020-a-year-in-review/#middy"},"2020 Review")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lmammino"},"@lmammino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/middyjs/middy/issues/590"},"2020 Review")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/willfarrell"},"@willfarrell")),(0,n.kt)("li",{parentName:"ul"},"2021: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/middyjs/middy/issues/585"},"v2.0.0 Coming soon")),(0,n.kt)("li",{parentName:"ul"},"2021-04-01: v2.0.0 Released"),(0,n.kt)("li",{parentName:"ul"},"2021-02-02: ",(0,n.kt)("a",{parentName:"li",href:"https://loige.co/2021-a-year-in-review#middy"},"2021 Review")," from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lmammino"},"@lmammino")),(0,n.kt)("li",{parentName:"ul"},"2022-05-12: v3.0.0 Released"),(0,n.kt)("li",{parentName:"ul"},"2022-11-24: v4.0.0 Released")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fun Fact"),": The adding of the emoji-icon was the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/middyjs/middy/commit/a0acf430bb72f6f6f604e38cfd8a571912b6b4d7"},"2nd commit")," to the project."))}p.isMDXComponent=!0}}]);