"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[25],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return d}});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var l=a.createContext({}),u=function(t){var n=a.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},s=function(t){var n=u(t.components);return a.createElement(l.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),h=u(e),d=i,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return e?a.createElement(m,o(o({ref:n},s),{},{components:e})):a.createElement(m,o({ref:n},s))}));function d(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var r=e.length,o=new Array(r);o[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var u=2;u<r;u++)o[u]=e[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}h.displayName="MDXCreateElement"},6521:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return h}});var a=e(7462),i=e(3366),r=(e(7294),e(3905)),o=["components"],c={id:"jwt-authentication",title:"JWT authentication",sidebar_title:"JWT authentication"},l=void 0,u={unversionedId:"authentication/jwt-authentication",id:"authentication/jwt-authentication",isDocsHomePage:!1,title:"JWT authentication",description:"T\xe0i li\u1ec7u n\xe0y ch\u1ec9 d\xe0nh cho Symfony users s\u1eed d\u1ee5ng webhook mode.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/05-authentication/04-jwt-authentication.md",sourceDirName:"05-authentication",slug:"/authentication/jwt-authentication",permalink:"/vi/authentication/jwt-authentication",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/05-authentication/04-jwt-authentication.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1637914769,formattedLastUpdatedAt:"26/11/2021",sidebarPosition:4,frontMatter:{id:"jwt-authentication",title:"JWT authentication",sidebar_title:"JWT authentication"},sidebar:"main",previous:{title:"Unauthenticated role",permalink:"/vi/authentication/unauthenticated-role"},next:{title:"Client query generator",permalink:"/vi/code-generation/client-query-generator"}},s=[{value:"C\xe0i \u0111\u1eb7t",id:"c\xe0i-\u0111\u1eb7t",children:[],level:2},{value:"C\u1ea5u h\xecnh security bundle",id:"c\u1ea5u-h\xecnh-security-bundle",children:[],level:2},{value:"Th\xeam action login tr\xean Hasura",id:"action-login-on-hasura",children:[],level:2}],p={toc:s};function h(t){var n=t.components,c=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"T\xe0i li\u1ec7u n\xe0y ch\u1ec9 d\xe0nh cho Symfony users s\u1eed d\u1ee5ng ",(0,r.kt)("a",{parentName:"p",href:"/vi/authentication/config-webhook"},"webhook mode"),"."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"N\u1ebfu nh\u01b0 project c\u1ee7a b\u1ea1n s\u1eed d\u1ee5ng ",(0,r.kt)("a",{parentName:"p",href:"/vi/installation/symfony-app"},"Symfony App"),", template \u0111\xe3 setup m\u1ecdi th\u1ee9 gi\xfap b\u1ea1n,\nb\u1ea1n kh\xf4ng c\u1ea7n l\xe0m theo c\xe1c b\u01b0\u1edbc b\xean d\u01b0\u1edbi m\xe0 ch\u1ec9 n\xean \u0111\u1ecdc \u0111\u1ec3 hi\u1ec3u c\u01a1 ch\u1ebf ho\u1ea1t \u0111\u1ed9ng c\u1ee7a n\xf3 nh\u01b0 th\u1ebf n\xe0o."))),(0,r.kt)("p",null,"Hasura Extra webhook mode c\xf3 th\u1ec3 d\u1ec5 d\xe0ng t\xedch h\u1ee3p ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io"},"JWT")," authentication th\xf4ng qua ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lexik/LexikJWTAuthenticationBundle"},"Lexik JWT authentication bundle"),"."),(0,r.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t"},"C\xe0i \u0111\u1eb7t"),(0,r.kt)("p",null,"C\xe0i \u0111\u1eb7t Lexik JWT authentication th\xf4ng qua Composer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"composer require jwt\n")),(0,r.kt)("p",null,"Sau khi c\xe0i xong b\u1ea1n c\u1ea7n kh\u1edfi t\u1ea1o set public/private keys th\xf4ng qua ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lexik/LexikJWTAuthenticationBundle/blob/2.x/Resources/doc/index.md#generate-the-ssl-keys"},"command \u0111\u01b0\u1ee3c cung c\u1ea5p b\u1edfi bundle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php bin/console lexik:jwt:generate-keypair\n")),(0,r.kt)("p",null,"public/private keys s\u1ebd \u0111\u01b0\u1ee3c sinh ra trong th\u01b0 m\u1ee5c ",(0,r.kt)("inlineCode",{parentName:"p"},"config/jwt"),"."),(0,r.kt)("h2",{id:"c\u1ea5u-h\xecnh-security-bundle"},"C\u1ea5u h\xecnh security bundle"),(0,r.kt)("p",null,"B\u1ea1n c\u1ea7n c\u1ea5u h\xecnh security main firewall (",(0,r.kt)("inlineCode",{parentName:"p"},"config/packages/security.yaml"),") cho webhook endpoint v\xe0 ",(0,r.kt)("a",{parentName:"p",href:"/vi/handle-business-logic/graphqlite"},"GraphQLite")," endpoint,\nv\xed d\u1ee5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"security:\n    enable_authenticator_manager: true\n    providers:\n        user:\n            entity:\n                class: App\\Entity\\User\n                property: email\n    firewalls:\n        main:\n            stateless: true\n            provider: user\n            # https://github.com/lexik/LexikJWTAuthenticationBundle/blob/2.x/Resources/doc/index.md#configuration\n            jwt: ~\n            json_login:\n                check_path: /login\n                success_handler: lexik_jwt_authentication.handler.authentication_success\n                failure_handler: lexik_jwt_authentication.handler.authentication_failure\n            entry_point: jwt\n")),(0,r.kt)("p",null,"Theo v\xed d\u1ee5 tr\xean t\u1ea5t c\u1ea3 request \u0111i v\xe0o system c\u1ee7a b\u1ea1n \u0111\u1ec1u \u0111\u01b0\u1ee3c security bundle authenticate, ti\u1ebfp \u0111\u1ebfn b\u1ea1n c\u1ea7n add route mock ",(0,r.kt)("inlineCode",{parentName:"p"},"/login"),",\nkh\u1edfi t\u1ea1o file ",(0,r.kt)("inlineCode",{parentName:"p"},"config/routes/login.yaml")," v\u1edbi n\u1ed9i dung sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"login:\n  path: /login\n  methods: [POST]\n")),(0,r.kt)("p",null,"Nh\u01b0 b\u1ea1n th\u1ea5y route tr\xean kh\xf4ng c\xf3 controller, m\u1ee5c \u0111\xedch ch\u1ec9 \u0111\u1ec3 \u0111\u1ecbnh danh cho ",(0,r.kt)("inlineCode",{parentName:"p"},"json_login")," \u1edf tr\xean."),(0,r.kt)("p",null,"V\u1eady l\xe0 b\u1ea1n \u0111\xe3 chu\u1ea9n b\u1ecb xong \u1edf application r\u1ed3i \u0111\u1ea5y, ti\u1ebfp \u0111\u1ebfn h\xe3y ",(0,r.kt)("a",{parentName:"p",href:"#action-login-on-hasura"},"config action login tr\xean Hasura"),"."),(0,r.kt)("h2",{id:"action-login-on-hasura"},"Th\xeam action login tr\xean Hasura"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/actions/index.html"},"Hasura action")," c\u0169ng l\xe0 n\u01a1i \u0111\u1ec3 handle business logic, ch\xfang ta\ns\u1ebd s\u1eed d\u1ee5ng n\xf3 \u0111\u1ec3 add login mutation field."),(0,r.kt)("p",null,"B\u1ea1n h\xe3y thi\u1ebft l\u1eadp action definition nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-GraphQL"},"type Mutation {\n  login(\n    email: String!\n    password: String!\n  ): login_output!\n}\n")),(0,r.kt)("p",null,"V\xe0 type configuration nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type login_output {\n  token: String!\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add action login",src:e(876).Z})),(0,r.kt)("p",null,"Execution type b\u1ea1n s\u1ebd ch\u1ecdn l\xe0: ",(0,r.kt)("inlineCode",{parentName:"p"},"Synchronous"),"."),(0,r.kt)("p",null,"Ti\u1ebfp \u0111\u1ebfn ta s\u1ebd config ",(0,r.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/actions/transforms.html#request-body"},"payload transform")," \u0111\u1ec3 format payload v\u1ec1\nchu\u1ea9n c\u1ee7a login request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": {{$body.input.email}},\n    "password": {{$body.input.password}}\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"body transform",src:e(1902).Z})),(0,r.kt)("p",null,"Save l\u1ea1i v\xe0 gi\u1edd b\u1ea1n \u0111\xe3 c\xf3 th\u1ec3 test login th\u1eed, k\u1ebft qu\u1ea3 mong \u0111\u1ee3i s\u1ebd l\xe0:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"result",src:e(2882).Z})),(0,r.kt)("p",null,"V\u1eady l\xe0 b\u1ea1n \u0111\xe3 ho\xe0n t\u1ea5t vi\u1ec7c thi\u1ebft l\u1eadp JWT authentication r\u1ed3i \u0111\u1ea5y."))}h.isMDXComponent=!0},1902:function(t,n,e){n.Z=e.p+"assets/images/jwt-authentication-action-login-body-transform-93045a0e23519ea2689470c22bb4f527.png"},876:function(t,n,e){n.Z=e.p+"assets/images/jwt-authentication-action-login-bf6a82ca51932288b34054ec24991685.png"},2882:function(t,n,e){n.Z=e.p+"assets/images/jwt-authentication-result-bf219543e9370e8809d6642a56b24325.png"}}]);