(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{452:function(t,e,n){"use strict";n.r(e);n(4),n(66),n(22);var r=n(23),o=(n(62),{head:function(){return{title:this.tag.name+" - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap",meta:[{hid:"og:title",name:"og:title",content:this.tag.name},{hid:"og:site_name",name:"og:site_name",content:"RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"},{hid:"og:image",name:"og:image",content:this.tag.image}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$axios,e.next=3,r.$get("/api/web/tags/".concat(n.slug));case 3:return o=e.sent,e.abrupt("return",{tag:o.data,posts:o.data.posts});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(36),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"mt-5 mb-5"},[e("b-row",[e("b-col",{staticClass:"mb-3",attrs:{md:"12"}},[e("h4",[t._v("\n        TAG : "),e("strong",[t._v(t._s(t.tag.name.toUpperCase()))])])]),t._v(" "),t._l(t.posts,(function(n){return e("b-col",{key:n.id,staticClass:"mb-3",attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"mb-2 h-100 rounded-lg",attrs:{"img-src":n.image,"img-top":"",tag:"article"}},[e("div",{staticClass:"mb-2"},[e("small",{staticClass:"text-muted"},[e("i",{staticClass:"fa fa-calendar"}),t._v(" "+t._s(n.created_at))])]),t._v(" "),e("h5",[e("nuxt-link",{attrs:{to:{name:"post-slug",params:{slug:n.slug}}}},[t._v(t._s(n.title))])],1),t._v(" "),e("b-card-text",[t._v(" "+t._s(n.description.substr(0,55))+"... ")]),t._v(" "),e("b-card-text",[e("small",{staticClass:"text-muted"},[e("i",{staticClass:"fa fa-comments"}),t._v("\n            "+t._s(n.comments.length)+" Komentar")])])],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);