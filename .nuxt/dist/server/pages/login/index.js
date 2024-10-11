exports.ids = [23];
exports.modules = {

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=13e971da
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card card-outline card-info"
  }, [_vm._ssrNode("<div class=\"card-header text-center\">", "</div>", [_c('nuxt-link', {
    staticClass: "h1 font-weight-bold text-dark",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("CMS")]), _vm._ssrNode(" <div><i>Content Management System</i></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm.validation.message ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.message))])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"form-group\"><label class=\"font-weight-bold text-uppercase\">Email address</label> <input type=\"email\" placeholder=\"Masukkan Alamat Email\"" + _vm._ssrAttr("value", _vm.user.email) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.validation.email
  }) + "></div> "), _vm.validation.email ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.email[0]))])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"form-group\"><label class=\"font-weight-bold text-uppercase\">Password</label> <input type=\"password\" placeholder=\"Masukkan Password\"" + _vm._ssrAttr("value", _vm.user.password) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.validation.password
  }) + "></div> "), _vm.validation.password ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.password[0]))])], 1) : _vm._e(), _vm._ssrNode(" <button type=\"submit\" class=\"btn btn-info btn-block\">LOGIN</button>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=13e971da

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js
/* harmony default export */ var loginvue_type_script_lang_js = ({
  //layout
  layout: "auth",
  //meta
  head() {
    return {
      title: "Login - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"
    };
  },
  data() {
    return {
      //state user
      user: {
        email: "",
        password: ""
      },
      //validation
      validation: []
    };
  },
  methods: {
    async login() {
      await this.$auth.loginWith("local", {
        data: {
          email: this.user.email,
          password: this.user.password
        }
      }).then(() => {
        //redirect
        this.$router.push({
          name: "admin-dashboard"
        });
      }).catch(error => {
        //assign validation
        this.validation = error.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_loginvue_type_script_lang_js = (loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a65a76f"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map