(this["webpackJsonpgiantbabycorn.finance"]=this["webpackJsonpgiantbabycorn.finance"]||[]).push([[5],{340:function(e,t,n){e.exports=n.p+"static/media/metamask.023762b6.png"},437:function(e,t){},439:function(e,t){},506:function(e,t){},508:function(e,t){},540:function(e,t){},545:function(e,t){},547:function(e,t){},554:function(e,t){},567:function(e,t){},590:function(e,t){},607:function(e,t){},667:function(e,t,n){e.exports=n.p+"static/media/arrow-right.d285b6cf.svg"},668:function(e,t,n){e.exports=n.p+"static/media/walletConnectIcon.8215855c.svg"},670:function(e,t,n){},671:function(e,t,n){},672:function(e,t,n){e.exports=n.p+"static/media/p.dc19974d.png"},673:function(e,t,n){e.exports=n.p+"static/media/op.93c0cfd0.png"},674:function(e,t,n){e.exports=n.p+"static/media/pop1.f57f9def.mp3"},675:function(e,t,n){e.exports=n.p+"static/media/pop2.abf3365e.mp3"},676:function(e,t,n){e.exports=n.p+"static/media/pop3.ad8139de.mp3"},677:function(e,t,n){e.exports=n.p+"static/media/pop4.ccecab5f.mp3"},678:function(e,t,n){},679:function(e,t,n){},680:function(e,t,n){},813:function(e,t,n){"use strict";n.r(t);var a,c=n(2),r=n.n(c),o=n(122),i=n(23),u=n(1),l=n.n(u),s=n(104),d=n(53),p=n(387),f=n.n(p),m=function(e){var t,n,a,c,r,o;return null!==(t=null!==(n=null!==(a=null===e||void 0===e||null===(c=e.response)||void 0===c||null===(r=c.data)||void 0===r?void 0:r.detail)&&void 0!==a?a:null===e||void 0===e||null===(o=e.response)||void 0===o?void 0:o.message)&&void 0!==n?n:null===e||void 0===e?void 0:e.message)&&void 0!==t?t:"msgError"},v=n(25),b=n(55),h=n(252),O=n(253),w=n(405),j=n.n(w),y=n(340),E=n.n(y),g=n(667),k=n.n(g),x=n(668),C=n.n(x),I=n(51);n(109);!function(e){e[e.BSC=56]="BSC",e[e.POLYGON=137]="POLYGON"}(a||(a={}));var N,S=[a.POLYGON],T=(a.POLYGON,Object(I.a)({},a.POLYGON,{explorer:"https://etherscan.io/",label:"Polygon"}),n(7)),P=n(669),M=n(6),L=n(14),R=n(15),W=n(811),_=n(188),D=n(9),B=function(e){Object(L.a)(n,e);var t=Object(R.a)(n);function n(e,a,c){var r;return Object(M.a)(this,n),(r=t.call(this,e)).code=a,r.data=c,r}return n}(Object(W.a)(Error)),A=function e(t,n,a){var c=this;Object(M.a)(this,e),this.isMetaMask=!1,this.chainId=void 0,this.url=void 0,this.host=void 0,this.path=void 0,this.batchWaitTimeMs=void 0,this.nextId=1,this.batchTimeoutId=null,this.batch=[],this.clearBatch=Object(o.a)(r.a.mark((function e(){var t,n,a,o,i,u,l,s,d,p,f,m,v,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("Clearing batch",c.batch),t=c.batch,c.batch=[],c.batchTimeoutId=null,e.prev=4,e.next=7,fetch(c.url,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify(t.map((function(e){return e.request})))});case 7:n=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),t.forEach((function(e){return(0,e.reject)(new Error("Failed to send batch call"))})),e.abrupt("return");case 14:if(n.ok){e.next=17;break}return t.forEach((function(e){return(0,e.reject)(new B("".concat(n.status,": ").concat(n.statusText),-32e3))})),e.abrupt("return");case 17:return e.prev=17,e.next=20,n.json();case 20:a=e.sent,e.next=27;break;case 23:return e.prev=23,e.t1=e.catch(17),t.forEach((function(e){return(0,e.reject)(new Error("Failed to parse JSON response"))})),e.abrupt("return");case 27:o=t.reduce((function(e,t){return e[t.request.id]=t,e}),{}),i=Object(P.a)(a);try{for(i.s();!(u=i.n()).done;)l=u.value,s=o[l.id],d=s.resolve,p=s.reject,f=s.request.method,"error"in l?p(new B(null===l||void 0===l||null===(m=l.error)||void 0===m?void 0:m.message,null===l||void 0===l||null===(v=l.error)||void 0===v?void 0:v.code,null===l||void 0===l||null===(b=l.error)||void 0===b?void 0:b.data)):"result"in l&&d?d(l.result):p(new B("Received unexpected JSON-RPC response to ".concat(f," request."),-32e3,l))}catch(r){i.e(r)}finally{i.f()}case 30:case"end":return e.stop()}}),e,null,[[4,10],[17,23]])}))),this.sendAsync=function(e,t){c.request(e.method,e.params).then((function(n){return t(null,{jsonrpc:"2.0",id:e.id,result:n})})).catch((function(e){return t(e,null)}))},this.request=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"===typeof t){e.next=2;break}return e.abrupt("return",c.request(t.method,t.params));case 2:if("eth_chainId"!==t){e.next=4;break}return e.abrupt("return","0x".concat(c.chainId.toString(16)));case 4:return o=new Promise((function(e,a){c.batch.push({request:{jsonrpc:"2.0",id:c.nextId++,method:t,params:n},resolve:e,reject:a})})),c.batchTimeoutId=null!==(a=c.batchTimeoutId)&&void 0!==a?a:setTimeout(c.clearBatch,c.batchWaitTimeMs),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.chainId=t,this.url=n;var i=new URL(n);this.host=i.host,this.path=i.pathname,this.batchWaitTimeMs=null!==a&&void 0!==a?a:50},q=function(e){Object(L.a)(n,e);var t=Object(R.a)(n);function n(e){var a,c=e.urls,r=e.defaultChainId;return Object(M.a)(this,n),Object(D.a)(r||1===Object.keys(c).length,"defaultChainId is a required argument with >1 url"),(a=t.call(this,{supportedChainIds:Object.keys(c).map((function(e){return Number(e)}))})).providers=void 0,a.currentChainId=void 0,a.currentChainId=r||Number(Object.keys(c)[0]),a.providers=Object.keys(c).reduce((function(e,t){return e[Number(t)]=new A(Number(t),c[Number(t)]),e}),{}),a}return Object(T.a)(n,[{key:"provider",get:function(){return this.providers[this.currentChainId]}},{key:"activate",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{provider:this.providers[this.currentChainId],chainId:this.currentChainId,account:null});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProvider",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.providers[this.currentChainId]);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getChainId",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.currentChainId);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccount",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"deactivate",value:function(){}}]),n}(_.a),U=Object({NODE_ENV:"production",PUBLIC_URL:"/popcat-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WALLETCONNECT_BRIDGE_URL;var Y=(N={},Object(I.a)(N,a.BSC,"https://bsc-dataseed.binance.org/"),Object(I.a)(N,a.POLYGON,"https://rpc-mainnet.matic.network"),N);new q({urls:Y,defaultChainId:a.POLYGON});var G=new h.a({supportedChainIds:S}),Z=new O.a({supportedChainIds:S,rpc:Y,bridge:U,qrcode:!0}),F={INJECTED:{connector:G,name:"Injected",iconURL:k.a,description:"Injected web3 provider.",href:null,disabled:!0},METAMASK:{connector:G,name:"MetaMask",iconURL:E.a,description:"Easy-to-use browser extension.",href:null},WALLET_CONNECT:{disabled:!0,connector:Z,name:"WalletConnect",iconURL:C.a,description:"Connect to Trust Wallet, Rainbow Wallet and more...",href:null,mobile:!0}};n(670);function J(e){var t=e.isOpen,n=e.onDismiss,a=e.children,c=e.title,r=Object(u.useState)(t),o=Object(i.a)(r,2),s=o[0],d=o[1],p=function(){d(!1),n()};return Object(u.useEffect)((function(){d(t)}),[t]),l.a.createElement("div",{style:{display:s?"block":"none"},className:"nes-dialog-container"},l.a.createElement("dialog",{className:"nes-dialog is-rounded"},l.a.createElement("div",null,l.a.createElement("p",{className:"title"},l.a.createElement("span",null,c),l.a.createElement("i",{className:"nes-icon is-small close",onClick:p})),a)),l.a.createElement("div",{className:"backdrop",onClick:p}))}function K(e){var t=Object(u.useRef)();return Object(u.useEffect)((function(){t.current=e}),[e]),t.current}n(671);var H,X=new h.a({supportedChainIds:[{chainId:137,rpc:"https://rpc-mainnet.matic.network",symbol:"MATIC"}].map((function(e){return e.chainId}))}),V="account",z="pending",Q=function(e){var t=Object(s.a)().t,n=Object(d.c)();console.log("debug -> WalletMedal -> context",n);var a=n.library,c=n.connector,p=n.account,f=n.activate,m=n.deactivate,v=n.active,h=n.error;console.log("debug -> WalletMedal -> { library, account, activate, deactivate, active, error }",{library:a,account:p,activate:f,deactivate:m,active:v,error:h}),console.log("debug -> updateBalance -> library?.network",null===a||void 0===a?void 0:a.network),console.log("debug -> updateBalance -> window.library = library",window.library=a),console.log("debug -> updateBalance -> window.web3 = web3",window.web3=j.a);var w=Object(u.useState)(V),y=Object(i.a)(w,2),g=(y[0],y[1]),k=Object(u.useState)(),x=Object(i.a)(k,2),C=(x[0],x[1]),I=Object(u.useState)(!1),N=Object(i.a)(I,2),S=N[0],T=N[1],P=Object(u.useState)(!1),M=Object(i.a)(P,2),L=M[0],R=M[1];Object(u.useEffect)((function(){S&&g(V)}),[S]);var W=K(v),_=K(c);Object(u.useEffect)((function(){S&&(v&&!W||c&&c!==_&&!h)&&(g(V),T(!1))}),[g,v,h,c,S,W,_]);var D=function(){var e=Object(o.a)(r.a.mark((function e(n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"",Object.keys(F).map((function(e){return n!==F[e].connector||F[e].name})),C(n),g(z),n instanceof O.a&&(null===(a=n.walletConnectProvider)||void 0===a||null===(c=a.wc)||void 0===c?void 0:c.uri)&&(n.walletConnectProvider=void 0),n&&f(n,void 0,!0).catch((function(e){e instanceof d.a?f(n):b.a.fail({title:t("textWalletConnectFailed"),content:null===e||void 0===e?void 0:e.message})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,{isOpen:S,onDismiss:function(){T(!1)},title:t("textWalletConnect")},l.a.createElement("p",{style:{marginBottom:"20px"}},"By connecting a wallet, you agree to our\u2019 Terms of Service and acknowledge."),function(){var e=window.ethereum&&window.ethereum.isMetaMask;return Object.keys(F).map((function(n){var a=F[n];if(a.connector===X){if(!window.web3&&!window.ethereum)return"MetaMask"===a.name?l.a.createElement("div",{id:"connect-".concat(n)},l.a.createElement("a",{className:"nes-btn",href:"https://metamask.io/",target:"_blank"},t("textWalletInstallMetamask"),l.a.createElement("img",{src:E.a,alt:"Icon"}))):null;if("MetaMask"===a.name&&!e)return null;if("Injected"===a.name&&e)return null}return l.a.createElement("div",{key:n},l.a.createElement("button",{id:"connect-".concat(n),className:"nes-btn wallet-option ".concat(a.disabled?"is-disabled":""),onClick:function(){a.connector===c?g(V):!a.href&&D(a.connector)}},l.a.createElement("span",null,a.name),l.a.createElement("img",{src:a.iconURL,alt:"Icon"})))}))}()),l.a.createElement(J,{isOpen:L,onDismiss:function(){R(!1)},title:t("btnDisconnect")},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("p",null,"Bye bye!"),l.a.createElement("button",{className:"nes-btn is-warning",onClick:function(){m(),R(!1)}},t("btnConfirm")))),v?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"nes-btn",onClick:function(){R(!0)}},"".concat(null===p||void 0===p?void 0:p.slice(0,6),"...").concat(null===p||void 0===p?void 0:p.slice(p.length-3,p.length))),e.children):l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"nes-btn is-primary",onClick:function(){T(!0)}},t("textWalletConnect")),e.children))},$=n(16),ee=n(672),te=n.n(ee),ne=n(673),ae=n.n(ne),ce=n(674),re=n.n(ce),oe=n(675),ie=n.n(oe),ue=n(676),le=n.n(ue),se=n(677),de=n.n(se),pe=(n(678),[re.a,ie.a,le.a,de.a]),fe=Date.now(),me=function(e){var t=e.className,n=pe.map((function(){return Object(u.useRef)(null)})),a=Object(u.useRef)(null),c=Object(u.useState)([]),s=Object(i.a)(c,2),d=s[0],p=s[1],f=Object(u.useRef)({id:0}),m=Object(u.useState)(!1),v=Object(i.a)(m,2),b=v[0],h=v[1],O=Object(u.useState)(0),w=Object(i.a)(O,2),j=w[0],y=w[1],E=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((c=Date.now())<fe+33)){e.next=3;break}return e.abrupt("return");case 3:fe=c,null===(a=n[j].current)||void 0===a||a.play(),y([0,1,2,3].filter((function(e,t){return j!==t}))[Math.floor(Math.random()*(pe.length-1))]),k({text:"+1",type:Math.floor(3*Math.random()),anchor:t}),h(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t,n,a,c,r,o,i,u,l,s,m=e.text,v=e.type,b=e.anchor;p([].concat(Object($.a)(d),[{id:null!==(t=null===f||void 0===f||null===(n=f.current)||void 0===n?void 0:n.id)&&void 0!==t?t:0,text:null!==m&&void 0!==m?m:"+1",type:null!==v&&void 0!==v?v:0,anchor:{x:null!==(a=null!==(c=null===b||void 0===b?void 0:b.clientX)&&void 0!==c?c:null===b||void 0===b||null===(r=b.touches)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.clientX)&&void 0!==a?a:window.innerWidth/2,y:(null!==(i=null!==(u=null===b||void 0===b?void 0:b.clientY)&&void 0!==u?u:null===b||void 0===b||null===(l=b.touches)||void 0===l||null===(s=l[0])||void 0===s?void 0:s.clientY)&&void 0!==i?i:window.innerHeight/2)-24}}])),f.current.id+=1};return Object(u.useEffect)((function(){var e=function(){E()},t=function(){g()};return document.addEventListener("keydown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}}),[d]),l.a.createElement("div",{style:{backgroundImage:"url('".concat(te.a,"')")},className:["corn-popcat-container",t].join(" "),onPointerDown:E,onPointerUp:g},n.map((function(e,t){return l.a.createElement("audio",{key:"popcat-audio-".concat(t),className:"popcat-audio-loader",ref:e,src:pe[t],autoPlay:!1})})),l.a.createElement("div",{className:"popcat".concat(b?" is-pop":""),ref:a}),l.a.createElement("img",{className:"popcat-image-loader",src:te.a}),l.a.createElement("img",{className:"popcat-image-loader",src:ae.a}),d.map((function(e){var t,n,a=e.id,c=e.text,r=e.type,o=e.anchor;return l.a.createElement("span",{key:a,className:"particle-add particle-add-".concat(null!==r&&void 0!==r?r:0),style:{left:null!==(t=null===o||void 0===o?void 0:o.x)&&void 0!==t?t:0,top:null!==(n=null===o||void 0===o?void 0:o.y)&&void 0!==n?n:0},onAnimationEnd:function(){!function(e){var t=Object($.a)(d),n=t.findIndex((function(t){return t.id===e}));-1!==n&&(t.splice(n,1),p(t))}(a)}},c)})))};n(679);function ve(e){var t=e.leftItems,n=e.rightItems;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"items left-items"},t),l.a.createElement("div",{className:"items"},n))}function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Oe=function(e){var t=e.svgRef,n=e.title,a=he(e,["svgRef","title"]);return l.a.createElement("svg",be({style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},xmlSpace:"preserve",ref:t},a),n?l.a.createElement("title",null,n):null,H||(H=l.a.createElement("path",{fill:"#50fec5",d:"M10.5,18l-4.5,0c-0.276,0 -0.5,0.224 -0.5,0.5l0,10c0,0.276 0.224,0.5 0.5,0.5l20,0c0.276,0 0.5,-0.224 0.5,-0.5l-0,-10c0,-0.276 -0.224,-0.5 -0.5,-0.5l-4.5,0l0,-1.5c0,-0.276 -0.224,-0.5 -0.5,-0.5l-10,-0c-0.276,-0 -0.5,0.224 -0.5,0.5l-0,1.5Zm15,1l0,9c-0,0 -19,0 -19,0c0,0 0,-9 0,-9l19,0Zm-5,-2l-0,1c-0,0 -9,0 -9,0c-0,0 -0,-1 -0,-1l9,-0Zm-4.5,-6.5c-1.38,0 -2.5,1.117 -2.5,2.5c0,1.383 1.12,2.5 2.5,2.5c1.38,0 2.5,-1.117 2.5,-2.5c0,-1.383 -1.12,-2.5 -2.5,-2.5Zm0,1c0.828,0 1.5,0.671 1.5,1.5c0,0.83 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.67 -1.5,-1.5c0,-0.829 0.672,-1.5 1.5,-1.5Zm6.5,-6.484l-8.409,-0c-0.378,-0 -0.743,0.143 -1.02,0.4l-3.742,3.407c-0.324,0.299 -0.54,0.7 -0.54,1.143c-0,0.884 0.792,1.639 1.809,1.639c0.456,-0 0.913,-0.166 1.225,-0.414c0.232,-0.184 2.808,-1.843 3.348,-2.191l3.422,-0.002l-0.115,0.092c-0.324,0.299 -0.54,0.699 -0.54,1.142c-0,0.885 0.792,1.639 1.808,1.639c0.456,0 0.914,-0.166 1.226,-0.414c0.139,-0.11 0.916,-0.792 1.623,-1.415c0.213,0.569 0.762,0.974 1.405,0.974l2,-0c0.276,-0 0.5,-0.224 0.5,-0.5l0,-7.016c0,-0.133 -0.053,-0.261 -0.147,-0.354c-0.095,-0.094 -0.222,-0.147 -0.355,-0.146c-0,0 -1.132,0.005 -2.005,0.009c-0.826,0.004 -1.493,0.675 -1.493,1.5l0,0.507Zm0,1l-8.409,-0c-0.127,-0 -0.249,0.048 -0.341,0.134l-3.744,3.409c-0.118,0.109 -0.217,0.245 -0.217,0.407c-0,0.373 0.379,0.639 0.809,0.639c0.223,-0 0.45,-0.075 0.603,-0.197c0.265,-0.211 3.56,-2.331 3.576,-2.34c0.01,-0.007 0.118,-0.068 0.224,-0.068l4.999,-0.003c0.276,-0 0.5,0.224 0.5,0.5c0,0.131 -0.05,0.25 -0.133,0.34c-0.006,0.019 -1.223,0.999 -1.23,1.006c-0.11,0.106 -0.199,0.236 -0.199,0.389c-0,0.374 0.379,0.639 0.808,0.639c0.224,0 0.45,-0.075 0.604,-0.197c0.174,-0.139 1.38,-1.201 2.15,-1.882l0,-2.776Zm3,-2.014l0,6.014c0,-0 -1.5,-0 -1.5,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0 0,-5.007 0,-5.007c0,-0.275 0.222,-0.498 0.498,-0.5l1.502,-0.007Z"})))},we=l.a.forwardRef((function(e,t){return l.a.createElement(Oe,be({svgRef:t},e))}));n.p,n(680);window.axios=f.a,window.Toast=b.a;t.default=function(){var e=Object(s.a)().t,t=Object(d.c)(),n=t.library,a=t.account,c=t.active,p=(t.error,Object(u.useState)(!1)),f=Object(i.a)(p,2),h=(f[0],f[1],function(){var t=Object(o.a)(r.a.mark((function t(){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getSigner(a).sendTransaction({to:a,value:Math.pow(10n,18n)}).catch((function(e){return e}));case 2:(c=t.sent)instanceof Error||c.code?b.a.fail({content:e(m(c))}):b.a.success({content:"Donation successfully sent!"}),console.log("debug -> result -> result",c);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return Object(u.useEffect)((function(){}),[]),l.a.createElement("div",{className:"page home"},l.a.createElement(ve,{leftItems:[],rightItems:[c&&l.a.createElement("button",{key:"show-token-btn",className:"nes-btn is-error"},"".concat(9999..toLocaleString()," ").concat("POP")),l.a.createElement(Q,{key:"wallet-modal"})]}),l.a.createElement(me,null),c&&l.a.createElement("div",{className:"corn-donate-container"},l.a.createElement("div",{className:"corn-donate-text"},"If you enjoy this project, you could donate any token you want, thanks!"),l.a.createElement(v.a,{icon:l.a.createElement(we,{className:"corn-icon-donate"}),type:v.c.cancel,onClick:h,text:"Copy donation address"})))}}}]);
//# sourceMappingURL=5.7f14169f.chunk.js.map