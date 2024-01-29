import Atman from './Atman.js';

export default class Relationship extends Atman {
    constructor(data, port_from, port_to) {
        super('RELATIONSHIP', data);

        this.from = port_from;
        this.to   = port_to;

        port_from._relationship = this;
        port_to._relationship   = this;
    }
}
