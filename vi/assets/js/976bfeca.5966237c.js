"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[907],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1920:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],u={id:"unauthenticated-role",title:"Unauthenticated role",sidebar_title:"Unauthenticated role"},c=void 0,l={unversionedId:"authentication/unauthenticated-role",id:"authentication/unauthenticated-role",isDocsHomePage:!1,title:"Unauthenticated role",description:"\u0110\u1ed1i v\u1edbi Hasura, m\u1ecdi request \u0111\u1ec1u c\xf3 role k\u1ec3 c\u1ea3 unauthenticated request.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/05-authentication/03-unauthenticated-role.md",sourceDirName:"05-authentication",slug:"/authentication/unauthenticated-role",permalink:"/vi/authentication/unauthenticated-role",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/05-authentication/03-unauthenticated-role.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1637776940,formattedLastUpdatedAt:"24/11/2021",sidebarPosition:3,frontMatter:{id:"unauthenticated-role",title:"Unauthenticated role",sidebar_title:"Unauthenticated role"},sidebar:"main",previous:{title:"Session variable enhancer",permalink:"/vi/authentication/session-variable-enhancer"},next:{title:"JWT authentication",permalink:"/vi/authentication/jwt-authentication"}},s=[{value:"\u0110\u1ed1i v\u1edbi Symfony users",id:"\u0111\u1ed1i-v\u1edbi-symfony-users",children:[],level:2}],p={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0110\u1ed1i v\u1edbi Hasura, m\u1ecdi request \u0111\u1ec1u c\xf3 role k\u1ec3 c\u1ea3 ",(0,i.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/auth/authentication/unauthenticated-access.html"},"unauthenticated request"),"."),(0,i.kt)("p",null,"Hasura Extra gi\xfap b\u1ea1n c\u1ea5u h\xecnh role cho public access request (anonymous user)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"N\u1ebfu nh\u01b0 b\u1ea1n x\xe0i ",(0,i.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt.html"},"JWT mode")," th\xec h\xe3y config anonymous role th\xf4ng qua ",(0,i.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_UNAUTHORIZED_ROLE")," env."))),(0,i.kt)("h2",{id:"\u0111\u1ed1i-v\u1edbi-symfony-users"},"\u0110\u1ed1i v\u1edbi Symfony users"),(0,i.kt)("p",null,"M\u1eb7c \u0111\u1ecbnh bundle \u0111\xe3 config unauthenticated role gi\xfap b\u1ea1n l\xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_ANONYMOUS")," n\u1ebfu b\u1ea1n mu\u1ed1n thay \u0111\u1ed5i l\u1ea1i cho ph\xf9 h\u1ee3p th\xec h\xe3y v\xe0o file\nconfig ",(0,i.kt)("inlineCode",{parentName:"p"},"config/packages/hasura.yaml")," v\xe0 thay \u0111\u1ed5i ",(0,i.kt)("inlineCode",{parentName:"p"},"hasura.auth.anonymous_role"),"."))}h.isMDXComponent=!0}}]);