import Asshole from '@yanqirenshi/assh0le';

export default class Ass extends Asshole {
    constructor (params) {
        super(params);

        return this;
    }
    bounds (v) {
        const d3svg = this.d3svg();

        if (arguments.length===0)
            return d3svg.bounds();

        return d3svg.bounds(v);
    }
}
