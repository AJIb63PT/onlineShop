(function(t){function e(e){for(var a,i,o=e[0],s=e[1],u=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"06d0":function(t,e,n){"use strict";n("6514")},"0cf5":function(t,e,n){},"0e29":function(t,e,n){},"318d":function(t,e,n){"use strict";n("7ba9")},3614:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MainWrapper")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-wrapper"},[t._v(t._s(t.title)+" "),n("keep-alive",[n("router-view")],1)],1)},o=[],s={name:"main-wrapper",components:{},props:{},data:function(){return{title:"ALBERT FAKE SHOP"}},computed:{},methods:{},watch:{}},u=s,l=(n("06d0"),n("2877")),d=Object(l["a"])(u,i,o,!1,null,null,null),p=d.exports,_={name:"App",components:{MainWrapper:p}},f=_,m=(n("034f"),Object(l["a"])(f,r,c,!1,null,null,null)),T=m.exports,C=(n("d81d"),n("a434"),n("2f62")),h=n("bc3a"),E=n.n(h);a["a"].use(C["a"]);var v=new C["a"].Store({state:{products:[],cart:[]},mutations:{SET_PRODUCTS_TO_STATE:function(t,e){t.products=e},SET_CART:function(t,e){if(t.cart.length>0){var n=!1;t.cart.map((function(t){t.id===e.id&&(n=!0,t.quantity++)})),n||t.cart.push(e)}else t.cart.push(e)},DELETE:function(t,e){t.cart.splice(e,1)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--}},actions:{GET_PRODUCTS_FROM_API:function(t){var e=t.commit;return E()("https://fakestoreapi.com/products",{method:"GET"}).then((function(t){return e("SET_PRODUCTS_TO_STATE",t.data),t})).catch((function(t){return console.log(t),t}))},ADD_TO_CART:function(t,e){var n=t.commit;n("SET_CART",e)},DELETE_FROM_CART:function(t,e){var n=t.commit;n("DELETE",e)},INCREMENT_CART_ITEM:function(t,e){var n=t.commit;n("INCREMENT",e)},DECREMENT_CART_ITEM:function(t,e){var n=t.commit;n("DECREMENT",e)}},getters:{PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}}}),b=v,O=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog"},[n("router-link",{attrs:{to:{name:"cart",params:{cart_data:t.CART}}}},[n("div",{staticClass:"from_calatog_to_cart"},[t._v(" корзина:"+t._s(t.CART.length))])]),n("Select",{attrs:{selected:t.selected,options:t.categories},on:{select:function(e){return t.SortByCategories(t.options)}}}),t._l(t.Filter,(function(e){return n("catalogItem",{key:e.id,attrs:{product_data:e},on:{addToCart:t.addToCart}})})),n("catalogItem")],2)},R=[],y=n("2909"),D=n("5530"),A=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalogItem",on:{click:t.addToCart}},[n("img",{staticClass:"image",attrs:{src:t.product_data.image,alt:"image"}}),n("p",{staticClass:"catalogItem__title"},[t._v("Title "+t._s(t.product_data.title))]),n("p",{staticClass:"catalogItem__price"},[t._v(" Price$ "+t._s(t.product_data.price)+" ")])])}),S=[],I={name:"catalogItem",components:{},props:{product_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{addToCart:function(){this.$emit("addToCart",this.product_data)}},watch:{},mounted:function(){this.$set(this.product_data,"quantity",1)}},M=I,j=(n("318d"),Object(l["a"])(M,A,S,!1,null,null,null)),P=j.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Select"},[n("p",{staticClass:"title",on:{click:function(e){t.areOptionsVisible=!t.areOptionsVisible}}},[t._v(t._s(t.selected))]),t.areOptionsVisible||t.isExpanded?n("div",{staticClass:"options"},t._l(t.options,(function(e){return n("p",{key:e.value,on:{click:function(n){return t.selectOption(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])},k=[],F={name:"Select",props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""},isExpanded:{type:Boolean,default:!1}},data:function(){return{areOptionsVisible:!1}},methods:{selectOption:function(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect:function(){this.areOptionsVisible=!1}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy:function(){document.removeEventListener("click",this.hideSelect)}},$=F,x=(n("e851"),Object(l["a"])($,w,k,!1,null,null,null)),N=x.exports,q={name:"catalog",components:{catalogItem:P,Select:N},props:{},data:function(){return{categories:[{name:"All",Value:"a"},{name:"electronics",Value:"e"},{name:"mens clothing",Value:"m"},{name:"womens clothing",Value:"w"}],selected:"All",sortedProducts:[]}},computed:Object(D["a"])(Object(D["a"])({},Object(C["c"])(["PRODUCTS","CART"])),{},{Filter:function(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}}),methods:Object(D["a"])(Object(D["a"])({},Object(C["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addToCart:function(t){this.ADD_TO_CART(t)},SortByCategories:function(t){var e=this;this.sortedProducts=Object(y["a"])(this.PRODUCTS),e.PRODUCTS.map((function(e){e.category==t.name&&this.sortedProducts.push(e)}))}}),watch:{},mounted:function(){this.GET_PRODUCTS_FROM_API()}},U=q,V=(n("f7b0"),Object(l["a"])(U,g,R,!1,null,null,null)),L=V.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("router-link",{attrs:{to:{name:"catalog"}}},[n("div",{staticClass:"from_calatog_to_cart"},[t._v(" Back to catalog")])]),n("h1",[t._v("Корзина")]),t.cart_data.length?t._e():n("p",[t._v("Купи что-нибудь")]),t._l(t.cart_data,(function(e,a){return n("CartItem",{key:e.id,attrs:{cart_item_data:e},on:{DeleteFromCart:function(e){return t.DeleteFromCart(a)},increment:function(e){return t.increment(a)},decrement:function(e){return t.decrement(a)}}})})),n("div",{staticClass:"cart_total"},[n("p",{staticClass:"total_name"},[t._v(" total:$ ")]),n("p",[t._v(" "+t._s(t.cartTotal))])])],2)},G=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CartItem"},[n("div",{staticClass:"cart_item_info"},[n("img",{staticClass:"cart_image",attrs:{src:t.cart_item_data.image,alt:""}}),n("p",[t._v("Title^ "+t._s(t.cart_item_data.title))]),n("p",[t._v("Price$ "+t._s(t.cart_item_data.price))])]),n("div",[n("div",{staticClass:"cart_item_quantity"},[n("p",[t._v("кол-во")]),n("button",{staticClass:"quantity__tools"},[n("button",{staticClass:"quantity__btn",on:{click:t.decrementItem}},[t._v("-")]),t._v(" "+t._s(t.cart_item_data.quantity)+" "),n("button",{staticClass:"quantity__btn",on:{click:t.incrementItem}},[t._v("+")])])]),n("button",{on:{click:t.DeleteFromCart}},[t._v(" Delete")])])])},W=[],H={name:"CartItem",props:{cart_item_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},mounted:function(){},methods:{DeleteFromCart:function(){this.$emit("DeleteFromCart")},incrementItem:function(){this.$emit("increment")},decrementItem:function(){this.$emit("decrement")}}},K=H,z=(n("8cac"),Object(l["a"])(K,J,W,!1,null,null,null)),Q=z.exports,X={name:"cart",components:{CartItem:Q},props:{cart_data:{type:Array,default:function(){return[]}}},methods:Object(D["a"])(Object(D["a"])({DeleteFromCart:function(t){this.DELETE_FROM_CART(t)}},Object(C["b"])(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"])),{},{increment:function(t){this.INCREMENT_CART_ITEM(t)},decrement:function(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart:function(t){this.DELETE_FROM_CART(t)}}),computed:{cartTotal:function(){return this.cart_data.reduce((function(t,e){return t+e.price*e.quantity}),0)}}},Y=X,Z=(n("a530"),Object(l["a"])(Y,B,G,!1,null,null,null)),tt=Z.exports;a["a"].use(O["a"]);var et=new O["a"]({routes:[{path:"",name:"catalog",component:L},{path:"/cart",name:"cart",component:tt,props:!0}]}),nt=et;a["a"].config.productionTip=!1,new a["a"]({store:b,router:nt,render:function(t){return t(T)}}).$mount("#app")},6514:function(t,e,n){},"7ba9":function(t,e,n){},"85ec":function(t,e,n){},"8cac":function(t,e,n){"use strict";n("b513")},a530:function(t,e,n){"use strict";n("0e29")},b513:function(t,e,n){},e851:function(t,e,n){"use strict";n("3614")},f7b0:function(t,e,n){"use strict";n("0cf5")}});
//# sourceMappingURL=app.1acd2b58.js.map