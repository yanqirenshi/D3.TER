import Atman from './Atman.js';

export default class Attribute extends Atman {
    constructor (data) {
        super('ATTRIBUTE', data);

        this.name = data.name || { physical: '???', logical: '???' };
    }
}
