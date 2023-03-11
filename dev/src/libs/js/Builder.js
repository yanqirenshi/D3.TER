import IdentifierInstance from './IdentifierInstance.js';
import AttributeInstance  from './AttributeInstance.js';

export default class Builder {
    buildIdentifiers (entity, state) {
        let out = { list: [], ht: {} };

        const masters = state.identifiers.ht;

        const targets = entity._core.identifiers;

        for (let data of targets) {
            const master = masters[data.identifier];

            const element = new IdentifierInstance(master, data);

            element._entity = entity;

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
    buildAttributes (entity, state) {
        let out = { list: [], ht: {} };

        const masters = state.attributes.ht;

        const targets = entity._core.attributes;

        for (let attribute of targets) {
            const master = masters[attribute.attribute];

            const element = new AttributeInstance(master, attribute);

            element._entity = entity;

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
    build (entity, state) {
        entity.identifiers = this.buildIdentifiers(entity, state);
        entity.attributes  = this.buildAttributes(entity, state);

        return this;
    }
    entityTypeContents (entity) {
        const type = entity._core.type;

        switch (type) {
        case 'RESOURCE':        return 'Rsc';
        case 'RESOURCE-SUBSET': return 'Rsc';
        case 'COMPARATIVE':     return '対象';
        case 'EVENT':           return 'Evt';
        case 'EVENT-SUBSET':    return 'Evt';
        default: throw new Error(type + " は知らないよ。");
        }
    }
    entityBackground (entity) {
        const background = {
            "resource":        { color: '#89c3eb' },
            "resource-subset": { color: '#a0d8ef' },
            "event":           { color: '#f09199' },
            "event-subset":    { color: '#f6bfbc' },
            "comparative":     { color: '#c8d5bb' },
            "correspondence":  { color: '#f2f2b0' },
            "recursion":       { color: '#dbd0e6' },
        };

        const key = entity._core.type.toLowerCase();

        return background[key];
    }
}
