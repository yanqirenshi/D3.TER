"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _assh0le = require("@yanqirenshi/assh0le");

var _Entity = _interopRequireDefault(require("./Entity.js"));

var _Identifier = _interopRequireDefault(require("./Identifier.js"));

var _Attribute = _interopRequireDefault(require("./Attribute.js"));

var _Relationship = _interopRequireDefault(require("./Relationship.js"));

var _Port = _interopRequireDefault(require("./Port.js"));

var _Painter = _interopRequireDefault(require("./Painter.js"));

var _Pool = _interopRequireDefault(require("./utils/Pool.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var POOL = new _Pool["default"]();

var Rectum = /*#__PURE__*/function (_Colon) {
  _inherits(Rectum, _Colon);

  var _super = _createSuper(Rectum);

  function Rectum(params) {
    var _this;

    _classCallCheck(this, Rectum);

    _this = _super.call(this, params);
    _this.callbacks = _this.ensureCallbacks(params.callbacks);
    _this._entities = POOL.make();
    _this._relationships = POOL.make();
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(Rectum, [{
    key: "ensureCallbacks",
    value: function ensureCallbacks(callbacks) {
      var template = {
        entity: {
          click: null
        }
      };
      return (0, _deepmerge["default"])(template, callbacks);
    }
  }, {
    key: "entities",
    value: function entities() {
      return this._entities;
    }
  }, {
    key: "bounds",
    value: function bounds(v) {
      var d3svg = this.d3svg();
      if (arguments.length === 0) return d3svg.bounds();
      return d3svg.bounds(v);
    }
  }, {
    key: "getIdentifier",
    value: function getIdentifier(id, entities) {
      var _iterator = _createForOfIteratorHelper(entities.list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entity = _step.value;
          if (entity.identifiers.contents.ht[id]) return entity.identifiers.contents.ht[id];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }, {
    key: "getEntity",
    value: function getEntity(id) {
      var entities = this.entities();
      return entities.ht[id] || null;
    }
  }, {
    key: "buildRelationshipsWithPort",
    value: function buildRelationshipsWithPort(relationships) {
      var _this2 = this;

      return relationships.reduce(function (out, r) {
        var from = r.from;
        var to = r.to; // entity identifier を取得する。

        var entity_from = _this2.getEntity(from.entity);

        var entity_to = _this2.getEntity(to.entity); // Port のクラスインスタンスを作成する。


        var port_from = new _Port["default"]('from', entity_from, r, _this2);
        var port_to = new _Port["default"]('to', entity_to, r, _this2); // Relationship のクラスインスタンスを作成する。

        var element = new _Relationship["default"](r, port_from, port_to, _this2); // entity(from) に port をセットする。
        // entity_from.ports.items.ht[port_from._id] = port_from;
        // entity_from.ports.items.list.push(port_from);
        // port_from._entity = entity_from;
        // entity(to) に port をセットする。
        // entity_to.ports.items.ht[port_to._id] = port_to;
        // entity_to.ports.items.list.push(port_to);
        // port_to._entity = entity_to;
        // out

        out.list.push(element);
        out.ht[element._id] = element;
        return out;
      }, {
        list: [],
        ht: {}
      });
    }
  }, {
    key: "data",
    value: function data(_data) {
      var _this3 = this;

      this._identifiers = POOL.list2pool(_data.identifiers, function (d) {
        return new _Identifier["default"](d);
      });
      this._attributes = POOL.list2pool(_data.attributes, function (d) {
        return new _Attribute["default"](d);
      });
      var elements = {
        identifiers: this._identifiers,
        attributes: this._attributes
      };
      this._entities = POOL.list2pool(_data.entities, function (d) {
        return new _Entity["default"](d, _this3).build(elements).sizing().positioning();
      });
      this._relationships = this.buildRelationshipsWithPort(_data.relationships);

      _get(_getPrototypeOf(Rectum.prototype), "data", this).call(this, {
        identifiers: this._identifiers,
        attributes: this._attributes,
        entities: this._entities,
        relationships: this._relationships
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var fore = this.layer('foreground');
      var back = this.layer('background');
      var painter = new _Painter["default"](this, fore, back, this.callbacks);
      painter.draw(this.entities(), this._relationships);
    }
  }, {
    key: "style",
    value: function style() {
      return {
        entity: {
          margin: 33
        },
        port: {
          stroke: {
            width: 1,
            color: '#888888'
          },
          optionality: {
            distance: 22,
            zero: {
              fill: "#fefefe"
            }
          },
          cardinality: {
            distance: 11
          }
        },
        relationship: {}
      };
    }
  }]);

  return Rectum;
}(_assh0le.Colon);

exports["default"] = Rectum;