import * as d3 from 'd3';

export default class Painter {
    constructor() {
        this._default = {
            line: {
                height: 14,
                font: {
                    size: 14
                }
            },
        };
    }
    /* **************************************************************** *
     *   Move
     * **************************************************************** */
    dragStart (d) {
        // let e = d3.event;

        // d._drag = {
        //     start: {
        //         x: e.x,
        //         y: e.y,
        //     }
        // };
    }
    dragged (d) {
        // let e = d3.event;

        // d.position.x += e.x - d._drag.start.x;
        // d.position.y += e.y - d._drag.start.y;

        // this.moveEntity(d);
    }
    dragEnd (entity) {
        // let campus = STORE.get('active.ter.campus');

        // delete entity._drag;

        // ACTIONS.saveTerEntityPosition(campus, entity);
    }
    addMoveEvents2Body (body) {
        return body.call(
            d3.drag()
                .on("start", (d) => this.dragStart(d))
                .on("drag",  (d) => { return this.dragged(d); })
                .on("end",   (d) => { return this.dragEnd(d); }));
    }
    /* **************************************************************** *
     *   Draw  this.entity
     * **************************************************************** */
    drawGroup (place, data) {
        return place
            .selectAll('g.entity')
            .data(data, d => d._id)
            .enter()
            .append('g')
            .attr('class', 'entity')
            .attr('entity-id',   d => d._id)
            .attr('entity-code', d => d._core.type)
            .attr('entity-type', d => d._class)
            .attr("transform", (d) => {
                return "translate(" + d.position.x + "," + d.position.y + ")";
            });
    }
    /* ************************************ *
     *  Body                                *
     * ************************************ */
    drawBodyCore (body) {
        body
            .attr('class', 'entity-body')
            .attr('width', (d) => { return d.size.w;})
            .attr('height', (d) => { return d.size.h;})
            .attr('rx', (d) => 5)
            .attr('ry', (d) => 5)
            .attr('fill', (d) => {
                return d.background.color;
            });
    }
    drawBody (groups) {
        let body = groups.append('rect');

        this.drawBodyCore(body);

        return this.addMoveEvents2Body(body);
    }
    /* ************************************ *
     *  Name                                *
     * ************************************ */
    drawNameRect (rects) {
        rects
            .attr('x', (d) => {
                return d.name.position.x;
            })
            .attr('y', (d) => {
                return d.name.position.y;
            })
            .attr('width', (d) => {
                return d.name.size.w;
            })
            .attr('height', (d) => {
                return d.name.size.h;
            })
            .attr('rx', (d) => 3)
            .attr('ry', (d) => 3)
            .attr('fill', (d) => { return '#ffffff'; });

    }
    drawNameText (texts) {
        return texts
            .attr('class', 'entity-title')
            .attr("x", d => d.padding + d.name.padding)
            .attr("y", (d) => {
                return d.padding +
                    d.name.padding +
                    this._default.line.font.size;
            })
            .text(d => d.name.val());
    }
    drawName (groups, callbacks) {
        let rects = groups
            .append('rect')
            .on("click", (d) => {
                let func = callbacks.entity.click;

                if (func) func(d);
            })
            .attr('class', 'entity-title');

        this.drawNameRect(rects);

        let texts = groups
            .append('text')
            .on("click", (d) => {
                let func = callbacks.entity.click;

                if (func) func(d);
            })
            .attr('class', 'entity-title');

        this.drawNameText(texts)
            .each(function (d) {
                if (!d._max)
                    d._max_w = {
                        name:       0,
                        identifier: 0,
                        attribute:  0,
                    };

                let w = this.getBBox().width;

                if (w > d._max_w.name)
                    d._max_w.name = w;
            });
    }
    /* ************************************ *
    *  Type                                *
    * ************************************ */
    drawTypeRect (selection) {
        selection
            .attr('x', (d) => {
                return d.type.position.x;
            })
            .attr('y', (d) => {
                return d.type.position.y;
            })
            .attr('width', (d) => {
                return d.type.size.w;
            })
            .attr('height', (d) => {
                return d.type.size.h;
            })
            .attr('rx', (d) => 3)
            .attr('ry', (d) => 3)
            .attr('fill', (d) => { return '#ffffff'; });
    }
    drawTypeText (selection) {
        selection
            .attr("x", (d) => {
                return d.padding
                    + d.name.size.w
                    + 11
                    + d.type.padding;
            })
            .attr("y", (d) => {
                return d.type.position.y
                    + d.type.padding
                    + this._default.line.font.size;
            })
            .text((d) => {
                return d.type.contents;
            });
    }
    drawType (groups) {
        let rects = groups
            .append('rect')
            .attr('class', 'entity-type');

        this.drawTypeRect(rects);

        let texts = groups
            .append('text')
            .attr('class', 'entity-type');

        this.drawTypeText(texts);
    }
    /* ************************************ *
     *  Identifiers                         *
     * ************************************ */
    drawIdentifiersRect (rects) {
        rects
            .attr('x',      d => d.identifiers.position.x)
            .attr('y',      d => d.identifiers.position.y)
            .attr('width',  d => d.identifiers.size.w)
            .attr('height', d => d.identifiers.size.h)
            .attr('rx', (d) => 3)
            .attr('ry', (d) => 3)
            .attr('fill',   d => d.identifiers.background.color);
    }
    drawIdentifiersText (texts) {
        return texts
            .attr("x", d => d.position.x)
            .attr("y", d => d.position.y)
            .text(d => d.name.val());
    }
    drawIdentifiers (groups) {
        let rects = groups
            .append('rect')
            .attr('class', 'entity-identifiers');

        this.drawIdentifiersRect(rects);

        let texts = groups
            .selectAll('text.identifier')
            .data(d => d.identifiers.contents.list)
            .enter()
            .append('text')
            .attr('class', 'identifier')
            .attr('identifier-id', d => d._id);

        this.drawIdentifiersText(texts)
            .each(function (identifier) {
                let w = this.getBBox().width;

                if (w > identifier._entity._max_w.identifier)
                    identifier._entity._max_w.identifier = w;
            });
    }
    /* ************************************ *
     *  Attributes                          *
     * ************************************ */
    drawAttributesRect (rects) {
        rects
            .attr('x',      d => d.attributes.position.x)
            .attr('y',      d => d.attributes.position.y)
            .attr('width',  d => d.attributes.size.w)
            .attr('height', d => d.attributes.size.h)
            .attr('rx', (d) => 3)
            .attr('ry', (d) => 3)
            .attr('fill',   d => d.identifiers.background.color);
    }
    drawAttributesText (texts) {
        return texts
            .attr("x", d => d.position.x)
            .attr("y", d => d.position.y)
            .text(d => d.name.val());
    }
    drawAttributes (groups) {
        let rects = groups
            .append('rect')
            .attr('class', 'entity-attributes');

        this.drawAttributesRect(rects);

        let texts = groups
            .selectAll('text.attribute')
            .data((d) => {
                return d.attributes.contents.list;
            })
            .enter()
            .append('text')
            .attr('class', 'attribute')
            .attr('attribute-id', (d) => { return d._id; });

        this.drawAttributesText(texts)
            .each(function (attribute) {
                let w = this.getBBox().width;

                if (w > attribute._entity._max_w.attribute)
                    attribute._entity._max_w.attribute = w;
            });
    }
    /* ************************************ *
     *  Port                                *
     * ************************************ */
    drawPortsCore (ports) {
        ports
            .attr('class', 'entity-port')
            .attr('cx', (d) => {
                return d.position.x;
            })
            .attr('cy', (d) => {
                return d.position.y;
            })
            .attr('r', 4)
            .attr('fill', '#fff')
            .attr('stroke', '#000')
            .attr('stroke-width', 0.5)
            .attr('degree', (d) => {
                return d._owner._core.position || 0;
            })
            .attr('port-id', (d) => {
                return d._id;
            });
    }
    drawPorts (groups) {
        let ports = groups
            .selectAll('circle.entity-port')
            .data((d) => {
                return d.ports.items.list;
            })
            .enter()
            .append('circle');

        this.drawPortsCore(ports);
    }
    /* ************************************ *
     *  relationships                       *
     * ************************************ */
    drawRelationshipsCore (edges) {
        edges
            .attr('x1', (d) => {
                let port = d.from;
                let entity = d.from._entity;

                return port.position.x + entity.position.x;
            })
            .attr('y1', (d) => {
                let port = d.from;
                let entity = d.from._entity;

                return port.position.y + entity.position.y;
            })
            .attr('x2', (d) => {
                let port = d.to;
                let entity = d.to._entity;

                return port.position.x + entity.position.x;
            })
            .attr('y2', (d) => {
                let port = d.to;
                let entity = d.to._entity;

                return port.position.y + entity.position.y;
            })
            .attr('stroke', '#888888')
            .attr('stroke-width', 1);
    }
    drawRelationships (place, relationships) {
        let data = relationships.list.filter((edge) => {
            return edge.from._class==='PORT-FROM' && edge.to._class==='PORT-TO';
        });

        let edges = place
            .selectAll('line.connector')
            .data(data, (d) => { return d._id; })
            .enter()
            .append('line')
            .attr('class', 'connector');

        this.drawRelationshipsCore(edges);
    }
    /* ************************************ *
     *  Draw Main                           *
     * ************************************ */
    redraw (groups) {
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
    draw (fore, back, entities, relationsihps) {
        const groups = this.drawGroup(fore, entities.list);

        this.drawBody(groups);
        this.drawName(groups, this._callbacks);
        this.drawType(groups);
        this.drawIdentifiers(groups);
        this.drawAttributes(groups);

        // resizing & redraw
        groups.each((entity) => entity.reSizing().positioning());
        this.redraw(groups);

        this.drawPorts(groups);

        this.drawRelationships(back, relationsihps);
    }
}
