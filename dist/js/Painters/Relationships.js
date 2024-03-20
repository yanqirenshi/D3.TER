"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Relationships = /*#__PURE__*/function () {
  function Relationships(parent) {
    _classCallCheck(this, Relationships);

    this._parent = parent;
  }

  _createClass(Relationships, [{
    key: "callbacks",
    value: function callbacks() {
      return this._parent.callbacks;
    } // public

  }, {
    key: "drawRelationshipsCore",
    value: function drawRelationshipsCore(edges) {
      edges.attr('x1', function (d) {
        var port = d.from;
        var entity = d.from._owner;
        return port.position().x + entity.position.x;
      }).attr('y1', function (d) {
        var port = d.from;
        var entity = d.from._owner;
        return port.position().y + entity.position.y;
      }).attr('x2', function (d) {
        var port = d.to;
        var entity = d.to._owner;
        return port.position().x + entity.position.x;
      }).attr('y2', function (d) {
        var port = d.to;
        var entity = d.to._owner;
        return port.position().y + entity.position.y;
      }).attr('stroke', '#888888').attr('stroke-width', 1);
    }
  }, {
    key: "drawRelationships",
    value: function drawRelationships(place, relationships) {
      var callbacks = this.callbacks();
      var data = relationships.list.filter(function (edge) {
        return edge.from._class === 'PORT-FROM' && edge.to._class === 'PORT-TO';
      });
      var edges = place.selectAll('line.connector').data(data, function (d) {
        return d._id;
      }).enter().append('line').on("click", function (event, d) {
        var func = callbacks.relationship.click;
        if (func) func(d);
      }).attr('class', 'connector');
      this.drawRelationshipsCore(edges);
    }
  }]);

  return Relationships;
}();

exports["default"] = Relationships;