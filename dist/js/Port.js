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
    _this.position = relatihonship_data.position || {
      x: 0,
      y: 0
    };

    _this.addPort2Entity(entity);

    _this._entity = null;
    _this.geometry = new _Geometry["default"]();
    return _this;
  }

  _createClass(Port, [{
    key: "degree",
    value: function degree() {
      return this._core.position || 0;
    }
    /* **************************************************************** *
     *  Data manegement
     * **************************************************************** */

  }, {
    key: "calLinePoints",
    value: function calLinePoints(port) {
      var table = port._column_instance._table;
      var rect = {
        position: {
          x: table.x,
          y: table.y
        },
        size: {
          w: table.w,
          h: table.h
        }
      };
      var geometry = this.geometry;
      var four_side_lines = geometry.getFourSideLines(rect);
      var line_port = geometry.getPortLine(port, rect);
      var cross_point = geometry.getCrossPoint(four_side_lines, line_port);
      var len = 33 + 4;
      var to_point = cross_point.point;
      var from_point;

      if (cross_point.target === 'top') {
        from_point = {
          x: to_point.x,
          y: to_point.y + len
        };
      } else if (cross_point.target === 'right') {
        from_point = {
          x: to_point.x - len,
          y: to_point.y
        };
      } else if (cross_point.target === 'bottom') {
        from_point = {
          x: to_point.x,
          y: to_point.y - len
        };
      } else if (cross_point.target === 'left') {
        from_point = {
          x: to_point.x + len,
          y: to_point.y
        };
      }

      return {
        from: from_point,
        to: to_point
      };
    }
  }, {
    key: "calOneLine",
    value: function calOneLine(d, distance) {
      var r = 11;

      if (d.line.from.x === d.line.to.x) {
        // 縦
        if (d.line.from.y < d.line.to.y) {
          // (2)
          return {
            from: {
              x: d.line.from.x + r,
              y: d.line.from.y + distance
            },
            to: {
              x: d.line.from.x - r,
              y: d.line.from.y + distance
            }
          };
        } else if (d.line.from.y > d.line.to.y) {
          // (1)
          return {
            from: {
              x: d.line.from.x + r,
              y: d.line.from.y - distance
            },
            to: {
              x: d.line.from.x - r,
              y: d.line.from.y - distance
            }
          };
        }
      } else if (d.line.from.y === d.line.to.y) {
        // 横
        if (d.line.from.x < d.line.to.x) {
          // (2)
          return {
            from: {
              x: d.line.from.x + distance,
              y: d.line.from.y + r
            },
            to: {
              x: d.line.from.x + distance,
              y: d.line.from.y - r
            }
          };
        } else if (d.line.from.x > d.line.to.x) {
          // (1)
          return {
            from: {
              x: d.line.from.x - distance,
              y: d.line.from.y + r
            },
            to: {
              x: d.line.from.x - distance,
              y: d.line.from.y - r
            }
          };
        }
      }

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
  }, {
    key: "calThreeLine",
    value: function calThreeLine(d, distance) {
      if (d.line.from.x === d.line.to.x) {
        // 縦
        if (d.line.from.y < d.line.to.y) {
          return [[d.line.from.x - distance, d.line.from.y], [d.line.from.x, d.line.from.y + distance], [d.line.from.x + distance, d.line.from.y]];
        } else if (d.line.from.y > d.line.to.y) {
          return [[d.line.from.x - distance, d.line.from.y], [d.line.from.x, d.line.from.y - distance], [d.line.from.x + distance, d.line.from.y]];
        }
      } else if (d.line.from.y === d.line.to.y) {
        // 横
        if (d.line.from.x < d.line.to.x) {
          return [[d.line.from.x, d.line.from.y - distance], [d.line.from.x + distance, d.line.from.y], [d.line.from.x, d.line.from.y + distance]];
        } else if (d.line.from.x > d.line.to.x) {
          return [[d.line.from.x, d.line.from.y - distance], [d.line.from.x - distance, d.line.from.y], [d.line.from.x, d.line.from.y + distance]];
        }
      }

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
  }, {
    key: "calCircle",
    value: function calCircle(d) {
      var distance = 22;

      if (d.line.from.x === d.line.to.x) {
        // 縦
        if (d.line.from.y < d.line.to.y) {
          // (2)
          return {
            x: d.line.from.x,
            y: d.line.from.y + distance
          };
        } else if (d.line.from.y > d.line.to.y) {
          // (1)
          return {
            x: d.line.from.x,
            y: d.line.from.y - distance
          };
        }
      } else if (d.line.from.y === d.line.to.y) {
        // 横
        if (d.line.from.x < d.line.to.x) {
          // (2)
          return {
            x: d.line.from.x + distance,
            y: d.line.from.y
          };
        } else if (d.line.from.x > d.line.to.x) {
          // (1)
          return {
            x: d.line.from.x - distance,
            y: d.line.from.y
          };
        }
      }

      return {
        x: 0,
        y: 0
      };
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