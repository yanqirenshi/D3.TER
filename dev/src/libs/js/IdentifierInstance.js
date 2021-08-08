import ColumnInstance from './ColumnInstance.js';

import Name from './Name.js';

export default class IdentifierInstance extends ColumnInstance {
    constructor (master, data) {
        super('IDENTIFIER-INSTANCE', master, data);

        this.name = new Name(data.name ? data.name : master.name);

        this.position = { x:0, y:0, z:0 };

        this.size = { w:0, h:0 };

        this._ports = [];
    }
    template () {
        return {
            _id: null,
            _class: 'IDENTIFIER-INSTANCE',
            name: { physical: '??', logical: '' },
            position: { x: 0, y:0 },
            size: { w:0, h:0 },
            _master: null,
            _core: null,
            _ports: [],
        };
    }
}
