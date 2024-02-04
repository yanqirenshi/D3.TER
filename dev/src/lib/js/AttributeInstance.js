import ColumnInstance from './ColumnInstance.js';

import Name from './utils/Name.js';
import Position from './utils/Position.js';
import Size from './utils/Size.js';

export default class AttributeInstance extends ColumnInstance {
    constructor (master, data) {
        super('ATTRIBUTE-INSTANCE', master, data);

        this.name = new Name(data.name || master.name);

        this.position = new Position();

        this.size = new Size();
    }
    template () {
        return {
            _id: null,
            _class: 'ATTRIBUTE-INSTANCE',
            name: { physical: '??', logical: '' },
            position: { x: 0, y:0 },
            size: { w:0, h:0 },
            _master: null,
            _core: null,
        };
    }
}
