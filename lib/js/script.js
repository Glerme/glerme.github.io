"use strict";

var _slide = _interopRequireDefault(require("./components/slide.js"));

var _animarScroll = _interopRequireDefault(require("./components/animarScroll.js"));

var _maquinaEscrever = _interopRequireDefault(require("./components/maquinaEscrever.js"));

var _scrollSuave = _interopRequireDefault(require("./components/scrollSuave.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const slide = new _slide.default(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
window.addEventListener("scroll", _animarScroll.default);
(0, _scrollSuave.default)();