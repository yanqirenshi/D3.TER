"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Position = _interopRequireDefault(require("./Position.js"));

var _Size = _interopRequireDefault(require("./Size.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Name = /*#__PURE__*/function () {
  function Name(v) {
    _classCallCheck(this, Name);

    this.physical = null;
    this.logical = null;
    this.padding = 8;
    this.position = new _Position["default"]();
    this.size = new _Size["default"]();
    this.set(v);
  }

  _createClass(Name, [{
    key: "set",
    value: function set(v) {
      console.log('set-----');
      console.log(v);
      if (arguments.lengh === 0 || !v) return this;
      console.log(_typeof(v));

      if ('string' === typeof v) {
        var isLogical = function isLogical(str) {
          return str.match(/^[^\x01-\x7E\xA1-\xDF]+$/);
        };

        if (isLogical) this.physical = v;else this.logical = v;
        return this;
      }

      if ("object" === _typeof(v)) {
        this.physical = v.physical || null;
        this.logical = v.logical || null;
        return this;
      }

      return this;
    }
  }, {
    key: "val",
    value: function val() {
      return this.logical || this.physical || '????????';
    }
  }]);

  return Name;
}();

exports["default"] = Name;