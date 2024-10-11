exports.ids = [14];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/slider/index.vue?vue&type=template&id=2cdf7c51
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper mb-5"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"card card-outline card-info\">", "</div>", [_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fas fa-image\"></i> SLIDERS\n        </h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_c('nuxt-link', {
    staticClass: "btn btn-info btn-sm p-2",
    attrs: {
      "to": {
        name: 'admin-slider-create'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus-circle"
  }), _vm._v(" TAMBAH")])], 1), _vm._ssrNode(" "), _c('b-table', {
    attrs: {
      "striped": "",
      "bordered": "",
      "hover": "",
      "items": _vm.sliders,
      "fields": _vm.fields,
      "show-empty": ""
    },
    scopedSlots: _vm._u([{
      key: "cell(image)",
      fn: function (data) {
        return [_c('img', {
          staticClass: "img-fluid img-thumbnail",
          attrs: {
            "width": "400",
            "src": data.item.image
          }
        })];
      }
    }, {
      key: "cell(actions)",
      fn: function (row) {
        return [_c('b-button', {
          attrs: {
            "variant": "danger",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.deleteSlider(row.item.id);
            }
          }
        }, [_vm._v("DELETE")])];
      }
    }])
  }), _vm._ssrNode(" "), _c('b-pagination', {
    staticClass: "mt-3",
    attrs: {
      "total-rows": _vm.pagination.total,
      "per-page": _vm.pagination.per_page,
      "align": "right"
    },
    on: {
      "change": _vm.changePage
    },
    model: {
      value: _vm.pagination.current_page,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "current_page", $$v);
      },
      expression: "pagination.current_page"
    }
  })], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/slider/index.vue?vue&type=template&id=2cdf7c51

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/slider/index.vue?vue&type=script&lang=js
/* harmony default export */ var slidervue_type_script_lang_js = ({
  //layout
  layout: "admin",
  //meta
  head() {
    return {
      title: "Sliders - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"
    };
  },
  //data function
  data() {
    return {
      //table header
      fields: [{
        label: "Gambar",
        key: "image",
        tdClass: "text-center"
      }, {
        label: "Actions",
        key: "actions",
        tdClass: "text-center"
      }]
    };
  },
  //watch query URL
  watchQuery: ["page"],
  async asyncData({
    $axios,
    query
  }) {
    //page
    let page = query.page ? parseInt(query.page) : "";

    //fetching sliders
    const sliders = await $axios.$get(`/api/admin/sliders?page${page}`);
    return {
      sliders: sliders.data.data,
      pagination: sliders.data
    };
  },
  methods: {
    //change page pagination
    changePage(page) {
      this.$router.push({
        path: this.$route.path,
        query: {
          page: page
        }
      });
    },
    //deleteSlider method
    deleteSlider(id) {
      this.$swal.fire({
        title: "APAKAH ANDA YAKIN ?",
        text: "INGIN MENGHAPUS DATA INI !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "YA, HAPUS!",
        cancelButtonText: "TIDAK"
      }).then(result => {
        if (result.isConfirmed) {
          //delete tag from server
          this.$axios.delete(`/api/admin/sliders/${id}`).then(() => {
            //feresh data
            this.$nuxt.refresh();

            //alert
            this.$swal.fire({
              title: "BERHASIL!",
              text: "Data Berhasil Dihapus!",
              icon: "success",
              showConfirmButton: false,
              timer: 2000
            });
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/slider/index.vue?vue&type=script&lang=js
 /* harmony default export */ var admin_slidervue_type_script_lang_js = (slidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/slider/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_slidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "560baaf1"
  
)

/* harmony default export */ var slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map