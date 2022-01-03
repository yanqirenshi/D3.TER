"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Pool = /*#__PURE__*/function () {
  function Pool() {
    _classCallCheck(this, Pool);
  }

  _createClass(Pool, [{
    key: "list2pool",
    value: function list2pool(list, f) {
      var pool = {
        list: [],
        ht: {}
      };
      if (!list) return pool;
      if (f) return list.reduce(function (acc, val) {
        var new_val = f(val);
        acc.list.push(new_val);
        acc.ht[new_val._id] = new_val;
        return acc;
      }, pool);else return list.reduce(function (acc, val) {
        acc.list.push(val);
        acc.ht[val.id] = val;
        return acc;
      }, pool);
    }
  }]);

  return Pool;
}();

exports["default"] = Pool;