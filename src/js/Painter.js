import Ports from './Painters/Ports.js';
import Relationships from './Painters/Relationships.js';
import Entity from './Painters/Entity.js';

export default class Painter {
    constructor(foreground, background, callbacks) {
        this.foreground = foreground;
        this.background = background;
        this.callbacks = callbacks;

        this._default = {
            line: {
                height: 14,
                font: {
                    size: 14
                }
            },
        };

        this._painters = {
            ports: new Ports(),
            relationships: new Relationships(),
            entity: new Entity(this),
        };
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
        const groups = this.entity().draw(entities.list);

        this.ports().drawPorts(groups);

        this.relationships().drawRelationships(this.background, relationsihps);
    }
}
