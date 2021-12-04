"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[281],{766:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return m},default:function(){return p}});var n=a(7462),i=a(3366),s=(a(7294),a(3905)),r=["components"],h={id:"remote-schema",title:"Remote schema",sidebar_label:"Remote schema"},c=void 0,o={unversionedId:"handle-business-logic/remote-schema",id:"handle-business-logic/remote-schema",isDocsHomePage:!1,title:"Remote schema",description:"Hasura gi\xfap ch\xfang ta r\u1ea5t nhi\u1ec1u trong v\u1ea5n \u0111\u1ec1 CRUD, realtime websocket v\xe0 authorization, tuy nhi\xean n\xf3 kh\xf4ng th\u1ec3 gi\xfap ch\xfang ta handle business",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/03-handle-business-logic/01-remote-schema.md",sourceDirName:"03-handle-business-logic",slug:"/handle-business-logic/remote-schema",permalink:"/vi/handle-business-logic/remote-schema",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/03-handle-business-logic/01-remote-schema.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1638641209,formattedLastUpdatedAt:"4/12/2021",sidebarPosition:1,frontMatter:{id:"remote-schema",title:"Remote schema",sidebar_label:"Remote schema"},sidebar:"main",previous:{title:"Application templates",permalink:"/vi/installation/application-templates"},next:{title:"GraphQLite",permalink:"/vi/handle-business-logic/graphql-server/graphqlite"}},m=[{value:"Th\xeam remote schema",id:"th\xeam-remote-schema",children:[],level:2},{value:"C\u1ea5u h\xecnh remote schema name",id:"c\u1ea5u-h\xecnh-remote-schema-name",children:[],level:2}],l={toc:m};function p(e){var t=e.components,h=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},l,h,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Hasura gi\xfap ch\xfang ta r\u1ea5t nhi\u1ec1u trong v\u1ea5n \u0111\u1ec1 CRUD, realtime websocket v\xe0 authorization, tuy nhi\xean n\xf3 kh\xf4ng th\u1ec3 gi\xfap ch\xfang ta handle business\nlogic v\xec m\u1ed7i d\u1ef1 \xe1n s\u1ebd c\xf3 c\xe1c \u0111\u1eb7c th\xf9 ri\xeang (v\xed d\u1ee5: validation data, g\u1ecdi 3rd parties API...).\nCh\xednh v\xec l\xfd do \u0111\xf3 ch\xfang ta c\u1ea7n x\xe2y d\u1ef1ng ",(0,s.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/remote-schemas/index.html"},"remote schema")," \u0111\u1ec3 handle."),(0,s.kt)("p",null,"Hasura Extra t\xedch h\u1ee3p v\u1edbi ",(0,s.kt)("a",{parentName:"p",href:"https://graphqlite.thecodingmachine.io/docs"},"GraphQLite")," \u0111\u1ec3 x\xe2y d\u1ef1ng ",(0,s.kt)("a",{parentName:"p",href:"/vi/handle-business-logic/graphql-server/graphqlite"},"GraphQL server")," handle business logic."),(0,s.kt)("p",null,"M\xf4 ph\u1ecfng (ngu\u1ed3n ",(0,s.kt)("a",{parentName:"p",href:"https://hasura.io"},"Hasura"),"):\n",(0,s.kt)("img",{alt:"Copyright https://hasura.io",src:a(9460).Z})),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"N\u1ebfu nh\u01b0 project c\u1ee7a b\u1ea1n b\u1eaft \u0111\u1ea7u t\u1eeb ",(0,s.kt)("a",{parentName:"p",href:"/vi/installation/application-templates"},"Laravel ho\u1eb7c Symfony application template")," th\xec b\u1ea1n c\xf3 th\u1ec3 b\u1ecf qua t\xe0i li\u1ec7u n\xe0y v\xec m\u1eb7c \u0111\u1ecbnh\nch\xfang t\xf4i \u0111\xe3 th\xeam s\u1eb5n gi\xfap b\u1ea1n."))),(0,s.kt)("h2",{id:"th\xeam-remote-schema"},"Th\xeam remote schema"),(0,s.kt)("p",null,"\u0110\u1ec3 handle business logic b\u1ea1n c\u1ea7n th\xeam remote schema tr\u1ecf v\u1ec1 GraphQL server (",(0,s.kt)("a",{parentName:"p",href:"/vi/handle-business-logic/graphql-server/graphqlite"},"GraphQLite"),") url path s\u1ebd l\xe0 ",(0,s.kt)("inlineCode",{parentName:"p"},"/graphql"),",\nxem h\u01b0\u1edbng d\u1eabn t\u1ea1i ",(0,s.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/remote-schemas/adding-schema.html"},"\u0111\xe2y"),"."),(0,s.kt)("h2",{id:"c\u1ea5u-h\xecnh-remote-schema-name"},"C\u1ea5u h\xecnh remote schema name"),(0,s.kt)("p",null,"Sau khi th\xeam remote schema \u1edf b\u01b0\u1edbc tr\xean b\u1ea1n c\u1ea7n c\u1ea5u h\xecnh remote schema name cho project c\u1ee7a b\u1ea1n:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u0110\u1ed1i v\u1edbi Laravel package b\u1ea1n c\u1ea7n c\u1ea5u h\xecnh ",(0,s.kt)("inlineCode",{parentName:"li"},"remote_schema_name")," t\u1ea1i ",(0,s.kt)("inlineCode",{parentName:"li"},"config/hasura.php"),"."),(0,s.kt)("li",{parentName:"ul"},"\u0110\u1ed1i v\u1edbi Symfony bundle b\u1ea1n c\u1ea7n c\u1ea5u h\xecnh ",(0,s.kt)("inlineCode",{parentName:"li"},"hasura.remote_schema_name")," t\u1ea1i ",(0,s.kt)("inlineCode",{parentName:"li"},"config/packages/hasura.yaml"),".")))}p.isMDXComponent=!0},9460:function(e,t,a){t.Z=a.p+"assets/images/remote-schema-3c2dd9445616d82048fdc2c4a0eca21b.png"}}]);