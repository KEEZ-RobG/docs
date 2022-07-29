"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6011],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(4334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(3117),r=a(7294),o=a(4334),l=a(2389),i=a(7392),s=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a;const{lazy:l,block:p,defaultValue:m,values:h,groupId:f,className:b}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:C}=(0,s.U)(),[N,P]=(0,r.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&v.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==N&&(x(t),P(n),null!=f&&C(f,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;a=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(3117),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={sidebar_label:"Interact with Contracts",sidebar_position:4},s="Interact with other contracts",c={unversionedId:"guides/universal-profile/interact-with-contracts",id:"guides/universal-profile/interact-with-contracts",title:"Interact with other contracts",description:"In this guide, we will learn how to use our Universal Profile to interact with any other smart contract (like if we were using a regular Externally Owned Account).",source:"@site/docs/guides/universal-profile/interact-with-contracts.md",sourceDirName:"guides/universal-profile",slug:"/guides/universal-profile/interact-with-contracts",permalink:"/guides/universal-profile/interact-with-contracts",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/interact-with-contracts.md",tags:[],version:"current",lastUpdatedAt:1649794784,formattedLastUpdatedAt:"Apr 12, 2022",sidebarPosition:4,frontMatter:{sidebar_label:"Interact with Contracts",sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"Transfer LYX",permalink:"/guides/universal-profile/transfer-lyx"},next:{title:"Grant Permissions to 3rd parties",permalink:"/guides/key-manager/give-permissions"}},u={},d=[{value:"Introduction",id:"introduction",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interact-with-other-contracts"},"Interact with other contracts"),(0,r.kt)("p",null,"In this guide, we will learn how to use our Universal Profile to interact with any other smart contract (like if we were using a regular Externally Owned Account)."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"We have seen in the previous example how to send LYX from our UP via the ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp0-erc725-account#execute"},(0,r.kt)("inlineCode",{parentName:"a"},"execute(...)"))," function."),(0,r.kt)("p",null,"This function offers a fourth parameter: ",(0,r.kt)("inlineCode",{parentName:"p"},"_data"),", that provides a lot of flexibility when interacting from our UP. The ",(0,r.kt)("inlineCode",{parentName:"p"},"_data")," parameter is handy when the ",(0,r.kt)("inlineCode",{parentName:"p"},"_to")," recipient is a smart contract."),(0,r.kt)("p",null,"If you want to call a specific smart contract that was deployed on the network by the Universal Profile, the parameters of the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(...)")," function will be as follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_operation"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," (for ",(0,r.kt)("inlineCode",{parentName:"li"},"CALL"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_to"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," of the smart contract we want to interact with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_value_"),": empty (0)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_data"),": the ABI-encoded function name and arguments, to be run at the ",(0,r.kt)("inlineCode",{parentName:"li"},"_to")," contract address.")),(0,r.kt)("p",null,"Suppose a smart contract ",(0,r.kt)("inlineCode",{parentName:"p"},"targetContract")," was deployed on the network and we want our UP to call the function ",(0,r.kt)("inlineCode",{parentName:"p"},"myCoolFunction")," on this contract. We will have to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-encodeabi"},"ABI-encode")," the function call with the parameters we want to pass."),(0,r.kt)("li",{parentName:"ol"},"Pass the encoded payload as argument ",(0,r.kt)("inlineCode",{parentName:"li"},"_data")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"execute(...)")," function.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\n\n// 1. encode the payload to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetPayload = targetContract.methods\n  .myCoolfunction('dummyParameter')\n  .encodeABI();\n\n// 2. encode the payload to be run on the UP,\n// passing the payload to be run at the targetContract as 4th parameter\nlet abiPayload = await myUp.methods\n  .execute(OPERATION_CALL, targetContract.address, 0, targetPayload)\n  .encodeABI();\n\n// 3. execute via the KeyManager, passing the UP payload\nawait myKeyManager.execute(abiPayload, {\n  from: '<address-of-up-owner>',\n  gasLimit: 300_000,\n});\n"))),(0,r.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\n\n// 1. encode the payload to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetPayload = targetContract.interface.encodeFunctionData(\n  'myCoolfunction',\n  ['dummyParameter'],\n);\n\n// 2. encode the payload to be run on the UP,\n// passing the payload to be run at the targetContract as 4th parameter\nlet abiPayload = myUp.interface.encodeFunctionData('execute', [\n  OPERATION_CALL,\n  targetContract.address,\n  0,\n  targetPayload,\n]);\n\n// 3. execute via the KeyManager, passing the UP payload\nawait myKeyManager.connect(upOwner).execute(abiPayload);\n")))))}m.isMDXComponent=!0}}]);