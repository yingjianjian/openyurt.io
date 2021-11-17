"use strict";(self.webpackChunktemp_web=self.webpackChunktemp_web||[]).push([[8278],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3045:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"How-run-business-pod-in-edge-scenarios",title:"How Openyurt runs the business pod in edge scenarios",authors:["rambohe-ch"],tags:["openyurt"]},p=void 0,u={permalink:"/blog/How-run-business-pod-in-edge-scenarios",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2021-10-15-How-run-business-pod-in-edge-scenarios.md",source:"@site/blog/2021-10-15-How-run-business-pod-in-edge-scenarios.md",title:"How Openyurt runs the business pod in edge scenarios",description:"1.\u80cc\u666f\u4ecb\u7ecd",date:"2021-10-15T00:00:00.000Z",formattedDate:"October 15, 2021",tags:[{label:"openyurt",permalink:"/blog/tags/openyurt"}],readingTime:6.48,truncated:!1,authors:[{name:"rambohe",title:"Maintainer of OpenYrut",url:"https://github.com/rambohe-ch",imageURL:"https://github.com/rambohe-ch.png",key:"rambohe-ch"}],nextItem:{title:"Elegant realization of edge gateway caching capabilities",permalink:"/blog/Edge-gateway-caching-capabilities"}},s={authorsImageUrls:[void 0]},c=[{value:"1.\u80cc\u666f\u4ecb\u7ecd",id:"1\u80cc\u666f\u4ecb\u7ecd",children:[],level:3},{value:"2.\u9762\u4e34\u6311\u6218",id:"2\u9762\u4e34\u6311\u6218",children:[],level:3},{value:"3.\u89e3\u51b3\u65b9\u6848",id:"3\u89e3\u51b3\u65b9\u6848",children:[{value:"3.1\u8fb9\u7f18Pod\u8bbf\u95ee\u7684\u4e91\u7aefendpoint\u4f18\u5316",id:"31\u8fb9\u7f18pod\u8bbf\u95ee\u7684\u4e91\u7aefendpoint\u4f18\u5316",children:[],level:5},{value:"3.2\u4e1a\u52a1Pod\u7684\u8fb9\u7f18\u81ea\u6cbb",id:"32\u4e1a\u52a1pod\u7684\u8fb9\u7f18\u81ea\u6cbb",children:[],level:5}],level:3},{value:"4.\u603b\u7ed3",id:"4\u603b\u7ed3",children:[],level:3},{value:"\u53c2\u8003\u94fe\u63a5\uff1a",id:"\u53c2\u8003\u94fe\u63a5",children:[],level:3}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1\u80cc\u666f\u4ecb\u7ecd"},"1.\u80cc\u666f\u4ecb\u7ecd"),(0,o.kt)("p",null,"OpenYurt\u662f\u4e1a\u754c\u9996\u4e2a\u975e\u4fb5\u5165\u7684\u8fb9\u7f18\u8ba1\u7b97\u4e91\u539f\u751f\u5f00\u6e90\u9879\u76ee\uff0c\u901a\u8fc7\u8fb9\u7f18\u81ea\u6cbb\uff0c\u4e91\u8fb9\u534f\u540c\uff0c\u8fb9\u7f18\u5355\u5143\u5316\uff0c\u8fb9\u7f18\u6d41\u91cf\u95ed\u73af\u7b49\u80fd\u529b\u4e3a\u7528\u6237\u63d0\u4f9b\u4e91\u8fb9\u4e00\u4f53\u5316\u7684\u4f7f\u7528\u4f53\u9a8c\u3002\u4e0d\u5c11\u7528\u6237\u5728\u4f7f\u7528OpenYurt\u7684\u65f6\u5019\uff0c\u7ecf\u5e38\u9700\u8981\u628a\u5b58\u91cf\u7684\u4f7f\u7528InClusterConfig\u8bbf\u95eekube-apiserver\u7684Pod\u901a\u8fc7OpenYurt\u8fc1\u79fb\u5230\u8fb9\u7f18\u73af\u5883\u4e2d\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2319).Z})),(0,o.kt)("p",null,"\u5728OpenYurt\u96c6\u7fa4\u4e2d\uff0c\u63d0\u4f9b\u4e86\u4f7f\u7528InClusterConfig\u7684\u4e1a\u52a1Pod\u96f6\u4fee\u6539\u5c31\u53ef\u4ee5\u8fd0\u884c\u5728\u8fb9\u7f18\u73af\u5883\u7684\u80fd\u529b\u3002"),(0,o.kt)("h3",{id:"2\u9762\u4e34\u6311\u6218"},"2.\u9762\u4e34\u6311\u6218"),(0,o.kt)("p",null,"\u4f7f\u7528InClusterConfig\u7684\u4e1a\u52a1Pod\u5728\u8fb9\u7f18\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u9700\u8981\u89e3\u51b3\u5982\u4e0b\u95ee\u9898\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u95ee\u9898\u4e00\uff1aPod\u901a\u8fc7InClusterConfig\u5730\u5740\u8bbf\u95eekube-apiserver\uff0c\u8282\u70b9\u4e0a\u9ed8\u8ba4\u7f51\u7edc\u89c4\u5219\uff08iptables/ipvs\uff09\u5c06\u4f1a\u628a\u8bf7\u6c42\u8f6c\u53d1\u5230kube-apiserver\u7684PodIP\uff0c\u540c\u65f6\u4e91\u7aef\u4e0e\u8fb9\u7f18\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u5e73\u9762\uff0c\u8fb9\u7f18\u662f\u65e0\u6cd5\u8bbf\u95ee\u5230\u4e91\u7aef\u7684PodIP\u3002\u6240\u4ee5\u8fb9\u7f18\u4e1a\u52a1Pod\u65e0\u6cd5\u901a\u8fc7InClusterConfig\u8bbf\u95ee\u5230kube-apiserver\u3002"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Incluster2",src:n(6789).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u95ee\u9898\u4e8c\uff1a\u5728\u89e3\u51b3\u95ee\u9898\u4e00\u540e\uff0c\u5982\u679c\u4e91\u8fb9\u7f51\u7edc\u65ad\u5f00\u65f6\u4e1a\u52a1Pod\u5bb9\u5668\u51fa\u73b0\u91cd\u542f\u7b49\u72b6\u51b5\uff0c\u8fb9\u7f18Pod\u5c06\u65e0\u6cd5\u4ecekube-apiserver\u83b7\u53d6\u5230\u4e1a\u52a1\u914d\u7f6e\uff0c\u8fd9\u4f1a\u5f71\u54cd\u5230\u4e1a\u52a1Pod\u7684\u91cd\u542f\u8fd0\u884c\u3002"))),(0,o.kt)("h3",{id:"3\u89e3\u51b3\u65b9\u6848"},"3.\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u4ece\u4e0a\u8ff0\u95ee\u9898\u53ef\u4ee5\u770b\u51fa\uff0c\u6211\u4eec\u9700\u8981\u65e0\u611f\u77e5\u7684\u8c03\u6574\u8fb9\u7f18pod\u7684\u8bbf\u95ee\u5730\u5740\uff0c\u540c\u65f6\u9700\u8981\u5728\u8fb9\u7f18\u73af\u5883\u4e2d\u7f13\u5b58\u4e1a\u52a1\u914d\u7f6e\uff0c\u4fdd\u8bc1\u4e91\u8fb9\u65ad\u7f51\u65f6\u4e5f\u53ef\u4ee5\u5229\u7528\u8fb9\u7f18\u7f13\u5b58\u4e1a\u52a1\u914d\u7f6e\uff0c\u4fdd\u8bc1\u4e91\u8fb9\u65ad\u7f51\u65f6\u4e5f\u53ef\u4ee5\u5229\u7528\u8fb9\u7f18\u7f13\u5b58\u6765\u83b7\u53d6\u4e1a\u52a1Pod\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5177\u4f53\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1b"),(0,o.kt)("h5",{id:"31\u8fb9\u7f18pod\u8bbf\u95ee\u7684\u4e91\u7aefendpoint\u4f18\u5316"},"3.1\u8fb9\u7f18Pod\u8bbf\u95ee\u7684\u4e91\u7aefendpoint\u4f18\u5316"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pod\u901a\u8fc7InClusterConfig\u8bbf\u95eekube-apiserver\uff0c\u6e90\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func InClusterConfig() (*Config, error) {\nconst (\n    tokenFile  = "/var/run/secrets/kubernetes.io/serviceaccount/token"\n    rootCAFile = "/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"\n// \u901a\u8fc7Kuberentes service\u5bf9\u5e94\u7684\u73af\u5883\u53d8\u91cf\u6765\u83b7\u53d6\u8bbf\u95ee\u5730\u5740\nhost, port := os.Getenv("KUBERNETES_SERVICE_HOST"), os.Getenv("KUBERNETES_SERVICE_PORT")\nif len(host) == 0 || len(port) == 0 {\n    return nil, ErrNotInCluster\n}\n\n// skip some code...\n\nreturn &Config{\n    Host:            "https://" + net.JoinHostPort(host, port),\n    TLSClientConfig: tlsClientConfig,\n    BearerToken:     string(token),\n    BearerTokenFile: tokenFile,\n}, nil\n}\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u56e0\u6b64\u60f3\u65e0\u611f\u77e5\u8c03\u6574\u8fb9\u7f18Pod\u8bbf\u95ee\u7684\u4e91\u7aefendpoint\uff0c\u53ea\u9700\u8981\u65e0\u4fb5\u5165\u4fee\u6539Pod\u7684KUBERNETES_SERVICE_HOST\u548cKUBERNETE_SERVICE_PORT\u4e24\u4e2a\u73af\u5883\u53d8\u91cf\u6216\u8005\u4fee\u6539kubernetes service\u5730\u5740\u3002\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\u4e00\uff1a\u589e\u52a0\u4e00\u4e2aadmission controller\u5728\u8fb9\u7f18Pod\u521b\u5efa\u65f6\u628akube-apiserver\u7684\u516c\u7f51\u5730\u5740\u81ea\u52a8\u6ce8\u5165\u5230Pod\u7684\u73af\u5883\u53d8\u91cfKUBERNETES_SERVICE_HOST\u548cKUBERNETE_SERVICE_PORT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\u4e8c\uff1a\u8fb9\u7f18\u6570\u636e\u8fc7\u6ee4\u6846\u67b6\u4e2d\u589e\u52a0\u4e00\u4e2afillter yurthub\u7684\u8fb9\u7f18\u6570\u636e\u8fc7\u6ee4\u6846\u67b6\u7c7b\u4f3c\u4e8eadmission controller ,\u4e13\u95e8\u7528\u4e8e\u8fb9\u7f18\u573a\u666f\u4e0b\u5728\u8fb9\u7f18\u5e94\u7528\u65e0\u611f\u77e5\u7684\u72b6\u6001\u4e0b\uff0c\u65e0\u4fb5\u5165\u7684\u4fee\u6539\u6216\u8005\u8fc7\u6ee4\u4e91\u7aef\u8fd4\u56de\u7684\u6570\u636e\u3002\u76ee\u524d\u652f\u6301\u7684\u8fc7\u6ee4\u5668\u6709\uff1aMasterservice\uff0cservicetopology\uff0cdiscardcloudservice\u7b49")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848\u5bf9\u6bd4\uff1a"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u89e3\u51b3\u65b9\u6848\u4e00"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u89e3\u51b3\u65b9\u6848\u4e8c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5b9e\u73b0\u65b9\u6848"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u589e\u52a0\u4e00\u4e2aadmission controller"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u8fb9\u7f18\u6570\u636e\u8fc7\u6ee4\u6846\u67b6\u4e2d\u589e\u52a0\u4e00\u4e2afilter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u590d\u6742\u5ea6"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u9ad8\uff08\u9700\u8981\u533a\u522bPod\u8fd0\u884c\u5728\u8fb9\u7f18\u8fd8\u662f\u4e91\u7aef\uff09"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f4e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u663e\u793a\u4fee\u6539\u6570\u636e"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Pod\u4e2d\u589e\u52a0\u73af\u5883\u53d8\u91cf\u914d\u7f6e"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u65e0")))))))),(0,o.kt)("p",null,"\u7efc\u5408\u5b9e\u73b0\u590d\u6742\u5ea6\uff0c\u975e\u4fb5\u5165\u7b49\u8bbe\u8ba1\u7406\u5ff5\uff0c\u5728OpenYurt\u4e2d\u6211\u4eec\u9009\u62e9\u4e86\u89e3\u51b3\u65b9\u6848\u4e8c\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6680).Z})),(0,o.kt)("h5",{id:"32\u4e1a\u52a1pod\u7684\u8fb9\u7f18\u81ea\u6cbb"},"3.2\u4e1a\u52a1Pod\u7684\u8fb9\u7f18\u81ea\u6cbb"),(0,o.kt)("p",null,"\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u5f00\u72b6\u6001\u4e0b\uff0c\u4e1a\u52a1Pod\u91cd\u542f\u65f6\uff0c\u5c06\u65e0\u6cd5\u4ece\u4e91\u7aefkube-apiserver\u83b7\u53d6\u5230\u4e1a\u52a1\u914d\u7f6e\u4fe1\u606f\uff0c\u56e0\u6b64\u9700\u8981\u5728\u8fb9\u7f18\u672c\u5730\u7f13\u5b58Pod\u7684\u4e1a\u52a1\u6570\u636e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7331).Z})),(0,o.kt)("p",null,"\u8bf4\u660e1\uff1a\u4e1a\u52a1Pod\u901a\u8fc7yurthub\u8bbf\u95eekube-apiserver\uff0c\u4e5f\u610f\u5473\u7740","[3.1 \u8fb9\u7f18Pod\u8bbf\u95ee\u7684\u4e91\u7aefendpoint\u4f18\u5316]","\u7ae0\u8282\u4e2d\u63d0\u5230\u7684KUBERNETES_SERVICE_HOST\u548cKUBERNETE_SERVICE_PORT\u73af\u5883\u53d8\u91cf\u88ab\u4fee\u6539\u4e3ayurthub https endpoint(169.254.2.1:10268)\u3002"),(0,o.kt)("p",null,"\u8bf4\u660e2\uff1a\u5982\u679c\u4e1a\u52a1Pod\u7684\u5927\u91cflist/watch\u64cd\u4f5c\u5bfc\u81f4\u5927\u91cf\u672c\u5730cache\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u672c\u5730\u78c1\u76d8\u538b\u529b\uff0c\u56e0\u6b64yurthub\u5bf9\u4e1a\u52a1Pod\u7684\u7f13\u5b58\u80fd\u529b\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7yurt-hub-cfg configmap\u7684cache_agents\u5b57\u6bb5\u4e2d\u589e\u52a0User-Agent\u4fe1\u606f\u6765\u6253\u5f00\u5bf9\u5e94Pod\u7684\u6570\u636e\u7f13\u5b58\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yurt-hub-cfg\n  namespace: kube-system\ndata:\n  # \u7f13\u5b58\u8fb9\u7f18ingress-controller pod\u8bbf\u95eekube-apiserver\u7684\u6570\u636e\n  cache_agents: "ingress-controller"\n')),(0,o.kt)("h3",{id:"4\u603b\u7ed3"},"4.\u603b\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u5b58\u91cfPod\u65e0\u9700\u8bbf\u95eekube-apiserver\u6216\u8005InClusterConfig\u8bbf\u95eekube-apiserver\uff0c\u8fd9\u4e9b\u7c7b\u578bPod\u53ef\u4ee5\u96f6\u4fee\u6539\u8fd0\u884c\u5230OpenYurt\u96c6\u7fa4\u7684\u8fb9\u7f18\u73af\u5883\u4e0a\u3002\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u8bbf\u95eekube-apiserver\u7684\u4e1a\u52a1Pod\u76ee\u524d\u65e0\u6cd5\u4fdd\u8bc1\u96f6\u4fee\u6539\u8fd0\u884c\u5230\u8fb9\u7f18\u73af\u5883\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fb9\u7f18\u4e1a\u52a1Pod\u662f\u5426\u6b63\u5e38\u8bbf\u95eekube-apiserver\uff0c\u9996\u5148\u53ef\u4ee5\u67e5\u770b\u4e1a\u52a1pod\u7684\u73af\u5883\u53d8\u91cf\u662f\u5426\u6b63\u5e38\uff1a"),(0,o.kt)("p",{parentName:"li"},"KUBERNETES_SERVICE_HOST=127.0.0.1\u6216\u8005169.254.2.1\uff0cKUBERNETES_SERVICE_PORT=10268\u3002\u7136\u540e\u53ef\u4ee5\u67e5\u770byurthub\u7ec4\u4ef6\u7684\u65e5\u5fd7\u662f\u5426\u6709\u4e1a\u52a1Pod\u76f8\u5173\u7684\u8bf7\u6c42\u65e5\u5fd7\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u67e5\u8be2\u4e1a\u52a1Pod\u7684\u65e5\u5fd7\u662f\u5426\u6b63\u5e38\u3002\u6700\u540e\u53ef\u4ee5\u786e\u8ba4/etc/kubernetes/cache\u76ee\u5f55\u662f\u5426\u6709\u76f8\u5173\u7ec4\u4ef6\u7684\u7f13\u5b58\u6570\u636e\uff0c\u5982\u679c\u6ca1\u6709\u53ef\u4ee5\u518d\u786e\u8ba4kube-system/yurt-hub-cfg configmap\u662f\u5426\u5df2\u7ecf\u914d\u7f6e\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528InClusterConfig\u7684Pod\u96f6\u4fee\u6539\u8fd0\u884c\u5230\u8fb9\u7f18\u73af\u5883\u7684\u80fd\u529b\uff0c\u6574\u4f53\u5b9e\u73b0\u7531yurthub\u7ec4\u4ef6\u627f\u8f7d\uff0c\u6ca1\u6709\u7ed9OpenYurt\u67b6\u6784\u589e\u52a0\u989d\u5916\u7684\u8d1f\u62c5\uff0c\u540c\u65f6\u7528\u6237\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5bf9\u8be5\u80fd\u529b\u4e5f\u57fa\u672c\u65e0\u611f\u77e5\uff0c\u5bf9\u539f\u751f\u4e1a\u52a1Pod\u65e0\u4fb5\u5165\u3002"))),(0,o.kt)("h3",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5\uff1a"),(0,o.kt)("p",null,"1.",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/access-cluster/#accessing-the-api-from-a-pod"},"Accessing the API from a Pod")),(0,o.kt)("p",null,"2.",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/proposals/20210720-data-filtering-framework.md"},"data filtering framework on the edge")),(0,o.kt)("p",null,"3.",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/4BLfvMJJA623ZwRSgUE69A"},"\u6df1\u5ea6\u89e3\u8bfbOpenYurt\uff1a\u8fb9\u7f18\u81ea\u6cbb\u80fd\u529b\u8bbe\u8ba1\u89e3\u6790")))}m.isMDXComponent=!0},2319:function(e,t,n){t.Z=n.p+"assets/images/InCluster1-1ef22d79567f77ccd6a6d7eeb72185ac.png"},6680:function(e,t,n){t.Z=n.p+"assets/images/InCluster3-4342c22777070b2df9e39d158a929ac3.png"},7331:function(e,t,n){t.Z=n.p+"assets/images/InCluster4-4a67ce6edd8af63676837754c51f97f3.png"},6789:function(e,t,n){t.Z=n.p+"assets/images/Incluster2-7f6a69f9c29152322fbc57bf978eca6e.png"}}]);