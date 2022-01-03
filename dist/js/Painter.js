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

var Painter = /*#__PURE__*/function () {
  function Painter() {
    _classCallCheck(this, Painter);

    this._default = {
      line: {
        height: 14,
        font: {
          size: 14
        }
      }
    };
  }
  /* **************************************************************** *
   *   Move
   * **************************************************************** */


  _createClass(Painter, [{
    key: "dragStart",
    value: function dragStart(d) {// let e = d3.event;
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
      var _this = this;

      return body.call(d3.drag().on("start", function (d) {
        return _this.dragStart(d);
      }).on("drag", function (d) {
        return _this.dragged(d);
      }).on("end", function (d) {
        return _this.dragEnd(d);
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
      }).attr('rx', function (d) {
        return 5;
      }).attr('ry', function (d) {
        return 5;
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
      }).attr('rx', function (d) {
        return 3;
      }).attr('ry', function (d) {
        return 3;
      }).attr('fill', function (d) {
        return d.background.color;
      });
    }
  }, {
    key: "drawNameText",
    value: function drawNameText(texts) {
      var _this2 = this;

      return texts.attr('class', 'entity-title').attr("x", function (d) {
        return d.padding + d.name.padding;
      }).attr("y", function (d) {
        return d.padding + d.name.padding + _this2._default.line.font.size;
      }).attr("fill", function (d) {
        return '#fff';
      }).attr("font-size", function (d) {
        return 24;
      }).text(function (d) {
        return d.name.val();
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
      }).attr('rx', function (d) {
        return 3;
      }).attr('ry', function (d) {
        return 3;
      }).attr('fill', function (d) {
        return d.background.color;
      });
    }
  }, {
    key: "drawTypeText",
    value: function drawTypeText(selection) {
      var _this3 = this;

      return selection.attr("x", function (d) {
        return d.padding + d.name.size.w + 11 + d.type.padding;
      }).attr("y", function (d) {
        return d.type.position.y + d.type.padding + _this3._default.line.font.size;
      }).attr("fill", function (d) {
        return '#fff';
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
      this.drawTypeText(texts).each(function (d) {
        var w = this.getBBox().width;
        if (w > (d.type._max_w || 0)) d.type._max_w = w;
      });
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
      }).attr('rx', function (d) {
        return 2;
      }).attr('ry', function (d) {
        return 2;
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
        return d.name.val();
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
      }).attr('rx', function (d) {
        return 3;
      }).attr('ry', function (d) {
        return 3;
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
        return d.name.val();
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
        return d._owner._core.position || 0;
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
     *  relationships                       *
     * ************************************ */

  }, {
    key: "drawRelationshipsCore",
    value: function drawRelationshipsCore(edges) {
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
    key: "drawRelationships",
    value: function drawRelationships(place, relationships) {
      var data = relationships.list.filter(function (edge) {
        return edge.from._class === 'PORT-FROM' && edge.to._class === 'PORT-TO';
      });
      var edges = place.selectAll('line.connector').data(data, function (d) {
        return d._id;
      }).enter().append('line').attr('class', 'connector');
      this.drawRelationshipsCore(edges);
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
    value: function draw(fore, back, entities, relationsihps) {
      var groups = this.drawGroup(fore, entities.list);
      this.drawBody(groups);
      this.drawName(groups, this._callbacks);
      this.drawType(groups);
      this.drawIdentifiers(groups);
      this.drawAttributes(groups); // resizing & redraw

      groups.each(function (entity) {
        return entity.reSizing().positioning();
      });
      this.redraw(groups);
      this.drawPorts(groups);
      this.drawRelationships(back, relationsihps);
    }
  }]);

  return Painter;
}();

exports["default"] = Painter;