exports.ids = [3];
exports.modules = {

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("57aada8a", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_93bcf344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_93bcf344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_93bcf344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_93bcf344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_93bcf344_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile-banner[data-v-93bcf344]{z-index:0}.profile-pic[data-v-93bcf344]{z-index:10;background-color:#fff;border:3px solid #fff;border-radius:50%;left:14px;top:90px}.website-info[data-v-93bcf344]{display:flex;justify-content:space-evenly}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProfileCard.vue?vue&type=template&id=93bcf344&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"mx-auto my-12",attrs:{"id":"profile","loading":_vm.loading,"max-width":"650","elevation":"4"}},[_c('template',{slot:"progress"},[_c('v-progress-linear',{attrs:{"color":"deep-purple","height":"10","indeterminate":""}})],1),_vm._v(" "),_c('v-img',{staticClass:"profile-banner",attrs:{"height":"250","src":"https://media-exp1.licdn.com/dms/image/C5616AQFalbMY4-nbpA/profile-displaybackgroundimage-shrink_200_800/0/1517602174533?e=1635379200&v=beta&t=3D3Oy2RWDdjcIzolq2sxbps2qtuQxPwY3S-pPAP4bCc"}},[_c('v-img',{staticClass:"profile-pic",attrs:{"heigh":"100","width":"150","src":"https://media-exp1.licdn.com/dms/image/C5603AQGLG4BVQ9IPaQ/profile-displayphoto-shrink_200_200/0/1517602173837?e=1635379200&v=beta&t=xasfuw-Pko2oBTSZY_Vx09JxspUvaxzZ-jLKjQcHrY0"}})],1),_vm._v(" "),_c('div',[_c('v-row',{staticClass:"mx-0",attrs:{"align":"center"}},[_c('v-col',{attrs:{"cols":"6"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("Patrick Sabry")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n                  Software Engineer at CareerOne "),_c('br'),_vm._v("\n                  Sydney, NSW Australia "),_c('br')])],1),_vm._v(" "),_c('v-col',{staticClass:"text-subtitle-1 website-info",attrs:{"cols":"2"}},[_c('br'),_vm._v(" "),_c('v-img',{staticClass:"website-logo",attrs:{"src":"https://media-exp1.licdn.com/dms/image/C560BAQG_-23cABSkHw/company-logo_100_100/0/1553810420696?e=1637798400&v=beta&t=xvDb3AQRpvvJqOt__NbtjmGbqUJCxdzMYsBsawh8tSQ","width":"45","height":"45"}})],1),_vm._v(" "),_c('v-col',[_c('span',[_c('a',{attrs:{"href":"https://www.careerone.com.au"}},[_vm._v("Careerone.com.au")])])])],1),_vm._v(" "),_c('v-row',{staticClass:"mx-0 my-0",attrs:{"align":"center"}},[_c('v-col',{attrs:{"cols":"2"}},[_c('v-btn',{staticClass:"mx-4",attrs:{"color":"blue darken-2","icon":"","href":("" + (_vm.linkedin.link)),"target":"_blank"}},[_c('v-icon',{attrs:{"size":"24px"}},[_vm._v("\n                      "+_vm._s(_vm.linkedin.icon)+"\n                  ")])],1)],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"2"}},[_c('v-btn',{staticClass:"mx-4",attrs:{"color":"blue darken-2","icon":"","href":("" + (_vm.mail.link))}},[_c('v-icon',{attrs:{"size":"24px"}},[_vm._v("\n                      "+_vm._s(_vm.mail.icon)+"\n                  ")])],1)],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProfileCard.vue?vue&type=template&id=93bcf344&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProfileCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProfileCardvue_type_script_lang_js_ = ({
  data: () => ({
    linkedin: {
      icon: 'mdi-linkedin',
      link: 'https://www.linkedin.com/in/patricksabry/'
    },
    mail: {
      icon: 'mdi-email',
      link: 'mailto:patricksabry97@hotmail.com'
    }
  })
});
// CONCATENATED MODULE: ./components/ProfileCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProfileCardvue_type_script_lang_js_ = (ProfileCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(14);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 1 modules
var VCard = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(134);

// CONCATENATED MODULE: ./components/ProfileCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(148)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProfileCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93bcf344",
  "3ea25060"
  
)

/* harmony default export */ var ProfileCard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["a" /* VCardSubtitle */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=profile-card.js.map