exports.ids = [2];
exports.modules = {

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/web/slider.vue?vue&type=template&id=05acdcea
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-container', {
    staticClass: "mt-3"
  }, [_c('b-carousel', {
    staticStyle: {
      "text-shadow": "0px 0px 2px #000"
    },
    attrs: {
      "id": "carousel-fade",
      "fade": "",
      "indicators": "",
      "img-width": "1024",
      "img-height": "300"
    }
  }, _vm._l(_vm.sliders, function (slider) {
    return _c('b-carousel-slide', {
      key: slider.id,
      attrs: {
        "img-src": slider.image
      }
    });
  }), 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/web/slider.vue?vue&type=template&id=05acdcea

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/web/slider.vue?vue&type=script&lang=js
/* harmony default export */ var slidervue_type_script_lang_js = ({
  //data function
  data() {
    return {
      //state sliders
      sliders: []
    };
  },
  async fetch() {
    //fething sliders on Rest API
    await this.$axios.get('/api/web/sliders').then(response => {
      //assign response to state "sliders"
      this.sliders = response.data.data;
    });
  }
});
// CONCATENATED MODULE: ./components/web/slider.vue?vue&type=script&lang=js
 /* harmony default export */ var web_slidervue_type_script_lang_js = (slidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/web/slider.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  web_slidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c7a9c65"
  
)

/* harmony default export */ var slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=web-slider.js.map