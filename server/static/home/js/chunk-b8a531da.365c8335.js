(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a531da"],{"1a33":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-list"},[r("Search",{attrs:{placeholder:"请输入要搜索的内容",search:function(e){return t.$store.commit("search",e)}}}),r("ul",{staticClass:"orders"},t._l(t.orders,(function(e){return r("li",{key:e.id,on:{touchend:function(r){return t.orderList(e.id)}}},[t._v(t._s(e.text))])})),0),t._l(t.list,(function(t){return r("Product",{key:t._id,attrs:{data:t}})})),r("div",{directives:[{name:"show",rawName:"v-show",value:t.others.length,expression:"others.length"}],staticClass:"showMore",on:{touchend:t.showMore}},[t._v("查看更多商品")])],2)},n=[],s=(r("99af"),r("fb6a"),r("ac1f"),r("841c"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.msg},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.showSearch(e)},input:function(e){e.target.composing||(t.msg=e.target.value)}}})])}),i=[],o={data:function(){return{msg:""}},props:["placeholder","search"],methods:{showSearch:function(){this.search(this.msg),this.msg=""}}},c=o,u=(r("6f98"),r("2877")),d=Object(u["a"])(c,s,i,!1,null,"53ac0539",null),l=d.exports,h=r("be6f"),f={components:{Search:l,Product:h["a"]},data:function(){return{orders:[{text:"价格排序",id:"price"},{text:"销量排序",id:"sales"},{text:"好评排序",id:"evaluate"},{text:"优惠排序",id:"discount"}],list:[],others:[]}},computed:{dealSearch:function(){return this.$store.state.search}},methods:{showMore:function(){var t=this;setTimeout((function(){t.list=t.list.concat(t.others),t.others=[]}),300)},orderList:function(t){var e=this;this.$http.get("/data/order",{params:{type:this.$route.params.id,id:t,mode:-1}}).then((function(t){var r=t.data;r.length||alert("没有数据"),e.list=r.slice(0,3),e.others=r.slice(3)}))},getData:function(){var t=this,e=this.$route.params;this.$http.get("/data/list",{params:e}).then((function(e){var r=e.data;t.list=r.slice(0,3),t.others=r.slice(3)}))}},created:function(){this.getData()},watch:{$route:function(){this.getData()},dealSearch:function(t){var e=this;this.$http.get("/data/search",{params:{type:this.$route.params.id,value:t}}).then((function(t){var r=t.data;r.length?(e.list=r.slice(0,3),e.others=r.slice(3)):alert("没有返回数据")}))}}},p=f,v=(r("f9e1"),Object(u["a"])(p,a,n,!1,null,"15e59d6e",null));e["default"]=v.exports},"5a5d":function(t,e,r){},"6f98":function(t,e,r){"use strict";var a=r("5a5d"),n=r.n(a);n.a},"783f":function(t,e,r){},"99af":function(t,e,r){"use strict";var a=r("23e7"),n=r("d039"),s=r("e8b5"),i=r("861d"),o=r("7b0b"),c=r("50c4"),u=r("8418"),d=r("65f0"),l=r("1dde"),h=r("b622"),f=r("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=f>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),w=l("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},b=!g||!w;a({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,a,n,s,i=o(this),l=d(i,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?i:arguments[e],y(s)){if(n=c(s.length),h+n>v)throw TypeError(m);for(r=0;r<n;r++,h++)r in s&&u(l,h,s[r])}else{if(h>=v)throw TypeError(m);u(l,h++,s)}return l.length=h,l}})},f9e1:function(t,e,r){"use strict";var a=r("783f"),n=r.n(a);n.a},fb6a:function(t,e,r){"use strict";var a=r("23e7"),n=r("861d"),s=r("e8b5"),i=r("23cb"),o=r("50c4"),c=r("fc6a"),u=r("8418"),d=r("b622"),l=r("1dde"),h=r("ae40"),f=l("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),m=[].slice,g=Math.max;a({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var r,a,d,l=c(this),h=o(l.length),f=i(t,h),p=i(void 0===e?h:e,h);if(s(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?n(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(l,f,p);for(a=new(void 0===r?Array:r)(g(p-f,0)),d=0;f<p;f++,d++)f in l&&u(a,d,l[f]);return a.length=d,a}})}}]);
//# sourceMappingURL=chunk-b8a531da.365c8335.js.map