"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Port = /*#__PURE__*/function () {
  function Port() {
    _classCallCheck(this, Port);

    this.position = {
      x: 0,
      y: 0
    };
    this._id = null;
    this._class = null;
    this._core = null;
    this._entity = null;
  }

  _createClass(Port, [{
    key: "template",
    value: function template() {
      return {
        _id: null,
        _class: null,
        position: {
          x: 0,
          y: 0
        },
        _position: null,
        _entity: null
      };
    }
  }, {
    key: "build",
    value: function build(type, position, idenrifier_instance) {
      var element = this.template();
      element._id = idenrifier_instance._id;
      element._class = type === 'from' ? 'PORT-FROM' : 'PORT-TO';
      element._idenrifier_instance = idenrifier_instance;
      if (position) element._position = position;

      idenrifier_instance._ports.push(element);

      return element;
    }
  }]);

  return Port;
}();

exports["default"] = Port;