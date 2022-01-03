"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var d3 = _interopRequireWildcard(require("d3"));

var _Pool = _interopRequireDefault(require("./Pool.js"));

var _EntityTailor2 = _interopRequireDefault(require("./EntityTailor.js"));

var _IdentifierInstance = _interopRequireDefault(require("./IdentifierInstance.js"));

var _AttributeInstance = _interopRequireDefault(require("./AttributeInstance.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Entity = /*#__PURE__*/function (_EntityTailor) {
  _inherits(Entity, _EntityTailor);

  var _super = _createSuper(Entity);

  function Entity() {
    var _this;

    _classCallCheck(this, Entity);

    _this = _super.call(this);
    _this.attribute_instance = new _AttributeInstance["default"]();
    _this.identifier_instance = new _IdentifierInstance["default"]();
    _this._default = {
      line: {
        height: 14,
        font: {
          size: 14
        }
      }
    };
    return _this;
  }
  /* **************************************************************** *
   *
   * **************************************************************** */


  _createClass(Entity, [{
    key: "list2pool",
    value: function list2pool(list, f) {
      return new _Pool["default"]().list2pool(list, f);
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
    /* **************************************************************** *
     *   Move
     * **************************************************************** */

  }, {
    key: "dragStart",
    value: function dragStart(d) {
      console.log(d); // let e = d3.event;
      // d._drag = {
      //     start: {
      //         x: e.x,
      //         y: e.y,
      //     }
      // };
    }
  }, {
    key: "dragged",
    value: function dragged(d) {// let e = d3.event;
      // d.position.x += e.x - d._drag.start.x;
      // d.position.y += e.y - d._drag.start.y;
      // this.moveEntity(d);
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(entity) {// let campus = STORE.get('active.ter.campus');
      // delete entity._drag;
      // ACTIONS.saveTerEntityPosition(campus, entity);
    }
  }, {
    key: "addMoveEvents2Body",
    value: function addMoveEvents2Body(body) {
      var _this2 = this;

      return body.call(d3.drag().on("start", function (d) {
        console.log(d);
        return _this2.dragStart(d);
      }).on("drag", function (d) {
        return _this2.dragged(d);
      }).on("end", function (d) {
        return _this2.dragEnd(d);
      }));
    }
    /* **************************************************************** *
     *   Draw  this.entity
     * **************************************************************** */

  }, {
    key: "drawGroup",
    value: function drawGroup(place, data) {
      return place.selectAll('g.entity').data(data, function (d) {
        return d._id;
      }).enter().append('g').attr('class', 'entity').attr('entity-id', function (d) {
        return d._id;
      }).attr('entity-code', function (d) {
        return d._core.type;
      }).attr('entity-type', function (d) {
        return d._class;
      }).attr("transform", function (d) {
        return "translate(" + d.position.x + "," + d.position.y + ")";
      });
    }
    /* ************************************ *
     *  Body                                *
     * ************************************ */

  }, {
    key: "drawBodyCore",
    value: function drawBodyCore(body) {
      body.attr('class', 'entity-body').attr('width', function (d) {
        return d.size.w;
      }).attr('height', function (d) {
        return d.size.h;
      }).attr('fill', function (d) {
        return d.background.color;
      });
    }
  }, {
    key: "drawBody",
    value: function drawBody(groups) {
      var body = groups.append('rect');
      this.drawBodyCore(body);
      return this.addMoveEvents2Body(body);
    }
    /* ************************************ *
     *  Name                                *
     * ************************************ */

  }, {
    key: "drawNameRect",
    value: function drawNameRect(rects) {
      rects.attr('x', function (d) {
        return d.name.position.x;
      }).attr('y', function (d) {
        return d.name.position.y;
      }).attr('width', function (d) {
        return d.name.size.w;
      }).attr('height', function (d) {
        return d.name.size.h;
      }).attr('fill', function (d) {
        return '#ffffff';
      });
    }
  }, {
    key: "drawNameText",
    value: function drawNameText(texts) {
      var _this3 = this;

      return texts.attr('class', 'entity-title').attr("x", function (d) {
        return d.padding + d.name.padding;
      }).attr("y", function (d) {
        return d.padding + d.name.padding + _this3._default.line.font.size;
      }).text(function (d) {
        return d.name.contents.logical;
      });
    }
  }, {
    key: "drawName",
    value: function drawName(groups, callbacks) {
      var rects = groups.append('rect').on("click", function (d) {
        var func = callbacks.entity.click;
        if (func) func(d);
      }).attr('class', 'entity-title');
      this.drawNameRect(rects);
      var texts = groups.append('text').on("click", function (d) {
        var func = callbacks.entity.click;
        if (func) func(d);
      }).attr('class', 'entity-title');
      this.drawNameText(texts).each(function (d) {
        if (!d._max) d._max_w = {
          name: 0,
          identifier: 0,
          attribute: 0
        };
        var w = this.getBBox().width;
        if (w > d._max_w.name) d._max_w.name = w;
      });
    }
    /* ************************************ *
    *  Type                                *
    * ************************************ */

  }, {
    key: "drawTypeRect",
    value: function drawTypeRect(selection) {
      selection.attr('x', function (d) {
        return d.type.position.x;
      }).attr('y', function (d) {
        return d.type.position.y;
      }).attr('width', function (d) {
        return d.type.size.w;
      }).attr('height', function (d) {
        return d.type.size.h;
      }).attr('fill', function (d) {
        return '#ffffff';
      });
    }
  }, {
    key: "drawTypeText",
    value: function drawTypeText(selection) {
      var _this4 = this;

      selection.attr("x", function (d) {
        return d.padding + d.name.size.w + 11 + d.type.padding;
      }).attr("y", function (d) {
        return d.type.position.y + d.type.padding + _this4._default.line.font.size;
      }).text(function (d) {
        return d.type.contents;
      });
    }
  }, {
    key: "drawType",
    value: function drawType(groups) {
      var rects = groups.append('rect').attr('class', 'entity-type');
      this.drawTypeRect(rects);
      var texts = groups.append('text').attr('class', 'entity-type');
      this.drawTypeText(texts);
    }
    /* ************************************ *
     *  Identifiers                         *
     * ************************************ */

  }, {
    key: "drawIdentifiersRect",
    value: function drawIdentifiersRect(rects) {
      rects.attr('x', function (d) {
        return d.identifiers.position.x;
      }).attr('y', function (d) {
        return d.identifiers.position.y;
      }).attr('width', function (d) {
        return d.identifiers.size.w;
      }).attr('height', function (d) {
        return d.identifiers.size.h;
      }).attr('fill', function (d) {
        return d.identifiers.background.color;
      });
    }
  }, {
    key: "drawIdentifiersText",
    value: function drawIdentifiersText(texts) {
      return texts.attr("x", function (d) {
        return d.position.x;
      }).attr("y", function (d) {
        return d.position.y;
      }).text(function (d) {
        return d.name.logical;
      });
    }
  }, {
    key: "drawIdentifiers",
    value: function drawIdentifiers(groups) {
      var rects = groups.append('rect').attr('class', 'entity-identifiers');
      this.drawIdentifiersRect(rects);
      var texts = groups.selectAll('text.identifier').data(function (d) {
        return d.identifiers.contents.list;
      }).enter().append('text').attr('class', 'identifier').attr('identifier-id', function (d) {
        return d._id;
      });
      this.drawIdentifiersText(texts).each(function (identifier) {
        var w = this.getBBox().width;
        if (w > identifier._entity._max_w.identifier) identifier._entity._max_w.identifier = w;
      });
    }
    /* ************************************ *
     *  Attributes                          *
     * ************************************ */

  }, {
    key: "drawAttributesRect",
    value: function drawAttributesRect(rects) {
      rects.attr('x', function (d) {
        return d.attributes.position.x;
      }).attr('y', function (d) {
        return d.attributes.position.y;
      }).attr('width', function (d) {
        return d.attributes.size.w;
      }).attr('height', function (d) {
        return d.attributes.size.h;
      }).attr('fill', function (d) {
        return d.identifiers.background.color;
      });
    }
  }, {
    key: "drawAttributesText",
    value: function drawAttributesText(texts) {
      return texts.attr("x", function (d) {
        return d.position.x;
      }).attr("y", function (d) {
        return d.position.y;
      }).text(function (d) {
        return d.name.logical;
      });
    }
  }, {
    key: "drawAttributes",
    value: function drawAttributes(groups) {
      var rects = groups.append('rect').attr('class', 'entity-attributes');
      this.drawAttributesRect(rects);
      var texts = groups.selectAll('text.attribute').data(function (d) {
        return d.attributes.contents.list;
      }).enter().append('text').attr('class', 'attribute').attr('attribute-id', function (d) {
        return d._id;
      });
      this.drawAttributesText(texts).each(function (attribute) {
        var w = this.getBBox().width;
        if (w > attribute._entity._max_w.attribute) attribute._entity._max_w.attribute = w;
      });
    }
    /* ************************************ *
     *  Port                                *
     * ************************************ */

  }, {
    key: "drawPortsCore",
    value: function drawPortsCore(ports) {
      ports.attr('class', 'entity-port').attr('cx', function (d) {
        return d.position.x;
      }).attr('cy', function (d) {
        return d.position.y;
      }).attr('r', 4).attr('fill', '#fff').attr('stroke', '#000').attr('stroke-width', 0.5).attr('degree', function (d) {
        return d._idenrifier_instance._core.position || 0;
      }).attr('port-id', function (d) {
        return d._id;
      });
    }
  }, {
    key: "drawPorts",
    value: function drawPorts(groups) {
      var ports = groups.selectAll('circle.entity-port').data(function (d) {
        return d.ports.items.list;
      }).enter().append('circle');
      this.drawPortsCore(ports);
    }
    /* ************************************ *
     *  Draw Main                           *
     * ************************************ */

  }, {
    key: "redraw",
    value: function redraw(groups) {
      this.drawBodyCore(groups.selectAll('rect.entity-body'));
      this.drawNameRect(groups.selectAll('rect.entity-title'));
      this.drawNameText(groups.selectAll('text.entity-title'));
      this.drawTypeRect(groups.selectAll('rect.entity-type'));
      this.drawTypeText(groups.selectAll('text.entity-type'));
      this.drawIdentifiersRect(groups.selectAll('rect.entity-identifiers'));
      this.drawIdentifiersText(groups.selectAll('text.identifier'));
      this.drawAttributesRect(groups.selectAll('rect.entity-attributes'));
      this.drawAttributesText(groups.selectAll('text.attribute'));
    }
  }, {
    key: "draw",
    value: function draw(place, entities) {
      var groups = this.drawGroup(place, entities.list);
      this.drawBody(groups);
      this.drawName(groups, this._callbacks);
      this.drawType(groups);
      this.drawIdentifiers(groups);
      this.drawAttributes(groups);
      this.reSizing(groups, entities);
      this.drawPorts(groups);
    }
  }]);

  return Entity;
}(_EntityTailor2["default"]);

exports["default"] = Entity;