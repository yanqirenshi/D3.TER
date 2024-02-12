import Name from './utils/Name.js';

import Builder from './Builder.js'

export default class Entity extends Builder {
    constructor(data) {
        super('ENTITY', data);

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
     *   Size
     * **************************************************************** */
    sizing () {
        this.sizingType();
        this.sizingName();
        this.sizingIdentifiers();
        this.sizingAttributes();
        this.sizingContentsArea();

        let padding = this.padding * 2;
        let header = this.name.size.h;
        let bar = this.bar.size.horizontal;
        let contents = this.attributes.size.h;

        this.size.h = padding + header + bar + contents;

        return this;
    }
    reSizing () {
        const entity = this;

        entity.name.size.w
            = Math.ceil(entity._max_w.name)
            + entity.name.padding * 2;

        entity.identifiers.size.w
            = Math.ceil(entity._max_w.identifier)
            + entity.identifiers.padding * 2;

        entity.attributes.size.w
            = Math.ceil(entity._max_w.attribute)
            + entity.attributes.padding * 2;

        let name_area_w =
            entity.name.size.w
            + entity.bar.size.header
            + entity.type.size.w;

        let contents_area_w =
            entity.identifiers.size.w
            + entity.bar.size.contents
            + entity.attributes.size.w;

        entity.size.w = (contents_area_w > name_area_w ? contents_area_w : name_area_w) + (entity.padding * 2);

        // fix size for attr area
        if (entity._max_w.attribute===0 || contents_area_w < name_area_w) {
            entity.attributes.size.w =
                entity.size.w
                - (entity.padding * 2)
                - entity.identifiers.size.w
                - entity.bar.size.contents;
        }

        // fix size for name area
        if (contents_area_w > name_area_w) {
            entity.name.size.w =
                entity.size.w
                - (entity.padding * 2)
                - entity.bar.size.header
                - entity.type.size.w;
        }

        return this;
    }
    /* **************************************************************** *
     *   Position
     * **************************************************************** */
    positioning () {
        this.positioningEntity(this);

        return this;
    }
    /* **************************************************************** *
     *  Entity
     * **************************************************************** */
    positioningEntity (entity, entities) {
        this.positioningName();
        this.positioningType();
        this.positioningIdentifiers();
        this.positioningAttributes();
        this.positioningPorts();
    }
    /* **************************************************************** *
     *  Contents Area
     * **************************************************************** */
    sizingContentsArea () {
        let id_h = this.identifiers.size.h;
        let attr_h = this.attributes.size.h;

        if (id_h > attr_h)
            this.attributes.size.h = id_h;
        else
            this.identifiers.size.h = attr_h;
    }
    /* **************************************************************** *
     *  Name
     * **************************************************************** */
    sizingName () {
        let data = this.name;

        if (!data.contents)
            data.contents = '????????';

        data.size.h = this._default.line.height + data.padding * 2;

        let type = this.type;

        data.size.w = this.size.w<=0 ? 0 :
            (this.size.w - (this.padding * 2) -
             this.bar.size.header -
             type.size.w);
    }
    positioningName () {
        const entity = this;

        let d = entity.name;

        d.position.x = entity.padding;
        d.position.y = entity.padding;
    }
    /* **************************************************************** *
     *  Type
     * **************************************************************** */
    sizingType () {
        let data = this.type;

        if (!data.contents)
            data.contents = '??';

        data.size.h = this._default.line.height + data.padding * 2;

        data.size.w =
            data.contents.length * this._default.line.font.size;
        // + data.padding * 2;
    }
    positioningType () {
        const entity = this;

        let d = entity.type;
        let bar = this.bar.size.header;

        d.position.x = entity.padding + entity.name.size.w + bar;
        d.position.y = entity.padding;
    }
    /* **************************************************************** *
     *  ColumnItems
     * **************************************************************** */
    positioningColumnItems (d) {
        let padding = d.padding;
        let start   = d.position.y + padding;
        let line_height = this._default.line.height;

        let num = 0;

        for (const item of d.contents.list) {

            item.position.x = d.position.x + padding;

            let item_h  = (line_height + item.name.padding * 2);

            item.position.y = start + num * item_h + item.name.padding;

            num++;
        }
    }
    /* **************************************************************** *
     *  Identifiers
     * **************************************************************** */
    sizingIdentifiers () {
        let data = this.identifiers;
        let padding = this.padding;

        data.size.w = this.size.w<=0 ? 0 :
            ((this.size.w - (padding * 2)) / 2) -
            (this.bar.size.contents / 2);

        data.size.h = data.contents.list.length
            * (this._default.line.height + padding * 2);
    }
    positioningIdentifiers () {
        const entity = this;

        let d = entity.identifiers;
        let bar = this.bar.size.horizontal;

        d.position.x = entity.padding;
        d.position.y = entity.padding + entity.name.size.h + bar;

        this.positioningColumnItems(d);
    }
    /* **************************************************************** *
     *  Attributes
     * **************************************************************** */
    sizingAttributes () {
        let data = this.attributes;
        let padding = this.padding;

        data.size.w = this.size.w<=0 ? 0 :
            ((this.size.w - (this.padding * 2)) / 2) -
            (this.bar.size.contents / 2);

        data.size.h = data.contents.list.length * (this._default.line.height + padding * 2);
    }
    positioningAttributes () {
        const entity = this;

        let d = entity.attributes;
        let bar_contents = this.bar.size.contents;
        let bar_horizontal = this.bar.size.horizontal;

        d.position.x = entity.padding + bar_contents + entity.identifiers.size.w;
        d.position.y = entity.padding + entity.name.size.h + bar_horizontal;

        this.positioningColumnItems(d);
    }
    /* **************************************************************** *
     *  Port
     * **************************************************************** */
    positioningPort (port) {
        const entity = this;

        let line_port = this.geometry.getPortLine(port, entity);
        let lines_entity = this.geometry.getFourSideLines(entity);

        let point = this.geometry.getCrossPoint(lines_entity, line_port);

        port.position = point.point;

        return port.point;
    }
    positioningPorts () {
        const ports = this.ports.items.list;

        for (let port of ports)
            this.positioningPort(port);
    }
}
