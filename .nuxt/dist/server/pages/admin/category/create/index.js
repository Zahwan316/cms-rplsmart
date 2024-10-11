exports.ids = [3];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/category/create/index.vue?vue&type=template&id=8fd9b71a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"card card-outline card-info\">", "</div>", [_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fas fa-folder\"></i> TAMBAH CATEGORY\n        </h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>GAMBAR</label> <input type=\"file\" class=\"form-control\"> "), _vm.validation.image ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.image[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>NAMA CATEGORY</label> <input type=\"text\" placeholder=\"Masukkan Nama Category\"" + _vm._ssrAttr("value", _vm.category.name) + " class=\"form-control\"> "), _vm.validation.name ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.name[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" <button type=\"submit\" class=\"btn btn-info mr-1 btn-submit\"><i class=\"fa fa-paper-plane\"></i> SIMPAN\n          </button> <button type=\"reset\" class=\"btn btn-warning btn-reset\"><i class=\"fa fa-redo\"></i> RESET\n          </button>")], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/category/create/index.vue?vue&type=template&id=8fd9b71a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/category/create/index.vue?vue&type=script&lang=js
/* harmony default export */ var createvue_type_script_lang_js = ({
  //layout
  layout: "admin",
  //meta
  head() {
    return {
      title: "Tambah Category - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"
    };
  },
  data() {
    return {
      //state category
      category: {
        image: "",
        name: ""
      },
      //state validation
      validation: []
    };
  },
  methods: {
    handleFileChange(e) {
      //get image
      let image = this.category.image = e.target.files[0];

      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";
        this.category.image = null;

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
    //storeCategory method
    async storeCategory() {
      //define formData
      let formData = new FormData();
      formData.append("image", this.category.image);
      formData.append("name", this.category.name);

      //sending data to server
      await this.$axios.post("/api/admin/categories", formData).then(() => {
        //sweet alert
        this.$swal.fire({
          title: "BERHASIL!",
          text: "Data Berhasil Disimpan!",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });

        //redirect, if success store data
        this.$router.push({
          name: "admin-category"
        });
      }).catch(error => {
        //assign error to state "validation"
        this.validation = error.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/category/create/index.vue?vue&type=script&lang=js
 /* harmony default export */ var category_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/category/create/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  category_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b996cd1a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map