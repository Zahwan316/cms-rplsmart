(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{446:function(t,e,n){"use strict";n.r(e);n(22);var r=n(23),o=(n(62),{layout:"admin",head:function(){return{title:"Edit Menu - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"}},data:function(){return{menu:{name:"",url:""},validation:[]}},mounted:function(){var t=this;this.$axios.get("/api/admin/menus/".concat(this.$route.params.id)).then((function(e){t.menu.name=e.data.data.name,t.menu.url=e.data.data.url}))},methods:{updateMenu:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.put("/api/admin/menus/".concat(t.$route.params.id),{name:t.menu.name,url:t.menu.url}).then((function(){t.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Diupdate!",icon:"success",showConfirmButton:!1,timer:2e3}),t.$router.push({name:"admin-menu"})})).catch((function(e){t.validation=e.response.data}));case 2:case"end":return e.stop()}}),e)})))()}}}),l=n(36),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"card card-outline card-info"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateMenu.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("NAMA MENU")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.menu.name,expression:"menu.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Masukkan Nama Menu"},domProps:{value:t.menu.name},on:{input:function(e){e.target.composing||t.$set(t.menu,"name",e.target.value)}}}),t._v(" "),t.validation.name?e("div",{staticClass:"mt-2"},[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.validation.name[0]))])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("URL MENU")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.menu.url,expression:"menu.url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Masukkan URL Menu"},domProps:{value:t.menu.url},on:{input:function(e){e.target.composing||t.$set(t.menu,"url",e.target.value)}}}),t._v(" "),t.validation.url?e("div",{staticClass:"mt-2"},[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.validation.url[0]))])],1):t._e()]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])])])}),[function(){var t=this._self._c;return t("section",{staticClass:"content-header"},[t("div",{staticClass:"container-fluid"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[e("i",{staticClass:"nav-icon fas fa-clone"}),t._v(" EDIT MENU\n        ")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse",title:"Collapse"}},[e("i",{staticClass:"fas fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"remove",title:"Remove"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-info mr-1 btn-submit",attrs:{type:"submit"}},[t("i",{staticClass:"fa fa-paper-plane"}),this._v(" UPDATE\n          ")])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-warning btn-reset",attrs:{type:"reset"}},[t("i",{staticClass:"fa fa-redo"}),this._v(" RESET\n          ")])}],!1,null,null,null);e.default=component.exports}}]);