exports.ids = [11];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/edit/_id.vue?vue&type=template&id=d18fa65e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper mb-5"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"card card-outline card-info\">", "</div>", [_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fas fa-book-open\"></i> EDIT POST\n        </h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"form-group\"><label>GAMBAR POST</label> <input type=\"file\" class=\"form-control\"></div> "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>JUDUL POST</label> <input type=\"text\" placeholder=\"Masukkan Judul Post\"" + _vm._ssrAttr("value", _vm.post.title) + " class=\"form-control\"> "), _vm.validation.title ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.title[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>CATEGORY</label> "), _c('multiselect', {
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "track-by": "id",
      "searchable": true
    },
    model: {
      value: _vm.post.category_id,
      callback: function ($$v) {
        _vm.$set(_vm.post, "category_id", $$v);
      },
      expression: "post.category_id"
    }
  }), _vm._ssrNode(" "), _vm.validation.category_id ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.category_id[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>KONTEN POST</label> "), _c('client-only', {
    attrs: {
      "placeholder": "loading..."
    }
  }, [_c('ckeditor-nuxt', {
    attrs: {
      "config": _vm.editorConfig
    },
    model: {
      value: _vm.post.content,
      callback: function ($$v) {
        _vm.$set(_vm.post, "content", $$v);
      },
      expression: "post.content"
    }
  })], 1), _vm._ssrNode(" "), _vm.validation.content ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.content[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>TAGS</label> "), _c('multiselect', {
    attrs: {
      "options": _vm.tags,
      "label": "name",
      "track-by": "id",
      "multiple": true,
      "searchable": true
    },
    model: {
      value: _vm.post.tags,
      callback: function ($$v) {
        _vm.$set(_vm.post, "tags", $$v);
      },
      expression: "post.tags"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>DESCRIPTION</label> <textarea rows=\"3\" placeholder=\"Masukkan Deskripsi Singkat\" class=\"form-control\">" + _vm._ssrEscape(_vm._s(_vm.post.description)) + "</textarea> "), _vm.validation.description ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.description[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" <button type=\"submit\" class=\"btn btn-info mr-1 btn-submit\"><i class=\"fa fa-paper-plane\"></i> UPDATE\n          </button> <button type=\"reset\" class=\"btn btn-warning btn-reset\"><i class=\"fa fa-redo\"></i> RESET\n          </button>")], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/post/edit/_id.vue?vue&type=template&id=d18fa65e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/edit/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  //layout
  layout: "admin",
  //meta
  head() {
    return {
      title: "Edit Post - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"
    };
  },
  components: {
    "ckeditor-nuxt": () => {
      if (false) {}
    }
  },
  data() {
    return {
      //state post
      post: {
        image: "",
        title: "",
        category_id: "",
        content: "",
        description: "",
        tags: []
      },
      //state categories
      categories: [],
      //state tags
      tags: [],
      //state validation
      validation: [],
      //config CKEDITOR
      editorConfig: {
        removePlugins: ["Title"],
        simpleUpload: {
          uploadUrl: "https://cms-api.appdev.my.id/api/web/posts/storeImage"
        }
      }
    };
  },
  mounted() {
    //fetching data post
    this.$axios.get(`/api/admin/posts/${this.$route.params.id}`).then(response => {
      //assing response data to state "post.title"
      this.post.title = response.data.data.title;

      //assing response data to state "post.category_id"
      this.post.category_id = response.data.data.category;

      //assing response data to state "post.content"
      this.post.content = response.data.data.content;

      //assing response data to state "post.tags"
      this.post.tags = response.data.data.tags;

      //assing response data to state "post.description"
      this.post.description = response.data.data.description;
    });

    //fetching data categories
    this.$axios.get("/api/admin/categories").then(response => {
      //assing response data to state "categories"
      this.categories = response.data.data.data;
    });

    //fetching data tags
    this.$axios.get("/api/admin/tags").then(response => {
      //assing response data to state "tags"
      this.tags = response.data.data.data;
    });
  },
  methods: {
    handleFileChange(e) {
      //get image
      let image = this.post.image = e.target.files[0];

      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";
        this.post.image = null;

        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000
        });
      }
    },
    async updatePost() {
      /**
       * get selected Tags
       */
      let tags = this.post.tags;
      let selectedTags = [];
      tags.forEach(tag => {
        selectedTags.push(tag.id);
      });

      //define formData
      let formData = new FormData();
      formData.append("image", this.post.image);
      formData.append("title", this.post.title);
      formData.append("category_id", this.post.category_id ? this.post.category_id.id : "");
      formData.append("content", this.post.content);
      formData.append("description", this.post.description);
      formData.append("_method", "PATCH");

      //append tags array
      for (var i = 0; i < selectedTags.length; i++) {
        formData.append("tags[]", selectedTags[i]);
      }

      //sending data to server
      await this.$axios.post(`/api/admin/posts/${this.$route.params.id}`, formData).then(() => {
        //sweet alert
        this.$swal.fire({
          title: "BERHASIL!",
          text: "Data Berhasil Diupdate!",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });

        //redirect, if success store data
        this.$router.push({
          name: "admin-post"
        });
      }).catch(error => {
        //assign error to state "validation"
        this.validation = error.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/post/edit/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var edit_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/post/edit/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cc5cfd96"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4f7e9ad8", content, true, context)
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_d18fa65e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_d18fa65e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_d18fa65e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_d18fa65e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_d18fa65e_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ck-editor__editable{min-height:200px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_id.js.map