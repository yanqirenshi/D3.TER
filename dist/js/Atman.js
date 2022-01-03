"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Atman = /*#__PURE__*/function () {
  function Atman(_class, data) {
    _classCallCheck(this, Atman);

    this._class = _class;
    this._id = data.id;
    this._core = data;
    this._core._obj = this;
  }

  _createClass(Atman, [{
    key: "id",
    value: function id() {
      return this._id;
    }
  }]);

  return Atman;
}();

exports["default"] = Atman;