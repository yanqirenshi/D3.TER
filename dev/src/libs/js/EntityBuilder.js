import Atman from './Atman.js';

import Name from './utils/Name.js';

import IdentifierInstance from './IdentifierInstance.js';
import AttributeInstance  from './AttributeInstance.js';

import Sculptor from './Sculptor.js';

export default class EntityBuilder extends Atman {
    constructor (_class, data) {
        super(_class, data);

        this.sculptor = new Sculptor();

        this.init();

        this.name.set(data.name);

        this.description.contents = data.description;

        this.position = {...data.position};
        this.size = {...data.size};

        this.type.contents = this.entityTypeContents();

        this.background = this.entityBackground();
    }
    init () {
        const sculptor = this.sculptor;

        this.padding = 8;

        this.margin = 3;

        this.description = { name: '' };
        this.description = { contents: '' };

        this.position = sculptor.position();

        this.size = sculptor.size();

        this.bar = sculptor.bar();

        this.background = sculptor.background();

        this.name = new Name();

        this.type = sculptor.type();
        this.identifiers = sculptor.identifiers();
        this.attributes = sculptor.attributes();

        this.ports = sculptor.ports();
    }
    template () {
        const sculptor = this.sculptor;

        return {
            _id : null,
            _class: 'ENTITY',
            padding: 11,
            margin: 6,
            description: { contents: '' },
            position: sculptor.position(),
            size: sculptor.size(),
            bar: sculptor.bar(),
            background: sculptor.background(),
            name: {
                padding: 11,
                contents: '',
                position: { x:0, y:0, z:0 },
                size: { h: null, w: null },
            },
            type: sculptor.type(),
            identifiers: sculptor.identifiers(),
            attributes: sculptor.attributes(),
            ports: sculptor.ports(),
        };
    }
    entityTypeContents () {
        const type = this._core.type;

        switch (type) {
        case 'RESOURCE':        return 'Rsc';
        case 'RESOURCE-SUBSET': return 'Rsc';
        case 'COMPARATIVE':     return '対象';
        case 'EVENT':           return 'Evt';
        case 'EVENT-SUBSET':    return 'Evt';
        default: throw new Error(type + " は知らないよ。");
        }
    }
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
    build (state) {
        this.identifiers = this.buildIdentifiers(state);
        this.attributes  = this.buildAttributes (state);

        return this;
    }
}
