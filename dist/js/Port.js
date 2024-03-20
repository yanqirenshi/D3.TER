"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Atman2 = _interopRequireDefault(require("./Atman.js"));

var _Geometry = _interopRequireDefault(require("./Geometry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Port = /*#__PURE__*/function (_Atman) {
  _inherits(Port, _Atman);

  var _super = _createSuper(Port);

  function Port(type, entity, relatihonship_data) {
    var _this;

    _classCallCheck(this, Port);

    _this = _super.call(this, type === 'from' ? 'PORT-FROM' : 'PORT-TO', relatihonship_data);
    _this._id = relatihonship_data.id + '_' + entity._id; // Idenrifier-Instance

    _this._owner = entity;
    _this._type = type;
    _this._core = relatihonship_data[type];
    _this._position = relatihonship_data.position || {
      x: 0,
      y: 0
    };

    _this.addPort2Entity(entity);

    _this._entity = null;
    _this.geometry = new _Geometry["default"]();
    _this._cardinality_distance = 11;
    _this._optionality_distance = 22;
    _this._line = null;
    _this._cardinality = null;
    _this._optionality = null;
    return _this;
  }

  _createClass(Port, [{
    key: "core",
    value: function core() {
      return this._core;
    }
  }, {
    key: "degree",
    value: function degree() {
      return this._core.position || 0;
    }
  }, {
    key: "position",
    value: function position(v) {
      if (arguments.length === 1) {
        this._position = v;
        var line = this.linePosition(this.calLinePoints());
        this.cardinalityPosition(this.positionCardinality(line));
        this.optionalityPosition(this.positionOptionality(line));
      }

      return this._position;
    }
  }, {
    key: "positionOptionality",
    value: function positionOptionality(line_port_to_entity) {
      var distance = this.optionalityDistance(); // d.optionality: 1, 0

      switch (this.optionality()) {
        case 0:
          return this.calCircle(line_port_to_entity.from, line_port_to_entity.to, distance);

        case 1:
          return this.calOneLine(line_port_to_entity.from, line_port_to_entity.to, distance);

        default:
          return null;
      }
    }
  }, {
    key: "positionCardinality",
    value: function positionCardinality(line_port_to_entity) {
      var distance = this.cardinalityDistance(); // cardinality: 1, 3

      switch (this.cardinality()) {
        case 1:
          return this.calOneLine(line_port_to_entity.from, line_port_to_entity.to, distance);

        case 3:
          return this.calThreeLine(line_port_to_entity.from, line_port_to_entity.to, distance);

        default:
          return null;
      }
    }
  }, {
    key: "owner",
    value: function owner() {
      return this._owner;
    }
  }, {
    key: "entity",
    value: function entity() {
      return this._entity;
    }
  }, {
    key: "relationship",
    value: function relationship() {
      return this._relationship;
    }
  }, {
    key: "cardinality",
    value: function cardinality() {
      return this.core().cardinality;
    }
  }, {
    key: "optionality",
    value: function optionality() {
      return this.core().optionality;
    }
  }, {
    key: "linePosition",
    value: function linePosition(v) {
      if (arguments.length === 1) this._line = v;
      return this._line;
    }
  }, {
    key: "cardinalityDistance",
    value: function cardinalityDistance() {
      return this._cardinality_distance;
    }
  }, {
    key: "optionalityDistance",
    value: function optionalityDistance() {
      return this._optionality_distance;
    }
  }, {
    key: "cardinalityPosition",
    value: function cardinalityPosition(v) {
      if (arguments.length === 1) this._cardinality = v;
      return this._cardinality;
    }
  }, {
    key: "optionalityPosition",
    value: function optionalityPosition(v) {
      if (arguments.length === 1) this._optionality = v;
      return this._optionality;
    }
    /* **************************************************************** *
     *  Data manegement
     * **************************************************************** */

    /**
     * entity と port
     */

  }, {
    key: "calLinePoints",
    value: function calLinePoints() {
      var entity = this.owner();
      var entity_position = entity.position;
      var entity_size = entity.size;
      var rect = {
        position: {
          x: entity_position.x,
          y: entity_position.y
        },
        size: {
          w: entity_size.w,
          h: entity_size.h
        }
      };
      var geometry = this.geometry; // entity の四辺

      var four_side_lines = geometry.getFourSideLines(rect, 4, 33); // port と entityの中心との直線。

      var line_port = geometry.getPortLine(this.degree(), rect); // port と entityの中心との直線 と entity の四辺の交点。
      // 交点 と どの辺 が返ってくる。

      var cross_point = geometry.getCrossPoint(four_side_lines, line_port); // entity と port との距離

      var len = 33 + 4; // 33: ?, 4: ?
      // point の位置を返す

      var to_point = cross_point.point;

      var from_point = function from_point() {
        switch (cross_point.target) {
          case 'top':
            return {
              x: to_point.x,
              y: to_point.y + len
            };

          case 'right':
            return {
              x: to_point.x - len,
              y: to_point.y
            };

          case 'bottom':
            return {
              x: to_point.x,
              y: to_point.y - len
            };

          case 'left':
            return {
              x: to_point.x + len,
              y: to_point.y
            };

          default:
            throw new Error('!!!');
        }
      };

      return {
        from: from_point(),
        to: to_point
      };
    }
    /** **************************************************************** *
     * port と entity の間の向きを返します。
     * **************************************************************** */

  }, {
    key: "portDirection",
    value: function portDirection(from, to) {
      // 縦
      if (from.x === to.x) {
        if (from.y < to.y) return 'DOWN';
        if (from.y > to.y) return 'UP';
      } // 横


      if (from.y === to.y) {
        if (from.x < to.x) return 'RIGHT';
        if (from.x > to.x) return 'LEFT';
      } // これはありえないはず。


      throw new Error('Can Not Found Direction.');
    }
    /** **************************************************************** *
     * 1 line (cardinaly: 1)
     * Cardinary： n ケースの座標を計算する。
     *
     * Line の from, to で向きを決める。
     *
     * d: port
     * distance: between port and entity
     * **************************************************************** */

  }, {
    key: "calOneLine",
    value: function calOneLine(from, to, distance) {
      var r = 11;

      switch (this.portDirection(from, to)) {
        case 'DOWN':
          return {
            from: {
              x: from.x + r,
              y: from.y + distance
            },
            to: {
              x: from.x - r,
              y: from.y + distance
            }
          };

        case 'DOWN':
          return {
            from: {
              x: from.x + r,
              y: from.y - distance
            },
            to: {
              x: from.x - r,
              y: from.y - distance
            }
          };

        case 'RIGHT':
          return {
            from: {
              x: from.x + distance,
              y: from.y + r
            },
            to: {
              x: from.x + distance,
              y: from.y - r
            }
          };

        case 'LEFT':
          return {
            from: {
              x: from.x - distance,
              y: from.y + r
            },
            to: {
              x: from.x - distance,
              y: from.y - r
            }
          };

        default:
          return {
            from: {
              x: 0,
              y: 0
            },
            to: {
              x: 0,
              y: 0
            }
          };
      }
    }
  }, {
    key: "calThreeLine",
    value:
    /**
     * 3 line (cardinaly: n)
     * Cardinary： n ケースの座標を計算する。
     *
     * Line の from, to で向きを決める。
     *
     * d: port
     * distance: between port and entity
     * **************************************************************** */
    function calThreeLine(from, to, distance) {
      switch (this.portDirection(from, to)) {
        case 'DOWN':
          return [[from.x - distance, from.y], [from.x, from.y + distance], [from.x + distance, from.y]];

        case 'DOWN':
          return [[from.x - distance, from.y], [from.x, from.y - distance], [from.x + distance, from.y]];

        case 'RIGHT':
          return [[from.x, from.y - distance], [from.x + distance, from.y], [from.x, from.y + distance]];

        case 'LEFT':
          return [[from.x, from.y - distance], [from.x - distance, from.y], [from.x, from.y + distance]];

        default:
          return [[0, 0], [0, 0], [0, 0]];
      }
    }
  }, {
    key: "calCircle",
    value:
    /** **************************************************************** *
     * null のための 丸
     * **************************************************************** */
    function calCircle(from, to, distance) {
      // const distance = 28;
      switch (this.portDirection(from, to)) {
        case 'DOWN':
          return {
            x: from.x,
            y: from.y + distance
          };

        case 'DOWN':
          return {
            x: from.x,
            y: from.y - distance
          };

        case 'RIGHT':
          return {
            x: from.x + distance,
            y: from.y
          };

        case 'LEFT':
          return {
            x: from.x - distance,
            y: from.y
          };

        default:
          return {
            x: 0,
            y: 0
          };
      }
    }
  }, {
    key: "addPort2Entity",
    value:
    /* **************************************************************** *
     *
     * **************************************************************** */
    function addPort2Entity(entity) {
      var port = this;
      entity.ports.items.ht[port.id()] = port;
      entity.ports.items.list.push(port);
    }
  }, {
    key: "position_degree",
    value: function position_degree() {
      return this._core.position % 360;
    }
  }]);

  return Port;
}(_Atman2["default"]);

exports["default"] = Port;