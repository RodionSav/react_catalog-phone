(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(9),i=c.n(a),r=c(4),l=c(3),n=c(10),o=(c(14),c(29),c(0));const d=()=>Object(o.jsx)(r.c,{to:"/",className:"logo"});c(31);const j=()=>Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("ul",{className:"footer__list",children:[Object(o.jsx)("li",{className:"footer__item",children:Object(o.jsx)("h1",{className:"footer__title",children:Object(o.jsx)("a",{href:"https://github.com/RodionSav",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Github"})})}),Object(o.jsx)("li",{className:"footer__item",children:Object(o.jsx)("h1",{className:"footer__title",children:Object(o.jsx)("a",{href:"https://github.com/RodionSav",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Contacts"})})}),Object(o.jsx)("li",{className:"footer__item",children:Object(o.jsx)("h1",{className:"footer__title",children:Object(o.jsx)("a",{href:"https://github.com/RodionSav",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Rights"})})})]}),Object(o.jsxs)("div",{className:"footer-container-back",children:[Object(o.jsx)("h1",{className:"footer__title-back",children:"Back to top"}),Object(o.jsx)("button",{type:"button","aria-label":"back",className:"footer__link-back",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}})]})]})});var b=c(5),u=c.n(b);c(32);const h=["phones","tablets","accessories"],m=e=>{let{isActive:t}=e;return u()("nav__link",{"nav__link-active":t})},_=()=>Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"nav",children:Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(r.c,{className:m,to:"/",children:"Home"})}),h.map((e=>Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsx)(r.c,{className:m,to:"/".concat(e),children:e})},e)))]})})});c(33),c(34);var p=c(21),O=c.n(p);function x(e,t){const c=new URLSearchParams(e.toString());return Object.entries(t).forEach((e=>{let[t,s]=e;null===s?c.delete(t):Array.isArray(s)?(c.delete(t),s.forEach((e=>{c.append(t,e)}))):c.set(t,s)})),c.toString()}const v=()=>{const[e,t]=Object(r.d)(),c=e.get("query"),[a,i]=Object(s.useState)(c||""),l=Object(s.useMemo)((()=>O()((e=>{t(e)}),1e3)),[t]);return Object(o.jsx)("div",{className:"search-container",children:Object(o.jsx)("input",{className:"search__input",placeholder:"Search in phones...",value:a,onChange:t=>{const c=t.target.value;i(c),l(x(e,c?{query:c}:{query:null}))}})})},N=()=>Object(n.b)(),g=n.c,f=()=>{const e="/phones"===Object(l.n)().pathname,t=g((e=>e.favourites.items)),c=g((e=>e.cartProducts.items));return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("div",{className:"header-container",children:[Object(o.jsx)(d,{}),Object(o.jsx)(_,{})]}),Object(o.jsxs)("div",{className:"icon-container",children:[e&&Object(o.jsx)(v,{}),Object(o.jsxs)("div",{className:"icon-favourites-container",children:[Object(o.jsx)(r.c,{to:"/favourites",className:e=>{let{isActive:t}=e;return u()("icon icon-favourites",{"icon-favourites-active":t})}}),t.length>0&&Object(o.jsx)("div",{className:"icon icon-container icon-favourites-count",children:t.length})]}),Object(o.jsxs)("div",{className:"icon-container icon-bag-container",children:[Object(o.jsx)(r.c,{to:"/bag",className:e=>{let{isActive:t}=e;return u()("icon icon-bag",{"icon-bag-active":t})}}),c.length>0&&Object(o.jsx)("div",{className:"icon icon-bag-count",children:c.length})]})]})]})};function y(){const{pathname:e}=Object(l.n)();return Object(s.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}var k=()=>Object(o.jsx)("body",{className:"body",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{}),Object(o.jsx)(y,{}),Object(o.jsx)("body",{className:"body",children:Object(o.jsx)(l.a,{})}),Object(o.jsx)(j,{})]})});c(11);const C="https://mate-academy.github.io/react_phone-catalog/_new";function S(e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const c={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(c.body=JSON.stringify(t),c.headers={"Content-Type":"application/json; charset=UTF-8"}),(s=100,new Promise((e=>{setTimeout(e,s)}))).then((()=>fetch(C+e,c))).then((e=>{if(!e.ok)throw new Error;return e.json()}));var s}const P=e=>S(e);var w=c(7);const I=localStorage.getItem("favouriteProducts"),A={items:I?JSON.parse(I):[]},E=e=>{localStorage.setItem("favouriteProducts",JSON.stringify(e.items))},F=Object(w.c)({name:"favourites",initialState:A,reducers:{setFavouritesProducts:(e,t)=>{e.items.push(t.payload),E(e)},deleteFavouritesProducts:(e,t)=>{e.items=e.items.filter((e=>e.id!==t.payload)),E(e)}}}),{setFavouritesProducts:M,deleteFavouritesProducts:q}=F.actions;var T=F.reducer;const B=localStorage.getItem("cartProducts"),R={items:B?JSON.parse(B):[],total:0},L=e=>{localStorage.setItem("cartProducts",JSON.stringify(e.items))},J=Object(w.c)({name:"cartProducts",initialState:R,reducers:{setCartProducts:(e,t)=>{e.items.push({...t.payload,quantity:1}),L(e)},deleteCartProducts:(e,t)=>{const c=e.items.filter((e=>e.id!==t.payload));e.items=c,L(e)},increaseQuantity:(e,t)=>{const c=e.items.find((e=>e.id===t.payload));c&&(c.quantity+=1),L(e)},decreaseQuantity:(e,t)=>{const c=e.items.find((e=>e.id===t.payload));c&&c.quantity>0&&(c.quantity-=1),L(e)}}}),{setCartProducts:D,deleteCartProducts:$,increaseQuantity:G,decreaseQuantity:Q}=J.actions;var H=J.reducer;const U=e=>{let{product:t}=e;const c=N(),s=g((e=>e.favourites.items)),a=g((e=>e.cartProducts.items)),i=s.some((e=>e.phoneId===t.phoneId)),r=a.some((e=>e.phoneId===t.phoneId));return Object(o.jsxs)("div",{className:"product__button-container",children:[Object(o.jsx)("button",{type:"button",className:u()("product__button-add",{"product__button-add-active":r}),onClick:()=>{return e=t,void c(r?$(e.id):D(e));var e},children:"Add to card"}),Object(o.jsx)("button",{type:"button","aria-label":"addFavourite",className:u()("product__button-favorite",{"product__button-favorite-active":i}),onClick:()=>{return e=t,void c(i?q(e.id):M(e));var e}})]})},X=e=>{let{product:t}=e;const{phoneId:c,name:s,fullPrice:a,price:i,screen:l,capacity:n,ram:d,image:j}=t;return Object(o.jsxs)("div",{className:"product__card",children:[Object(o.jsx)(r.c,{to:"/phones/".concat(c),children:Object(o.jsx)("img",{src:"".concat(C,"/").concat(j),className:"product-img",alt:c})}),Object(o.jsx)("h2",{className:"product__name",children:"".concat(s," (iMT9G2FS/A)")}),Object(o.jsxs)("div",{className:"product__price-container",children:[Object(o.jsx)("h1",{className:"product__price",children:"$".concat(i)}),Object(o.jsx)("h1",{className:"product__fullprice",children:"$".concat(a)})]}),Object(o.jsxs)("div",{className:"product__information",children:[Object(o.jsxs)("div",{className:"product__charact-container",children:[Object(o.jsx)("p",{className:"product__charact",children:"Screen"}),Object(o.jsx)("h3",{className:"product__data",children:l})]}),Object(o.jsxs)("div",{className:"product__charact-container",children:[Object(o.jsx)("p",{className:"product__charact",children:"Capacity"}),Object(o.jsx)("h3",{className:"product__data",children:n})]}),Object(o.jsxs)("div",{className:"product__charact-container",children:[Object(o.jsx)("p",{className:"product__charact",children:"RAM"}),Object(o.jsx)("h3",{className:"product__data",children:d})]})]}),Object(o.jsx)(U,{product:t})]})};c(36);const Y=()=>Object(o.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(o.jsx)("div",{className:"Loader__content"})}),z=e=>{let{products:t,title:c,loaded:a}=e;const[i,r]=Object(s.useState)(0),l=288*((null===t||void 0===t?void 0:t.length)-4),n=i>-1*l,d=i<0;return Object(o.jsx)("div",{className:"product__foremost-container",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"product-second-container",children:[Object(o.jsx)("h1",{className:"product__title",children:c}),Object(o.jsxs)("div",{className:"product__button-arrow-container",children:[Object(o.jsx)("button",{type:"button","aria-label":"prevButton",className:"product__button",onClick:()=>{r((()=>i+288))},disabled:!d,children:Object(o.jsx)("div",{className:"product__button-arrow product__button-arrow-1"})}),Object(o.jsx)("button",{type:"button","aria-label":"nextButton",className:"product__button",onClick:()=>{r((()=>i-288))},disabled:!n,children:Object(o.jsx)("div",{className:"product__button-arrow product__button-arrow-2"})})]})]}),Object(o.jsx)("div",{className:"product-container",children:Object(o.jsx)("div",{className:"product__list",children:a?Object(o.jsx)(Y,{}):t.map((e=>Object(o.jsx)("li",{style:{listStyle:"none",transform:"translateX(".concat(i,"px)"),transition:"0.5s"},children:Object(o.jsx)(X,{product:e},null===e||void 0===e?void 0:e.id)},null===e||void 0===e?void 0:e.id)))})})]})})};c(37);const W=[c.p+"static/media/slide1.a7639152.svg",c.p+"static/media/slide22.a962057c.png",c.p+"static/media/slide33.bdd2e0fc.png"],Z=()=>{const[e,t]=Object(s.useState)(0),[c,a]=Object(s.useState)(0);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"slider-container",children:[Object(o.jsx)("button",{type:"button","aria-label":"prevButton",className:"slider__button slider__button-left",onClick:()=>{e>=0?(t((()=>e+-2112)),a((e=>e+2))):(t((()=>e+1056)),a((e=>e-1)))}}),Object(o.jsx)("div",{className:"slider",children:W.map((t=>Object(o.jsx)("img",{src:t,alt:t,style:{transform:"translateX(".concat(e,"px)"),transition:"0.5s"},className:"img"},t)))}),Object(o.jsx)("button",{type:"button","aria-label":"nextButton",className:"slider__button slider__button-right",onClick:()=>{e<=-2112?(t(0),a((e=>e-2))):(t((()=>e-1056)),a((e=>e+1)))}})]}),Object(o.jsx)("div",{className:"pagination",children:W.map(((e,s)=>Object(o.jsx)("button",{type:"button","aria-label":"button-pag",className:u()("pagination__dot",{pagination__dot_active:c===s}),onClick:()=>(e=>{a(e),t((()=>1056*-e))})(s)},e)))})]})};c(38),c(39);const K=e=>{let{products:t}=e;return Object(o.jsx)("div",{className:"category__main-container",children:Object(o.jsxs)("div",{className:"category-container",children:[Object(o.jsxs)("div",{className:"category__little-container",children:[Object(o.jsx)(r.b,{to:"/phones",children:Object(o.jsx)("div",{className:"category-img category-img-1"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"category__title",children:"Mobile phones"}),Object(o.jsx)("h2",{className:"category__subtitle",children:"".concat(null===t||void 0===t?void 0:t.length," models")})]})]}),Object(o.jsxs)("div",{className:"category__little-container",children:[Object(o.jsx)(r.b,{to:"/tablets",children:Object(o.jsx)("div",{className:"category-img category-img-2"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"category__title",children:"Tablets"}),Object(o.jsx)("h2",{className:"category__subtitle",children:"24 models"})]})]}),Object(o.jsxs)("div",{className:"category__little-container",children:[Object(o.jsx)(r.b,{to:"/accessories",children:Object(o.jsx)("div",{className:"category-img category-img-3"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"category__title",children:"Accessories"}),Object(o.jsx)("h2",{className:"category__subtitle",children:"100 models"})]})]})]})})};const V=Object(w.b)("products/fetch",(()=>P("/products.json"))),ee=Object(w.b)("productDetails/fetch",(e=>function(e){return P("/products/".concat(e,".json"))}(e))),te=Object(w.c)({name:"products",initialState:{items:[],itemDetail:null,selectedImage:"",loaded:!0,hasError:null},reducers:{setSelectedImage:(e,t)=>({...e,selectedImage:t.payload}),setLoaded:(e,t)=>({...e,loaded:t.payload})},extraReducers:e=>{e.addCase(V.pending,(e=>({...e,loaded:!0}))),e.addCase(V.fulfilled,((e,t)=>({...e,items:t.payload,loaded:!1}))),e.addCase(V.rejected,(e=>({...e,loaded:!1,hasError:"Error"}))),e.addCase(ee.pending,(e=>({...e,loaded:!0}))),e.addCase(ee.fulfilled,((e,t)=>({...e,itemDetail:t.payload,selectedImage:t.payload.images[0],loaded:!1}))),e.addCase(ee.rejected,(e=>({...e,loaded:!1,hasError:"Error"})))}}),{setSelectedImage:ce,setLoaded:se}=te.actions;var ae=te.reducer;const ie=()=>{const e=N(),{items:t,loaded:c}=g((e=>e.products));Object(s.useEffect)((()=>{e(V())}),[e]);const[a,i]=Object(s.useState)([]);return Object(s.useEffect)((()=>{const e=[...t];e.sort(((e,t)=>t.year-e.year)),i(e)}),[t]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"product-slider-container",children:[Object(o.jsx)(Z,{}),Object(o.jsx)(z,{products:t,title:"Hot prices",loaded:c}),Object(o.jsx)("h1",{className:"product-slider__title",children:"Shop by category"}),Object(o.jsx)(K,{products:t}),Object(o.jsx)(z,{products:a,title:"Brand new models",loaded:c})]})})},re=()=>Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(ie,{})});c(40),c(41);const le=e=>{let{text:t}=e;return Object(o.jsxs)("div",{className:"back",children:[Object(o.jsx)(r.c,{className:"back__link",to:"/"}),Object(o.jsx)("div",{className:"back-arrow"}),Object(o.jsx)("h1",{className:"back__title",children:t})]})},ne=()=>{const e=g((e=>e.favourites.items));return Object(o.jsxs)("div",{className:"favourites",children:[Object(o.jsx)(le,{text:"Favourites"}),Object(o.jsx)("h1",{className:"favourites__title",children:"Favourites"}),Object(o.jsx)("h2",{className:"favourites__subtitle",children:"".concat(e.length," items")}),Object(o.jsx)("div",{className:"favourites-container",children:e.map((e=>Object(o.jsx)(X,{product:e},e.id)))})]})};c(15);function oe(e,t){const c=[];for(let s=e;s<=t;s+=1)c.push(s);return c}c(42);const de=e=>{let{total:t,perPage:c,currentPage:s,onPageChange:a}=e;const[i,l]=Object(r.d)(),n=Math.ceil(t/c),d=Math.floor(2);let j=Math.max(1,s-d);const b=Math.min(n,j+4-1);b===n&&(j=Math.max(1,b-4+1));return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"pagination__list",children:[Object(o.jsx)("li",{className:"pagination__page",children:Object(o.jsx)("button",{type:"button","aria-label":"back",className:"pagination-arrow",disabled:1===s,onClick:()=>{l(x(i,{page:(s-1).toString()})),s>1&&a(s-1)}})}),oe(j,b).map((e=>Object(o.jsx)("li",{className:"pagination__page",children:Object(o.jsx)("a",{className:u()("pagination__link",{"pagination__link-active":e===s}),href:"#".concat(e),onClick:t=>((e,t)=>{t.preventDefault(),a(e)})(e,t),children:e})},e))),Object(o.jsx)("li",{className:"pagination__page",children:Object(o.jsx)("button",{type:"button","aria-label":"forward",className:"pagination-arrow pagination-arrow-next",onClick:()=>{l(x(i,{page:(s+1).toString()})),s<n&&a(s+1)},disabled:s===n})})]})})};let je=function(e){return e.NoSorting="No sorting",e.Newest="Newest",e.Alphabetically="Alphabetically",e.Cheapest="Cheapest",e}({});const be=["No sorting","Newest","Alphabetically","Cheapest"],ue=()=>{const[e,t]=Object(r.d)(),{items:c,loaded:a}=g((e=>e.products)),i=[{number:c.length,text:"All"},{number:4,text:"4"},{number:8,text:"8"},{number:16,text:"16"}],l=N(),n=e.get("value")||"All",d=e.get("perPage")||"",[j,b]=Object(s.useState)(parseInt(d,10)),[h,m]=Object(s.useState)(1),[_,p]=Object(s.useState)(be[0]),O=c.length,[v,f]=Object(s.useState)(n),[y,k]=Object(s.useState)(!1),[C,S]=Object(s.useState)(!1),P=e.get("query")||"";Object(s.useEffect)((()=>{c.length||l(V())}),[l,c]);const w=((e,t,c)=>{let s=[...t];return c.trim()&&(s=[...t].filter((e=>e.name.toLowerCase().includes(c.toLowerCase().trim())))),s.sort(((t,c)=>{switch(e){case je.NoSorting:return 0;case je.Newest:return c.year-t.year;case je.Alphabetically:return t.name.localeCompare(c.name);case je.Cheapest:return t.price-c.price;default:return 0}})).slice((h-1)*j,h*j)})(_,c,P);return Object(s.useEffect)((()=>{const t=parseInt(e.get("perPage")||c.length.toString(),10);b(t)}),[e,c.length]),Object(s.useEffect)((()=>{const t=parseInt(e.get("page")||"1",10);m(t)}),[e,w]),Object(s.useEffect)((()=>{const t=e.get("sortBy")||_;p(t)}),[e,w,_]),Object(o.jsxs)("div",{className:"phones",children:[P&&Object(o.jsxs)("div",{children:[w.length>0&&Object(o.jsx)("h3",{className:"phones__subtitle",children:1===w.length?"".concat(w.length," result"):"".concat(w.length," results")}),!w.length&&!a&&Object(o.jsx)("h1",{className:"phones__title",children:"there are no products matching your requests"}),w.length>0&&Object(o.jsxs)("div",{className:"phones__list",children:[a&&Object(o.jsx)(Y,{}),!a&&w.length>0&&w.map((e=>Object(o.jsx)(X,{product:e},e.id)))]})]}),!P&&Object(o.jsxs)("div",{className:"phones-container",children:[Object(o.jsx)(le,{text:"Phones"}),Object(o.jsx)("h1",{className:"phones__title",children:"Page with phones"}),Object(o.jsx)("h3",{className:"phones__subtitle",children:"".concat(null===c||void 0===c?void 0:c.length," models")}),Object(o.jsxs)("div",{className:"phones__main-container",children:[Object(o.jsxs)("div",{className:"phones-container",children:[Object(o.jsx)("h1",{className:"phones__subtitle phones__subtitle_little",children:"Sort by"}),Object(o.jsxs)("div",{className:"phones__select",children:[Object(o.jsxs)("div",{role:"button",className:"phones__option-container",onClick:()=>{S(!C)},"aria-hidden":"true",children:[Object(o.jsx)("span",{className:"phones__option-selected",children:_}),Object(o.jsx)("div",{className:u()("phones__option-arrow",{"phones__option-arrow_focus":C})})]}),C&&Object(o.jsx)("ul",{className:"phones__option__list",children:be.map((c=>Object(o.jsx)("li",{className:u()("phones__option",{"phones__option-active":c===_}),value:c,onClick:()=>{var s;t(x(e,{sortBy:s=c})),p(s),S(!1)},"aria-hidden":"true",children:c},c)))})]})]}),Object(o.jsxs)("div",{className:"phones-container",children:[Object(o.jsx)("h1",{className:"phones__subtitle phones__subtitle_little",children:"Items on page"}),Object(o.jsxs)("div",{className:"phones__select","aria-hidden":"true",children:[Object(o.jsxs)("div",{role:"button",className:"phones__option-container",onClick:()=>{k(!y)},"aria-hidden":"true",children:[Object(o.jsx)("span",{className:"phones__option-selected",children:v}),Object(o.jsx)("div",{className:u()("phones__option-arrow",{"phones__option-arrow_focus":y})})]}),y&&Object(o.jsx)("ul",{className:"phones__option__list",children:i.map((c=>Object(o.jsx)("li",{className:u()("phones__option",{"phones__option-active":c.text===v}),value:c.number,onClick:()=>{var s;t(x(e,{value:(s=c).text,perPage:s.number.toString()})),b(s.number),f(s.text),k(!1)},"aria-hidden":"true",children:c.text},c.number)))})]})]})]}),Object(o.jsxs)("ul",{className:"phones__list",children:[a&&Object(o.jsx)(Y,{}),!a&&w.map((e=>Object(o.jsx)("li",{className:"phones__item",children:Object(o.jsx)(X,{product:e})},e.id)))]}),!P&&w.length>0&&j!==i[0].number&&Object(o.jsx)(de,{total:O,perPage:j,currentPage:h,onPageChange:c=>{t(x(e,{page:c.toString()})),m(c)}})]})]})};c(43);const he=e=>{let{product:t}=e;const c=N(),s=g((e=>e.favourites.items)),a=g((e=>e.cartProducts.items)),i=s.some((e=>e.phoneId===t.phoneId)),r=a.some((e=>e.phoneId===t.phoneId));return Object(o.jsxs)("div",{className:"product__button-container_detail",children:[Object(o.jsx)("button",{type:"button",className:u()("product__button-add_detail",{"product__button-add_detail-active":r}),onClick:()=>{return e=t,void c(r?$(e.id):D(e));var e},children:"Add to card"}),Object(o.jsx)("button",{type:"button","aria-label":"addFavourite",className:u()("product__button-favorite_detail",{"product__button-favorite_detail-active":i}),onClick:()=>{return e=t,void c(i?q(e.id):M(e));var e}})]})},me={midnightgreen:"#5f6960",rosegold:"#f9d2cd",gold:"#f3ddc4",silver:"#d9dadb",black:"#363539",green:"#bee8d5",yellow:"#fee889",white:"#fcf7f4",purple:"#ccc2d6",red:"#cd283f",spacegray:"#4e4d4b",coral:"#fd6a56"},_e=()=>{const e=N(),t=Object(l.n)(),{items:c,itemDetail:a,selectedImage:i,loaded:n}=g((e=>e.products)),{productId:d}=Object(l.r)(),[j,b]=Object(s.useState)([]);Object(s.useEffect)((()=>{d&&e(ee(d))}),[d,e]);const h=Object(s.useMemo)((()=>c.find((e=>e.itemId===d))||{}),[d,c]);return Object(s.useEffect)((()=>{P("/products.json").then((e=>e.sort((()=>Math.random()-.5)))).then(b)}),[]),Object(o.jsxs)(o.Fragment,{children:[n&&Object(o.jsx)(Y,{}),!n&&Object(o.jsxs)("div",{className:"product-details",children:[Object(o.jsxs)("div",{className:"product-details-container",children:[Object(o.jsx)(le,{text:"Phones"}),Object(o.jsx)("div",{className:"product-details-arrow"}),Object(o.jsx)("h1",{className:"product-details__subtitle",children:"".concat(null===a||void 0===a?void 0:a.name," (iMT9G2FS/A)")})]}),Object(o.jsx)(r.b,{className:"product-details-back",to:"/",children:"Back"}),Object(o.jsx)("h1",{className:"product-details__name",children:"".concat(null===a||void 0===a?void 0:a.name," (iMT9G2FS/A)")}),Object(o.jsxs)("div",{className:"product-details__mobile-container",children:[Object(o.jsx)("div",{children:!n&&Object(o.jsxs)("div",{className:"product-details-images-container",children:[(null===a||void 0===a?void 0:a.images)&&Object(o.jsx)("div",{className:"product-details-images",children:a.images.map((t=>Object(o.jsx)("img",{className:u()("product-details-image",{"product-details-image-active":t===i}),src:"".concat(C,"/").concat(t),alt:"Product",onClick:()=>e(ce(t)),"aria-hidden":"true"},t)))}),Object(o.jsx)("img",{className:"product-details-image_selected",src:"".concat(C,"/").concat(i),alt:i})]})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"product-details-color-container",children:[Object(o.jsx)("h1",{className:"product-details__subtitle",children:"Available colors"}),Object(o.jsx)("div",{className:"product-details__color-container",children:null===a||void 0===a?void 0:a.colorsAvailable.map((e=>Object(o.jsx)(r.c,{to:{pathname:t.pathname.replace(a.color,e)},children:Object(o.jsx)("span",{className:u()("product-details__color-circle",{"product-details__color-circle-active":e===a.color}),style:{backgroundColor:me[e]}})},e)))})]}),Object(o.jsxs)("div",{className:"product-details-capacity-container",children:[Object(o.jsx)("h1",{className:"product-details__subtitle",children:"Select capacity"}),Object(o.jsx)("div",{className:"product-details__capacity-container",children:null===a||void 0===a?void 0:a.capacityAvailable.map((e=>Object(o.jsx)(r.c,{to:"/phones/".concat(a.namespaceId,"-").concat(e.toLowerCase(),"-").concat(a.color),className:u()("product-details__capacity",{"product-details__capacity-active":e===a.capacity}),children:Object(o.jsx)("span",{className:u()("product-details__capacity",{"product-details__capacity-active":e===a.capacity}),children:e})},e)))})]}),Object(o.jsxs)("div",{className:"product-details__price-container",children:[Object(o.jsx)("h1",{className:"product-details__price",children:"$".concat(null===a||void 0===a?void 0:a.priceDiscount)}),Object(o.jsx)("h1",{className:"product-details__price-regular",children:"$".concat(null===a||void 0===a?void 0:a.priceRegular)})]}),Object(o.jsx)(he,{product:h}),Object(o.jsxs)("div",{className:"product-details__specs-container",children:[Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic_small",children:"Screen"}),Object(o.jsx)("h2",{className:"product-details__value_small",children:null===a||void 0===a?void 0:a.screen})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic_small",children:"Resolution"}),Object(o.jsx)("h2",{className:"product-details__value_small",children:null===a||void 0===a?void 0:a.resolution})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic_small",children:"Processor"}),Object(o.jsx)("h2",{className:"product-details__value_small",children:null===a||void 0===a?void 0:a.processor})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic_small",children:"RAM"}),Object(o.jsx)("h2",{className:"product-details__value_small",children:null===a||void 0===a?void 0:a.ram})]})]})]})]}),Object(o.jsxs)("div",{className:"product-details__main-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"product-details__main-title",children:"About"}),Object(o.jsx)("div",{className:"product-details__paragraph-container",children:null===a||void 0===a?void 0:a.description.map((e=>Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"product-details__title",children:e.title}),Object(o.jsx)("p",{className:"product-details__paragraph",children:e.text})]})))})]}),Object(o.jsxs)("div",{className:"product-details__characteristics-container",children:[Object(o.jsx)("h1",{className:"product-details__main-title",children:"Tech specs"}),Object(o.jsxs)("div",{className:" product-details__paragraph-container product-details__paragraph-container_second",children:[Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"Screen"}),Object(o.jsx)("h2",{className:"product-details__value",children:null===a||void 0===a?void 0:a.screen})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"Resolution"}),Object(o.jsx)("h2",{className:"product-details__value",children:null===a||void 0===a?void 0:a.resolution})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"Processor"}),Object(o.jsx)("h2",{className:"product-details__value",children:null===a||void 0===a?void 0:a.processor})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"RAM"}),Object(o.jsx)("h2",{className:"product-details__value",children:null===a||void 0===a?void 0:a.ram})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"Built in memory"}),Object(o.jsx)("h2",{className:"product-details__value",children:null===a||void 0===a?void 0:a.capacityAvailable})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"Camera"}),Object(o.jsx)("h2",{className:"product-details__value",children:"".concat(null===a||void 0===a?void 0:a.camera)})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"Zoom"}),Object(o.jsx)("h2",{className:"product-details__value",children:null===a||void 0===a?void 0:a.zoom})]}),Object(o.jsxs)("div",{className:"product-details__characteristic-container",children:[Object(o.jsx)("h2",{className:"product-details__characteristic",children:"Cell"}),Object(o.jsx)("h2",{className:"product-details__value",children:null===a||void 0===a?void 0:a.cell.join(", ")})]})]})]})]}),Object(o.jsx)(z,{products:j,title:"You may also like",loaded:n})]})]})};c(19);const pe=Object(w.c)({name:"price",initialState:{total:1},reducers:{addProductPrice:(e,t)=>{const{quantity:c}=t.payload;e.total+=c},deleteProductPrice:(e,t)=>{const{quantity:c}=t.payload;e.total-=c}}}),{addProductPrice:Oe,deleteProductPrice:xe}=pe.actions;var ve=pe.reducer;const Ne=e=>{let{product:t}=e;const{image:c,name:s,price:a,id:i,quantity:r}=t,l=N(),n=g((e=>e.cartProducts.items)).find((e=>e.id===i));return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"cart__product",children:[Object(o.jsx)("button",{type:"button","aria-label":"close",className:"cart__close",onClick:()=>{return e=t,void(n&&(l(xe({quantity:1})),l($(e.id))));var e}}),Object(o.jsx)("img",{className:"cart__phone-img",src:"".concat(C,"/").concat(c),alt:c}),Object(o.jsx)("h1",{className:"cart__name",children:"".concat(s)}),Object(o.jsxs)("div",{className:"cart__button-container",children:[Object(o.jsx)("button",{type:"button","aria-label":"remove",className:"cart__button-remove",onClick:()=>{return e=i,void(n&&l(Q(e)));var e},disabled:r<=1,children:"-"}),Object(o.jsx)("div",{className:"cart__total",children:r}),Object(o.jsx)("button",{type:"button","aria-label":"add",className:"cart__button-add",onClick:()=>{return e=i,void(n&&l(G(e)));var e},children:"+"})]}),Object(o.jsx)("h1",{className:"cart__price",children:"$".concat(a)})]})})},ge=()=>{const e=g((e=>e.cartProducts.items)),t=e.reduce(((e,t)=>e+t.quantity*t.price),0),[c,a]=Object(s.useState)(!1);return Object(o.jsxs)("div",{className:"cart",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(r.b,{to:"/",className:"cart__link",children:"Back"}),Object(o.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(o.jsx)("div",{className:"cart-container",children:e.length?e.map((e=>Object(o.jsx)(Ne,{product:e},e.id))):Object(o.jsx)("h1",{children:"Your cart is empty"})})]}),Object(o.jsxs)("div",{className:"cart__total-container",children:[Object(o.jsx)("h1",{className:"cart__total-price-amount",children:"$".concat(t)}),Object(o.jsx)("h2",{className:"cart__total-carts",children:1===e.length?"Total for ".concat(e.length," item"):"Total for ".concat(e.length," items")}),Object(o.jsx)("div",{className:"cart__button-checkout-container",children:Object(o.jsx)("button",{type:"button",className:"cart__button-checkout",onClick:()=>a(!0),children:"Checkout"})}),c&&Object(o.jsxs)("div",{className:"cart__error",children:[Object(o.jsx)("button",{type:"button","aria-label":"close",className:"cart__close cart__error__close",onClick:()=>a(!1)}),Object(o.jsx)("h2",{className:"cart__error__title",children:"We are sorry, but this feature is not implemented yet"})]})]})]})},fe=()=>Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)(le,{text:"Page"}),Object(o.jsx)("h1",{className:"phones__title",children:"Page is not created"})]}),ye=Object(w.a)({reducer:{products:ae,favourites:T,cartProducts:H,productPrice:ve}}),ke=()=>Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)(le,{text:"Page"}),Object(o.jsx)("h1",{className:"phones__title",children:"Page is not exist"})]}),Ce=()=>Object(o.jsx)(r.a,{children:Object(o.jsx)(n.a,{store:ye,children:Object(o.jsx)(l.d,{children:Object(o.jsxs)(l.b,{path:"/",element:Object(o.jsx)(k,{}),children:[Object(o.jsx)(l.b,{index:!0,element:Object(o.jsx)(re,{})}),Object(o.jsxs)(l.b,{path:"/phones",children:[Object(o.jsx)(l.b,{index:!0,element:Object(o.jsx)(ue,{})}),Object(o.jsx)(l.b,{path:":productId",element:Object(o.jsx)(_e,{})})]}),Object(o.jsx)(l.b,{index:!0,path:"/tablets",element:Object(o.jsx)(fe,{})}),Object(o.jsx)(l.b,{index:!0,path:"/accessories",element:Object(o.jsx)(fe,{})}),Object(o.jsx)(l.b,{path:"favourites",children:Object(o.jsx)(l.b,{index:!0,element:Object(o.jsx)(ne,{})})}),Object(o.jsx)(l.b,{path:"bag",element:Object(o.jsx)(ge,{})}),Object(o.jsx)(l.b,{path:"*",element:Object(o.jsx)(ke,{})})]})})})});i.a.render(Object(o.jsx)(Ce,{}),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.4f0939d0.chunk.js.map