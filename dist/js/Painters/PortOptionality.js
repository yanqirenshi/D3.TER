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

var PortOptionality = /*#__PURE__*/function () {
  function PortOptionality() {
    _classCallCheck(this, PortOptionality);
  }

  _createClass(PortOptionality, [{
    key: "drawOptionalityOne",
    value: function drawOptionalityOne(g) {
      var _this = this;

      var filter = function filter() {
        var ports = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return ports.filter(function (d) {
          return d.optionality === 1;
        });
      };

      var optionalities = g.selectAll('line.optionality').data(function (d) {
        return filter(d._ports);
      }, function (d) {
        return d._id;
      });
      optionalities.enter().each(function (d) {
        return d.line_optionality = _this.calOneLine(d, 22);
      }).append('line').classed("optionality", true).attr("x1", function (d) {
        return d.line_optionality.from.x;
      }).attr("y1", function (d) {
        return d.line_optionality.from.y;
      }).attr("x2", function (d) {
        return d.line_optionality.to.x;
      }).attr("y2", function (d) {
        return d.line_optionality.to.y;
      }).attr("stroke-width", 3).attr("stroke", "#a3a3a2");
    }
  }, {
    key: "drawOptionalityZero",
    value: function drawOptionalityZero(g) {
      var _this2 = this;

      var filter = function filter() {
        var ports = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return ports.filter(function (d) {
          return d.optionality === 0;
        });
      };

      var optionalities = g.selectAll('circle.optionality').data(function (d) {
        return filter(d._ports);
      }, function (d) {
        return d._id;
      });
      optionalities.each(function (d) {
        return d.line_circle = _this2.calCircle(d);
      }).attr("cx", function (d) {
        return d.line_circle.x;
      }).attr("cy", function (d) {
        return d.line_circle.y;
      }).attr("r", 5).attr("fill", "#fefefe").attr("stroke-width", 3).attr("stroke", "#a3a3a2");
      optionalities.enter().each(function (d) {
        return d.line_circle = _this2.calCircle(d);
      }).append("circle").classed("optionality", true).attr("cx", function (d) {
        return d.line_circle.x;
      }).attr("cy", function (d) {
        return d.line_circle.y;
      }).attr("r", 5).attr("fill", "#fefefe").attr("stroke-width", 3).attr("stroke", "#a3a3a2");
    }
  }, {
    key: "draw",
    value: function draw(g) {
      // E1のインスタンス1つに対応する、E2のインスタンスの最小数
      this.drawOptionalityOne(g);
      this.drawOptionalityZero(g);
    }
  }]);

  return PortOptionality;
}();

exports["default"] = PortOptionality;