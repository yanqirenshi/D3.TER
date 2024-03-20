"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var d3 = _interopRequireWildcard(require("d3"));

var _Geometry = _interopRequireDefault(require("../Geometry"));

var _PortCircle = _interopRequireDefault(require("./PortCircle.js"));

var _PortCardinality = _interopRequireDefault(require("./PortCardinality.js"));

var _PortOptionality = _interopRequireDefault(require("./PortOptionality.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Ports = /*#__PURE__*/function () {
  function Ports(parent) {
    _classCallCheck(this, Ports);

    this._parent = parent;
    this.cardinality = new _PortCardinality["default"](this);
    this.optionality = new _PortOptionality["default"](this);
    this.circle = new _PortCircle["default"](this);
  }

  _createClass(Ports, [{
    key: "rectum",
    value: function rectum() {
      return this._parent.rectum();
    }
  }, {
    key: "style",
    value: function style() {
      return this.rectum().style();
    }
  }, {
    key: "callbacks",
    value: function callbacks() {
      return this._parent.callbacks;
    }
    /* **************************************************************** *
     *  Old
     * **************************************************************** */
    // public

  }, {
    key: "draw",
    value: function draw(groups_entity) {
      this.cardinality.draw(groups_entity);
      this.optionality.draw(groups_entity);
    }
  }]);

  return Ports;
}();

exports["default"] = Ports;