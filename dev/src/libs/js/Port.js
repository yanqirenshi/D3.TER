import Atman from './Atman.js';

export default class Port extends Atman {
    constructor(type, owner, data) {
        super(type==='from' ? 'PORT-FROM' : 'PORT-TO', data);

        this._id = owner._id; // Idenrifier-Instance

        this._owner = owner;

        this.position = data.position || { x:0, y:0 };

        owner._ports.push(this);

        this._entity  = null;
    }
    position_degree () {
        return this._owner._core.position % 360;
    }
}
