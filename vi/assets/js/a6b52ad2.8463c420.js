"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[760],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(7294),u=n(2389),i=n(9443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(9521),s=n(6010),c="tabItem_vU9c";function d(e){var t,n,a,u=e.lazy,i=e.block,d=e.defaultValue,h=e.values,p=e.groupId,m=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),g=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(y),x=w[0],T=w[1],E=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=g[p];null!=C&&C!==x&&f.some((function(e){return e.value===C}))&&T(C)}var U=function(e){var t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==x&&(_(t),T(a),null!=p&&N(p,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:U,onClick:U},null!=n?n:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,u.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6115:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return h},default:function(){return m}});var a=n(7462),r=n(3366),u=(n(7294),n(3905)),i=n(6396),o=n(8215),l=["components"],s={id:"unauthenticated-role",title:"Unauthenticated role",sidebar_label:"Unauthenticated role"},c=void 0,d={unversionedId:"security/unauthenticated-role",id:"security/unauthenticated-role",isDocsHomePage:!1,title:"Unauthenticated role",description:"\u0110\u1ed1i v\u1edbi Hasura, m\u1ecdi request \u0111\u1ec1u c\xf3 role k\u1ec3 c\u1ea3 unauthenticated request.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/05-security/03-unauthenticated-role.mdx",sourceDirName:"05-security",slug:"/security/unauthenticated-role",permalink:"/vi/security/unauthenticated-role",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/05-security/03-unauthenticated-role.mdx",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1638641209,formattedLastUpdatedAt:"4/12/2021",sidebarPosition:3,frontMatter:{id:"unauthenticated-role",title:"Unauthenticated role",sidebar_label:"Unauthenticated role"},sidebar:"main",previous:{title:"Session variable enhancer",permalink:"/vi/security/session-variable-enhancer"},next:{title:"Laravel access control",permalink:"/vi/security/laravel-access-control"}},h=[],p={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,u.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u0110\u1ed1i v\u1edbi Hasura, m\u1ecdi request \u0111\u1ec1u c\xf3 role k\u1ec3 c\u1ea3 ",(0,u.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/auth/authentication/unauthenticated-access.html"},"unauthenticated request"),"."),(0,u.kt)("p",null,"Hasura Extra gi\xfap b\u1ea1n c\u1ea5u h\xecnh role cho public access request (anonymous user)."),(0,u.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"N\u1ebfu nh\u01b0 b\u1ea1n x\xe0i ",(0,u.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt.html"},"JWT mode")," th\xec h\xe3y config anonymous role th\xf4ng qua ",(0,u.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_UNAUTHORIZED_ROLE")," env."))),(0,u.kt)(i.Z,{defaultValue:"laravel",values:[{label:"\u0110\u1ed1i v\u1edbi Laravel users",value:"laravel"},{label:"\u0110\u1ed1i v\u1edbi Symfony users",value:"symfony"}],mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"laravel",mdxType:"TabItem"},(0,u.kt)("p",null,"M\u1eb7c \u0111\u1ecbnh package \u0111\xe3 config unauthenticated role gi\xfap b\u1ea1n l\xe0 ",(0,u.kt)("inlineCode",{parentName:"p"},"anonymous")," n\u1ebfu b\u1ea1n mu\u1ed1n thay \u0111\u1ed5i l\u1ea1i cho ph\xf9 h\u1ee3p\nth\xec h\xe3y v\xe0o file\nconfig ",(0,u.kt)("inlineCode",{parentName:"p"},"config/hasura.php")," v\xe0 thay \u0111\u1ed5i ",(0,u.kt)("inlineCode",{parentName:"p"},"auth.anonymous_role"),".")),(0,u.kt)(o.Z,{value:"symfony",mdxType:"TabItem"},(0,u.kt)("p",null,"M\u1eb7c \u0111\u1ecbnh bundle \u0111\xe3 config unauthenticated role gi\xfap b\u1ea1n l\xe0 ",(0,u.kt)("inlineCode",{parentName:"p"},"ROLE_ANONYMOUS")," n\u1ebfu b\u1ea1n mu\u1ed1n thay \u0111\u1ed5i l\u1ea1i cho ph\xf9\nh\u1ee3p th\xec h\xe3y v\xe0o file\nconfig ",(0,u.kt)("inlineCode",{parentName:"p"},"config/packages/hasura.yaml")," v\xe0 thay \u0111\u1ed5i ",(0,u.kt)("inlineCode",{parentName:"p"},"hasura.auth.anonymous_role"),"."))))}m.isMDXComponent=!0}}]);