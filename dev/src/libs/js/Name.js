export default class Name {
    constructor (v) {
        this.physical = null;
        this.logical = null;

        this.padding = 8;
        this.position = { x:0, y:0, z:0 };
        this.size = { h: null, w: null };

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
