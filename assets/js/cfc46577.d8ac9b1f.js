"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[1171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=s(a),u=r,N=k["".concat(d,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(3117),r=(a(7294),a(3905));const l={title:"LSP9Vault",sidebar_position:10},i="LSP9Vault",p={unversionedId:"standards/smart-contracts/lsp9-vault",id:"standards/smart-contracts/lsp9-vault",title:"LSP9Vault",description:"LSP9Vault.sol",source:"@site/docs/standards/smart-contracts/lsp9-vault.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/lsp9-vault",permalink:"/standards/smart-contracts/lsp9-vault",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/lsp9-vault.md",tags:[],version:"current",lastUpdatedAt:1654878576,formattedLastUpdatedAt:"Jun 10, 2022",sidebarPosition:10,frontMatter:{title:"LSP9Vault",sidebar_position:10},sidebar:"standardsSidebar",previous:{title:"LSP8IdentifiableDigitalAsset",permalink:"/standards/smart-contracts/lsp8-identifiable-digital-asset"},next:{title:"LSP1UniversalReceiverDelegateVault",permalink:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"}},d={},s=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"owner",id:"owner",level:3},{value:"Return Values:",id:"return-values",level:4},{value:"pendingOwner",id:"pendingowner",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"transferOwnership",id:"transferownership",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"claimOwnership",id:"claimownership",level:3},{value:"fallback",id:"fallback",level:3},{value:"execute",id:"execute",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"setData",id:"setdata",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"getData",id:"getdata",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"setData (Array)",id:"setdata-array",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"getData (Array)",id:"getdata-array",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"universalReceiver",id:"universalreceiver",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Return Values:",id:"return-values-5",level:4},{value:"Events",id:"events",level:2},{value:"OwnershipTransferred",id:"ownershiptransferred",level:3},{value:"Values:",id:"values",level:4},{value:"ValueReceived",id:"valuereceived",level:3},{value:"Values:",id:"values-1",level:4},{value:"Executed",id:"executed",level:3},{value:"Values:",id:"values-2",level:4},{value:"ContractCreated",id:"contractcreated",level:3},{value:"Values:",id:"values-3",level:4},{value:"DataChanged",id:"datachanged",level:3},{value:"Values:",id:"values-4",level:4},{value:"UniversalReceiver",id:"universalreceiver-1",level:3},{value:"Values:",id:"values-5",level:4},{value:"References",id:"references",level:2}],o={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp9vault"},"LSP9Vault"),(0,r.kt)("admonition",{title:"Solidity contract",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP9Vault/LSP9Vault.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP9Vault.sol")))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"LSP9Vault")," contract is an implementation of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#"},"LSP9-Vault Standard")),"."),(0,r.kt)("p",null,"This contract can be used as a ",(0,r.kt)("strong",{parentName:"p"},"vault")," that can ",(0,r.kt)("strong",{parentName:"p"},"hold assets")," and ",(0,r.kt)("strong",{parentName:"p"},"interact with other smart contracts"),", as it has all the functions of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account"},"LSP0ERC725Account"))," contract, except for the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"isValidSignature(...)"))," function."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"LSP9Vault contract also contains the methods from the ",(0,r.kt)("a",{parentName:"em",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 Standard"),":")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function supportsInterface(bytes4 interfaceId) public view returns (bool)\n"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(address initialOwner) \n")),(0,r.kt)("p",null,"Sets the ",(0,r.kt)("strong",{parentName:"p"},"initial owner")," of the contract, the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#"},"SupportedStandards:LSP9Vault "))," data key in the vault storage."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialOwner")," is an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account"},"LSP0ERC725Account"))," contract, the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},(0,r.kt)("inlineCode",{parentName:"a"},"universalReceiver(...)")))," function will be called on the ",(0,r.kt)("strong",{parentName:"p"},"LSP0ERC725Account")," contract to inform the account about the ",(0,r.kt)("strong",{parentName:"p"},"newly owned vault"),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"initialOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address to set as the owner of the contract.")))),(0,r.kt)("h3",{id:"owner"},"owner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() public view returns (address owner)\n")),(0,r.kt)("p",null,"Returns the address of the current vault owner."),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The current owner of the vault.")))),(0,r.kt)("h3",{id:"pendingowner"},"pendingOwner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function pendingOwner() public view returns (address)\n")),(0,r.kt)("p",null,"Return the address of the pending owner that was initiated by ",(0,r.kt)("a",{parentName:"p",href:"#transferownership"},(0,r.kt)("inlineCode",{parentName:"a"},"transferOwnership(address)")),". "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NB:")," if no ownership transfer is in progress, the ",(0,r.kt)("inlineCode",{parentName:"p"},"pendingOwner")," MUST be ",(0,r.kt)("inlineCode",{parentName:"p"},"address(0)"),".")),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pendingOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the pending owner")))),(0,r.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferOwnership(address newOwner) public {\n")),(0,r.kt)("p",null,"Initiate an ownership transfer by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"newOwner")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"pendingOwner"),"."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address to set as ",(0,r.kt)("inlineCode",{parentName:"td"},"pendingOwner"),".")))),(0,r.kt)("h3",{id:"claimownership"},"claimOwnership"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimOwnership() public {\n")),(0,r.kt)("p",null,"Transfers ownership of the contract to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pendingOwner")," address. Can only be called by the ",(0,r.kt)("inlineCode",{parentName:"p"},"pendingOwner"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Triggers the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#ownershiptransferred"},"OwnershipTransferred"))," event once the new owner has claimed ownership.")),(0,r.kt)("h3",{id:"fallback"},"fallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"fallback() external payable\n")),(0,r.kt)("p",null,"Executed when value is transferred to the contract or when function identifier doesn't match any of the available functions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Triggers the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#valuereceived"},"ValueReceived"))," event when a native token is received.")),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function execute(\n    uint256 operationType,\n    address to,\n    uint256 value,\n    bytes memory data\n) public payable returns (bytes memory result)\n")),(0,r.kt)("p",null,"Executes a call on any other smart contracts, transfers value, or deploys a new smart contract."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"operationType")," can be the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"CALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"STATICCALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"DELEGATECALL"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Triggers the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#executed"},"Executed"))," event when a call is successfully executed using ",(0,r.kt)("inlineCode",{parentName:"em"},"CALL/STATICCALL/DELEGATECALL")," operations.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Triggers the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#contractcreated"},"ContractCreated"))," event when a smart contract is created using ",(0,r.kt)("inlineCode",{parentName:"em"},"CREATE/CREATE2")," operations.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(...)")," function can only be called by the current owner of the vault."),(0,r.kt)("p",{parentName:"admonition"},"The operation types ",(0,r.kt)("inlineCode",{parentName:"p"},"staticcall")," (",(0,r.kt)("inlineCode",{parentName:"p"},"3"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," (",(0,r.kt)("inlineCode",{parentName:"p"},"4"),") do not allow to transfer value.")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of operation that needs to be executed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address to interact with. ",(0,r.kt)("inlineCode",{parentName:"td"},"to")," will be unused if a contract is created (operation 1 & 2).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of native tokens to transfer with the transaction (in Wei).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The calldata (ABI-encoded payload of a function to run on an other contract), or the bytecode of the contract to deploy.")))),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The returned data of the called function, or the address of the contract created (operation 1 & 2).")))),(0,r.kt)("h3",{id:"setdata"},"setData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function setData(\n    bytes32 key,\n    bytes memory value\n) public\n")),(0,r.kt)("p",null,"Sets the data of a single data ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," as ",(0,r.kt)("strong",{parentName:"p"},"bytes")," to the vault's storage."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Triggers the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#datachanged"},"DataChanged"))," event when successfully setting the data.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(...)")," function can only be called by the current owner of the contract and the LSP1UniversalReceiverDelegateVault contract.")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data key for which to set data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to set as bytes.")))),(0,r.kt)("h3",{id:"getdata"},"getData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getData(bytes32 key) public view returns (bytes memory value)\n")),(0,r.kt)("p",null,"Retrieves the data that was set for a particular data ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data key to retrieve data from.")))),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data for the requested data key.")))),(0,r.kt)("h3",{id:"setdata-array"},"setData (Array)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function setData(\n    bytes32[] memory keys,\n    bytes[] memory values\n) public\n")),(0,r.kt)("p",null,"Sets an array of data at multiple data keys in the vault storage."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Triggers the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#datachanged"},"DataChanged"))," event when successfully setting the data.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setData(...)")," function can only be called by the current owner of the contract and the LSP1UniversalReceiverDelegateVault contract.")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keys")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32","[\xa0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data keys for which to set data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes","[\xa0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The array of data to set.")))),(0,r.kt)("h3",{id:"getdata-array"},"getData (Array)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getData(bytes32[] memory keys) public view returns (bytes[] memory values)\n")),(0,r.kt)("p",null,"Retrieves an array of data for multiple given data keys."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keys")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32","[\xa0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data keys to retrieve data from.")))),(0,r.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes","[\xa0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of the data for the requested data keys.")))),(0,r.kt)("h3",{id:"universalreceiver"},"universalReceiver"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function universalReceiver(\n    bytes32 typeId,\n    bytes memory data\n) public payable returns (bytes memory result)\n")),(0,r.kt)("p",null,"Forwards the call to the ",(0,r.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," contract if its address is stored at the ",(0,r.kt)("a",{parentName:"p",href:"/standards/generic-standards/lsp1-universal-receiver#extension"},"LSP1UniversalReceiverDelegate")," data Key.\nThe contract being called is expected to be an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},"LSP1UniversalReceiverDelegateVault")),", supporting ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/interface-ids"},"LSP1UniversalReceiverDelegate InterfaceId")," using ERC165."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Triggers the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#universalreceiver-1"},"UniversalReceiver"))," event when this function gets successfully executed.")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"typeId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of transfer received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data received.")))),(0,r.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be used to encode response values.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipTransferred(\n    address previousOwner,\n    address newOwner,\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#transferownership"},(0,r.kt)("inlineCode",{parentName:"a"},"transferOwnership(...)")))," function is successfully executed.")),(0,r.kt)("h4",{id:"values"},"Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"previousOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The previous owner of the contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new owner of the contract.")))),(0,r.kt)("h3",{id:"valuereceived"},"ValueReceived"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event ValueReceived(\n    address sender,\n    uint256 value\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"MUST")," be fired when when a native token is received via ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#fallback"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback(...)")))," function.")),(0,r.kt)("h4",{id:"values-1"},"Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the sender.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount sent.")))),(0,r.kt)("h3",{id:"executed"},"Executed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event Executed(\n    uint256 operation,\n    address to,\n    uint256 value,\n    bytes4 selector\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#execute"},(0,r.kt)("inlineCode",{parentName:"a"},"execute(...)")))," function creates a new call using the ",(0,r.kt)("inlineCode",{parentName:"em"},"CALL"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"STATICCALL"),", or ",(0,r.kt)("inlineCode",{parentName:"em"},"DELEGATECALL")," operation.")),(0,r.kt)("h4",{id:"values-2"},"Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The operation executed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The smart contract or address interacted with.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value transferred.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The bytes4 selector of the function executed at the ",(0,r.kt)("inlineCode",{parentName:"td"},"to")," address.")))),(0,r.kt)("h3",{id:"contractcreated"},"ContractCreated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event ContractCreated(\n    uint256 operation,\n    address contractAddress,\n    uint256 value\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#execute"},(0,r.kt)("inlineCode",{parentName:"a"},"execute(...)")))," function creates a new contract using the ",(0,r.kt)("inlineCode",{parentName:"em"},"CREATE")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"CREATE2")," operation.")),(0,r.kt)("h4",{id:"values-3"},"Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The operation executed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the created contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value sent to the contract.")))),(0,r.kt)("h3",{id:"datachanged"},"DataChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event DataChanged(bytes32 dataKey)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#setdata"},(0,r.kt)("inlineCode",{parentName:"a"},"setData(...)")))," function is successfully executed.")),(0,r.kt)("h4",{id:"values-4"},"Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data key which value is set.")))),(0,r.kt)("h3",{id:"universalreceiver-1"},"UniversalReceiver"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event UniversalReceiver(\n    address from,\n    uint256 value,\n    bytes32 typeId,\n    bytes returnedValue,\n    bytes receivedData\n)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"#universalreceiver"},(0,r.kt)("inlineCode",{parentName:"a"},"universalReceiver(...)")))," function is successfully executed.")),(0,r.kt)("h4",{id:"values-5"},"Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"from")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address calling the ",(0,r.kt)("strong",{parentName:"td"},"universalReceiver")," function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of value sent to the ",(0,r.kt)("strong",{parentName:"td"},"universalReceiver")," function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"typeId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The hash of a specific standard or a hook.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"returnedValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The return value of ",(0,r.kt)("strong",{parentName:"td"},"universalReceiver")," function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receivedData")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The arbitrary data passed to ",(0,r.kt)("strong",{parentName:"td"},"universalReceiver")," function.")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts"},"Solidity implementations (GitHub)"))))}m.isMDXComponent=!0}}]);