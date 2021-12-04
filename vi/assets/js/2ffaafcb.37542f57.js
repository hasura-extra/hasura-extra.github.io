"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[910],{4297:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return u},default:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),s=["components"],l={id:"graphqlite",title:"GraphQLite",sidebar_label:"GraphQLite"},p=void 0,h={unversionedId:"handle-business-logic/graphql-server/graphqlite",id:"handle-business-logic/graphql-server/graphqlite",isDocsHomePage:!1,title:"GraphQLite",description:"GraphQLite l\xe0 m\u1ed9t b\u1ed9 th\u01b0 vi\u1ec7n PHP gi\xfap b\u1ea1n x\xe2y d\u1ef1ng GraphQL server th\xf4ng qua code-first approach",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/03-handle-business-logic/02-graphql-server/01-graphqlite.md",sourceDirName:"03-handle-business-logic/02-graphql-server",slug:"/handle-business-logic/graphql-server/graphqlite",permalink:"/vi/handle-business-logic/graphql-server/graphqlite",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/03-handle-business-logic/02-graphql-server/01-graphqlite.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1638641209,formattedLastUpdatedAt:"4/12/2021",sidebarPosition:1,frontMatter:{id:"graphqlite",title:"GraphQLite",sidebar_label:"GraphQLite"},sidebar:"main",previous:{title:"Remote schema",permalink:"/vi/handle-business-logic/remote-schema"},next:{title:"Attributes",permalink:"/vi/handle-business-logic/graphql-server/graphqlite-attributes"}},u=[],o={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://graphqlite.thecodingmachine.io/"},"GraphQLite")," l\xe0 m\u1ed9t b\u1ed9 th\u01b0 vi\u1ec7n PHP gi\xfap b\u1ea1n x\xe2y d\u1ef1ng GraphQL server th\xf4ng qua code-first approach\nv\u1edbi ",(0,i.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.attributes.overview.php"},"PHP8 attribute"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Query(name: 'hello')]\n    public function __invoke(): string\n    {\n        return 'world';\n    }\n}\n")),(0,i.kt)("p",null,"V\u1edbi resolver tr\xean GraphQLite s\u1ebd sinh ra schema definition language (SDL) sau:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    hello: String!\n}\n")),(0,i.kt)("p",null,"Hasura Extra t\xedch h\u1ee3p v\u1edbi GraphQLite \u0111\u1ec3 x\xe2y d\u1ef1ng GraphQL server handle business logic k\u1ebft n\u1ed1i v\u1edbi Hasura th\xf4ng qua ",(0,i.kt)("a",{parentName:"p",href:"/vi/handle-business-logic/remote-schema"},"remote schema"),"."))}c.isMDXComponent=!0}}]);