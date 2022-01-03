"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Builder = /*#__PURE__*/function () {
  function Builder() {
    _classCallCheck(this, Builder);
  }

  _createClass(Builder, [{
    key: "template",
    value: function template() {
      return {
        _id: null,
        _class: 'ENTITY',
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
        padding: 11,
        margin: 6,
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
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            h: null,
            w: null
          },
          padding: 11,
          contents: ''
        },
        type: {
          contents: '??',
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            w: 0,
            h: 0
          },
          padding: 11
        },
        identifiers: {
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            w: null,
            h: null
          },
          padding: 8,
          items: {
            list: [],
            ht: {}
          }
        },
        attributes: {
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          size: {
            w: null,
            h: null
          },
          padding: 8,
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
    value: function entityTypeContents(core) {
      switch (core.type) {
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
          throw new Error(core._class + " は知らないよ。");
      }
    }
  }, {
    key: "entityBackground",
    value: function entityBackground(core) {
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
      return background[core.type.toLowerCase()];
    }
  }, {
    key: "buildIdentifiers",
    value: function buildIdentifiers(core, state, entity_element) {
      var out = {
        list: [],
        ht: {}
      };
      var masters = state.identifiers.ht;

      var _iterator = _createForOfIteratorHelper(core.identifiers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var identifier = _step.value;
          var master = masters[identifier.identifier];
          var element = this.identifier_instance.build(identifier, master);
          element._entity = entity_element;
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
    value: function buildAttributes(core, state, entity_element) {
      var out = {
        list: [],
        ht: {}
      };
      var masters = state.attributes.ht;

      var _iterator2 = _createForOfIteratorHelper(core.attributes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var attribute = _step2.value;
          var master = masters[attribute.attribute];
          var element = this.attribute_instance.build(attribute, master);
          element._entity = entity_element;
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
    value: function build(core, state) {
      var element = this.template();
      element._id = core.id;
      element.name.contents = core.name;
      element.description.contents = core.description;
      element.position = _objectSpread({}, core.position);
      element.size = _objectSpread({}, core.size);
      element.type.contents = this.entityTypeContents(core);
      element.identifiers = this.buildIdentifiers(core, state, element);
      element.attributes = this.buildAttributes(core, state, element);
      element.background = this.entityBackground(core);
      element._core = core;
      core._element = element;
      return element;
    }
  }]);

  return Builder;
}();

var EntityTailor = /*#__PURE__*/function (_Builder) {
  _inherits(EntityTailor, _Builder);

  var _super = _createSuper(EntityTailor);

  function EntityTailor() {
    _classCallCheck(this, EntityTailor);

    return _super.apply(this, arguments);
  }

  _createClass(EntityTailor, [{
    key: "sizingType",
    value:
    /* **************************************************************** *
     *   Size
     * **************************************************************** */
    function sizingType(entity) {
      var data = entity.type;
      if (!data.contents) data.contents = '??';
      data.size.h = this._default.line.height + data.padding * 2;
      data.size.w = data.contents.length * this._default.line.font.size + data.padding * 2;
    }
  }, {
    key: "sizingName",
    value: function sizingName(entity) {
      var data = entity.name;
      if (!data.contents) data.contents = '????????';
      data.size.h = this._default.line.height + data.padding * 2;
      var type = entity.type;
      data.size.w = entity.size.w - entity.padding * 2 - entity.bar.size.header - type.size.w;
    }
  }, {
    key: "sizingIdentifiers",
    value: function sizingIdentifiers(entity) {
      var data = entity.identifiers;
      var padding = entity.padding;
      data.size.w = (entity.size.w - padding * 2) / 2 - entity.bar.size.contents / 2;
      data.size.h = data.contents.list.length * (this._default.line.height + padding * 2);
    }
  }, {
    key: "sizingAttributes",
    value: function sizingAttributes(entity) {
      var data = entity.attributes;
      var padding = entity.padding;
      data.size.w = (entity.size.w - entity.padding * 2) / 2 - entity.bar.size.contents / 2;
      data.size.h = data.contents.list.length * (this._default.line.height + padding * 2);
    }
  }, {
    key: "sizingContentsArea",
    value: function sizingContentsArea(entity) {
      var id_h = entity.identifiers.size.h;
      var attr_h = entity.attributes.size.h;
      if (id_h > attr_h) entity.attributes.size.h = id_h;else entity.identifiers.size.h = attr_h;
    }
  }, {
    key: "sizingEntity",
    value: function sizingEntity(entity) {
      this.sizingType(entity);
      this.sizingName(entity);
      this.sizingIdentifiers(entity);
      this.sizingAttributes(entity);
      this.sizingContentsArea(entity);
      var padding = entity.padding * 2;
      var header = entity.name.size.h;
      var margin = 11;
      var contents = entity.attributes.size.h;
      entity.size.h = padding + header + margin + contents;
    }
  }, {
    key: "sizingEntities",
    value: function sizingEntities(entities) {
      var _iterator3 = _createForOfIteratorHelper(entities),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var entity = _step3.value;
          this.sizingEntity(entity);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "sizing",
    value: function sizing(entities) {
      this.sizingEntities(entities);
      return this;
    }
  }, {
    key: "reSizingEntity",
    value: function reSizingEntity(entity) {
      entity.name.size.w = Math.ceil(entity._max_w.name) + entity.name.padding * 2;
      entity.identifiers.size.w = Math.ceil(entity._max_w.identifier) + entity.identifiers.padding * 2;
      entity.attributes.size.w = Math.ceil(entity._max_w.attribute) + entity.attributes.padding * 2;
      var name_area_w = entity.name.size.w + entity.bar.size.header + entity.type.size.w + entity.padding * 2;
      var contents_area_w = entity.identifiers.size.w + entity.bar.size.contents + entity.attributes.size.w + entity.padding * 2;
      entity.size.w = contents_area_w > name_area_w ? contents_area_w : name_area_w; // fix size for attr area

      if (entity._max_w.attribute === 0 || contents_area_w < name_area_w) {
        entity.attributes.size.w = entity.size.w - entity.identifiers.size.w - entity.bar.size.contents - entity.padding * 2;
      } // fix size for name area


      if (contents_area_w > name_area_w) {
        entity.name.size.w = entity.size.w - entity.bar.size.header - entity.type.size.w - entity.padding * 2;
      }
    }
  }, {
    key: "reSizing",
    value: function reSizing(groups, entities) {
      var _this = this;

      groups.each(function (entity) {
        _this.reSizingEntity(entity);

        _this.positioningEntity(entity, entities);
      });
      this.redraw(groups);
    }
    /* **************************************************************** *
     *   Position
     * **************************************************************** */

  }, {
    key: "positioningName",
    value: function positioningName(entity) {
      var d = entity.name;
      d.position.x = entity.padding;
      d.position.y = entity.padding;
    }
  }, {
    key: "positioningType",
    value: function positioningType(entity) {
      var d = entity.type;
      var margin = 11;
      d.position.x = entity.padding + entity.name.size.w + margin;
      d.position.y = entity.padding;
    }
  }, {
    key: "positioningColumnItems",
    value: function positioningColumnItems(d) {
      var len = d.contents.list.length;
      var padding = d.padding;
      var start = d.position.y;
      var line_height = this._default.line.height;
      var item_h = line_height + padding * 2;
      var magic_num = 3; // y軸の微調整係数

      for (var i = 0; i < len; i++) {
        var item = d.contents.list[i];
        item.position.x = d.position.x + padding;
        item.position.y = start + padding + line_height + i * item_h + magic_num;
      }
    }
  }, {
    key: "positioningIdentifiers",
    value: function positioningIdentifiers(entity) {
      var d = entity.identifiers;
      var margin = 11;
      d.position.x = entity.padding;
      d.position.y = entity.padding + entity.name.size.h + margin;
      this.positioningColumnItems(d);
    }
  }, {
    key: "positioningAttributes",
    value: function positioningAttributes(entity) {
      var d = entity.attributes;
      var margin1 = 4 * 2;
      var margin2 = 11;
      d.position.x = entity.padding + margin1 + entity.identifiers.size.w;
      d.position.y = entity.padding + entity.name.size.h + margin2;
      this.positioningColumnItems(d);
    }
  }, {
    key: "deg2rad",
    value: function deg2rad(degree) {
      return degree * (Math.PI / 180);
    }
  }, {
    key: "getPortLineLength",
    value: function getPortLineLength(entity) {
      var max_length = Math.floor(Math.sqrt(entity.size.w * entity.size.w + entity.size.h * entity.size.h));
      return 0.8 * max_length;
    }
  }, {
    key: "getPortLineFrom",
    value: function getPortLineFrom(entity) {
      return {
        x: Math.floor(entity.size.w / 2),
        y: Math.floor(entity.size.h / 2)
      };
    }
  }, {
    key: "makePortLine",
    value: function makePortLine(entity, port) {
      var out = {
        from: {
          x: 0,
          y: 0
        },
        to: {
          x: 0,
          y: 0
        }
      };
      var from = this.getPortLineFrom(entity);
      out.from.x = from.x;
      out.from.y = from.y;
      var x = 0;
      var y = this.getPortLineLength(entity);
      var degree = port._position % 360;
      var radian = this.deg2rad(degree);
      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      out.to.x = Math.floor(x * cos - y * sin);
      out.to.y = Math.floor(x * sin + y * cos);
      out.to.x += out.from.x;
      out.to.y += out.from.y;
      port._from = out.from;
      port._to = out.to;
      return out;
    }
  }, {
    key: "isCorss",
    value: function isCorss(A, B, C, D) {
      // 二つの線分の交差チェック
      // https://www.hiramine.com/programming/graphics/2d_segmentintersection.html
      var ACx = C.x - A.x;
      var ACy = C.y - A.y;
      var BUNBO = (B.x - A.x) * (D.y - C.y) - (B.y - A.y) * (D.x - C.x);
      if (BUNBO === 0) return false;
      var r = ((D.y - C.y) * ACx - (D.x - C.x) * ACy) / BUNBO;
      var s = ((B.y - A.y) * ACx - (B.x - A.x) * ACy) / BUNBO;
      return 0 <= r && r <= 1 && 0 <= s && s <= 1;
    }
  }, {
    key: "getCrossPointCore",
    value: function getCrossPointCore(line, line_port, port) {
      // ２直線の交点を求める公式
      var out = {
        x: 0,
        y: 0
      };
      var A = line.from;
      var B = line.to;
      var C = line_port.from;
      var D = line_port.to;
      var bunbo = (B.y - A.y) * (D.x - C.x) - (B.x - A.x) * (D.y - C.y);
      if (!this.isCorss(A, B, C, D)) return null; // 二つの線分の交点を算出する。
      // http://mf-atelier.sakura.ne.jp/mf-atelier/modules/tips/program/algorithm/a1.html

      var d1, d2;
      d1 = C.y * D.x - C.x * D.y;
      d2 = A.y * B.x - A.x * B.y;
      out.x = (d1 * (B.x - A.x) - d2 * (D.x - C.x)) / bunbo;
      out.y = (d1 * (B.y - A.y) - d2 * (D.y - C.y)) / bunbo;
      return out;
    }
  }, {
    key: "getCrossPoint",
    value: function getCrossPoint(lines, line_port, port) {
      var _iterator4 = _createForOfIteratorHelper(lines),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var line = _step4.value;
          var point = this.getCrossPointCore(line, line_port, port);
          if (point) return point;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return null;
    }
  }, {
    key: "getEntityLines",
    value: function getEntityLines(entity) {
      var port_r = 4;
      var margin = entity.margin + port_r;
      var w = entity.size.w;
      var h = entity.size.h;
      var top_left = {
        x: 0 - margin,
        y: 0 - margin
      };
      var top_right = {
        x: w + margin,
        y: 0 - margin
      };
      var bottom_rigth = {
        x: w + margin,
        y: h + margin
      };
      var bottom_left = {
        x: 0 - margin,
        y: h + margin
      };
      return [{
        from: top_left,
        to: top_right
      }, {
        from: top_right,
        to: bottom_rigth
      }, {
        from: bottom_rigth,
        to: bottom_left
      }, {
        from: bottom_left,
        to: top_left
      }];
    }
  }, {
    key: "positioningPort",
    value: function positioningPort(entity, port) {
      var line_port = this.makePortLine(entity, port);
      var lines_entity = this.getEntityLines(entity);
      var point = this.getCrossPoint(lines_entity, line_port, port);
      if (!point) point = {
        x: 0,
        y: 0
      };
      port.position = point;
      return port;
    }
  }, {
    key: "positioningPorts",
    value: function positioningPorts(entity, entities) {
      var _iterator5 = _createForOfIteratorHelper(entities.list),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _entity = _step5.value;

          var _iterator6 = _createForOfIteratorHelper(_entity.ports.items.list),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var port = _step6.value;
              this.positioningPort(_entity, port);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "positioningEntity",
    value: function positioningEntity(entity, entities) {
      this.positioningName(entity);
      this.positioningType(entity);
      this.positioningIdentifiers(entity);
      this.positioningAttributes(entity);
      this.positioningPorts(entity, entities);
    }
  }, {
    key: "positioning",
    value: function positioning() {
      var _iterator7 = _createForOfIteratorHelper(this._data),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var entity = _step7.value;
          this.positioningEntity(entity);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return this;
    }
  }]);

  return EntityTailor;
}(Builder);

exports["default"] = EntityTailor;