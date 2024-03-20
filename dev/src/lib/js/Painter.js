import Ports from './Painters/Ports.js';
import Relationships from './Painters/Relationships.js';
import Entity from './Painters/Entity.js';

import merge from 'deepmerge';

export default class Painter {
    constructor(rectum, foreground, background, callbacks) {
        this._rectum = rectum;

        this.foreground = foreground;
        this.background = background;
        this.callbacks = this.ensureCallbacks(callbacks);

        this._default = {
            line: {
                height: 14,
                font: {
                    size: 14
                }
            },
        };

        this._painters = {
            ports:         new Ports(this),
            relationships: new Relationships(this),
            entity:        new Entity(this),
        };
    }
    rectum () {
        return this._rectum;
    }
    style () {
        return this.rectum().style();
    }
    ensureCallbacks (callbacks) {
        const default_callbacks = {
            entity: {
                click: (node)=> null,
            },
            identifier: {
                click: (node)=> null,
            },
            attribute: {
                click: (node)=> null,
            },
            relationship: {
                click: (node)=> null,
            },
        };

        return merge(default_callbacks, callbacks);
    }
    ports () { return this._painters.ports; }
    relationships () { return this._painters.relationships; }
    entity () { return this._painters.entity; }
    /* ************************************ *
     *  Draw Main                           *
     * ************************************ */

    /* ************************************ *
     *  Draw Main                           *
     * ************************************ */
    draw (entities, relationsihps) {
        // entity の描画
        const groups = this.entity().draw(entities.list);

        // port の描画
        this.ports().draw(groups);

        // relationship の描画
        this.relationships().drawRelationships(this.background, relationsihps);
    }
}
