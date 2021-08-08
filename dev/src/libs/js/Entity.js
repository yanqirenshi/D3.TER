import * as d3 from 'd3';

import Atman from './Atman.js';
import Pool from './Pool.js';

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
