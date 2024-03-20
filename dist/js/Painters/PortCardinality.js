"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PortCardinality = /*#__PURE__*/function () {
  function PortCardinality(parent) {
    _classCallCheck(this, PortCardinality);

    this._parent = parent;
  }

  _createClass(PortCardinality, [{
    key: "rectum",
    value: function rectum() {
      return this._parent.rectum();
    }
  }, {
    key: "style",
    value: function style() {
      return this.rectum().style();
    }
    /* **************************************************************** *
     *  Draw Line (port to entity)
     * **************************************************************** */

  }, {
    key: "drawLine",
    value: function drawLine(g) {
      var _this = this;

      var lines = g.selectAll('line').data(function (d) {
        return d.ports.items.list;
      }, function (d) {
        return d.id();
      });
      console.log();
      console.log();

      var draw = function draw(selection) {
        selection.attr("x1", function (d) {
          return d.linePosition().from.x;
        }).attr("y1", function (d) {
          return d.linePosition().from.y;
        }).attr("x2", function (d) {
          return d.linePosition().to.x;
        }).attr("y2", function (d) {
          return d.linePosition().to.y;
        }).attr("stroke-width", _this.style().port.stroke.width).attr("stroke", _this.style().port.stroke.color);
      }; // delete


      lines.exit().remove(); // update

      draw(lines); // add

      var add_targets = lines.enter().append("line");
      draw(add_targets);
    }
  }, {
    key: "drawCardinalityOne",
    value: function drawCardinalityOne(g) {
      var _this2 = this;

      var filter = function filter() {
        var ports = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return ports.filter(function (port) {
          return port.cardinality() === 1;
        });
      };

      var cardinalities = g.selectAll('line.cardinality').data(function (d) {
        return filter(d.ports.items.list);
      }, function (d) {
        return d.id();
      });

      var draw = function draw(selection) {
        selection.attr("x1", function (d) {
          return d.cardinalityPosition().from.x;
        }).attr("y1", function (d) {
          return d.cardinalityPosition().from.y;
        }).attr("x2", function (d) {
          return d.cardinalityPosition().to.x;
        }).attr("y2", function (d) {
          return d.cardinalityPosition().to.y;
        }).attr("stroke-width", _this2.style().port.stroke.width).attr("stroke", _this2.style().port.stroke.color);
      }; // delete


      cardinalities.exit().remove(); // update

      draw(cardinalities); // add

      var add_targets = cardinalities.enter().append('line').classed("cardinality", true);
      draw(add_targets);
    }
  }, {
    key: "drawCardinalityThree",
    value: function drawCardinalityThree(g) {
      var _this3 = this;

      var filter = function filter() {
        var ports = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return ports.filter(function (port) {
          return port.cardinality() === 3;
        });
      };

      var cardinalities = g.selectAll('path.cardinality').data(function (d) {
        return filter(d.ports.items.list);
      }, function (d) {
        return d.id();
      });
      var line = d3.line().x(function (d) {
        return d[0];
      }).y(function (d) {
        return d[1];
      });

      var draw = function draw(selection) {
        selection.attr('d', function (d) {
          return line(d._cardinality);
        }).attr("fill", 'none').attr("stroke-width", _this3.style().port.stroke.width).attr("stroke", _this3.style().port.stroke.color);
      }; // delete


      cardinalities.exit().remove(); // update

      draw(cardinalities); // add

      var add_targets = cardinalities.enter().append('path').classed("cardinality", true);
      draw(add_targets);
    }
  }, {
    key: "draw",
    value: function draw(g) {
      this.drawLine(g);
      this.drawCardinalityOne(g);
      this.drawCardinalityThree(g);
    }
  }]);

  return PortCardinality;
}();

exports["default"] = PortCardinality;