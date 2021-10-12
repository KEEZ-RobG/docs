"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[148],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,c=k["".concat(d,".").concat(s)]||k[s]||m[s]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8939:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},d="LUKSO CLI",p={unversionedId:"networks/lukso-cli",id:"networks/lukso-cli",isDocsHomePage:!1,title:"LUKSO CLI",description:"\u26a0\ufe0f This page may change. Not everything is ready yet.",source:"@site/docs/networks/lukso-cli.md",sourceDirName:"networks",slug:"/networks/lukso-cli",permalink:"/networks/lukso-cli",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/lukso-cli.md",version:"current",frontMatter:{},sidebar:"networksSidebar",previous:{title:"L14 Public Testnet",permalink:"/networks/l14-testnet"}},u=[{value:"Installation ( Linux/MacOS )",id:"installation--linuxmacos-",children:[]},{value:"Installation ( Windows )",id:"installation--windows-",children:[]},{value:"Running",id:"running",children:[]},{value:"Available parameters",id:"available-parameters",children:[{value:"start",id:"start",children:[]},{value:"stop",id:"stop",children:[]},{value:"bind-binaries",id:"bind-binaries",children:[]}]}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lukso-cli"},"LUKSO CLI"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This page may change. Not everything is ready yet.")),(0,l.kt)("h2",{id:"installation--linuxmacos-"},"Installation ( Linux/MacOS )"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"curl https://install.l15.lukso.network | bash")),(0,l.kt)("h2",{id:"installation--windows-"},"Installation ( Windows )"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"powershell")," as an administrator  "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'(New-Object System.Net.WebClient).DownloadString("https://install.l15.lukso.network/windows") | powershell -command -'),"  "),(0,l.kt)("p",null,"This shell script will: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create directory under ",(0,l.kt)("inlineCode",{parentName:"li"},"/opt/lukso")),(0,l.kt)("li",{parentName:"ol"},"Download zipped files required for node startup."),(0,l.kt)("li",{parentName:"ol"},"Unzip them (using ",(0,l.kt)("inlineCode",{parentName:"li"},"unzip")," tool)"),(0,l.kt)("li",{parentName:"ol"},"Create symbolic link in ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin"),".")),(0,l.kt)("h2",{id:"running"},"Running"),(0,l.kt)("p",null,"Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"lukso config")," in your shell to generate config file."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'COINBASE: "0x616e6f6e796d6f75730000000000000000000000"\nWALLET_DIR: "/home/user/.lukso/l15/vanguard-wallet"\nDATADIR: "/home/user/.lukso/l15/datadirs"\nLOGSDIR: "/home/user/.lukso/l15/logs"\nNODE_NAME: "l15-60F08373"\n')),(0,l.kt)("p",null,"After that, simply run:",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"lukso start")," to start an archive node",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"lukso start --validate")," to start a validator node"),(0,l.kt)("h2",{id:"available-parameters"},"Available parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lukso <command> [argument] [--flags]")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"command"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"argument"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start"),(0,l.kt)("td",{parentName:"tr",align:null},"Starts up all or specific client(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"[orchestrator, pandora, vanguard, validator, eth2stats-client, ",(0,l.kt)("strong",{parentName:"td"},"all"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop"),(0,l.kt)("td",{parentName:"tr",align:null},"Stops all or specific client(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"[orchestrator, pandora, vanguard, validator, eth2stats-client, ",(0,l.kt)("strong",{parentName:"td"},"all"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reset"),(0,l.kt)("td",{parentName:"tr",align:null},"Clears client(s) datadirs (this also removes chain-data)"),(0,l.kt)("td",{parentName:"tr",align:null},"[orchestrator, pandora, vanguard, validator, all, ",(0,l.kt)("strong",{parentName:"td"},"none"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"Interactive tool for creating config file"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keygen"),(0,l.kt)("td",{parentName:"tr",align:null},"Runs ",(0,l.kt)("inlineCode",{parentName:"td"},"eth2deposit-cli")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet"),(0,l.kt)("td",{parentName:"tr",align:null},"Imports ",(0,l.kt)("inlineCode",{parentName:"td"},"eth2deposit-cli")," keys"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logs"),(0,l.kt)("td",{parentName:"tr",align:null},"Show logs"),(0,l.kt)("td",{parentName:"tr",align:null},"[orchestrator, pandora, vanguard, validator, eth2stats-client]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bind-binaries"),(0,l.kt)("td",{parentName:"tr",align:null},"sets client(s) to desired version"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In ",(0,l.kt)("strong",{parentName:"p"},"bold")," is a behaviour when argument is skipped (default)")),(0,l.kt)("h3",{id:"start"},"start"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"Argument"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--network"),(0,l.kt)("td",{parentName:"tr",align:null},"Picks which setup to use"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of network from list: ",(0,l.kt)("inlineCode",{parentName:"td"},"mainnet, l15, l15-staging, l15-dev"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--l15"),(0,l.kt)("td",{parentName:"tr",align:null},"Shorthand alias for ",(0,l.kt)("inlineCode",{parentName:"td"},"--network l15")),(0,l.kt)("td",{parentName:"tr",align:null},"<none",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--l15-staging"),(0,l.kt)("td",{parentName:"tr",align:null},"Shorthand alias for ",(0,l.kt)("inlineCode",{parentName:"td"},"--network l15-staging")),(0,l.kt)("td",{parentName:"tr",align:null},"<none",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--l15-dev"),(0,l.kt)("td",{parentName:"tr",align:null},"Shorthand alias for ",(0,l.kt)("inlineCode",{parentName:"td"},"--network l15-dev")),(0,l.kt)("td",{parentName:"tr",align:null},"<none",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--config"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to config file"),(0,l.kt)("td",{parentName:"tr",align:null},"Path ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"config.yaml"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--validate"),(0,l.kt)("td",{parentName:"tr",align:null},"Starts validator"),(0,l.kt)("td",{parentName:"tr",align:null},"<none",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--coinbase"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets pandora coinbase"),(0,l.kt)("td",{parentName:"tr",align:null},"ETH1 addres ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"0x144a9533B3d759d647597762d33a1cD6f9Bf118c"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--node-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of node that's shown on pandora stats and vanguard stats"),(0,l.kt)("td",{parentName:"tr",align:null},"String ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"johnsmith123"))))),(0,l.kt)("h3",{id:"stop"},"stop"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"Argument"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--force"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds force option to kill commands (may result in corruption of node data)"),(0,l.kt)("td",{parentName:"tr",align:null},"<none",">")))),(0,l.kt)("h3",{id:"bind-binaries"},"bind-binaries"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"Argument"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--orchestrator"),(0,l.kt)("td",{parentName:"tr",align:null},"download and set ",(0,l.kt)("inlineCode",{parentName:"td"},"orchestrator")," to given tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag, ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.0.0-beta"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--pandora"),(0,l.kt)("td",{parentName:"tr",align:null},"download and set ",(0,l.kt)("inlineCode",{parentName:"td"},"pandora")," to given tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag, ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.0.0-beta"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--vanguard"),(0,l.kt)("td",{parentName:"tr",align:null},"download and set ",(0,l.kt)("inlineCode",{parentName:"td"},"vanguard")," to given tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag, ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.0.0-beta"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--validator"),(0,l.kt)("td",{parentName:"tr",align:null},"download and set ",(0,l.kt)("inlineCode",{parentName:"td"},"validator")," to given tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag, ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.0.0-beta"))))))}k.isMDXComponent=!0}}]);