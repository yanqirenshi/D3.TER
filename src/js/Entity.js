import EntityTailor from './EntityTailor.js';

export default class Entity extends EntityTailor { // extends EntityTailor
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
}
