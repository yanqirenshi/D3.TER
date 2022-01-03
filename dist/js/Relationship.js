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

var Relationship = /*#__PURE__*/function () {
  function Relationship() {
    _classCallCheck(this, Relationship);

    this.i = 100000000;
  }

  _createClass(Relationship, [{
    key: "list2pool",
    value: function list2pool(list) {
      var pool = new _Pool["default"]().list2pool(list, function (d) {
        return d;
      });
      pool.indexes = {
        from: {},
        to: {}
      };
      return pool;
    }
  }, {
    key: "template",
    value: function template() {
      return {
        _id: null,
        _class: 'RELATIONSHIP',
        from: null,
        to: null
      };
    }
  }, {
    key: "build",
    value: function build(core, port_from, port_to) {
      var element = this.template();
      element._id = this.i++;
      element.from = port_from;
      element.to = port_to;
      port_from._relationship = element;
      port_to._relationship = element;
      element._core = core;
      core._element = element;
      return element;
    }
    /* **************************************************************** *
     *                                                                  *
     * **************************************************************** */

  }, {
    key: "drawCore",
    value: function drawCore(edges) {
      edges.attr('x1', function (d) {
        var port = d.from;
        var entity = d.from._entity;
        return port.position.x + entity.position.x;
      }).attr('y1', function (d) {
        var port = d.from;
        var entity = d.from._entity;
        return port.position.y + entity.position.y;
      }).attr('x2', function (d) {
        var port = d.to;
        var entity = d.to._entity;
        return port.position.x + entity.position.x;
      }).attr('y2', function (d) {
        var port = d.to;
        var entity = d.to._entity;
        return port.position.y + entity.position.y;
      }).attr('stroke', '#888888').attr('stroke-width', 1);
    }
  }, {
    key: "draw",
    value: function draw(place, relationships) {
      var data = relationships.list.filter(function (edge) {
        return edge.from._class === 'PORT-FROM' && edge.to._class === 'PORT-TO';
      });
      var edges = place.selectAll('line.connector').data(data, function (d) {
        return d._id;
      }).enter().append('line').attr('class', 'connector');
      this.drawCore(edges);
    }
  }]);

  return Relationship;
}();

exports["default"] = Relationship;