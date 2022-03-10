"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8498],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:1.2,title:"Reactive Deployment"},s=void 0,c={unversionedId:"tools/lsp-factoryjs/introduction/reactive-deployment",id:"tools/lsp-factoryjs/introduction/reactive-deployment",title:"Reactive Deployment",description:"Reactive Deployment",source:"@site/docs/tools/lsp-factoryjs/introduction/reactive-deployment.md",sourceDirName:"tools/lsp-factoryjs/introduction",slug:"/tools/lsp-factoryjs/introduction/reactive-deployment",permalink:"/tools/lsp-factoryjs/introduction/reactive-deployment",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/introduction/reactive-deployment.md",tags:[],version:"current",sidebarPosition:1.2,frontMatter:{sidebar_position:1.2,title:"Reactive Deployment"},sidebar:"toolsSidebar",previous:{title:"Getting Started",permalink:"/tools/lsp-factoryjs/introduction/getting-started"},next:{title:"Universal Profile",permalink:"/tools/lsp-factoryjs/deployment/universal-profile"}},p=[{value:"Reactive Deployment",id:"reactive-deployment",children:[{value:"Universal Profiles",id:"universal-profiles",children:[],level:3},{value:"Digtial Assets",id:"digtial-assets",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"reactive-deployment"},"Reactive Deployment"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lsp-factory.js")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs"},"RxJS")," to deploy contracts. This can be leveraged to achieve reactive deployment of Universal Profiles and Digital Assets."),(0,i.kt)("p",null,"When deploying a Universal Profile or Digital Asset pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployReactive")," flag inside the ",(0,i.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/contract-deployment-options"},"ContractDeploymentOptions")," object to receive an RxJS Observable which will emit events as your contract is deployed."),(0,i.kt)("h3",{id:"universal-profiles"},"Universal Profiles"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployReactive")," flag and use ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe()")," to listen for deployment events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let deploymentEvents = [];\n\nlspFactory.LSP3UniversalProfile\n  .deploy({...}, { deployReactive: true })\n  .subscribe({\n    next: (deploymentEvent) => {\n      deploymentEvents.push(deploymentEvent);\n    },\n    complete: () => {\n      console.log(deploymentEvents);\n    },\n  });\n")),(0,i.kt)("p",null,"The function defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," will be called whenever a new deployment event is created. In this case we are simply pushing every deployment event into a ",(0,i.kt)("inlineCode",{parentName:"p"},"deploymentEvents")," array."),(0,i.kt)("p",null,"The function defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"complete")," will be called once after deployment is finished. Here we log the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploymentEvents")," array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="console.log(deploymentEvents) output"',title:'"console.log(deploymentEvents)','output"':!0},"[\n  { type: 'PROXY',        contractName: 'ERC725Account',                                              status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',                                              status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',           functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'ERC725Account',           functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n\n  { type: 'CONTRACT',     contractName: 'KeyManager',                                                 status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',                                       status: 'PENDING',  transaction:  {} },\n  { type: 'CONTRACT',     contractName: 'KeyManager',                                                 status: 'COMPLETE', receipt:      {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',                                       status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',    functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'UniversalReceiver...',    functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'setData',           status: 'PENDING',  transaction:  {} },\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'setData',           status: 'COMPLETE', receipt:      {} },\n\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'transferOwnership', status: 'PENDING',  transaction:  {} },\n  { type: 'TRANSACTION',  contractName: 'ERC725Account',           functionName: 'transferOwnership', status: 'COMPLETE', receipt:      {} },\n];\n")),(0,i.kt)("h3",{id:"digtial-assets"},"Digtial Assets"),(0,i.kt)("p",null,"For reactive deployment of LSP7 and LSP8 Digital Assets pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployReactive")," flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"LSP7DigitalAsset.deploy")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"LSP8IdentifiableDigitalAsset.deploy")," functions respectively"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="LSP7 Deployment"',title:'"LSP7','Deployment"':!0},"// Reactive deplyoyment of LSP7\nlet deploymentEvents = [];\n\nlspFactory.LSP7DigitalAsset\n  .deploy({...}, { deployReactive: true })\n  .subscribe({\n    next: (deploymentEvent) => {\n      deploymentEvents.push(deploymentEvent);\n    },\n    complete: () => {\n      console.log(deploymentEvents);\n    },\n  });\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="LSP8 Deployment"',title:'"LSP8','Deployment"':!0},"let deploymentEvents = [];\n\nlspFactory.LSP8IdentifiableDigitalAsset\n  .deploy({...}, { deployReactive: true })\n  .subscribe({\n    next: (deploymentEvent) => {\n      deploymentEvents.push(deploymentEvent);\n    },\n    complete: () => {\n      console.log(deploymentEvents);\n    },\n  });\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="LSP7 Deployment Events"',title:'"LSP7',Deployment:!0,'Events"':!0},"[\n  { type: 'PROXY',        contractName: 'LSP7DigitalAsset',                                              status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'LSP7DigitalAsset',                                              status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'LSP7DigitalAsset',           functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'LSP7DigitalAsset',           functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n];\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="LSP8    Deployment Events"',title:'"LSP8',"":!0,Deployment:!0,'Events"':!0},"[\n  { type: 'PROXY',        contractName: 'LSP8IdentifiableDigitalAsset',                                              status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'LSP8IdentifiableDigitalAsset',                                              status: 'PENDING',  receipt:      {} },\n  { type: \"PROXY\",        contractName: 'LSP8IdentifiableDigitalAsset',           functionName: 'initialize',        status: 'PENDING',  transaction:  {} },\n  { type: \"PROXY\",        contractName: 'LSP8IdentifiableDigitalAsset',           functionName: 'initialize',        status: 'COMPLETE', receipt:      {} },\n];\n")),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Reactive Deployment may be useful for certain front end behaviours to give better feedback to users when they trigger a UP deployment from a user interface. For example you may want to implement a loading bar to tell users how deployment is progressing, or display details and addresses of the contracts as they are deployed."))}m.isMDXComponent=!0}}]);