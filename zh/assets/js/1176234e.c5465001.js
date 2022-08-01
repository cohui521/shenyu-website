"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),g=r,d=h["".concat(p,".").concat(g)]||h[g]||s[g]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56163:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Context-Path\u63d2\u4ef6\u6e90\u7801\u5206\u6790",author:"Kunshuai Zhu",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Context-Path","Apache ShenYu"]},o=void 0,i={permalink:"/zh/blog/Plugin-SourceCode-Analysis-Context-Path-Plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/Plugin-SourceCode-Analysis-Context-Path-Plugin.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/Plugin-SourceCode-Analysis-Context-Path-Plugin.md",title:"Context-Path\u63d2\u4ef6\u6e90\u7801\u5206\u6790",description:"\u5f00\u59cb\u524d\uff0c\u53ef\u4ee5\u53c2\u8003 \u8fd9\u7bc7\u6587\u7ae0 \u8fd0\u884cshenyu\u7f51\u5173",date:"2022-08-01T03:54:25.577Z",formattedDate:"2022\u5e748\u67081\u65e5",tags:[{label:"Context-Path",permalink:"/zh/blog/tags/context-path"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:2.41,truncated:!1,prevItem:{title:"ZooKeeper\u6570\u636e\u540c\u6b65\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/DataSync-SourceCode-Analysis-ZooKeeper-Data-Sync"},nextItem:{title:"Divide\u63d2\u4ef6\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/Plugin-SourceCode-Analysis-Divide-Plugin"}},p=[{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[]}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u524d\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"./start-demo"},"\u8fd9\u7bc7\u6587\u7ae0")," \u8fd0\u884cshenyu\u7f51\u5173")),(0,r.kt)("h3",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u770b",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPlugin#doExecute"),"\u65b9\u6cd5\uff0c\u8fd9\u662f\u8fd9\u4e2a\u63d2\u4ef6\u7684\u6838\u5fc3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n    ...\n    // 1. \u4eceJVM\u7f13\u5b58\u4e2d\u53d6\u5f97contextMappingHandle\n    ContextMappingHandle contextMappingHandle = ContextPathPluginDataHandler.CACHED_HANDLE.get().obtainHandle(CacheKeyUtils.INST.getKey(rule));\n    ...\n    // 2. \u6839\u636econtextMappingHandle\u8bbe\u7f6eshenyu\u4e0a\u4e0b\u6587\n    buildContextPath(shenyuContext, contextMappingHandle);\n    return chain.execute(exchange);\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4eceJVM\u7f13\u5b58\u4e2d\u53d6\u5f97",(0,r.kt)("inlineCode",{parentName:"p"},"contextMappingHandle")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"contextMappingHandle"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ContextMappingHandle"),"\u7c7b\u7684\u5b9e\u4f8b\uff0c\u91cc\u9762\u6709\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"addPrefix")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e24\u4e2a\u53d8\u91cf\u5728\u4e4b\u524dAdmin\u91cc\u9762\u7684Rules\u8868\u5355\u91cc\u6709\u51fa\u73b0\u8fc7\uff0c\u662f\u5728\u6570\u636e\u540c\u6b65\u7684\u65f6\u5019\u66f4\u65b0\u7684\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636econtextMappingHandle\u8bbe\u7f6eshenyu\u4e0a\u4e0b\u6587"),(0,r.kt)("p",{parentName:"li"},"\u4e0b\u9762\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPlugin#buildContextPath"),"\u65b9\u6cd5\u7684\u6e90\u4ee3\u7801"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private void buildContextPath(final ShenyuContext context, final ContextMappingHandle handle) {\n    String realURI = "";\n    // 1. \u8bbe\u7f6eshenyu\u7684context path\uff0c\u6839\u636econtextPath\u7684\u957f\u5ea6\u5c06\u771f\u5b9eURI\u7684\u524d\u7f00\u53bb\u6389\n    if (StringUtils.isNoneBlank(handle.getContextPath())) {\n        context.setContextPath(handle.getContextPath());\n        context.setModule(handle.getContextPath());\n        realURI = context.getPath().substring(handle.getContextPath().length());\n    }\n    // \u52a0\u4e0a\u524d\u7f00\n    if (StringUtils.isNoneBlank(handle.getAddPrefix())) {\n        if (StringUtils.isNotBlank(realURI)) {\n            realURI = handle.getAddPrefix() + realURI;\n        } else {\n            realURI = handle.getAddPrefix() + context.getPath();\n        }\n    }\n    context.setRealUrl(realURI);\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6eshenyu\u7684context path\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6839\u636econtextPath\u7684\u957f\u5ea6\u5c06\u771f\u5b9eURI\u7684\u524d\u7f00\u53bb\u6389")),(0,r.kt)("p",{parentName:"li"},"\u4f60\u53ef\u80fd\u4f1a\u6709\u7591\u95ee\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u6240\u8c13\u7684\u300c\u6839\u636econtextPath\u7684\u957f\u5ea6\u300d\u4f1a\u4e0d\u4f1a\u6709\u95ee\u9898\u5462\uff1f")),(0,r.kt)("p",{parentName:"li"},"\u5b9e\u9645\u4e0a\u8fd9\u6837\u7684\u5224\u65ad\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u56e0\u4e3a\u8bf7\u6c42\u5728\u88abSelector\u548cRules\u5339\u914d\u5230\u4e4b\u540e\uff0c\u624d\u4f1a\u88ab\u63d2\u4ef6\u5904\u7406\u3002\u6240\u4ee5\u5728\u8bbe\u7f6e\u597dSelector\u548cRules\u7684\u524d\u63d0\u4e0b\uff0c\u662f\u5b8c\u5168\u53ef\u4ee5\u6ee1\u8db3\u8f6c\u6362\u7279\u5b9acontextPath\u7684\u9700\u6c42\u7684\u3002"))))),(0,r.kt)("p",null,"\u7136\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPlugin"),"\u7c7b\u8fd8\u6709\u4e00\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"skip"),"\uff0c\u4e0b\u9762\u5c55\u793a\u4e86\u90e8\u5206\u4ee3\u7801\u3002\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u662f\u5bf9RPC\u670d\u52a1\u7684\u8c03\u7528\uff0c\u5c31\u4f1a\u76f4\u63a5\u8df3\u8fc7context_path\u63d2\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Boolean skip(final ServerWebExchange exchange) {\n    ...\n    return Objects.equals(rpcType, RpcTypeEnum.DUBBO.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.GRPC.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.TARS.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.MOTAN.getName())\n            || Objects.equals(rpcType, RpcTypeEnum.SOFA.getName());\n}\n")),(0,r.kt)("p",null,"\u6700\u540e\uff0ccontext_path\u63d2\u4ef6\u8fd8\u6709\u53e6\u4e00\u4e2a\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"ContextPathPluginDataHandler"),"\u3002\u8fd9\u4e2a\u7c7b\u7684\u4f5c\u7528\u662f\u8ba2\u9605\u63d2\u4ef6\u7684\u6570\u636e\uff0c\u5f53\u63d2\u4ef6\u914d\u7f6e\u88ab\u4fee\u6539\u3001\u5220\u9664\u3001\u589e\u52a0\u65f6\uff0c\u5c31\u5f80JVM\u7f13\u5b58\u91cc\u9762\u4fee\u6539\u3001\u5220\u9664\u3001\u65b0\u589e\u6570\u636e\u3002"))}u.isMDXComponent=!0}}]);