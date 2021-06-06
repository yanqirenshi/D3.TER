import Asshole from '@yanqirenshi/assh0le';

import Entity             from './Entity.js';
import Identifier         from './Identifier.js';
import IdentifierInstance from './IdentifierInstance.js';
import Attribute          from './Attribute.js';
import AttributeInstance  from './AttributeInstance.js';
import Relationship       from './Relationship.js';
import Port               from './Port.js';

export default class D3Ter extends Asshole {
    constructor (params) {
        super(params);

        this.entity = new Entity();
        this.relationship = new Relationship();

        this.attribute = new Attribute();
        this.attribute_instance = new AttributeInstance();

        this.identifier = new Identifier();
        this.identifier_instance = new IdentifierInstance ();

        this.port = new Port();

        this._entities      = this.entity.list2pool([]);
        this._relationships = this.relationship.list2pool([]);
        this._identifier    = this.identifier.list2pool([]);
        this._attribute     = this.attribute.list2pool([]);

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
    bounds (v) {
        const d3svg = this.d3svg();

        if (arguments.length===0)
            return d3svg.bounds();

        return d3svg.bounds(v);
    }
    buildRelationshipsWithPort (relationships, entities) {
        let out = { list: [], ht: {} };

        for (const core of relationships) {
            const identifier_from = this.entity.getIdentifier(core.from.id, entities);
            const identifier_to   = this.entity.getIdentifier(core.to.id, entities);

            const port_from = this.port.build('from', core.from.position, identifier_from);
            const port_to   = this.port.build('to',   core.to.position,   identifier_to);

            let element = this.relationship.build(core, port_from, port_to);

            const entity_from = identifier_from._entity;
            const entity_to   = identifier_to._entity;

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
    dataCore (data) {
        this._identifiers = this.identifier.list2pool(data.identifiers, (d) => {
            return this.identifier.build(d);
        });

        this._attributes = this.attribute.list2pool(data.attributes, (d) => {
            return this.attribute.build(d);
        });

        const elements = {
            identifiers:   this._identifiers,
            attributes:    this._attributes,
        };
        this._entities = this.entity.list2pool(data.entities, (d) => {
            return this.entity.build(d, elements);
        });
        this.entity.sizing(this._entities.list);

        this._relationships = this.buildRelationshipsWithPort(
            data.relationships, this._entities
        );
    }
    data (data) {
        this.dataCore(data);
    }
}
