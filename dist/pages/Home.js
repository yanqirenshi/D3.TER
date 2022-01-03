"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _D3Ter = _interopRequireDefault(require("./D3Ter.js"));

var _TER_DATA = _interopRequireDefault(require("./TER_DATA.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var style = {
  root: {
    width: '100vw',
    height: '100vh'
  }
};

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style.root
  }, /*#__PURE__*/_react["default"].createElement(_D3Ter["default"], {
    graph_data: _TER_DATA["default"]
  }));
}

var _default = App;
exports["default"] = _default;