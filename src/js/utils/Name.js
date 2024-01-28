import Position from './Position.js';
import Size from './Size.js';

export default class Name {
    constructor (v) {
        this.physical = null;
        this.logical = null;

        this.padding = 8;
        this.position = new Position();
        this.size = new Size();

        this.set(v);
    }
    set (v) {
        if (arguments.lengh===0 || !v) {
            return this;
        } else if ('string'===typeof v) {
            const isLogical = (str) => str.match(/^[^\x01-\x7E\xA1-\xDF]+$/);

            if (isLogical)
                this.physical = v;
            else
                this.logical = v;
        } else if ("object"===typeof v) {
            this.physical = v.physical || null;
            this.logical  = v.logical  || null;
        }

        return this;
    }
    val () {
        return this.logical || this.physical || '????????';
    }
}
