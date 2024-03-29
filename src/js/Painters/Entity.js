import * as d3 from 'd3';

export default class Entity {
    constructor(parent) {
        this._parent = parent;
    }
    rectum () {
        return this._parent.rectum();
    }
    style () {
        return this.rectum().style();
    }
    foreground () {
        return this._parent.foreground;
    }
    background () {
        return this._parent.background;
    }
    callbacks () {
        return this._parent.callbacks;
    }
    default () {
        return this._parent._default;
    }
    /* **************************************************************** *
     *   Move
     *   TODO: これは Painter に持っていくべきかも。全部じゃないにしても。
     * **************************************************************** */
    dragStart (event, entity) {
        entity._drag = {
            start: {
                x: event.x,
                y: event.y,
            }
        };
    }
    dragged (event, entity) {
        entity.position.x += event.x - entity._drag.start.x;
        entity.position.y += event.y - entity._drag.start.y;

        this.moveEntity(entity);
        this.moveEdges(entity);
    }
    dragEnd (event, entity) {
        // let campus = STORE.get('active.ter.campus');

        delete entity._drag;

        // ACTIONS.saveTerEntityPosition(campus, entity);
    }
    addMoveEvents (body) {
        return body.call(
            d3.drag()
                .on("start", (e, d)=> this.dragStart(e, d))
                .on("drag",  (e, d)=> { return this.dragged(e, d); })
                .on("end",   (e, d)=> { return this.dragEnd(e, d); }));
    }
    moveEntity(entity) {
        let selection = this.foreground()
            .selectAll('g.entity')
            .data([entity], (d)=> { return d._id; });

        selection
            .attr('transform', (d)=>{
                return 'translate(' + d.position.x + ',' + d.position.y + ')';
            });
    }
    moveEdges (entity) {
        const edges = entity.ports.items.list.map(p=>p._relationship);

        let selection = this.background()
            .selectAll('line.connector')
            .data(edges, (d)=> d._id);

        // TODO: ここは分離したいな。
        this._parent.relationships().drawRelationshipsCore(selection);
    }
    /* **************************************************************** *
     *   Draw  this.entity
     * **************************************************************** */
    drawGroup (entities) {
        return this.foreground()
            .selectAll('g.entity')
            .data(entities, d => d._id)
            .enter()
            .append('g')
            .attr('class', 'entity')
            .attr('entity-id',   d => d._id)
            .attr('entity-code', d => d._core.type)
            .attr('entity-type', d => d._class)
            .attr("transform", (d)=> {
                return "translate(" + d.position.x + "," + d.position.y + ")";
            });
    }
    /* ************************************ *
     *  Body                                *
     * ************************************ */
    drawBodyCore (body) {
        body
            .attr('class', 'entity-body')
            .attr('width', (d)=> { return d.size.w;})
            .attr('height', (d)=> { return d.size.h;})
            .attr('rx', (d)=> 5)
            .attr('ry', (d)=> 5)
            .attr('fill', (d)=> {
                return d.background.color;
            });
    }
    drawBody (groups) {
        let body = groups.append('rect');

        this.drawBodyCore(body);

        return body;
    }
    /* ************************************ *
     *  Name                                *
     * ************************************ */
    drawNameRect (rects) {
        rects
            .attr('x', (d)=> {
                return d.name.position.x;
            })
            .attr('y', (d)=> {
                return d.name.position.y;
            })
            .attr('width', (d)=> {
                return d.name.size.w;
            })
            .attr('height', (d)=> {
                return d.name.size.h;
            })
            .attr('rx', (d)=> 3)
            .attr('ry', (d)=> 3)
            .attr('fill', (d)=> d.background.color);
    }
    drawNameText (texts) {
        texts
            .attr('class', 'entity-title')
            .attr("x", d => d.padding + d.name.padding)
            .attr("y", (d)=> {
                return d.padding +
                    d.name.padding +
                    this.default().line.font.size;
            })
            .attr("fill", (d)=> '#fff')
            .attr("font-size", (d)=> 24)
            .text(d => d.name.val());

        this.addMoveEvents(texts);

        return texts;
    }
    drawName (groups) {
        const callbacks = this.callbacks();

        let rects = groups
            .append('rect')
            .on("click", (event, d)=> {
                let func = callbacks.entity.click;

                if (func) func(d);
            })
            .attr('class', 'entity-title');

        this.drawNameRect(rects);

        let texts = groups
            .append('text')
            .on("click", (event, d)=> {
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
            .attr('x', (d)=> {
                return d.type.position.x;
            })
            .attr('y', (d)=> {
                return d.type.position.y;
            })
            .attr('width', (d)=> {
                return d.type.size.w;
            })
            .attr('height', (d)=> {
                return d.type.size.h;
            })
            .attr('rx', (d)=> 3)
            .attr('ry', (d)=> 3)
            .attr('fill', (d)=> d.background.color);
    }
    drawTypeText (selection) {
        return selection
            .attr("x", (d)=> {
                return d.padding
                    + d.name.size.w
                    + 11
                    + d.type.padding;
            })
            .attr("y", (d)=> {
                return d.type.position.y
                    + d.type.padding
                    + this.default().line.font.size;
            })
            .attr("fill", (d)=> '#fff')
            .text((d)=> {
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

        this.drawTypeText(texts)
            .each(function (d) {
                let w = this.getBBox().width;

                if (w > (d.type._max_w||0))
                    d.type._max_w = w;
            });
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
            .attr('rx', (d)=> 2)
            .attr('ry', (d)=> 2)
            .attr('fill',   d => d.identifiers.background.color);
    }
    drawIdentifiersText (texts) {
        return texts
            .attr("x", d => d.position.x)
            .attr("y", d => d.position.y)
            .text(d => d.name.val());
    }
    drawIdentifiers (groups) {
        const callbacks = this.callbacks();

        let rects = groups
            .append('rect')
            .attr('class', 'entity-identifiers');

        this.drawIdentifiersRect(rects);

        let texts = groups
            .selectAll('text.identifier')
            .data(d => d.identifiers.contents.list)
            .enter()
            .append('text')
            .on("click", (event, d)=> {
                const func = callbacks.identifier.click;

                if (func) func(d);
            })
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
            .attr('rx', (d)=> 3)
            .attr('ry', (d)=> 3)
            .attr('fill',   d => d.identifiers.background.color);
    }
    drawAttributesText (texts) {
        return texts
            .attr("x", d => d.position.x)
            .attr("y", d => d.position.y)
            .text(d => d.name.val());
    }
    drawAttributes (groups) {
        const callbacks = this.callbacks();

        let rects = groups
            .append('rect')
            .attr('class', 'entity-attributes');

        this.drawAttributesRect(rects);

        let texts = groups
            .selectAll('text.attribute')
            .data((d)=> {
                return d.attributes.contents.list;
            })
            .enter()
            .append('text')
            .on("click", (event, d)=> {
                const func = callbacks.attribute.click;

                if (func) func(d);
            })
            .attr('class', 'attribute')
            .attr('attribute-id', (d)=> { return d._id; });

        this.drawAttributesText(texts)
            .each(function (attribute) {
                let w = this.getBBox().width;

                if (w > attribute._entity._max_w.attribute)
                    attribute._entity._max_w.attribute = w;
            });
    }
    /* ************************************ *
     *  Main
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
    draw (entities) {
        const groups = this.drawGroup(entities);

        this.drawBody(groups);
        this.drawName(groups);
        this.drawType(groups);
        this.drawIdentifiers(groups);
        this.drawAttributes(groups);

        // resizing & redraw
        groups.each((entity)=> entity.reSizing().positioning());

        this.redraw(groups);

        return groups;
    }
}
