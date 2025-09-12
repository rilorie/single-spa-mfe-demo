"use strict";
(self["webpackChunkproduct_image"] = self["webpackChunkproduct_image"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap),
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "unmount": () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa-html */ "webpack/sharing/consume/default/single-spa-html/single-spa-html");
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_0__);

const template = `
<div
  class="content"
>
</div>
`;
const jsComponent = single_spa_html__WEBPACK_IMPORTED_MODULE_0___default()({
  template
});
jsComponent.originalMount = jsComponent.mount;

jsComponent.mount = function (opts, props) {
  return jsComponent.originalMount(opts, props).then(() => {
    const el = document.querySelector('.content');
    const html = `<div>Hello World!!!! This is a working MFE!!</div>`;
    el.innerHTML = html;
  });
};

const bootstrap = jsComponent.bootstrap;
const mount = jsComponent.mount;
const unmount = jsComponent.unmount;

/***/ })

}]);
//# sourceMappingURL=src_index_js.js.map