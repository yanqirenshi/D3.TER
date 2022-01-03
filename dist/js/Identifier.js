"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Pool = _interopRequireDefault(require("./Pool.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Identifier = /*#__PURE__*/function () {
  function Identifier() {
    _classCallCheck(this, Identifier);
  }

  _createClass(Identifier, [{
    key: "list2pool",
    value: function list2pool(list) {
      return new _Pool["default"]().list2pool(list, function (d) {
        return d;
      });
    }
  }, {
    key: "template",
    value: function template() {
      return {
        _id: null,
        _class: 'IDENTIFIER',
        name: {
          physical: '??',
          logical: ''
        },
        _core: null
      };
    }
  }, {
    key: "build",
    value: function build(core) {
      var element = this.template();
      element._id = core.id;
      element.name = core.name;
      element._core = core;
      core._element = element;
      return element;
    }
  }]);

  return Identifier;
}();

exports["default"] = Identifier;