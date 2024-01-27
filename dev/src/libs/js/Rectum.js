import merge from 'deepmerge';
import {Colon} from '@yanqirenshi/assh0le';

import Entity       from './Entity.js';
import Identifier   from './Identifier.js';
import Attribute    from './Attribute.js';
import Relationship from './Relationship.js';
import Port         from './Port.js';
import Painter      from './Painter.js';

import Pool from './utils/Pool.js';

const POOL = new Pool();

export default class Rectum extends Colon {
    constructor (params) {
        super(params);

        this.callbacks = this.ensureCallbacks(params.callbacks);

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
    ensureCallbacks (callbacks) {
        const template = {
            entity: {
                click: null,
            },
        };

        return merge(template, callbacks);
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
    getEntity (id) {
        const entities = this.entities();

        return entities.ht[id] || null;
    }
    buildRelationshipsWithPort (relationships) {

        return relationships.reduce((out, r)=> {
            const from  = r.from;
            const to    = r.to;

            // entity identifier を取得する。
            const entity_from = this.getEntity(from.entity);
            const entity_to   = this.getEntity(to.entity);

            // Port のクラスインスタンスを作成する。
            const port_from = new Port('from', entity_from, r);
            const port_to   = new Port('to',   entity_to,   r);

            // Relationship のクラスインスタンスを作成する。
            let element = new Relationship(r, port_from, port_to);

            // entity(from) に port をセットする。
            // entity_from.ports.items.ht[port_from._id] = port_from;
            // entity_from.ports.items.list.push(port_from);

            // port_from._entity = entity_from;

            // entity(to) に port をセットする。
            // entity_to.ports.items.ht[port_to._id] = port_to;
            // entity_to.ports.items.list.push(port_to);

            // port_to._entity = entity_to;

            // out
            out.list.push(element);
            out.ht[element._id] = element;

            return out;
        }, { list: [], ht: {} });
    }
    data (data) {
        this._identifiers = POOL.list2pool(data.identifiers, (d)=> new Identifier(d));
        this._attributes  = POOL.list2pool(data.attributes,  (d)=> new Attribute(d));

        const elements = {
            identifiers: this._identifiers,
            attributes:  this._attributes,
        };

        this._entities = POOL.list2pool(data.entities, (d)=> {
            return new Entity(d)
                .build(elements)
                .sizing()
                .positioning();
        });

        this._relationships = this.buildRelationshipsWithPort(data.relationships);

        super.data(
            {
                identifiers:   this._identifiers,
                attributes:    this._attributes,
                entities:      this._entities,
                relationships: this._relationships,
            }
        );
    }
    draw () {
        const fore = this.layer('foreground');
        const back = this.layer('background');

        new Painter(fore, back, this.callbacks)
            .draw(this.entities(), this._relationships);
    }
}
