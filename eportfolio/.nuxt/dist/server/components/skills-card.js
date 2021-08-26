exports.ids = [6];
exports.modules = {

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("299f0381", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkillsCard_vue_vue_type_style_index_0_id_220358fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkillsCard_vue_vue_type_style_index_0_id_220358fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkillsCard_vue_vue_type_style_index_0_id_220358fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkillsCard_vue_vue_type_style_index_0_id_220358fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkillsCard_vue_vue_type_style_index_0_id_220358fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile-banner[data-v-220358fc]{z-index:0}.profile-pic[data-v-220358fc]{z-index:10;background-color:#fff;border:3px solid #fff;border-radius:50%;left:14px;top:90px}.website-info[data-v-220358fc]{display:flex;justify-content:space-evenly}.v-list-item[data-v-220358fc]{padding:0}.project-img[data-v-220358fc]{justify-content:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillsCard.vue?vue&type=template&id=220358fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"mx-auto my-12",attrs:{"id":"skills","loading":_vm.loading,"max-width":"650","elevation":"4"}},[_c('template',{slot:"progress"},[_c('v-progress-linear',{attrs:{"color":"deep-purple","height":"10","indeterminate":""}})],1),_vm._v(" "),_c('div',[_c('v-row',{staticClass:"mx-0",attrs:{"align":"center"}},[_c('v-col',{attrs:{"cols":"auto"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("Engineering Competencies")])],1)],1),_vm._v(" "),_c('v-row',{staticClass:"project-img",attrs:{"align":"center"}},[_c('v-col',{attrs:{"align":"center","cols":"auto"}},[_c('v-img',{staticClass:"project-img",attrs:{"height":"350","width":"600","src":"/ea-competencies.png"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ml-7",attrs:{"cols":"11"}},[_c('p',[_vm._v("As part of the Diploma of Professional Practice at UTS, I was required to undertake two 6-month internships complimented by theoretical professional development subjects. \n                This was the university's attempt at providing a guided avenue into real-world engineering experience and reflection to students prior to their graduation. "),_c('br'),_c('br'),_vm._v("\n                This program provides students a head-start for achieving 'chartered' status with EA by encouraging students to achieve functional levels for Engineers Australia Stage 2 Competencies, \n                since achieving 'chartered' status with EA provides a competitive edge within the engineering profession. \n                It is championed as a symbol of trust that ensures a qualified engineer is \"globally recognised, and recognised by the community, industry and Government as Professional\" (Engineers Australia n.d.). "),_c('br'),_c('br'),_vm._v("\n                My personal EA competency progress is depicted in the above progress chart. Completing both internships and numerous projects highlighted in the projects section have enabled me to develop a function level of competency for each.\n                The learning journey is far from over, and I will strive to continue to fulfill the stage 2 EA competencies to hopefully achieve chartered status with Engineers Australia one day.\n              ")])])],1),_vm._v(" "),_c('v-row',{staticClass:"mx-0",attrs:{"align":"center"}},[_c('v-col',{attrs:{"cols":"auto"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("Technical Skills")])],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mx-0",attrs:{"align":"center"}},[_c('v-col',{staticClass:"ml-7",attrs:{"cols":"11"}},[_c('v-list',_vm._l((_vm.technicalSkills),function(skill,i){return _c('v-list-item',{key:i,attrs:{"text":""}},[_c('p',[_vm._v("\n                    • "+_vm._s(skill.text)+"\n                  ")])])}),1)],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mx-0",attrs:{"align":"center"}},[_c('v-col',{attrs:{"cols":"auto"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("Transferable Skills")])],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mx-0",attrs:{"align":"center"}},[_c('v-col',{staticClass:"ml-7",attrs:{"cols":"11"}},[_c('v-list',_vm._l((_vm.transferableSkills),function(skill,i){return _c('v-list-item',{key:i,attrs:{"text":""}},[_c('p',[_vm._v("\n                    • "+_vm._s(skill.text)+"\n                  ")])])}),1)],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SkillsCard.vue?vue&type=template&id=220358fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillsCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SkillsCardvue_type_script_lang_js_ = ({
  data: () => ({
    technicalSkills: [{
      text: 'Proficient with MySQL relational modelling and querying. 3+ years’ experience data modelling production grade systems using a data-driven development approach.'
    }, {
      text: 'Proficient in Python 3 scripting for data wrangling as well as API development (flask).'
    }, {
      text: 'Familiar with popular machine learning frameworks and libraries including TensorFlow, Keras, Scikit-Learn, OpenCV, seaborn/matplotlib, pandas, NumPy.'
    }, {
      text: 'End to end design, development and Productionization of machine learning models. Firsthand experience taking a conceptual ML model from prototype all the way to production including AWS EC2 configuration.'
    }, {
      text: 'Familiar with the Amazon Web Services ecosystem including EC2, RDS and security group configuration.'
    }, {
      text: 'Comfortable with backend PHP development using the Laravel framework. 2+ years’ experience working in a production environment building complex backend systems for the CareerOne platform.'
    }, {
      text: 'Experience using Vue JS framework for front end web app development at CareerOne.'
    }],
    transferableSkills: [{
      text: 'Confident team player, experience working in lean, cross-functional agile teams'
    }, {
      text: 'Strong technical and subjective written skills'
    }, {
      text: 'Able to show initiative and work autonomously when required'
    }, {
      text: 'Punctual with time, virtuous moral compass and respectful of others'
    }]
  })
});
// CONCATENATED MODULE: ./components/SkillsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SkillsCardvue_type_script_lang_js_ = (SkillsCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(14);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 1 modules
var VCard = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(134);

// CONCATENATED MODULE: ./components/SkillsCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SkillsCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "220358fc",
  "6350b83b"
  
)

/* harmony default export */ var SkillsCard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=skills-card.js.map