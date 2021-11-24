"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[21],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),h=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=h(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=h(n),m=r,d=l["".concat(u,".").concat(m)]||l[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return s},default:function(){return l}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"config-webhook",title:"Config webhook",sidebar_title:"Config webhook"},u=void 0,h={unversionedId:"authentication/config-webhook",id:"authentication/config-webhook",isDocsHomePage:!1,title:"Config webhook",description:"Hasura s\u1ebd kh\xf4ng handle ph\u1ea7n authentication (authn) cho ch\xfang ta m\xe0 ch\u1ec9 c\u1ea5p ph\u1ea7n integration th\xf4ng qua JWT mode",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/05-authentication/01-config-webhook.md",sourceDirName:"05-authentication",slug:"/authentication/config-webhook",permalink:"/vi/authentication/config-webhook",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/05-authentication/01-config-webhook.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1637776940,formattedLastUpdatedAt:"24/11/2021",sidebarPosition:1,frontMatter:{id:"config-webhook",title:"Config webhook",sidebar_title:"Config webhook"},sidebar:"main",previous:{title:"Handle table event",permalink:"/vi/handle-event/handle-table-event"},next:{title:"Session variable enhancer",permalink:"/vi/authentication/session-variable-enhancer"}},s=[{value:"\u0110\u1ed1i v\u1edbi Symfony users",id:"\u0111\u1ed1i-v\u1edbi-symfony-users",children:[],level:2}],p={toc:s};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hasura s\u1ebd kh\xf4ng handle ph\u1ea7n authentication (authn) cho ch\xfang ta m\xe0 ch\u1ec9 c\u1ea5p ph\u1ea7n integration th\xf4ng qua ",(0,o.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt.html"},"JWT mode"),"\nho\u1eb7c ",(0,o.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/auth/authentication/webhook.html"},"Webhook mode"),"."),(0,o.kt)("p",null,"Hasura Extra cung c\u1ea5p ph\u1ea7n integration authn th\xf4ng qua webhook mode, n\u1ebfu so v\u1edbi JWT mode, webhook s\u1ebd kh\xf4ng t\u1ed1i \u01b0u performance nh\u01b0ng b\xf9 l\u1ea1i b\u1ea1n s\u1ebd\ncung c\u1ea5p \u0111\u01b0\u1ee3c nhi\u1ec1u h\xecnh th\u1ee9c authn h\u01a1n thay v\xec ch\u1ec9 m\u1ed7i JWT token (v\xed d\u1ee5: Basic Auth cho first party)\nv\xe0 ",(0,o.kt)("a",{parentName:"p",href:"/vi/authentication/session-variable-enhancer"},"session variables \u0111\u01b0\u1ee3c linh \u0111\u1ed9ng h\u01a1n"),"."),(0,o.kt)("h2",{id:"\u0111\u1ed1i-v\u1edbi-symfony-users"},"\u0110\u1ed1i v\u1edbi Symfony users"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"N\u1ebfu nh\u01b0 b\u1ea1n s\u1eed d\u1ee5ng ",(0,o.kt)("a",{parentName:"p",href:"/vi/installation/symfony-app"},"Symfony App")," th\xec h\xe3y b\u1ecf qua b\u01b0\u1edbc b\xean d\u01b0\u1edbi, v\xec template \u0111\xe3 c\u1ea5u h\xecnh gi\xfap b\u1ea1n."))),(0,o.kt)("p",null,"\u0110\u1ec3 c\u1ea5u h\xecnh webhook mode b\u1ea1n c\u1ea7n set ",(0,o.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_AUTH_HOOK")," env c\u1ee7a Hasura container tr\u1ecf v\u1ec1 url path ",(0,o.kt)("inlineCode",{parentName:"p"},"/hasura_auth_hook"),",\nti\u1ebfp \u0111\u1ebfn l\xe0 c\u1ea5u h\xecnh Symfony ",(0,o.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/security.html#the-firewall"},"security firewall")," bao ph\u1ee7 ",(0,o.kt)("inlineCode",{parentName:"p"},"/hasura_auth_hook")," path."),(0,o.kt)("p",null,"V\u1eady l\xe0 xong, b\u1ea1n \u0111\xe3 config xong Hasura webhook auth mode cho Symfony r\u1ed3i \u0111\u1ea5y."))}l.isMDXComponent=!0}}]);