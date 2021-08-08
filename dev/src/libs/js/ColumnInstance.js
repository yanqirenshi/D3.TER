import Atman from './Atman.js';

import Pool from './Pool.js';

export default class ColumnInstance extends Atman {
    constructor (_class, master, data) {
        super(_class, data);

        this.name = data.name || { physical: '???', logical: '???' };

        this._master = master;

        this.name = {...(data.name ? data.name : master.name)};
    }
}
