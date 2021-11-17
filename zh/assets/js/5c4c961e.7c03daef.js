"use strict";(self.webpackChunktemp_web=self.webpackChunktemp_web||[]).push([[6563],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5576:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],u={title:"Developer Guide"},p=void 0,i={unversionedId:"developer-manuals/developer-guide",id:"developer-manuals/developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"There's a Makefile in the root folder. Here are some common options:",source:"@site/docs/developer-manuals/developer-guide.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/developer-guide",permalink:"/zh/docs/developer-manuals/developer-guide",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/developer-guide.md",tags:[],version:"current",lastUpdatedBy:"Peeknut",lastUpdatedAt:1637131172,formattedLastUpdatedAt:"2021/11/17",frontMatter:{title:"Developer Guide"},sidebar:"docs",previous:{title:"Build and deploy",permalink:"/zh/docs/user-manuals/yurt-app-manager/yurt-app-manager-dev"},next:{title:"Yurt e2e test",permalink:"/zh/docs/developer-manuals/yurt-e2e-test"}},c=[],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There's a ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," in the root folder. Here are some common options:"),(0,o.kt)("p",null,"Build all binaries (",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-controller-manager"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"yurthub"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtctl"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,o.kt)("p",null,"Build specific binary for specific architecture. (",(0,o.kt)("inlineCode",{parentName:"p"},"amd64"),",",(0,o.kt)("inlineCode",{parentName:"p"},"arm"),",",(0,o.kt)("inlineCode",{parentName:"p"},"arm64"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GOOS=linux GOARCH=arm64 make build WHAT=cmd/yurtctl\n")),(0,o.kt)("p",null,"Build all docker images for all supported architectures."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make release\n")),(0,o.kt)("p",null,"Build all docker images for specific architecture."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make release ARCH=arm64\n")),(0,o.kt)("p",null,"Build yurt-e2e-test binary to test Openyurt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make e2e\n")),(0,o.kt)("p",null,"###More"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please check ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/developer-manuals/yurt-e2e-test"},"yurt-e2e-test")," for more details."),(0,o.kt)("li",{parentName:"ul"},"Please check ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/user-manuals/yurt-app-manager/yurt-app-manager-dev"},"yurt-app-manager dev")," for more details.")))}d.isMDXComponent=!0}}]);