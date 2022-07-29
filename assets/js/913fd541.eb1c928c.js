"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(3117),o=(a(7294),a(3905));const s={sidebar_position:1.1},r="Getting Started",i={unversionedId:"tools/lsp-factoryjs/getting-started",id:"tools/lsp-factoryjs/getting-started",title:"Getting Started",description:"The @lukso/lsp-factory.js package allows simple deployments of ERC725-UniversalProfiles, LSP7-DigitalAssets, and LSP8-IdentifiableDigitalAssets.",source:"@site/docs/tools/lsp-factoryjs/getting-started.md",sourceDirName:"tools/lsp-factoryjs",slug:"/tools/lsp-factoryjs/getting-started",permalink:"/tools/lsp-factoryjs/getting-started",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/getting-started.md",tags:[],version:"current",lastUpdatedAt:1658794893,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"toolsSidebar",previous:{title:"ERC725",permalink:"/tools/erc725js/classes/ERC725"},next:{title:"Universal Profile",permalink:"/tools/lsp-factoryjs/deployment/universal-profile"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Instantiation",id:"instantiation",level:2},{value:"Using LSPFactory in a dApp",id:"using-lspfactory-in-a-dapp",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Deploy Key",id:"deploy-key",level:4},{value:"Chain Id",id:"chain-id",level:4},{value:"IPFS Gateway",id:"ipfs-gateway",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@lukso/lsp-factory.js")," package allows simple deployments of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-0-ERC725Account.md"},"ERC725-UniversalProfiles"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LSP7-DigitalAssets"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md"},"LSP8-IdentifiableDigitalAssets"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-lsp-factory"},"GitHub Repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@lukso/lsp-factory.js"},"NPM Package"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/lsp-factory.js\n")),(0,o.kt)("h2",{id:"instantiation"},"Instantiation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { LSPFactory } from '@lukso/lsp-factory.js';\n\nconst provider = 'https://rpc.l16.lukso.network';\n\nconst lspFactory = new LSPFactory(provider, {\n  deployKey: '0x...', // Private key of the account which will deploy smart contracts\n  chainId: 2828,\n});\n")),(0,o.kt)("h2",{id:"using-lspfactory-in-a-dapp"},"Using LSPFactory in a dApp"),(0,o.kt)("p",null,"If used in the browser on a dApp's page, pass the ethereum object as the provider parameter to connect to a browser extension like the UniversalProfile browser extension or MetaMask. The browser extension will prompt users to sign the transactions as the ",(0,o.kt)("strong",{parentName:"p"},"LSPFactory")," deploys the smart contracts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await ethereum.request({ method: 'eth_requestAccounts', params: [] });\n\nconst lspFactory = new LSPFactory(ethereum, {\n  chainId: 2828,\n});\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Deploying a Universal Profile is as simple as running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myContracts = await lspFactory.UniversalProfile.deploy({\n  controllerAddresses: ['0x...'], // Account addresses which will control the UP\n  lsp3Profile: myLSP3MetaData,\n});\n")),(0,o.kt)("p",null,"The key ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," contains the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#JSONURL"},"LSP3 Metadata"),' of your Universal Profile. This is the "face" of your Universal Profile and contains all the public information people will see when they view your UP like your name, description and profile image.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myLSP3MetaData = {\n  name: 'My Universal Profile',\n  description: 'My cool Universal Profile',\n  profileImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      // bytes32 hex string of the image hash\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  backgroundImage: [\n    {\n      width: 500,\n      height: 500,\n      hashFunction: 'keccak256(bytes)',\n      // bytes32 hex string of the image hash\n      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',\n      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',\n    },\n  ],\n  tags: ['public profile', 'creator'],\n  links: [\n    {\n      title: 'My Website',\n      url: 'www.my-website.com',\n    },\n  ],\n  ...\n};\n")),(0,o.kt)("p",null,"When deploying your Universal Profile, your LSP3 data will be automatically uploaded to IPFS."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you already have LSP3 data uploaded, then you can pass an IPFS URL:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myLSP3MetaData = 'ipfs://QmPzUfdKhY6vfcTNDnitwKnnpm5GqjYSmw9todNVmi4bqy';\n"))),(0,o.kt)("p",null,"To create a anonymous Universal Profile, omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsp3Profile")," value."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Anonymous profiles can also be useful if you wish to create the LSP3 metadata later.")),(0,o.kt)("p",null,"You can now continue using your UP address within the dApp:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myUPAddress = myContracts.LSP0ERC725Account.address;\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"When instantiating LSPFactory options can be passed to specify parameters such as ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfsGateway"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Instantiating LSPFactory with custom options set"',title:'"Instantiating',LSPFactory:!0,with:!0,custom:!0,options:!0,'set"':!0},"const lspFactory = new LSPFactory('https://rpc.l16.lukso.network', {\n  deployKey: '0x...',\n  chainId: 2828,\n  ipfsGateway: 'https://ipfs.infura.io:5001',\n});\n")),(0,o.kt)("h4",{id:"deploy-key"},"Deploy Key"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deployKey")," is the private key which should sign the transactions sent by LSPFactory. This account must have enough gas to carry out the transactions."),(0,o.kt)("p",null,"If no value is set here, LSPFactory will attempt to sign transactions via a browser extension."),(0,o.kt)("h4",{id:"chain-id"},"Chain Id"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," is used to specify the network that LSPFactory is interacting with. The provided ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," will be used to determine which base contracts to use when using ",(0,o.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/options#deploy-proxy"},"proxy deployment"),". Previously deployed base contract addresses are stored in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json"},"versions file")," and accessed using the provided chainId. Defaults to 22 (l14 testnet)."),(0,o.kt)("h4",{id:"ipfs-gateway"},"IPFS Gateway"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ipfsGateway")," is used to specify the IPFS node which should be interacted with for uploading and retrieving metadata. ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfsGateway")," can be either a URL string or an object as defined by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions"},"IPFS-HTTP Client")," library which is used internally to interact with the IPFS node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Instantiating LSPFactory with custom ipfsGateway options set"',title:'"Instantiating',LSPFactory:!0,with:!0,custom:!0,ipfsGateway:!0,options:!0,'set"':!0},"const lspFactory = new LSPFactory('https://rpc.l16.lukso.network', {\n  deployKey: '0x...',\n  chainId: 2828,\n  ipfsGateway: {\n    host: 'ipfs.infura.io',\n    port: 5001,\n    protocol: 'https',\n  },\n});\n")))}d.isMDXComponent=!0}}]);