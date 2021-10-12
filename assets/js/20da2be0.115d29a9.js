"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[744],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(a),h=r,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(f,c(c({ref:t},d),{},{components:a})):n.createElement(f,c({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2067:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),c=["components"],s={sidebar_label:"Fetch Universal Profile data"},l="Fetch a Universal Profile contract's data with @erc725/erc725.js",i={unversionedId:"tools/erc725js/guides/read-up-with-erc725",id:"tools/erc725js/guides/read-up-with-erc725",isDocsHomePage:!1,title:"Fetch a Universal Profile contract's data with @erc725/erc725.js",description:"How to easily fetch the data of a Universal Profile smart contract, based on ERC725Y with @erc725/erc725.js ?",source:"@site/docs/tools/erc725js/guides/read-up-with-erc725.md",sourceDirName:"tools/erc725js/guides",slug:"/tools/erc725js/guides/read-up-with-erc725",permalink:"/tools/erc725js/guides/read-up-with-erc725",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/erc725js/guides/read-up-with-erc725.md",version:"current",frontMatter:{sidebar_label:"Fetch Universal Profile data"},sidebar:"toolsSidebar",previous:{title:"Writing Data",permalink:"/tools/erc725js/writing-data"},next:{title:"Methods",permalink:"/tools/erc725js/technical-reference/ERC725"}},d=[{value:"Standards",id:"standards",children:[{value:"ERC725Y",id:"erc725y",children:[]},{value:"LSP-2 ERC725Y JSON Schema",id:"lsp-2-erc725y-json-schema",children:[]},{value:"LSP-3 Universal Profile",id:"lsp-3-universal-profile",children:[]}]},{value:"Fetching/decoding data with @erc725/erc725.js",id:"fetchingdecoding-data-with-erc725erc725js",children:[]}],p={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetch-a-universal-profile-contracts-data-with-erc725erc725js"},"Fetch a Universal Profile contract's data with @erc725/erc725.js"),(0,o.kt)("p",null,"How to easily fetch the data of a Universal Profile smart contract, based on ERC725Y with ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@erc725/erc725.js"},"@erc725/erc725.js")," ?"),(0,o.kt)("p",null,"If you browse the profiles on ",(0,o.kt)("a",{parentName:"p",href:"https://universalprofile.cloud"},"Universal Profile"),", you can see they all have similar characteristics. They have a profile name, a profile picture, a background image, etc.\nWhere is this information defined and stored? How to easily access this data?"),(0,o.kt)("p",null,"The purpose of this guide is to walk you through the standards of the LUKSO ecosystem and to show you how to use @erc725/erc725.js package."),(0,o.kt)("h2",{id:"standards"},"Standards"),(0,o.kt)("img",{src:a(688).Z,alt:"Standards schema",width:"100%",height:"auto"}),(0,o.kt)("p",null,"Before jumping into the code, we need to understand which standards are relevant for this use case, how they are linked, and how we can use them."),(0,o.kt)("h3",{id:"erc725y"},"ERC725Y"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y")," allows a smart contract to ",(0,o.kt)("em",{parentName:"p"},"hold arbitrary data through a generic key/value store")," through the following functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getData(bytes32 key) external view returns(bytes value)\nfunction setData(bytes32 _key, bytes memory _value) external\n")),(0,o.kt)("p",null,"Without surprise, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/universalprofile-smart-contracts/blob/main/contracts/LSP3Account.sol"},"Universal Profile contract")," implements the ERC725Y standard."),(0,o.kt)("p",null,"Let's take a look at this Universal Profile smart contract: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x23a86EF830708204646abFE631cA1a60d04c4FbE"),"."),(0,o.kt)("p",null,"The raw ERC725Y values of the contract can also be read on a ",(0,o.kt)("a",{parentName:"p",href:"https://blockscout.com/lukso/l14/address/0x23a86EF830708204646abFE631cA1a60d04c4FbE/read-contract"},"blockchain explorer"),' and the "parsed/decoded values" can be seen on ',(0,o.kt)("a",{parentName:"p",href:"https://universalprofile.cloud/0x23a86EF830708204646abFE631cA1a60d04c4FbE"},"universalprofile.cloud"),"."),(0,o.kt)("img",{src:a(1878).Z,alt:"ReadContractBlockScout",width:"100%",height:"auto"}),(0,o.kt)("p",null,"You can see this contract holds a couple of ",(0,o.kt)("inlineCode",{parentName:"p"},"dataKeys")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"allDataKeys")," array (",(0,o.kt)("inlineCode",{parentName:"p"},"byte32"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"[0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6,\n0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47,\n0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5,\n0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5]\n")),(0,o.kt)("p",null,"What does it mean? How to read and use these keys? Let's try to understand and to read these keys."),(0,o.kt)("h3",{id:"lsp-2-erc725y-json-schema"},"LSP-2 ERC725Y JSON Schema"),(0,o.kt)("p",null,"This key/value store can hold a lot of data, in a lot of ways, to make things easier to process, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md"},"LSP-2 ERC725Y JSON Schema")," describes how a set of ERC725Y key values can be described. You can see there are a lot of types."),(0,o.kt)("p",null,"Now that we know how these key/values can be described with a convenient ERC725Y JSON Schema, let's check the ERC725Y JSON Schema of a LSP-3 Universal Profile."),(0,o.kt)("h3",{id:"lsp-3-universal-profile"},"LSP-3 Universal Profile"),(0,o.kt)("p",null,"The key/value used in this ERC725Y compatible smart contract are following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md"},"LSP-3 Universal Profile")," standard, so we will probably get hints on the standard page.\nThe keys are defined under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md#keys"},"Keys")," section."),(0,o.kt)("p",null,"As expected, we can find all the keys of our contract, along with their JSON Schema. It will help use decode the data."),(0,o.kt)("p",null,"Here are the information regarding the first key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SupportedStandards:ERC725Account",\n  "key": "0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6",\n  "keyType": "Mapping",\n  "valueContent": "0xafdeb5d6",\n  "valueType": "bytes"\n}\n')),(0,o.kt)("p",null,"Let's read this key's value with Web3.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Web3 from "web3";\n\nconst web3 = new Web3("https://rpc.l14.lukso.network");\n\nconst erc725ContractAddress = "0x23a86EF830708204646abFE631cA1a60d04c4FbE";\n\nconst LSP4DigitalCertificateContract = new web3.eth.Contract(\n  [\n    // NOTE: We are not loading the full contract ABI, only the function we need\n    {\n      inputs: [\n        {\n          internalType: "bytes32",\n          name: "_key",\n          type: "bytes32",\n        },\n      ],\n      name: "getData",\n      outputs: [\n        {\n          internalType: "bytes",\n          name: "_value",\n          type: "bytes",\n        },\n      ],\n      stateMutability: "view",\n      type: "function",\n    },\n  ],\n  erc725ContractAddress\n);\n\nconst key =\n  "0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6";\n\nconst value = await LSP4DigitalCertificateContract.methods.getData(key).call();\n\nconsole.log(value);\n\n// > 0xafdeb5d6\n')),(0,o.kt)("p",null,"As you can see, it is relatively easy to read the values. For the example above, the value type is ",(0,o.kt)("inlineCode",{parentName:"p"},"Mapping"),", we don't need to decode anything. However, if we want to read the value of this key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP3Profile",\n  "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",\n  "keyType": "Singleton",\n  "valueContent": "JSONURL",\n  "valueType": "bytes"\n}\n')),(0,o.kt)("p",null,"You could get something like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x6f357c6af7a5b24b3c5374ab4e21d3fd250e105b4b242a12cfff1cdc83b6bd3251d027cb697066733a2f2f516d584462617639734c4b58715158656a4b42374664624133454e70794476413136564439715256436d4d773943"),"."),(0,o.kt)("p",null,"For this key, the ",(0,o.kt)("inlineCode",{parentName:"p"},"valueContent")," type is ",(0,o.kt)("inlineCode",{parentName:"p"},"JSONURL"),", we need to decode it. You can do it manually, with the help of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl"},"LSP-2 ERC725Y JSON Schema"),".\nOr you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js")," to fetch/decode the data automatically \ud83e\ude84\ud83d\udcdc"),(0,o.kt)("h2",{id:"fetchingdecoding-data-with-erc725erc725js"},"Fetching/decoding data with @erc725/erc725.js"),(0,o.kt)("p",null,"As you may have noticed, the key/values of a LSP-2 ERC725Y JSON Schema is very flexible and decoding the values can be a bit tedious. This is where ",(0,o.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js")," comes to the rescue \u26d1\ufe0f."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js"),", you only need to give a JSON Schema and a contract address to automatically read the decoded data of the contract. Let's try:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install @erc725/erc725.js: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i @erc725/erc725.js")),(0,o.kt)("li",{parentName:"ol"},"Copy the ERC725Y JSON Schema. It can be found under the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md#implementation"},"Implementation")," section"),(0,o.kt)("li",{parentName:"ol"},"Read the data")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import ERC725 from "@erc725/erc725.js";\nimport Web3 from "web3";\n\nconst LSP3Schema = [\n  {\n    name: "SupportedStandards:ERC725Account",\n    key: "0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6",\n    keyType: "Mapping",\n    valueContent: "0xafdeb5d6",\n    valueType: "bytes",\n  },\n  {\n    name: "LSP3Profile",\n    key: "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",\n    keyType: "Singleton",\n    valueContent: "JSONURL",\n    valueType: "bytes",\n  },\n  {\n    name: "LSP1UniversalReceiverDelegate",\n    key: "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",\n    keyType: "Singleton",\n    valueContent: "Address",\n    valueType: "address",\n  },\n  {\n    name: "LSP3IssuedAssets[]",\n    key: "0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0",\n    keyType: "Array",\n    valueContent: "Number",\n    valueType: "uint256",\n    elementValueContent: "Address",\n    elementValueType: "address",\n  },\n];\n\nconst erc725ContractAddress = "0x23a86EF830708204646abFE631cA1a60d04c4FbE";\nconst provider = new Web3.providers.HttpProvider(\n  "https://rpc.l14.lukso.network"\n);\nconst myERC725 = new ERC725(LSP3Schema, erc725ContractAddress, provider);\n\nconst profileData = await myERC725.fetchData("LSP3Profile");\n\nconsole.log(profileData);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="output"',title:'"output"'},"{\n  LSP3Profile: {\n    LSP3Profile: {\n      name: 'hugo',\n      description: 'Everything tech @ LUKSO \ud83d\udc7e',\n      links: [ [Object] ],\n      profileImage: [ [Object], [Object], [Object], [Object], [Object] ],\n      backgroundImage: [ [Object], [Object], [Object], [Object], [Object] ]\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Better than the raw value: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x6f357c6af7a5b24b3c5374ab4e21d3fd250e105b4b242a12cfff1cdc83b6bd3251d027cb697066733a2f2f516d584462617639734c4b58715158656a4b42374664624133454e70794476413136564439715256436d4d773943"),", right?"),(0,o.kt)("p",null,"The package provides more helper functions to interact with ERC725Y smart contracts. You can explore the documentation and the ",(0,o.kt)("a",{parentName:"p",href:"../technical-reference/classes/ERC725"},"technical reference")," of the package to find more examples."))}u.isMDXComponent=!0},1878:function(e,t,a){t.Z=a.p+"assets/images/read-lsp3-contract-blockscout-5ff4490753a505bd3925a634dc754e21.png"},688:function(e,t,a){t.Z=a.p+"assets/images/standards-schema-f51c72c129aafbe31c7e96993421aacc.jpg"}}]);