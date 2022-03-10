"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2183],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(y,r(r({ref:t},c),{},{components:n})):o.createElement(y,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:1.4,title:"Contract Deployment Options"},s=void 0,p={unversionedId:"tools/lsp-factoryjs/deployment/contract-deployment-options",id:"tools/lsp-factoryjs/deployment/contract-deployment-options",title:"Contract Deployment Options",description:"When using LSPFactory you have the ability to specify custom deployment parameters to be applied to your contracts.",source:"@site/docs/tools/lsp-factoryjs/deployment/contract-deployment-options.md",sourceDirName:"tools/lsp-factoryjs/deployment",slug:"/tools/lsp-factoryjs/deployment/contract-deployment-options",permalink:"/tools/lsp-factoryjs/deployment/contract-deployment-options",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/deployment/contract-deployment-options.md",tags:[],version:"current",sidebarPosition:1.4,frontMatter:{sidebar_position:1.4,title:"Contract Deployment Options"},sidebar:"toolsSidebar",previous:{title:"Fungible Token (LSP7)",permalink:"/tools/lsp-factoryjs/deployment/fungible-token"},next:{title:"LSP3UniversalProfile",permalink:"/tools/lsp-factoryjs/classes/lsp3-universal-profile"}},c=[{value:"Custom Bytecode",id:"custom-bytecode",children:[],level:4},{value:"Custom Universal Profile Deployment",id:"custom-universal-profile-deployment",children:[],level:3},{value:"Custom Digital Asset Deployment",id:"custom-digital-asset-deployment",children:[],level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"LSPFactory")," you have the ability to specify custom deployment parameters to be applied to your contracts."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," function takes an object ",(0,i.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions")," as its second parameter where the contract ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"byteCode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"libAddress")," can be specified:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions?")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),":")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version?")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": The Contract version you want to deploy. Defaults to latest version of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts"},"lsp-smart-contracts")," library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"byteCode?")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Custom bytecode to be deployed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deployProxy?")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Whether the contract should be deployed using a proxy contract implementation (eg: ",(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP1167"),"). Defaults to true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libAddress?")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": The Address of a Base Contract to be used in deployment as implementation behind a proxy contract (eg: ",(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP1167"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadOptions?")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"),": Specify how the metadata should be uploaded.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ipfsClientOptions?")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"),": IPFS Client Options as defined by the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions"},"ipfs-http-client library")," used internally.")))),(0,i.kt)("p",null,"This is an optional parameter and so may be omitted. If no contract deployment options are specified, ",(0,i.kt)("inlineCode",{parentName:"p"},"LSPFactory")," will deploy a ",(0,i.kt)("strong",{parentName:"p"},"minimal proxy contract")," based on the ","[EIP1167]","(",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1167"},"https://eips.ethereum.org/EIPS/eip-1167"),". The proxy contract will reference the address of a base contract implementation already deployed on the network."),(0,i.kt)("p",null,"If you do not want your contract to use proxy deployment you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"deployProxy")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". This will deploy a 'full' contract with a constructor rather than using a proxy deployment with initializer."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"LSPFactory stores base contract addresses for different versions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"internally")," and uses the latest available version if no version is specified."))),(0,i.kt)("h4",{id:"custom-bytecode"},"Custom Bytecode"),(0,i.kt)("p",null,"You can specify the bytecode you want your contract to use by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"byteCode")," parameter. This will deploy a full contract from your custom bytecode without using a proxy."),(0,i.kt)("p",null,"For example, you could deploy a Universal Profile with a Key Manager which uses your custom bytecode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile with a custom Key Manager base contract"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,with:!0,custom:!0,Key:!0,Manager:!0,base:!0,'contract"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    version: '0.4.1'\n    KeyManager: {\n        bytecode: '0x...',\n    }\n})\n")),(0,i.kt)("h3",{id:"custom-universal-profile-deployment"},"Custom Universal Profile Deployment"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"../classes/lsp3-universal-profile"},"Universal Profile")," is composed of three different contracts. By passing the global ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," parameter you can set the version for all contracts at once."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile with all contracts at version 0.4.1"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,with:!0,all:!0,contracts:!0,at:!0,version:!0,'0.4.1"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    version: '0.4.1'\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LSPFactory also allows contracts to be individually customisable. You can set the version per contract which will take precedence over the global version:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile at version 0.4.1 with ERC725Account contract at version 0.3.9"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,at:!0,version:!0,"0.4.1":!0,with:!0,ERC725Account:!0,contract:!0,'0.3.9"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    version: '0.4.1'\n    ERC725Account: {\n        version: '0.3.9'\n    }\n})\n")),(0,i.kt)("p",null,"Or use a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"libAddress"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bytecode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Universal Profile with specific contract deployment options"',title:'"Deploying',a:!0,Universal:!0,Profile:!0,with:!0,specific:!0,contract:!0,deployment:!0,'options"':!0},"lspFactory.LSP3UniversalProfile.deploy({...}, {\n    ERC725Account: {\n        version: '0.4.1',\n    }\n    UniversalRecieverDelegate: {\n        baseContract: '0x...'\n    }\n    KeyManager: {\n        libAddress: '0x6c1F3Ed2F99054C88897e2f32187ef15c62dC560'\n    }\n})\n")),(0,i.kt)("h3",{id:"custom-digital-asset-deployment"},"Custom Digital Asset Deployment"),(0,i.kt)("p",null,"Deploying a ",(0,i.kt)("a",{parentName:"p",href:"../classes/lsp7-digital-asset"},(0,i.kt)("inlineCode",{parentName:"a"},"LSP7DigitalAsset"))," or ",(0,i.kt)("a",{parentName:"p",href:"../classes/lsp8-identifiable-digital-asset"},(0,i.kt)("inlineCode",{parentName:"a"},"LSP8IdentifiableDigitalAsset"))," involves deploying only one contract so these standards share the same ",(0,i.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions")," object structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying an LSP7 Digital Asset with a specified base contract address"',title:'"Deploying',an:!0,LSP7:!0,Digital:!0,Asset:!0,with:!0,a:!0,specified:!0,base:!0,contract:!0,'address"':!0},"lspFactory.LSP7DigitalAsset.deploy({...}, {\n    libAddress: '0xdD373889355d37D6cb9A5028Ce74cDBacC7CF782'\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a specific version of LSP8 Identifiable Digital Asset"',title:'"Deploying',a:!0,specific:!0,version:!0,of:!0,LSP8:!0,Identifiable:!0,Digital:!0,'Asset"':!0},"lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {\n    version: '0.1.1'\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying specific bytecode for LSP8 Identifiable Digital Asset base contract"',title:'"Deploying',specific:!0,bytecode:!0,for:!0,LSP8:!0,Identifiable:!0,Digital:!0,Asset:!0,base:!0,'contract"':!0},"lspFactory.LSP8IdentifiableDigitalAsset.deploy({...}, {\n    bytecode: '0x...'\n})\n")))}m.isMDXComponent=!0}}]);