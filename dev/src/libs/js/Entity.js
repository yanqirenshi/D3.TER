import EntityBuilder from './EntityBuilder.js';
import Tailor from './Tailor.js';

export default class Entity extends EntityBuilder {
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
        return new Tailor().sizing(this);
    }
    reSizing () {
        return new Tailor().reSizing(this);
    }
    /* **************************************************************** *
     *   Position
     * **************************************************************** */
    positioning () {
        return new Tailor().positioning(this);
    }
}
