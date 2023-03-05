import Atman from './Atman.js';

import Name from './utils/Name.js';

export default class Attribute extends Atman {
    constructor (data) {
        super('ATTRIBUTE', data);

        this.name = new Name(data.name);
    }
}
