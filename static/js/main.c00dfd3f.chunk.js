(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(8),s=c.n(r),i=(c(13),c(14),c(4)),u=(c(15),c(0)),o=function(t){var e=t.product,c=t.handleAddToCart;return Object(u.jsxs)("div",{className:"product-item",children:[Object(u.jsx)("img",{alt:"alt",width:"50",src:e.assets.detail.file.url}),Object(u.jsx)("label",{children:e.name}),Object(u.jsxs)("label",{children:["$",e.price]}),Object(u.jsx)("button",{onClick:function(){return c(e)},children:" Buy Me!!"})]})},d=function(t){return{type:"ADD_TO_CART",payload:t}},l=(c(17),function(t){var e=t.products,c=Object(n.useContext)(x),a=c.state,r=c.dispatch;Object(n.useEffect)((function(){(null===e||void 0===e?void 0:e.length)&&e.forEach((function(t){r({type:"ADD_TO_LIST",payload:t})}))}),[e,r]);var s=function(t){r(d(t))};return Object(u.jsx)("div",{className:"product-list",children:a.productList&&a.productList.map((function(t){return Object(u.jsx)(o,{product:t,handleAddToCart:s},t.sku)}))})}),j=(c(18),function(t){var e=t.product,c=t.addItemToCart,n=t.removeItemFromCart;return e?Object(u.jsxs)("div",{className:"cart-item-container",children:[Object(u.jsx)("img",{alt:"none",width:"50",src:e.assets.detail.file.url}),Object(u.jsx)("label",{children:e.name}),Object(u.jsxs)("label",{children:["$",e.price]}),Object(u.jsxs)("div",{className:"button-container",children:[Object(u.jsx)("button",{onClick:function(){return n(e.sku)},children:" - "}),Object(u.jsx)("label",{children:e.amount}),Object(u.jsx)("button",{onClick:function(){return c(e)},children:" +"})]})]}):Object(u.jsx)("div",{})}),b=(c(19),function(){var t=Object(n.useContext)(x),e=t.state,c=t.dispatch,a=function(t){c(d(t))},r=function(t){c(function(t){return{type:"REMOVE_TO_CART",payload:t}}(t))};return Object(u.jsxs)("div",{className:"cart-container",children:[Object(u.jsx)("div",{className:"cart-title",children:" Cart "}),Object(u.jsx)("div",{className:"cart-list-container",children:e.cartList.products&&e.cartList.products.map((function(t){return Object(u.jsx)(j,{product:t,addItemToCart:a,removeItemFromCart:r},t.sku)}))}),Object(u.jsxs)("div",{className:"cart-list-totals",children:[Object(u.jsxs)("div",{className:"cart-list-count",children:[e.cartList.count," Items"]}),Object(u.jsxs)("div",{className:"cart-list-total-price",children:["Total :  $",e.cartList.totalPrice]})]})]})}),O=c(6),p=c(2),m=function(t,e){var c=t.find((function(t){return t.sku===e.sku}));return c?t.map((function(t){return t.sku===c.sku?Object(p.a)(Object(p.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(O.a)(t),[Object(p.a)(Object(p.a)({},e),{},{amount:1})])};function f(t,e){return t.reduce((function(t,c){return c.sku===e&&c.amount>1?[].concat(Object(O.a)(t),[Object(p.a)(Object(p.a)({},c),{},{amount:c.amount-1})]):t}),[])}var h=function(t,e){var c=t.productList,n=t.cartList,a=n.products,r=n.totalPrice,s=n.count;switch(e.type){case"ADD_TO_LIST":return Object(p.a)(Object(p.a)({},t),{},{productList:[].concat(Object(O.a)(c),[e.payload])});case"ADD_TO_CART":var i=e.payload.price;return Object(p.a)(Object(p.a)({},t),{},{cartList:{products:m(a,e.payload),count:s+1,totalPrice:r+i}});case"REMOVE_TO_CART":return Object(p.a)(Object(p.a)({},t),{},{cartList:{products:f(a,e.payload),count:s-1,totalPrice:a.reduce((function(t,e){return e.price*e.amount+t}),0)}});default:return t}},x=(c(20),a.a.createContext({})),v=function(){var t=Object(n.useReducer)(h,{productList:[],cartList:{products:[],totalPrice:0,count:0}}),e=Object(i.a)(t,2),c=e[0],a=e[1],r=function(){var t=Object(n.useState)(),e=Object(i.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(n.useEffect)((function(){setTimeout((function(){a([{name:"One Wipe Charlies 50 ct",sku:"GK-OWC-50C-CURRENT",price:5.5,amount:0,assets:{detail:{file:{url:"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/6HRiDZkSRdD3Zd1CXM7OoZ/6fb3d37a64d1a36cab83cd417eaffb21/GK-OWC-50C-CURRENT-DETAIL.png"}}}},{name:"Shave Butter",sku:"ESB-6Z-CURRENT",price:8,amount:0,assets:{detail:{file:{url:"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/5R7KAYHTnaQU6M2COSKcWY/3e62da16c84627b2e6d66d590fc80c0d/ESB-6Z-1.png"}}}},{name:"BLUEPRINT 101",sku:"BPF-50M-101-CURRENT",price:50,amount:0,assets:{detail:{file:{url:"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/4btR29Z9UkuM4e2CAwMSwo/bfc9214e22bc151a31aa723ea987986d/BPF-50M-101-CURRENT-PDPHEADER.png"}}}}]),o(!1)}),800)}),[]),{loading:u,products:c}}(),s=r.loading,o=r.products;return Object(u.jsx)(x.Provider,{value:{state:c,dispatch:a},children:s?Object(u.jsx)("div",{children:" Loading..."}):Object(u.jsxs)("div",{className:"shop-container",children:[Object(u.jsx)(l,{products:o}),c.cartList.products.length?Object(u.jsx)(b,{}):Object(u.jsx)(u.Fragment,{})]})})};var C=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v,{})})},T=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),r(t),s(t)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.c00dfd3f.chunk.js.map