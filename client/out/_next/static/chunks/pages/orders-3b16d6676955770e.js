(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{9501:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return r(9706)}])},8581:function(e,n,r){"use strict";r.d(n,{CP:function(){return m},bJ:function(){return d},ud:function(){return g},wq:function(){return h}});var t=r(2729),c=r(8806);function i(){let e=(0,t._)(["\n  query FetchCartItems {\n    fetchCartItems {\n      id\n      name\n      price\n      description\n      image\n      avgRating\n      category\n    }\n  }\n"]);return i=function(){return e},e}function a(){let e=(0,t._)(["\n  query FetchProducts(\n    $search: String\n    $category: String\n    $rating: String\n    $sortBy: String\n  ) {\n    fetchProducts(\n      search: $search\n      category: $category\n      rating: $rating\n      sortBy: $sortBy\n    ) {\n      id\n      name\n      price\n      description\n      image\n      avgRating\n      category\n    }\n  }\n"]);return a=function(){return e},e}function s(){let e=(0,t._)(["\n  query ProductIds {\n    productIds\n  }\n"]);return s=function(){return e},e}function o(){let e=(0,t._)(["\n  query Product($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      price\n      description\n      image\n      avgRating\n      category\n    }\n  }\n"]);return o=function(){return e},e}function u(){let e=(0,t._)(["\n  query FetchUserCart($phoneNumber: String!) {\n    userCartItems(phoneNumber: $phoneNumber)\n  }\n"]);return u=function(){return e},e}function l(){let e=(0,t._)(["\n  query FetchUserOrder($phoneNumber: String!) {\n    userOrders(phoneNumber: $phoneNumber)\n  }\n"]);return l=function(){return e},e}(0,c.Ps)(i());let d=(0,c.Ps)(a());(0,c.Ps)(s());let h=(0,c.Ps)(o()),m=(0,c.Ps)(u()),g=(0,c.Ps)(l())},9706:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return g}});var t=r(5893),c=r(7294),i=r(6748);function a(e){let{theme:n}=(0,i.F)();return(0,t.jsx)("div",{className:"card mb-3",style:{backgroundColor:"dark"===n?"#101010":"white",color:"dark"===n?"white":"#101010",borderColor:"dark"===n?"white":""},children:(0,t.jsxs)("div",{className:"row g-0",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("img",{src:e.image,alt:e.name,className:"img-fluid rounded-start",style:{width:"200px",height:"150px"},loading:"lazy"})}),(0,t.jsx)("div",{className:"col-md-8",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h5",{className:"card-name",children:e.name}),(0,t.jsxs)("p",{className:"card-text",children:["Price: $",e.price]})]})})]})})}r(5675);var s=r(1664),o=r.n(s),u=r(6812),l=r(1494),d=r(8581),h=r(1490),m=r.n(h),g=function(){let[e,n]=(0,c.useState)([]),[r,s]=(0,c.useState)([]),[h,g]=(0,c.useState)(!1),[f,p]=(0,c.useState)(null),{theme:y}=(0,i.F)(),{data:x,loading:b}=(0,u.a)(d.ud,{variables:{phoneNumber:f}});(0,c.useEffect)(()=>{!b&&x&&n(x.userOrders)},[x,b]),(0,c.useEffect)(()=>{let n=localStorage.getItem("token"),r=localStorage.getItem("expirationTime");p(localStorage.getItem("phoneNumber")),(async()=>{try{if(e.length>0){let n=e.map(e=>N(e)),r=(await Promise.all(n)).map(e=>e.product);console.log(r),s(r)}}catch(e){console.error("Error fetching order products:",e)}})(),n&&r?r<Date.now()?g(!1):g(!0):g(!1)},[e]);let N=async e=>{try{let{data:n}=await l.Z.query({query:d.wq,variables:{id:e}});return n}catch(e){return console.error("Error fetching product:",e),null}};return h?(0,t.jsxs)("div",{className:"".concat(m().container),style:{backgroundColor:"light"===y?"white":"#131313 ",color:"light"===y?"black":"white"},children:[(0,t.jsx)("br",{}),(0,t.jsx)("h1",{className:"mb-4",children:"Orders"}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-8",children:r.length>0?r.map((e,n)=>(0,t.jsx)(a,{name:e.name,price:e.price,image:e.image,id:e.id},n)):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h5",{children:"You have no previous orders!"}),(0,t.jsx)("br",{}),(0,t.jsx)("h6",{children:"Once you complete any purchases, they will be displayed here."})]})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)(o(),{href:"/",className:"btn btn-secondary me-2",children:"Back"})})]})]}):(0,t.jsxs)("div",{className:"".concat(m().container),style:{backgroundColor:"light"===y?"white":"#131313",color:"light"===y?"black":"white"},children:[(0,t.jsx)("br",{}),(0,t.jsx)("h5",{children:"Login to see your orders!"})]})}},1490:function(e){e.exports={container:"Orders_container__iHfWk"}}},function(e){e.O(0,[51,675,812,888,774,179],function(){return e(e.s=9501)}),_N_E=e.O()}]);