"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Ports = _interopRequireDefault(require("./Painters/Ports.js"));

var _Relationships = _interopRequireDefault(require("./Painters/Relationships.js"));

var _Entity = _interopRequireDefault(require("./Painters/Entity.js"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Painter = /*#__PURE__*/function () {
  function Painter(rectum, foreground, background, callbacks) {
    _classCallCheck(this, Painter);

    this._rectum = rectum;
    this.foreground = foreground;
    this.background = background;
    this.callbacks = this.ensureCallbacks(callbacks);
    this._default = {
      line: {
        height: 14,
        font: {
          size: 14
        }
      }
    };
    this._painters = {
      ports: new _Ports["default"](this),
      relationships: new _Relationships["default"](this),
      entity: new _Entity["default"](this)
    };
  }

  _createClass(Painter, [{
    key: "rectum",
    value: function rectum() {
      return this._rectum;
    }
  }, {
    key: "style",
    value: function style() {
      return this.rectum().style();
    }
  }, {
    key: "ensureCallbacks",
    value: function ensureCallbacks(callbacks) {
      var default_callbacks = {
        entity: {
          click: function click(node) {
            return null;
          }
        },
        identifier: {
          click: function click(node) {
            return null;
          }
        },
        attribute: {
          click: function click(node) {
            return null;
          }
        },
        relationship: {
          click: function click(node) {
            return null;
          }
        }
      };
      return (0, _deepmerge["default"])(default_callbacks, callbacks);
    }
  }, {
    key: "ports",
    value: function ports() {
      return this._painters.ports;
    }
  }, {
    key: "relationships",
    value: function relationships() {
      return this._painters.relationships;
    }
  }, {
    key: "entity",
    value: function entity() {
      return this._painters.entity;
    }
    /* ************************************ *
     *  Draw Main                           *
     * ************************************ */

    /* ************************************ *
     *  Draw Main                           *
     * ************************************ */

  }, {
    key: "draw",
    value: function draw(entities, relationsihps) {
      // entity の描画
      var groups = this.entity().draw(entities.list); // port の描画

      this.ports().draw(groups); // relationship の描画

      this.relationships().drawRelationships(this.background, relationsihps);
    }
  }]);

  return Painter;
}();

exports["default"] = Painter;