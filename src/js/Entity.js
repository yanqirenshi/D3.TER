import Atman from './Atman.js';

import IdentifierInstance from './IdentifierInstance.js';
import AttributeInstance  from './AttributeInstance.js';
import Geometry from './Geometry.js';

import Name from './utils/Name.js';

export default class Entity extends Atman {
    constructor(data, rectum) {
        super('ENTITY', data);

        this._rectum = rectum;

        this.init();

        this.name.set(data.name);

        this.description.contents = data.description;

        this.position = {...data.position};
        this.size = {...data.size};

        this.type.contents = this.entityTypeContents();

        this.background = this.entityBackground();

        this.geometry = new Geometry();

        // iwasaki
        this._default = {
            line: {
                height: 14,
                font: {
                    size: 14
                }
            },
        };
    }
    rectum () {
        return this._rectum;
    }
    style () {
        return this.rectum().style();
    }
    /* **************************************************************** *
     *   Builder
     * **************************************************************** */
    init () {
        this.padding = 8;

        this.margin = 3;

        this.description = { name: '' };
        this.description = { contents: '' };

        this.position = { x:0, y:0, z:0 };

        this.size = { w:0, h:0 };

        this.bar = {
            size: {
                horizontal: 3,
                header: 3,
                contents: 3,
            }
        };

        this.background = {
            color: '',
        };

        this.name = new Name();

        this.type = {
            contents: '??',
            padding: 8,
            position: { x:0, y:0, z:0 },
            size: { w:0, h:0 },
        };

        this.identifiers = {
            padding: 0,
            position: { x:0, y:0, z:0 },
            size: { w: null, h: null },
            items: { list: [], ht: {} },
        };

        this.attributes = {
            padding: 0,
            position: { x:0, y:0, z:0 },
            size: { w: null, h: null },
            items: { list: [], ht: {} },
        };

        this.ports = {
            items: { list: [], ht: {} },
        };
    }
    /** **************************************************************** *
     *
     * **************************************************************** */
    template () {
        return {
            _id : null,
            _class: 'ENTITY',
            padding: 11,
            margin: 6,
            description: { contents: '' },
            position: { x:0, y:0, z:0 },
            size: { w:0, h:0 },
            bar: {
                size: {
                    header: 11,
                    contents: 8,
                }
            },
            background: {
                color: '',
            },
            name: {
                padding: 11,
                contents: '',
                position: { x:0, y:0, z:0 },
                size: { h: null, w: null },
            },
            type: {
                contents: '??',
                padding: 11,
                position: { x:0, y:0, z:0 },
                size: { w:0, h:0 },
            },
            identifiers: {
                padding: 8,
                position: { x:0, y:0, z:0 },
                size: { w: null, h: null },
                items: { list: [], ht: {} },
            },
            attributes: {
                padding: 8,
                position: { x:0, y:0, z:0 },
                size: { w: null, h: null },
                items: { list: [], ht: {} },
            },
            ports: {
                items: { list: [], ht: {} },
            }
        };
    }
    /** **************************************************************** *
     *
     * **************************************************************** */
    entityTypeContents () {
        const type = this._core.type;

        switch (type) {
        case 'RESOURCE':        return 'Rsc';
        case 'RESOURCE-SUBSET': return 'Rsc';
        case 'COMPARATIVE':     return '対象';
        case 'CORRESPONDENCE':  return '対応';
        case 'EVENT':           return 'Evt';
        case 'EVENT-SUBSET':    return 'Evt';
        case 'RECURSION':       return '再帰';
        default: throw new Error(type + " は知らないよ。");
        }
    }
    /** **************************************************************** *
     *
     * **************************************************************** */
    entityBackground () {
        const background = {
            "resource":        { color: '#89c3eb' },
            "resource-subset": { color: '#a0d8ef' },
            "event":           { color: '#f09199' },
            "event-subset":    { color: '#f6bfbc' },
            "comparative":     { color: '#c8d5bb' },
            "correspondence":  { color: '#f2f2b0' },
            "recursion":       { color: '#dbd0e6' },
        };

        const key = this._core.type.toLowerCase();

        return background[key];
    }
    /** **************************************************************** *
     *
     * **************************************************************** */
    buildIdentifiers (state) {
        let out = { list: [], ht: {} };

        const masters = state.identifiers.ht;

        const targets = this._core.identifiers;

        for (let data of targets) {
            const master = masters[data.identifier];

            const element = new IdentifierInstance(master, data);

            element._entity = this;

            out.list.push(element);
            out.ht[element._id] = element;
        }

        return {
            contents: out,
            position: { x:0, y:0 },
            size: { w:0, h:0 },
            background: { color: '#ffffff'},
            padding: 11,
        };
    }
    /** **************************************************************** *
     *
     * **************************************************************** */
    buildAttributes (state) {
        let out = { list: [], ht: {} };

        const masters = state.attributes.ht;

        const targets = this._core.attributes;

        for (let attribute of targets) {
            const master = masters[attribute.attribute];

            const element = new AttributeInstance(master, attribute);

            element._entity = this;

            out.list.push(element);
            out.ht[element._id] = element;
        }

        return {
            contents: out,
            position: { x:0, y:0 },
            size: { w:0, h:0 },
            background: { color: '#ffffff'},
            padding: 11,
        };
    }
    /** **************************************************************** *
     *
     * **************************************************************** */
    build (state) {
        this.identifiers = this.buildIdentifiers(state);
        this.attributes  = this.buildAttributes (state);

        return this;
    }
    /* **************************************************************** *
     *   Size
     * **************************************************************** */
    strLen (str) {
        let count = 0;

        for (let i = 0, len = str.length; i < len; i++) {
            let c = str.charCodeAt(i);

            if (!str[i].match(/\r?\n/g)) { // 改行コード判定
                if (c >= 0x0 && c <= 0x7f) { // 全角半角判定
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }

        return count;
    }
    sizingContentsArea () {
        let id_h = this.identifiers.size.h;
        let attr_h = this.attributes.size.h;

        if (id_h > attr_h)
            this.attributes.size.h = id_h;
        else
            this.identifiers.size.h = attr_h;
    }
    sizingAttributes () {
        let data = this.attributes;
        let padding = this.padding;

        data.size.w = this.size.w<=0 ? 0 :
            ((this.size.w - (this.padding * 2)) / 2) -
            (this.bar.size.contents / 2);

        data.size.h = data.contents.list.length * (this._default.line.height + padding * 2);
    }
    sizingIdentifiers () {
        let data = this.identifiers;
        let padding = this.padding;

        data.size.w = this.size.w<=0 ? 0 :
            ((this.size.w - (padding * 2)) / 2) -
            (this.bar.size.contents / 2);

        data.size.h = data.contents.list.length
            * (this._default.line.height + padding * 2);
    }
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
    sizingType () {
        let data = this.type;

        if (!data.contents)
            data.contents = '??';

        data.size.h = this._default.line.height + data.padding * 2;

        data.size.w =
            this.strLen(data.contents) * this._default.line.font.size;
    }
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
    positioningEntity (entity, entities) {
        this.positioningName();
        this.positioningType();
        this.positioningIdentifiers();
        this.positioningAttributes();
        this.positioningPorts();
    }
    positioningName () {
        const entity = this;

        let d = entity.name;

        d.position.x = entity.padding;
        d.position.y = entity.padding;
    }
    positioningType () {
        const entity = this;

        let d = entity.type;
        let bar = this.bar.size.header;

        d.position.x = entity.padding + entity.name.size.w + bar;
        d.position.y = entity.padding;
    }
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
    positioningIdentifiers () {
        const entity = this;

        let d = entity.identifiers;
        let bar = this.bar.size.horizontal;

        d.position.x = entity.padding;
        d.position.y = entity.padding + entity.name.size.h + bar;

        this.positioningColumnItems(d);
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
    positioningPort (port) {
        const entity = this;

        let line_port = this.geometry.getPortLine(port.degree(), entity);
        let lines_entity = this.geometry.getFourSideLines(entity, 4, this.style().entity.margin);

        let point = this.geometry.getCrossPoint(lines_entity, line_port);

        port.position(point.point);

        return port.point;
    }
    positioningPorts () {
        const ports = this.ports.items.list;

        for (let port of ports)
            this.positioningPort(port);
    }
}
