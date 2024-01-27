import Atman from './Atman.js';

export default class Port extends Atman {
    constructor(type, entity, relatihonship_data) {
        super(type==='from' ? 'PORT-FROM' : 'PORT-TO', relatihonship_data);

        this._id = relatihonship_data.id + '_' + entity._id; // Idenrifier-Instance

        this._owner = entity;

        this._type = type;

        this._core = relatihonship_data[type];

        this.position = relatihonship_data.position || { x:0, y:0 };

        this.addPort2Entity(entity);

        this._entity  = null;
    }
    addPort2Entity (entity) {
        const port = this;

        entity.ports.items.ht[port.id()] = port;
        entity.ports.items.list.push(port);
    }
    position_degree () {
        return this._core.position % 360;
    }
}
