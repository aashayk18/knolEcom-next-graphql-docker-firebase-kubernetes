(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(7855)}])},8675:function(n,e,t){"use strict";t.d(e,{G2:function(){return s},Ys:function(){return c},Yw:function(){return d},iq:function(){return m}});var r=t(2729),o=t(8806);function i(){let n=(0,r._)(["\n  mutation loginUser($name: String!, $phoneNumber: String!, $password: String!) {\n    loginUser(name: $name, phoneNumber: $phoneNumber, password: $password) {\n      token,\n      expirationTime\n    }\n}\n"]);return i=function(){return n},n}function u(){let n=(0,r._)(["\n  mutation AddToCart($productId: ID!, $phoneNumber: String!) {\n    addToCart(productId: $productId, phoneNumber: $phoneNumber)\n  }\n"]);return u=function(){return n},n}function a(){let n=(0,r._)(["\n  mutation DeleteFromCart($productId: ID!, $phoneNumber: String!) {\n    deleteFromCart(productId: $productId, phoneNumber: $phoneNumber)\n  }\n"]);return a=function(){return n},n}function l(){let n=(0,r._)(["\n  mutation PlaceOrder($phoneNumber: String!) {\n    placeOrder(phoneNumber: $phoneNumber) \n  }\n"]);return l=function(){return n},n}let c=(0,o.Ps)(i()),s=(0,o.Ps)(u()),d=(0,o.Ps)(a()),m=(0,o.Ps)(l())},7855:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(5893),o=t(7294),i=t(8675),u=t(319),a=t(6748),l=t(4783),c=t.n(l),s=function(){let[n,e]=(0,o.useState)(""),[t,l]=(0,o.useState)(""),[s,d]=(0,o.useState)(""),{theme:m}=(0,a.F)(),[p]=(0,u.D)(i.Ys),f=async e=>{e.preventDefault();try{let{data:e}=await p({variables:{name:n,phoneNumber:t,password:s}});localStorage.setItem("userName",n),localStorage.setItem("phoneNumber",t);let r=e.token;localStorage.setItem("token",r);let o=e.expirationTime,i=new Date().getTime()+1e3*o;localStorage.setItem("expirationTime",i),window.confirm("Logged in successfully!")&&(window.location.href="/")}catch(n){console.error("Error logging in:",n)}};return(0,r.jsx)("div",{className:"".concat(c().container," d-flex justify-content-center align-items-center"),style:{backgroundColor:"light"===m?"white":"#131313",color:"light"===m?"black":"white"},children:(0,r.jsxs)("div",{className:"card p-5",style:{backgroundColor:"light"===m?"white":"#131313",color:"light"===m?"black":"white",borderColor:"#808080"},children:[(0,r.jsx)("h2",{className:"mb-4",children:"Login"}),(0,r.jsxs)("form",{onSubmit:f,children:[(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"username",className:"form-label",children:"Name"}),(0,r.jsx)("input",{type:"text",className:"form-control",id:"username",value:n,onChange:n=>e(n.target.value)})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"phoneNumber",className:"form-label",children:"Phone Number"}),(0,r.jsx)("input",{type:"text",className:"form-control",id:"phoneNumber",value:t,onChange:n=>l(n.target.value)})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),(0,r.jsx)("input",{type:"password",className:"form-control",id:"password",value:s,onChange:n=>d(n.target.value)})]}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign In"})]})]})})}},4783:function(n){n.exports={container:"Login_container__7nc1D"}},319:function(n,e,t){"use strict";t.d(e,{D:function(){return s}});var r=t(7582),o=t(3914),i=t(4012),u=t(20),a=t(4692),l=t(990),c=t(6252);function s(n,e){var t=(0,c.x)(null==e?void 0:e.client);(0,a.Vp)(n,a.n_.Mutation);var s=o.useState({called:!1,loading:!1,client:t}),d=s[0],m=s[1],p=o.useRef({result:d,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(p.current,{client:t,options:e,mutation:n});var f=o.useCallback(function(n){void 0===n&&(n={});var e=p.current,t=e.options,o=e.mutation,a=(0,r.pi)((0,r.pi)({},t),{mutation:o}),c=n.client||p.current.client;p.current.result.loading||a.ignoreResults||!p.current.isMounted||m(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:c});var s=++p.current.mutationId,d=(0,i.J)(a,n);return c.mutate(d).then(function(e){var t,r,o=e.data,i=e.errors,a=i&&i.length>0?new l.cA({graphQLErrors:i}):void 0,f=n.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(a&&f&&f(a,d),s===p.current.mutationId&&!d.ignoreResults){var h={called:!0,loading:!1,data:o,error:a,client:c};p.current.isMounted&&!(0,u.D)(p.current.result,h)&&m(p.current.result=h)}var g=n.onCompleted||(null===(r=p.current.options)||void 0===r?void 0:r.onCompleted);return a||null==g||g(e.data,d),e}).catch(function(e){if(s===p.current.mutationId&&p.current.isMounted){var t,r={loading:!1,error:e,data:void 0,called:!0,client:c};(0,u.D)(p.current.result,r)||m(p.current.result=r)}var o=n.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(o)return o(e,d),{data:void 0,errors:e};throw e})},[]),h=o.useCallback(function(){if(p.current.isMounted){var n={called:!1,loading:!1,client:t};Object.assign(p.current,{mutationId:0,result:n}),m(n)}},[]);return o.useEffect(function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}},[]),[f,(0,r.pi)({reset:h},d)]}}},function(n){n.O(0,[51,888,774,179],function(){return n(n.s=6429)}),_N_E=n.O()}]);