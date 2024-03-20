import * as d3 from 'd3';

import Geometry from '../Geometry';

import PortCircle      from './PortCircle.js';
import PortCardinality from './PortCardinality.js';
import PortOptionality from './PortOptionality.js';

export default class Ports {
    constructor (parent) {
        this._parent = parent;

        this.cardinality = new PortCardinality();
        this.optionality = new PortOptionality();
        this.circle = new PortCircle();
    }
    callbacks () {
        return this._parent.callbacks;
    }
    /* **************************************************************** *
     *  Old
     * **************************************************************** */
    // public
    draw (groups_entity) {
        this.cardinality.draw(groups_entity);
        this.optionality.draw(groups_entity);
    }
}
