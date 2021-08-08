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
    template () {
        return {
            _id: null,
            _class: null,
            position: { x:0, y:0 },
            _position: null,
            _entity: null,
        };
    }
    build (type, position, idenrifier_instance) {
        let element = this.template();

        element._id = idenrifier_instance._id;
        element._class = type==='from' ? 'PORT-FROM' : 'PORT-TO';

        element._idenrifier_instance = idenrifier_instance;

        if (position)
            element._position = position;

        idenrifier_instance._ports.push(element);

        return element;
    }
}
