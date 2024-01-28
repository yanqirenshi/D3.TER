"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Atman2 = _interopRequireDefault(require("./Atman.js"));

var _Name = _interopRequireDefault(require("./utils/Name.js"));

var _IdentifierInstance = _interopRequireDefault(require("./IdentifierInstance.js"));

var _AttributeInstance = _interopRequireDefault(require("./AttributeInstance.js"));

var _Geometry = _interopRequireDefault(require("./Geometry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Builder = /*#__PURE__*/function (_Atman) {
  _inherits(Builder, _Atman);

  var _super = _createSuper(Builder);

  function Builder(_class, data) {
    var _this;

    _classCallCheck(this, Builder);

    _this = _super.call(this, _class, data);

    _this.init();

    _this.name.set(data.name);

    _this.description.contents = data.description;
    _this.position = _objectSpread({}, data.position);
    _this.size = _objectSpread({}, data.size);
    _this.type.contents = _this.entityTypeContents();
    _this.background = _this.entityBackground();
    _this.geometry = new _Geometry["default"]();
    return _this;
  }

  _createClass(Builder, [{
    key: "init",
    value: function init() {
      this.padding = 8;
      this.margin = 3;
      this.description = {
        name: ''
      };
      this.description = {
        contents: ''
      };
      this.position = {
        x: 0,
        y: 0,
        z: 0
      };
      this.size = {
        w: 0,
        h: 0
      };
      this.bar = {
        size: {
          horizontal: 3,
          header: 3,
          contents: 3
        }
      };
      this.background = {
        color: ''
      };
      this.name = new _Name["default"]();
      this.type = {
        contents: '??',
        padding: 8,
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        size: {
          w: 0,
          h: 0
        }
      };
      this.identifiers = {
        padding: 0,
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        size: {
          w: null,
          h: null
        },
        items: {
          list: [],
          ht: {}
        }
      };
      this.attributes = {
        padding: 0,
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        size: {
          w: null,
          h: null
        },
        items: {
          list: [],
          ht: {}
        }
      };
      this.ports = {
        items: {
          list: [],
          ht: {}
        }
      };
    }
  }, {
    key: "template",
    value: function template() {
      return {
        _id: null,
        _class: 'ENTITY',
        padding: 11,
        margin: 6,
        description: {
          contents: ''
        },
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        size: {
          w: 0,
          h: 0
        },
        bar: {
          size: {
            header: 11,
            contents: 8
          }
        },
        background: {
          color: ''
        },
        name: {
          padding: 11,
          contents: '',
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            h: null,
            w: null
          }
        },
        type: {
          contents: '??',
          padding: 11,
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            w: 0,
            h: 0
          }
        },
        identifiers: {
          padding: 8,
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            w: null,
            h: null
          },
          items: {
            list: [],
            ht: {}
          }
        },
        attributes: {
          padding: 8,
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            w: null,
            h: null
          },
          items: {
            list: [],
            ht: {}
          }
        },
        ports: {
          items: {
            list: [],
            ht: {}
          }
        }
      };
    }
  }, {
    key: "entityTypeContents",
    value: function entityTypeContents() {
      var type = this._core.type;

      switch (type) {
        case 'RESOURCE':
          return 'Rsc';

        case 'RESOURCE-SUBSET':
          return 'Rsc';

        case 'COMPARATIVE':
          return '対象';

        case 'EVENT':
          return 'Evt';

        case 'EVENT-SUBSET':
          return 'Evt';

        default:
          throw new Error(type + " は知らないよ。");
      }
    }
  }, {
    key: "entityBackground",
    value: function entityBackground() {
      var background = {
        "resource": {
          color: '#89c3eb'
        },
        "resource-subset": {
          color: '#a0d8ef'
        },
        "event": {
          color: '#f09199'
        },
        "event-subset": {
          color: '#f6bfbc'
        },
        "comparative": {
          color: '#c8d5bb'
        },
        "correspondence": {
          color: '#f2f2b0'
        },
        "recursion": {
          color: '#dbd0e6'
        }
      };

      var key = this._core.type.toLowerCase();

      return background[key];
    }
  }, {
    key: "buildIdentifiers",
    value: function buildIdentifiers(state) {
      var out = {
        list: [],
        ht: {}
      };
      var masters = state.identifiers.ht;
      var targets = this._core.identifiers;

      var _iterator = _createForOfIteratorHelper(targets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var data = _step.value;
          var master = masters[data.identifier];
          var element = new _IdentifierInstance["default"](master, data);
          element._entity = this;
          out.list.push(element);
          out.ht[element._id] = element;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {
        contents: out,
        position: {
          x: 0,
          y: 0
        },
        size: {
          w: 0,
          h: 0
        },
        background: {
          color: '#ffffff'
        },
        padding: 11
      };
    }
  }, {
    key: "buildAttributes",
    value: function buildAttributes(state) {
      var out = {
        list: [],
        ht: {}
      };
      var masters = state.attributes.ht;
      var targets = this._core.attributes;

      var _iterator2 = _createForOfIteratorHelper(targets),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var attribute = _step2.value;
          var master = masters[attribute.attribute];
          var element = new _AttributeInstance["default"](master, attribute);
          element._entity = this;
          out.list.push(element);
          out.ht[element._id] = element;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return {
        contents: out,
        position: {
          x: 0,
          y: 0
        },
        size: {
          w: 0,
          h: 0
        },
        background: {
          color: '#ffffff'
        },
        padding: 11
      };
    }
  }, {
    key: "build",
    value: function build(state) {
      this.identifiers = this.buildIdentifiers(state);
      this.attributes = this.buildAttributes(state);
      return this;
    }
  }]);

  return Builder;
}(_Atman2["default"]);

