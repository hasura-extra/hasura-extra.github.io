"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[368],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),l=m(n),p=r,f=l["".concat(s,".").concat(p)]||l[p]||d[p]||i;return n?a.createElement(f,o(o({ref:e},u),{},{components:n})):a.createElement(f,o({ref:e},u))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=l;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1925:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return l}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"get-inconsistent-metadata",title:"Get inconsistent metadata",sidebar_title:"Get inconsistent metadata"},s=void 0,m={unversionedId:"manage-metadata/get-inconsistent-metadata",id:"manage-metadata/get-inconsistent-metadata",isDocsHomePage:!1,title:"Get inconsistent metadata",description:"Trong tr\u01b0\u1eddng h\u1ee3p b\u1ea1n v\u1eeba ch\u1ea1y database migrations c\xf3 th\xeam, x\xf3a columns ho\u1eb7c c\xe1c remote schema thay \u0111\u1ed5i SDL nh\u01b0ng metadata th\xec l\u1ea1i t\u1ed3n t\u1ea1i",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/07-manage-metadata/04-get-inconsistent-metadata.md",sourceDirName:"07-manage-metadata",slug:"/manage-metadata/get-inconsistent-metadata",permalink:"/vi/manage-metadata/get-inconsistent-metadata",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/07-manage-metadata/04-get-inconsistent-metadata.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1637776940,formattedLastUpdatedAt:"24/11/2021",sidebarPosition:4,frontMatter:{id:"get-inconsistent-metadata",title:"Get inconsistent metadata",sidebar_title:"Get inconsistent metadata"},sidebar:"main",previous:{title:"Reload metadata",permalink:"/vi/manage-metadata/reload-metadata"},next:{title:"Drop inconsistent",permalink:"/vi/manage-metadata/drop-inconsistent-metadata"}},u=[{value:"\u0110\u1ed1i v\u1edbi Symfony users",id:"\u0111\u1ed1i-v\u1edbi-symfony-users",children:[],level:2}],d={toc:u};function l(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Trong tr\u01b0\u1eddng h\u1ee3p b\u1ea1n v\u1eeba ch\u1ea1y database migrations c\xf3 th\xeam, x\xf3a columns ho\u1eb7c c\xe1c remote schema thay \u0111\u1ed5i SDL nh\u01b0ng metadata th\xec l\u1ea1i t\u1ed3n t\u1ea1i\nc\xe1c c\u1ea5u h\xecnh tr\u01b0\u1edbc \u0111\xf3 th\xec s\u1ebd x\u1ea3y ra inconsistent metadata, b\u1ea1n c\xf3 th\u1ec3 ",(0,i.kt)("a",{parentName:"p",href:"/vi/manage-metadata/drop-inconsistent-metadata"},"drop c\xe1c inconsistent")," ho\u1eb7c\nxem c\xe1c inconsistent th\xf4ng qua command."),(0,i.kt)("h2",{id:"\u0111\u1ed1i-v\u1edbi-symfony-users"},"\u0110\u1ed1i v\u1edbi Symfony users"),(0,i.kt)("p",null,"\u0110\u1ec3 xem c\xe1c inconsistent b\u1ea1n c\u1ea7n th\u1ef1c thi Symfony command sau:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"php bin/console hasura:metadata:get-inconsistent\n")),(0,i.kt)("p",null,"Command tr\xean s\u1ebd t\u1ed5ng h\u1ee3p c\xe1c l\u1ed7i inconsistent v\xe0 xu\u1ea5t ra ngo\xe0i m\xe0n h\xecnh gi\xfap b\u1ea1n."))}l.isMDXComponent=!0}}]);