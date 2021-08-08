import Atman from './Atman.js';

import Name from './Name.js';

export default class Identifier extends Atman {
    constructor (data) {
        super('IDENTIFIER', data);

        this.name = new Name(data.name);
    }
}