var EntityTailor = /*#__PURE__*/function (_Builder) {
  _inherits(EntityTailor, _Builder);

  var _super2 = _createSuper(EntityTailor);

  function EntityTailor() {
    _classCallCheck(this, EntityTailor);

    return _super2.apply(this, arguments);
  }

  _createClass(EntityTailor, [{
    key: "sizing",
    value:
    /* **************************************************************** *
     *   Size
     * **************************************************************** */
    function sizing() {
      this.sizingType();
      this.sizingName();
      this.sizingIdentifiers();
      this.sizingAttributes();
      this.sizingContentsArea();
      var padding = this.padding * 2;
      var header = this.name.size.h;
      var bar = this.bar.size.horizontal;
      var contents = this.attributes.size.h;
      this.size.h = padding + header + bar + contents;
      return this;
    }
  }, {
    key: "reSizing",
    value: function reSizing() {
      var entity = this;
      entity.name.size.w = Math.ceil(entity._max_w.name) + entity.name.padding * 2;
      entity.identifiers.size.w = Math.ceil(entity._max_w.identifier) + entity.identifiers.padding * 2;
      entity.attributes.size.w = Math.ceil(entity._max_w.attribute) + entity.attributes.padding * 2;
      var name_area_w = entity.name.size.w + entity.bar.size.header + entity.type.size.w;
      var contents_area_w = entity.identifiers.size.w + entity.bar.size.contents + entity.attributes.size.w;
      entity.size.w = (contents_area_w > name_area_w ? contents_area_w : name_area_w) + entity.padding * 2; // fix size for attr area

      if (entity._max_w.attribute === 0 || contents_area_w < name_area_w) {
        entity.attributes.size.w = entity.size.w - entity.padding * 2 - entity.identifiers.size.w - entity.bar.size.contents;
      } // fix size for name area


      if (contents_area_w > name_area_w) {
        entity.name.size.w = entity.size.w - entity.padding * 2 - entity.bar.size.header - entity.type.size.w;
      }

      return this;
    }
    /* **************************************************************** *
     *   Position
     * **************************************************************** */

  }, {
    key: "positioning",
    value: function positioning() {
      this.positioningEntity(this);
      return this;
    }
    /* **************************************************************** *
     *  Entity
     * **************************************************************** */

  }, {
    key: "positioningEntity",
    value: function positioningEntity(entity, entities) {
      this.positioningName();
      this.positioningType();
      this.positioningIdentifiers();
      this.positioningAttributes();
      this.positioningPorts();
    }
    /* **************************************************************** *
     *  Contents Area
     * **************************************************************** */

  }, {
    key: "sizingContentsArea",
    value: function sizingContentsArea() {
      var id_h = this.identifiers.size.h;
      var attr_h = this.attributes.size.h;
      if (id_h > attr_h) this.attributes.size.h = id_h;else this.identifiers.size.h = attr_h;
    }
    /* **************************************************************** *
     *  Name
     * **************************************************************** */

  }, {
    key: "sizingName",
    value: function sizingName() {
      var data = this.name;
      if (!data.contents) data.contents = '????????';
      data.size.h = this._default.line.height + data.padding * 2;
      var type = this.type;
      data.size.w = this.size.w <= 0 ? 0 : this.size.w - this.padding * 2 - this.bar.size.header - type.size.w;
    }
  }, {
    key: "positioningName",
    value: function positioningName() {
      var entity = this;
      var d = entity.name;
      d.position.x = entity.padding;
      d.position.y = entity.padding;
    }
    /* **************************************************************** *
     *  Type
     * **************************************************************** */

  }, {
    key: "sizingType",
    value: function sizingType() {
      var data = this.type;
      if (!data.contents) data.contents = '??';
      data.size.h = this._default.line.height + data.padding * 2;
      data.size.w = data.contents.length * this._default.line.font.size; // + data.padding * 2;
    }
  }, {
    key: "positioningType",
    value: function positioningType() {
      var entity = this;
      var d = entity.type;
      var bar = this.bar.size.header;
      d.position.x = entity.padding + entity.name.size.w + bar;
      d.position.y = entity.padding;
    }
    /* **************************************************************** *
     *  ColumnItems
     * **************************************************************** */

  }, {
    key: "positioningColumnItems",
    value: function positioningColumnItems(d) {
      var padding = d.padding;
      var start = d.position.y + padding;
      var line_height = this._default.line.height;
      var num = 0;

      var _iterator3 = _createForOfIteratorHelper(d.contents.list),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          item.position.x = d.position.x + padding;
          var item_h = line_height + item.name.padding * 2;
          item.position.y = start + num * item_h + item.name.padding;
          num++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /* **************************************************************** *
     *  Identifiers
     * **************************************************************** */

  }, {
    key: "sizingIdentifiers",
    value: function sizingIdentifiers() {
      var data = this.identifiers;
      var padding = this.padding;
      data.size.w = this.size.w <= 0 ? 0 : (this.size.w - padding * 2) / 2 - this.bar.size.contents / 2;
      data.size.h = data.contents.list.length * (this._default.line.height + padding * 2);
    }
  }, {
    key: "positioningIdentifiers",
    value: function positioningIdentifiers() {
      var entity = this;
      var d = entity.identifiers;
      var bar = this.bar.size.horizontal;
      d.position.x = entity.padding;
      d.position.y = entity.padding + entity.name.size.h + bar;
      this.positioningColumnItems(d);
    }
    /* **************************************************************** *
     *  Attributes
     * **************************************************************** */

  }, {
    key: "sizingAttributes",
    value: function sizingAttributes() {
      var data = this.attributes;
      var padding = this.padding;
      data.size.w = this.size.w <= 0 ? 0 : (this.size.w - this.padding * 2) / 2 - this.bar.size.contents / 2;
      data.size.h = data.contents.list.length * (this._default.line.height + padding * 2);
    }
  }, {
    key: "positioningAttributes",
    value: function positioningAttributes() {
      var entity = this;
      var d = entity.attributes;
      var bar_contents = this.bar.size.contents;
      var bar_horizontal = this.bar.size.horizontal;
      d.position.x = entity.padding + bar_contents + entity.identifiers.size.w;
      d.position.y = entity.padding + entity.name.size.h + bar_horizontal;
      this.positioningColumnItems(d);
    }
    /* **************************************************************** *
     *  Port
     * **************************************************************** */

  }, {
    key: "positioningPort",
    value: function positioningPort(port) {
      var entity = this;
      var line_port = this.geometry.getPortLine(port, entity);
      var lines_entity = this.geometry.getFourSideLines(entity);
      var point = this.geometry.getCrossPoint(lines_entity, line_port);
      port.position = point.point;
      return port.point;
    }
  }, {
    key: "positioningPorts",
    value: function positioningPorts() {
      var ports = this.ports.items.list;

      var _iterator4 = _createForOfIteratorHelper(ports),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var port = _step4.value;
          this.positioningPort(port);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }]);

  return EntityTailor;
}(Builder);

exports["default"] = EntityTailor;