import Asshole from '@yanqirenshi/assh0le';

import Entity       from './Entity.js';
import Identifier   from './Identifier.js';
import Attribute    from './Attribute.js';
import Relationship from './Relationship.js';
import Port         from './Port.js';
import Painter      from './Painter.js';

import Pool from './utils/Pool.js';

const POOL = new Pool();

export default class D3Ter extends Asshole {
    constructor (params) {
        super(params);

        this._entities      = POOL.make();
        this._relationships = POOL.make();

        this._default = {
            line: {
                height: 14,
                font: {
                    size: 14
                }
            },
        };

        return this;
    }
    entities () {
        return this._entities;
    }
    bounds (v) {
        const d3svg = this.d3svg();

        if (arguments.length===0)
            return d3svg.bounds();

        return d3svg.bounds(v);
    }
    getIdentifier (id, entities) {
        for (const entity of entities.list)
            if (entity.identifiers.contents.ht[id])
                return entity.identifiers.contents.ht[id];

        return null;
    }
    buildRelationshipsWithPort (relationships) {
        const entities = this.entities();

        let out = { list: [], ht: {} };

        for (const core of relationships) {
            const id_from = this.getIdentifier(core.from.id, entities);
            const id_to   = this.getIdentifier(core.to.id, entities);

            const port_from = new Port('from', id_from, core);
            const port_to   = new Port('to',   id_to,   core);

            let element = new Relationship(core, port_from, port_to);

            const entity_from = id_from._entity;
            const entity_to   = id_to._entity;

            port_from._entity = entity_from;
            port_to._entity   = entity_to;

            entity_from.ports.items.ht[port_from._id] = port_from;
            entity_from.ports.items.list.push(port_from);

            entity_to.ports.items.ht[port_to._id] = port_to;
            entity_to.ports.items.list.push(port_to);

            out.list.push(element);
            out.ht[element._id] = element;
        }

        return out;
    }
    data (data) {
        this._identifiers = POOL.list2pool(data.identifiers, (d)=> new Identifier(d));
        this._attributes = POOL.list2pool(data.attributes, (d)=> new Attribute(d));

        const elements = {
            identifiers:   this._identifiers,
            attributes:    this._attributes,
        };

        this._entities = POOL.list2pool(data.entities, (d)=> new Entity(d).build(elements).sizing().positioning());

        this._relationships = this.buildRelationshipsWithPort(data.relationships);

        this.draw();
    }
    draw () {
        const fore = this.layerForeground();
        const back = this.layerBackground();
        new Painter().draw(fore, back, this.entities(), this._relationships);
    }
}
