"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _assh0le = _interopRequireDefault(require("@yanqirenshi/assh0le"));

var _Entity = _interopRequireDefault(require("./Entity.js"));

var _Identifier = _interopRequireDefault(require("./Identifier.js"));

var _IdentifierInstance = _interopRequireDefault(require("./IdentifierInstance.js"));

var _Attribute = _interopRequireDefault(require("./Attribute.js"));

var _AttributeInstance = _interopRequireDefault(require("./AttributeInstance.js"));

var _Relationship = _interopRequireDefault(require("./Relationship.js"));

var _Port = _interopRequireDefault(require("./Port.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var AssholeD3TER = /*#__PURE__*/function (_Asshole) {
  _inherits(AssholeD3TER, _Asshole);

  var _super = _createSuper(AssholeD3TER);

  function AssholeD3TER() {
    var _this;

    _classCallCheck(this, AssholeD3TER);

    _this = _super.call(this);
    _this.entity = new _Entity["default"]();
    _this.relationship = new _Relationship["default"]();
    _this.attribute = new _Attribute["default"]();
    _this.attribute_instance = new _AttributeInstance["default"]();
    _this.identifier = new _Identifier["default"]();
    _this.identifier_instance = new _IdentifierInstance["default"]();
    _this.port = new _Port["default"]();
    _this._entities = _this.entity.list2pool([]);
    _this._relationships = _this.relationship.list2pool([]);
    _this._identifier = _this.identifier.list2pool([]);
    _this._attribute = _this.attribute.list2pool([]);
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
   *  Data manegement
   * **************************************************************** */


  _createClass(AssholeD3TER, [{
    key: "isEntityClass",
    value: function isEntityClass(_class) {
      var classes = ['RESOURCE', 'RESOURCE-SUBSET', 'EVENT', 'EVENT-SUBSET'];
      return classes.indexOf(_class) > -1;
    }
  }, {
    key: "buildRelationshipsWithPort",
    value: function buildRelationshipsWithPort(relationships, entities) {
      var out = {
        list: [],
        ht: {}
      };

      var _iterator = _createForOfIteratorHelper(relationships),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var core = _step.value;
          var identifier_from = this.entity.getIdentifier(core.from.id, entities);
          var identifier_to = this.entity.getIdentifier(core.to.id, entities);
          var port_from = this.port.build('from', core.from.position, identifier_from);
          var port_to = this.port.build('to', core.to.position, identifier_to);
          var element = this.relationship.build(core, port_from, port_to);
          var entity_from = identifier_from._entity;
          var entity_to = identifier_to._entity;
          port_from._entity = entity_from;
          port_to._entity = entity_to;
          entity_from.ports.items.ht[port_from._id] = port_from;
          entity_from.ports.items.list.push(port_from);
          entity_to.ports.items.ht[port_to._id] = port_to;
          entity_to.ports.items.list.push(port_to);
          out.list.push(element);
          out.ht[element._id] = element;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return out;
    }
  }, {
    key: "dataCore",
    value: function dataCore(data) {
      var _this2 = this;

      this._identifiers = this.identifier.list2pool(data.identifiers, function (d) {
        return _this2.identifier.build(d);
      });
      this._attributes = this.identifier.list2pool(data.attributes, function (d) {
        return _this2.attribute.build(d);
      });
      var elements = {
        identifiers: this._identifiers,
        attributes: this._attributes
      };
      this._entities = this.entity.list2pool(data.entities, function (d) {
        return _this2.entity.build(d, elements);
      });
      this.entity.sizing(this._entities.list);
      this._relationships = this.buildRelationshipsWithPort(data.relationships, this._entities);
    }
  }, {
    key: "data",
    value: function data(_data) {
      this.dataCore(_data);
      this.draw();
      return this;
    }
    /* **************************************************************** *
     *  Drag & Drop
     * **************************************************************** */

  }, {
    key: "moveEdges",
    value: function moveEdges(edges) {// TODO:
    }
  }, {
    key: "moveEntity",
    value: function moveEntity(entity) {
      var selection = this.getLayerForeground().selectAll('g.entity').data([entity], function (d) {
        return d._id;
      });
      selection.attr('transform', function (d) {
        return 'translate(' + d.position.x + ',' + d.position.y + ')';
      }); // this.moveEdges([...]);
    }
  }, {
    key: "movePort",
    value: function movePort(entity_core, port_core) {
      var entity = this._data.find(function (d) {
        return d._id === entity_core._id;
      });

      var port = entity.ports.items.ht[port_core._id];
      this.positioningPort(entity, port); // redraw ports

      var ports = this.getLayerForeground().selectAll('circle.entity-port').data([port], function (d) {
        return d._id;
      });
      this.drawPortsCore(ports); // redraw edge

      var edges = [];

      var add_edges = function add_edges(ht) {
        for (var k in ht) {
          var edge = ht[k];
          if (edge.from_class === "PORT-TER" && edge.to_class === "PORT-TER") edges.push(edge);
        }
      };

      add_edges(this._relationships.indexes.from[port._id]);
      add_edges(this._relationships.indexes.to[port._id]);
      var elements = this.getLayerBackground().selectAll('line.connector').data(edges, function (d) {
        return d._id;
      });
      this.drawEdgesCore(elements);
    }
    /* **************************************************************** *
     *  Draw
     * **************************************************************** */

  }, {
    key: "draw",
    value: function draw() {
      this._callbacks = {};
      this.entity.draw(this.getLayerForeground(), this._entities);
      this.relationship.draw(this.getLayerBackground(), this._relationships);
    }
    /* **************************************************************** *
     *  move port
     * **************************************************************** */

    /* **************************************************************** *
     *  to Json
     * **************************************************************** */

  }, {
    key: "stateTER2Json",
    value: function stateTER2Json(state) {
      var out = {};
      out.cameras = state.cameras.list;
      out.entities = state.entities.list;

      var modifyColumns = function modifyColumns(obj) {
        var new_data = Object.assign({}, obj);
        delete new_data._entity;
        delete new_data._parent;
        return new_data;
      };

      out.identifier_instances = state.identifier_instances.list.map(modifyColumns);
      out.attribute_instances = state.attribute_instances.list.map(modifyColumns);
      out.relationships = state.relationships.list.map(function (obj) {
        var new_data = Object.assign({}, obj);
        delete new_data._from;
        delete new_data._to;
        return new_data;
      });
      out.ports = state.ports.list.map(function (obj) {
        var new_data = Object.assign({}, obj);
        delete new_data._element;
        return new_data;
      });
      return JSON.stringify(out, null, 3);
    }
  }, {
    key: "downloadJson",
    value: function downloadJson(name, json) {
      var blob = new Blob([json], {
        type: 'application/json'
      });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.target = '_blank';
      a.download = name + '.' + (0, _moment["default"])().format('YYYYMMDDHHmmssZZ') + '.json';
      a.click();
    }
  }]);

  return AssholeD3TER;
}(_assh0le["default"]);

exports["default"] = AssholeD3TER;