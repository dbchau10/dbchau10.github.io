(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{374:function(t,o,e){var content=e(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(125).default)("3a1aa10a",content,!0,{sourceMap:!1})},378:function(t,o,e){"use strict";e.r(o);var n=e(330),r=e(369),c=e(323),l=e(420),d=e(427),f=(e(25),{props:["dish"]}),v=e(69),component=Object(v.a)(f,(function(){var t=this,o=t._self._c;return o("section",[[o(r.a,{staticClass:"my-auto mx-12",attrs:{width:"300",height:"450"}},[o(d.a,{attrs:{height:"250",src:t.dish.image}}),t._v(" "),o(c.c,[t._v(t._s(t.dish.name))]),t._v(" "),o(l.a,{staticClass:"mx-4"}),t._v(" "),o(c.c,[o("h2",[t._v(t._s(t.dish.price+" $"))])]),t._v(" "),o(c.a,{staticClass:"justify-center"},[o(n.a,{attrs:{color:"black",width:"50%"}},[o("nuxt-link",{attrs:{to:"/items/".concat(t.dish.id)}},[t._v("\n            Details\n          ")])],1)],1)],1)]],2)}),[],!1,null,null,null);o.default=component.exports},415:function(t,o,e){"use strict";e(374)},416:function(t,o,e){var n=e(124)(!1);n.push([t.i,"#myBtn{display:none;position:fixed;bottom:20px;right:30px;z-index:99;font-size:18px;border:none;outline:none;background-color:#0563bb;color:#fff;cursor:pointer;padding:15px 17px;border-radius:50%}#myBtn:hover{background-color:#628df3}",""]),t.exports=n},423:function(t,o,e){"use strict";e.r(o);var n=e(330),r=e(419),c=e(334),l=e(418),d=e(22);var f={inserted:function(t,o,e){var n=(o.modifiers||{}).self,r=void 0!==n&&n,c=o.value,l="object"===Object(d.a)(c)&&c.options||{passive:!0},f="function"==typeof c||"handleEvent"in c?c:c.handler,v=r?t:o.arg?document.querySelector(o.arg):window;v&&(v.addEventListener("scroll",f,l),t._onScroll=Object(t._onScroll),t._onScroll[e.context._uid]={handler:f,options:l,target:r?void 0:v})},unbind:function(t,o,e){var n;if(null===(n=t._onScroll)||void 0===n?void 0:n[e.context._uid]){var r=t._onScroll[e.context._uid],c=r.handler,l=r.options,d=r.target;(void 0===d?t:d).removeEventListener("scroll",c,l),delete t._onScroll[e.context._uid]}}},v=e(15),h=(e(83),e(8),{props:[],data:function(){return{dishes:{},carts:{}}},computed:{},created:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function o(){var e;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,fetch("https://634a16c333bb42dca4fe1722.mockapi.io/api/food").then((function(t){return t.json()}));case 2:e=o.sent,t.dishes=e,console.log(t.dishes);case 5:case"end":return o.stop()}}),o)})))()},methods:{onScroll:function(t){if("undefined"!=typeof window){var o=window.pageYOffset||t.target.scrollTop||0;this.fab=o>20}},toTop:function(){this.$vuetify.goTo(0)}}}),_=(e(415),e(69)),component=Object(_.a)(h,(function(){var t=this,o=t._self._c;return o("section",{staticClass:"scroll-y",attrs:{id:"app"}},[o("div",{staticClass:"d-flex flex-row overflow pa-10"},[o(l.a,t._l(t.dishes,(function(t){return o(r.a,{key:t.id,attrs:{cols:"12",sm:"3"}},[o("my-dish",{staticClass:"pa-4",attrs:{dish:t}})],1)})),1),t._v(" "),o(n.a,{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{def:f,name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[o(c.a,[t._v("keyboard_arrow_up")])],1)],1)])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{MyDish:e(378).default})}}]);