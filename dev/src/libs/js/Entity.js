import Atman from './Atman.js';

import Tailor from './Tailor.js';
import Builder from './Builder.js';

import Name from './utils/Name.js';
import Sculptor from './Sculptor.js';

export default class Entity extends Atman {
    constructor(data) {
        super('ENTITY', data);

        this.sculptor = new Sculptor();
        this.builder = new Builder();

        this.init();

        this.name.set(data.name);

        this.description.contents = data.description;

        this.position = {...data.position};
        this.size = {...data.size};

        this.type.contents = this.builder.entityTypeContents(this);

        this.background = this.builder.entityBackground(this);

        this._default = {
            line: {
                height: 14,
                font: {
                    size: 14
                }
            },
        };
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
    /* **************************************************************** *
     *   Size
     * **************************************************************** */
    sizing () {
        return new Tailor().sizing(this);
    }
    reSizing () {
        return new Tailor().reSizing(this);
    }
    /* **************************************************************** *
     *  Position
     * **************************************************************** */
    positioning () {
        return new Tailor().positioning(this);
    }
    /* **************************************************************** *
     *  Build
     * **************************************************************** */
    build (state) {
        this.builder.build(this, state);

        return this;
    }
    /* **************************************************************** *
     *  Template
     * **************************************************************** */
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
}
