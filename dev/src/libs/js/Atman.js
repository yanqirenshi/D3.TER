import Pool from './Pool.js';

export default class Atman {
    constructor (_class, data) {
        this._class = _class;

        this._id = data.id;
        this._core = data;
        this._core._obj = this;
    }
    id () {
        return this._id;
    }
}
