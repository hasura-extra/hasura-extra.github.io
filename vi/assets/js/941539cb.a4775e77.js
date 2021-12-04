"use strict";(self.webpackChunkhasura_extra_github_io=self.webpackChunkhasura_extra_github_io||[]).push([[430],{2993:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return p},default:function(){return h}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],s={id:"graphqlite-attributes",title:"Attributes",sidebar_label:"Attributes"},u=void 0,o={unversionedId:"handle-business-logic/graphql-server/graphqlite-attributes",id:"handle-business-logic/graphql-server/graphqlite-attributes",isDocsHomePage:!1,title:"Attributes",description:"Hasura Extra cung c\u1ea5p cho b\u1ea1n set GraphQLite attributes \u0111\u1ec3 c\xf3 th\u1ec3 x\xe2y d\u1ef1ng GraphQL server \u0111\u01a1n gi\u1ea3n h\u01a1n.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/03-handle-business-logic/02-graphql-server/02-attributes.md",sourceDirName:"03-handle-business-logic/02-graphql-server",slug:"/handle-business-logic/graphql-server/graphqlite-attributes",permalink:"/vi/handle-business-logic/graphql-server/graphqlite-attributes",editUrl:"https://github.com/hasura-extra/hasura-extra/edit/main/docusaurus/i18n/vi/docusaurus-plugin-content-docs/current/03-handle-business-logic/02-graphql-server/02-attributes.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1638641209,formattedLastUpdatedAt:"4/12/2021",sidebarPosition:2,frontMatter:{id:"graphqlite-attributes",title:"Attributes",sidebar_label:"Attributes"},sidebar:"main",previous:{title:"GraphQLite",permalink:"/vi/handle-business-logic/graphql-server/graphqlite"},next:{title:"Custom scalar types",permalink:"/vi/handle-business-logic/graphql-server/graphqlite-custom-scalar-types"}},p=[{value:"Common attributes",id:"common-attributes",children:[{value:"ArgNaming",id:"argnaming",children:[],level:3},{value:"Roles",id:"attributes-roles",children:[],level:3}],level:2},{value:"Laravel attributes",id:"laravel-attributes",children:[{value:"ArgModel",id:"argmodel",children:[],level:3},{value:"ValidateObject",id:"validateobject",children:[],level:3},{value:"Transactional",id:"transactional",children:[],level:3}],level:2},{value:"Symfony attributes",id:"symfony-attributes",children:[{value:"ArgEntity",id:"argentity",children:[],level:3},{value:"ObjectAssertion",id:"objectassertion",children:[],level:3},{value:"Transactional",id:"transactional-1",children:[],level:3}],level:2}],c={toc:p};function h(n){var e=n.components,t=(0,i.Z)(n,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hasura Extra cung c\u1ea5p cho b\u1ea1n set ",(0,r.kt)("a",{parentName:"p",href:"https://graphqlite.thecodingmachine.io/"},"GraphQLite")," attributes \u0111\u1ec3 c\xf3 th\u1ec3 x\xe2y d\u1ef1ng GraphQL server \u0111\u01a1n gi\u1ea3n h\u01a1n."),(0,r.kt)("h2",{id:"common-attributes"},"Common attributes"),(0,r.kt)("p",null,"T\u1eadp h\u1ee3p c\xe1c attributes c\xf3 th\u1ec3 s\u1eed d\u1ee5ng \u1edf c\u1ea3 Laravel v\xe0 Symfony frameworks."),(0,r.kt)("h3",{id:"argnaming"},"ArgNaming"),(0,r.kt)("p",null,"\u0110\xe2y l\xe0 m\u1ed9t attribute d\xf9ng cho vi\u1ec7c custom name c\u1ee7a field arg (m\u1eb7c \u0111\u1ecbnh field arg kh\xf4ng thay \u0111\u1ed5i \u0111\u01b0\u1ee3c v\xe0 l\u1ea5y theo PHP arg)."),(0,r.kt)("p",null,"V\xed d\u1ee5 ch\xfang ta c\xf3 resolver sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver \n{\n    #[GQL\\Query(name: 'arg_naming')]\n    public function __invoke(string $camelCase): string \n    {\n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"Khi th\u1ef1c thi query get field ",(0,r.kt)("inlineCode",{parentName:"p"},"arg_naming")," s\u1ebd nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-GraphQL"},'query {\n    arg_naming(camelCase: "test")\n}\n')),(0,r.kt)("p",null,"V\xe0 ch\xfang ta s\u1ebd thay \u0111\u1ed5i field arg ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase")," sang ",(0,r.kt)("inlineCode",{parentName:"p"},"camel_case"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Hasura\\GraphQLiteBridge\\Attribute\\ArgNaming;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver \n{\n    #[GQL\\Query(name: 'arg_naming')]\n    #[ArgNaming(for: 'camelCase', name: 'camel_case')]\n    public function __invoke(string $camelCase): string \n    {\n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"C\xe2u query get field s\u1ebd th\xe0nh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-GraphQL"},'query {\n    arg_naming(camel_case: "test")\n}\n')),(0,r.kt)("h3",{id:"attributes-roles"},"Roles"),(0,r.kt)("p",null,"Attribute n\xe0y d\xf9ng cho authorization kh\xe1c v\u1edbi ",(0,r.kt)("a",{parentName:"p",href:"https://graphqlite.thecodingmachine.io/docs/authentication-authorization#logged-and-right-annotations"},"Right")," attribute,\nn\xf3 h\u1ed5 tr\u1ee3 b\u1ea1n th\xeam \u0111\u01b0\u1ee3c nhi\u1ec1u roles c\xf9ng 1 l\xfac v\xe0 h\u1ed5 tr\u1ee3 ",(0,r.kt)("a",{parentName:"p",href:"/vi/manage-metadata/persist-application-state-metadata"},"persist-state")," sync roles l\xean remote schema permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Hasura\\GraphQLiteBridge\\Attribute\\Roles;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Mutation(name: 'hello')]\n    #[Roles('ROLE_USER', 'ROLE_ADMIN')]\n    public function __invoke(Input $input): string \n    {\n        return 'world';\n    }\n}\n")),(0,r.kt)("h2",{id:"laravel-attributes"},"Laravel attributes"),(0,r.kt)("p",null,"T\u1eadp h\u1ee3p c\xe1c attributes s\u1eed d\u1ee5ng khi l\xe0m vi\u1ec7c v\u1edbi Laravel framework."),(0,r.kt)("h3",{id:"argmodel"},"ArgModel"),(0,r.kt)("p",null,"Attribute n\xe0y gi\xfap b\u1ea1n \u0111\u01a1n gi\u1ea3n h\xf3a vi\u1ec7c get Eloquent model t\u1eeb user input v\xed d\u1ee5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\MyModel;\nuse Doctrine\\ORM\\EntityManagerInterface;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver \n{\n    #[GQL\\Query(name: 'arg_model')]\n    public function __invoke(int $id): string \n    {\n        $entity = MyModel::find($id);\n        \n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"Resolver tr\xean s\u1ebd \u0111\u01b0\u1ee3c \u0111\u01a1n gi\u1ea3n h\xf3a khi s\u1eed d\u1ee5ng attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgModel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\MyModel;\nuse Hasura\\Laravel\\GraphQLite\\Attribute\\ArgModel;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Query(name: 'arg_model')]\n    #[ArgModel(for: 'model')]\n    public function __invoke(MyModel $model): string \n    {\n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"M\u1eb7c \u0111\u1ecbnh ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgModel")," s\u1ebd s\u1eed d\u1ee5ng ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," l\xe0 t\xean c\u1ee7a arg, graphql input type l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ID!"),", search tr\xean column name l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", trong tr\u01b0\u1eddng h\u1ee3p b\u1ea1n mu\u1ed1n custom l\u1ea1i th\xec b\u1ea1n c\xf3 th\u1ec3 truy\u1ec1n th\xeam th\xf4ng s\u1ed1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Article;\nuse Hasura\\Laravel\\GraphQLite\\Attribute\\ArgModel;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Query(name: 'arg_model')]\n    #[ArgModel(for: 'article', argName: 'article_id', inputType: 'Int!')]\n    public function __invoke(Article $article): string \n    {\n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"N\u1ebfu nh\u01b0 kh\xf4ng t\xecm th\u1ea5y Eloquent model theo ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," user input, m\u1eb7c \u0111\u1ecbnh h\u1ec7 th\u1ed1ng s\u1ebd v\u0103ng l\u1ed7i kh\xf4ng t\xecm th\u1ea5y \u0111\u1ebfn ng\u01b0\u1eddi d\xf9ng n\u1ebfu nh\u01b0 b\u1ea1n ch\u1ea5p nh\u1eadn\nvi\u1ec7c kh\xf4ng t\xecm th\u1ea5y model \u0111\u1ec3 upsert entity th\xec h\xe3y cho ph\xe9p arg ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[ArgModel(for: 'article', argName: 'article_id', inputType: 'Int!')]\npublic function __invoke(?Article $article): string \n")),(0,r.kt)("h3",{id:"validateobject"},"ValidateObject"),(0,r.kt)("p",null,"Attribute n\xe0y gi\xfap b\u1ea1n validate object input"),(0,r.kt)("p",null,"Gi\u1ea3 s\u1eed nh\u01b0 ch\xfang ta c\xf3 Input object sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\n#[GQL\\Input]\nclass Input \n{\n    #[GQL\\Field]\n    public string $email;\n    \n    public function rules(): array \n    {\n        return ['email' => 'required|email'];\n    }\n}\n")),(0,r.kt)("p",null,"V\u1edbi ",(0,r.kt)("inlineCode",{parentName:"p"},"rules")," method trong input object s\u1ebd l\xe0 n\u01a1i \u0111\u1ecbnh ngh\u0129a c\xe1c ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/validation#available-validation-rules"},"validation rules"),",\nobject property names s\u1ebd t\u01b0\u01a1ng \u1ee9ng v\u1edbi field name."),(0,r.kt)("p",null,"V\xe0 resolver s\u1eed d\u1ee5ng input object tr\xean:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Hasura\\Laravel\\GraphQLite\\Attribute\\ValidateObject;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Mutation(name: 'object_assertion')]\n    #[ValidateObject(for: 'input')]\n    public function __invoke(Input $input): bool \n    {\n        return true;\n    }\n    \n}\n")),(0,r.kt)("p",null,"Khi query mutation field ",(0,r.kt)("inlineCode",{parentName:"p"},"object_assertion")," m\xe0 tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0111\u1ed3ng ngh\u0129a v\u1edbi property ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," c\u1ee7a input object\nl\xe0 chu\u1ed7i email kh\xf4ng r\u1ed7ng, ng\u01b0\u1ee3c l\u1ea1i s\u1ebd b\xe1o l\u1ed7i."),(0,r.kt)("p",null,"Ngo\xe0i ra b\u1ea1n c\xf3 th\u1ec3 define th\xeam methods ",(0,r.kt)("inlineCode",{parentName:"p"},"customMessages")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"customAttributes")," cho input class \u0111\u1ec3\n",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/validation#manual-customizing-the-error-messages"},"\u0111i\u1ec3u ch\u1ec9nh c\xe2u b\xe1o l\u1ed7i ho\u1eb7c attribute")," cho\nph\xf9 h\u1ee3p:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\n#[GQL\\Input]\nclass Input \n{\n    #[GQL\\Field]\n    public string $email;\n    \n    public function rules(): array \n    {\n        return ['email' => 'required|email'];\n    }\n    \n    public function customMessages(): array\n    {\n        return ['email.required' => 'You should be type your :attribute.'];\n    }\n    \n    public function customAttributes(): array \n    {\n        return ['email' => 'email address'];\n    }\n}\n")),(0,r.kt)("h3",{id:"transactional"},"Transactional"),(0,r.kt)("p",null,"Attribute n\xe0y s\u1ebd wrap resolver c\u1ee7a b\u1ea1n trong m\u1ed9t database transaction, n\u1ebfu nh\u01b0 c\xf3 b\u1ea5t k\u1ef3 exception n\xe0o x\u1ea3y ra trong resolver c\u1ee7a b\u1ea1n th\xec to\xe0n b\u1ed9 SQL query\n\u0111\xe3 th\u1ef1c thi tr\u01b0\u1edbc \u0111\xf3 s\u1ebd \u0111\u01b0\u1ee3c rollback, v\xed d\u1ee5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Article;\nuse Hasura\\Laravel\\GraphQLite\\Attribute\\ValidateObject;\nuse Hasura\\Laravel\\GraphQLite\\Attribute\\Transactional;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Mutation(name: 'insert_user')]\n    #[ValidateObject(for: 'input')]\n    #[Transactional]\n    public function __invoke(Input $input): bool \n    {\n        $article = new Article();\n        $article->title = 'Hello World';\n        $article->saveOrFail();\n        \n        throw new \\RuntimeException('Test rollback');\n        \n        return true;\n    }\n    \n}\n")),(0,r.kt)("p",null,"Nh\u01b0 v\xed d\u1ee5 tr\xean ",(0,r.kt)("inlineCode",{parentName:"p"},"\\RuntimeException")," s\u1ebd \u0111\u01b0\u1ee3c throw v\xe0 article ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," s\u1ebd kh\xf4ng b\u1ecb save l\u1ea1i."),(0,r.kt)("p",null,"N\u1ebfu project c\u1ee7a b\u1ea1n c\xf3 nhi\u1ec1u database connections th\xec b\u1ea1n c\xf3 th\u1ec3 ch\u1ec9 \u0111\u1ecbnh connection name th\xf4ng qua th\xf4ng s\u1ed1 ",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[Transactional(connection: 'postgres2')]\n")),(0,r.kt)("h2",{id:"symfony-attributes"},"Symfony attributes"),(0,r.kt)("p",null,"T\u1eadp h\u1ee3p c\xe1c attributes s\u1eed d\u1ee5ng khi l\xe0m vi\u1ec7c v\u1edbi Symfony framework."),(0,r.kt)("h3",{id:"argentity"},"ArgEntity"),(0,r.kt)("p",null,"Attribute n\xe0y gi\xfap b\u1ea1n \u0111\u01a1n gi\u1ea3n h\xf3a vi\u1ec7c get Doctrine entity t\u1eeb user input v\xed d\u1ee5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Entity\\MyEntity;\nuse Doctrine\\ORM\\EntityManagerInterface;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver \n{\n    public function __construct(private EntityManagerInterface $em)\n    {\n    }\n    \n    #[GQL\\Query(name: 'arg_entity')]\n    public function __invoke(int $id): string \n    {\n        $entity = $this->em->getRepository(MyEntity::class)->find($id);\n        \n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"Resolver tr\xean s\u1ebd \u0111\u01b0\u1ee3c \u0111\u01a1n gi\u1ea3n h\xf3a khi s\u1eed d\u1ee5ng attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgEntity"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Entity\\MyEntity;\nuse Hasura\\Bundle\\GraphQLite\\Attribute\\ArgEntity;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Query(name: 'arg_entity')]\n    #[ArgEntity(for: 'entity')]\n    public function __invoke(MyEntity $entity): string \n    {\n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"M\u1eb7c \u0111\u1ecbnh ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgEntity")," s\u1ebd s\u1eed d\u1ee5ng ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," l\xe0 t\xean c\u1ee7a arg, graphql input type l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ID!"),", search tr\xean column name l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," v\xe0 Doctrine manager l\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," (default), trong tr\u01b0\u1eddng h\u1ee3p b\u1ea1n mu\u1ed1n custom l\u1ea1i th\xec b\u1ea1n c\xf3 th\u1ec3 truy\u1ec1n th\xeam th\xf4ng s\u1ed1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Entity\\Article;\nuse Hasura\\Bundle\\GraphQLite\\Attribute\\ArgEntity;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Query(name: 'arg_entity')]\n    #[ArgEntity(for: 'article', argName: 'article_id', inputType: 'Int!', entityManager: 'custom')]\n    public function __invoke(Article $article): string \n    {\n        return 'hello';\n    }\n    \n}\n")),(0,r.kt)("p",null,"N\u1ebfu nh\u01b0 kh\xf4ng t\xecm th\u1ea5y entity theo ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," user input, m\u1eb7c \u0111\u1ecbnh h\u1ec7 th\u1ed1ng s\u1ebd v\u0103ng l\u1ed7i kh\xf4ng t\xecm th\u1ea5y \u0111\u1ebfn ng\u01b0\u1eddi d\xf9ng n\u1ebfu nh\u01b0 b\u1ea1n ch\u1ea5p nh\u1eadn\nvi\u1ec7c kh\xf4ng t\xecm th\u1ea5y entity \u0111\u1ec3 upsert entity th\xec h\xe3y cho ph\xe9p arg ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[ArgEntity(for: 'article', argName: 'article_id', inputType: 'Int!', entityManager: 'custom')]\npublic function __invoke(?Article $article): string \n")),(0,r.kt)("h3",{id:"objectassertion"},"ObjectAssertion"),(0,r.kt)("p",null,"Attribute n\xe0y gi\xfap b\u1ea1n validate object input"),(0,r.kt)("p",null,"Gi\u1ea3 s\u1eed nh\u01b0 ch\xfang ta c\xf3 Input object sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations as GQL;\nuse Symfony\\Component\\Validator\\Constraints as Assert;\n\n#[GQL\\Input]\nclass Input \n{\n    #[GQL\\Field]\n    #[Assert\\NotBlank]\n    #[Assert\\Email]\n    public string $email;\n}\n")),(0,r.kt)("p",null,"V\xe0 resolver s\u1eed d\u1ee5ng input object tr\xean:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Hasura\\Bundle\\GraphQLite\\Attribute\\ObjectAssertion;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Mutation(name: 'object_assertion')]\n    #[ObjectAssertion(for: 'input')]\n    public function __invoke(Input $input): bool \n    {\n        return true;\n    }\n    \n}\n")),(0,r.kt)("p",null,"Khi query mutation field ",(0,r.kt)("inlineCode",{parentName:"p"},"object_assertion")," m\xe0 tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0111\u1ed3ng ngh\u0129a v\u1edbi property ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," c\u1ee7a input object\nl\xe0 chu\u1ed7i email kh\xf4ng r\u1ed7ng, ng\u01b0\u1ee3c l\u1ea1i s\u1ebd b\xe1o l\u1ed7i."),(0,r.kt)("p",null,"M\u1eb7c \u0111\u1ecbnh ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectAssertion")," s\u1ebd th\u1ef1c thi validate tr\u01b0\u1edbc khi resolver \u0111\u01b0\u1ee3c g\u1ecdi, b\u1ea1n c\xf3 th\u1ec3 b\u1eadt mode\nsau khi resolver \u0111\u01b0\u1ee3c g\u1ecdi v\xe0 s\u1eed d\u1ee5ng k\u1ebft h\u1ee3p v\u1edbi ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgEntity")," \u0111\u1ec3 validate th\xeam 1 l\u1ea7n n\u1eefa. V\xed d\u1ee5 ta c\xf3\nentity ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entity;\n\nuse Doctrine\\ORM\\Mapping as ORM;\nuse Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntity;\n\n#[ORM\\Entity]\n#[UniqueEntity(fields: 'email')]\nclass User \n{\n    #[ORM\\Column(unique: true)]\n    private $email;\n    \n    public function setEmail(string $email): void \n    {\n        $this->email = $email;\n    }\n}\n")),(0,r.kt)("p",null,"v\xe0 mutation resolver ",(0,r.kt)("inlineCode",{parentName:"p"},"update_user")," field nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Hasura\\Bundle\\GraphQLite\\Attribute\\ArgEntity;\nuse Hasura\\Bundle\\GraphQLite\\Attribute\\ObjectAssertion;\nuse Hasura\\Bundle\\GraphQLite\\Attribute\\Transactional;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Mutation(name: 'update_user')]\n    #[ArgEntity(for: 'user')]\n    #[ObjectAssertion(for: 'input')]\n    #[ObjectAssertion(for: 'user', mode: ObjectAssertion::AFTER_RESOLVE_CALL)]\n    #[Transactional]\n    public function __invoke(Input $input, User $user): bool \n    {\n        $user->setEmail($input->email);\n        \n        return true;\n    }\n    \n}\n")),(0,r.kt)("p",null,"Khi mutation field ",(0,r.kt)("inlineCode",{parentName:"p"},"update_user")," \u0111\u01b0\u1ee3c g\u1ecdi property ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," c\u1ee7a object input \u0111\xe3 \u0111\u01b0\u1ee3c validate v\xe0 ch\xfang ta s\u1eed d\u1ee5ng property \u0111\xf3 \u0111\u1ec3 set email cho entity\nUser, ti\u1ebfp \u0111\u1ebfn resolver s\u1ebd tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," v\xe0 \u0111\u1ed3ng th\u1eddi entity User s\u1ebd \u0111\u01b0\u1ee3c validate n\u1ebfu nh\u01b0 field ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," kh\xf4ng t\u1ed3n t\u1ea1i tr\xean DB th\xec\nentity s\u1ebd \u0111\u01b0\u1ee3c update v\xe0 flush v\xe0o DB nh\u1edd ",(0,r.kt)("inlineCode",{parentName:"p"},"Transactional")," attribute xem th\xeam t\u1ea1i b\xean d\u01b0\u1edbi, ng\u01b0\u1ee3c l\u1ea1i s\u1ebd b\xe1o l\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," kh\xf4ng unique."),(0,r.kt)("h3",{id:"transactional-1"},"Transactional"),(0,r.kt)("p",null,"Attribute n\xe0y s\u1ebd wrap resolver c\u1ee7a b\u1ea1n trong m\u1ed9t database transaction, n\u1ebfu nh\u01b0 c\xf3 b\u1ea5t k\u1ef3 exception n\xe0o x\u1ea3y ra trong resolver c\u1ee7a b\u1ea1n th\xec to\xe0n b\u1ed9 SQL query\n\u0111\xe3 th\u1ef1c thi tr\u01b0\u1edbc \u0111\xf3 s\u1ebd \u0111\u01b0\u1ee3c rollback, v\xed d\u1ee5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\EntityManagerInterface;\nuse Hasura\\Bundle\\GraphQLite\\Attribute\\ObjectAssertion;\nuse Hasura\\Bundle\\GraphQLite\\Attribute\\Transactional;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    public function __construct(private EntityManagerInterface $em)\n    {\n    }\n    \n    #[GQL\\Mutation(name: 'insert_user')]\n    #[ObjectAssertion(for: 'input')]\n    #[Transactional]\n    public function __invoke(Input $input): User \n    {\n        $user = new User();\n        $user->setEmail($input->email);\n        \n        $this->em->persist($user);\n        $this->em->flush();\n        \n        throw new \\RuntimeException('Test rollback');\n        \n        return $user;\n    }\n    \n}\n")),(0,r.kt)("p",null,"Nh\u01b0 v\xed d\u1ee5 tr\xean exception ",(0,r.kt)("inlineCode",{parentName:"p"},"\\RuntimeException")," s\u1ebd \u0111\u01b0\u1ee3c throw v\xe0 entity user s\u1ebd kh\xf4ng b\u1ecb flush v\xe0o database."),(0,r.kt)("p",null,"Ngo\xe0i ra attribute n\xe0y c\xf2n c\xf3 t\xednh n\u0103ng t\u1ef1 \u0111\u1ed9ng persist \u0111\u1ed1i v\u1edbi c\xe1c entity v\u1eeba \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o (state new) gi\xfap cho b\u1ea1n kh\xf4ng c\u1ea7n inject\nentity manager dependency, v\xed d\u1ee5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Hasura\\Bundle\\GraphQLite\\Attribute\\ObjectAssertion;\nuse Hasura\\Bundle\\GraphQLite\\Attribute\\Transactional;\nuse TheCodingMachine\\GraphQLite\\Annotations as GQL;\n\nclass Resolver\n{\n    #[GQL\\Mutation(name: 'insert_user')]\n    #[ObjectAssertion(for: 'input')]\n    #[Transactional]\n    public function __invoke(Input $input): User \n    {\n        $user = new User();\n        $user->setEmail($input->email);\n        \n        return $user;\n    }\n    \n}\n")),(0,r.kt)("p",null,"Khi mutation field ",(0,r.kt)("inlineCode",{parentName:"p"},"insert_user")," \u0111\u01b0\u1ee3c g\u1ecdi th\xec object User s\u1ebd \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o th\xf4ng qua input object c\u1ee7a end-user\nv\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Transactional")," attribute s\u1ebd t\u1ef1 \u0111\u1ed9ng persist n\xf3 gi\xfap b\u1ea1n, sau \u0111\xf3 s\u1ebd flush v\xe0o database."),(0,r.kt)("p",null,"N\u1ebfu project c\u1ee7a b\u1ea1n c\xf3 nhi\u1ec1u entity managers (multi database) th\xec b\u1ea1n c\xf3 th\u1ec3 ch\u1ec9 \u0111\u1ecbnh Entity Manager th\xf4ng qua th\xf4ng s\u1ed1 ",(0,r.kt)("inlineCode",{parentName:"p"},"entityManager")," nh\u01b0 sau:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[Transactional(entityManager: 'custom')]\n")))}h.isMDXComponent=!0}}]);