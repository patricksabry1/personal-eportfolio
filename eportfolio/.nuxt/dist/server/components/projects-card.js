exports.ids = [4];
exports.modules = {

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6f9a8e66", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsCard_vue_vue_type_style_index_0_id_3cb86414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsCard_vue_vue_type_style_index_0_id_3cb86414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsCard_vue_vue_type_style_index_0_id_3cb86414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsCard_vue_vue_type_style_index_0_id_3cb86414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsCard_vue_vue_type_style_index_0_id_3cb86414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile-banner[data-v-3cb86414]{z-index:0}.profile-pic[data-v-3cb86414]{z-index:10;background-color:#fff;border:3px solid #fff;border-radius:50%;left:14px;top:90px}.website-info[data-v-3cb86414]{display:flex;justify-content:space-evenly}.project-img[data-v-3cb86414]{justify-content:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectsCard.vue?vue&type=template&id=3cb86414&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"mx-auto my-12",attrs:{"id":"projects","loading":_vm.loading,"max-width":"650","elevation":"4"}},[_c('template',{slot:"progress"},[_c('v-progress-linear',{attrs:{"color":"deep-purple","height":"10","indeterminate":""}})],1),_vm._v(" "),_c('div',[_c('v-row',{staticClass:"mx-0",attrs:{"align":"center"}},[_c('v-col',{attrs:{"cols":"auto"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("Projects")])],1)],1),_vm._v(" "),_c('v-row',{staticClass:"project-img",attrs:{"align":"center"}},[_c('v-col',{attrs:{"align":"center","cols":"auto"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("CareerOne's Celeste AI Salary Prediction System")]),_vm._v(" "),_c('v-img',{staticClass:"project-img",attrs:{"height":"400","width":"350","src":"/celeste.png"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ml-7",attrs:{"cols":"11"}},[_c('p',[_vm._v("The Salary Prediction system, nicknamed Celeste, was built using a deep neural network trained on over 1 million data points and yields an accuracy of ~87%. It utilises deep learning to produce salary estimation figures based on job title, description, skills, location and occupation that provide important insight for job seekers and advertisers. This system is able to provide key insights into a job seekers personal worth based on their job title, skills, location and so forth, while also helping job advertisers accurately advertise their job for the correct salary. This project is a revolutionary and innovative step in the online job recruitment market within Australia.")])])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-row',{staticClass:"project-img",attrs:{"align":"center"}},[_c('v-col',{attrs:{"align":"center","cols":"auto"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("Real-time Data Analytics App for Industrial IoT Applications")]),_vm._v(" "),_c('v-img',{staticClass:"project-img",attrs:{"height":"350","width":"450","src":"/ausdrill-halo.png"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ml-7",attrs:{"cols":"11"}},[_c('p',[_vm._v("For completion of my Engineering Capstone thesis, I was part of a multi-disciplinary team which set out to develop a real-time IoT web dashboard for a UTS industry partner.\n            As a member of the software team, I spearheaded the development of serverside and front end web applications to facilitate real-time data streaming and data visualisation through a web dashboard. "),_c('br'),_c('br'),_vm._v("\n            The cloud-based bi-directional IoT dashboard system was designed to augment large scale agricultural machinery in hard to reach rural areas to automate their oversight and maintenance as much as possible. \n            Farmland is often located in hard-to-reach rural areas, away from central business districts which makes operators risk averse to leveraging technology in their processes in case of failures."),_c('br'),_c('br'),_vm._v(" \n            The proposed system solved this problem by gathering operational data in real-time through its network of sensors on site, processing and presenting this data through the cloud in the form of a web dashboard. \n            This affords operators real-time remote monitoring capabilities through intricate data visualisations.")])])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-row',{staticClass:"project-img",attrs:{"align":"center"}},[_c('v-col',{attrs:{"align":"center","cols":"auto"}},[_c('v-card-title',{staticClass:"font-weight-bold"},[_vm._v("Travelogue Intelligent Trip Planner App")]),_vm._v(" "),_c('v-img',{staticClass:"project-img",attrs:{"height":"350","width":"450","src":"/travelogue.png"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ml-7",attrs:{"cols":"11"}},[_c('p',[_vm._v("The Travelogue app is an intelligent web application that leverages complex algorithms and machine learning to serve curated trip suggestions to a user based on their inputs. \n            The app aggregates and processes hotel, venue, flight and weather data from disparate sources to generate a trip that best suites the user's constraints. "),_c('br'),_c('br'),_vm._v("\n            The project was part of the Software Engineering Studio subject at UTS, and as a member of a 13 person team I contributed to the backend applications that acquired, processed and stored the trip data for use by the web application.\n            This included the development of data ETL pipelines, API data retrieval, API development, database development and machine learning model development and integration.\n          ")])])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProjectsCard.vue?vue&type=template&id=3cb86414&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectsCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ProjectsCardvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/ProjectsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectsCardvue_type_script_lang_js_ = (ProjectsCardvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(134);

// CONCATENATED MODULE: ./components/ProjectsCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectsCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3cb86414",
  "7d145033"
  
)

/* harmony default export */ var ProjectsCard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VDivider: VDivider["a" /* default */],VImg: VImg["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=projects-card.js.map