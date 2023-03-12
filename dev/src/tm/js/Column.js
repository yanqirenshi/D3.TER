import Atman from './Atman.js';

import Name from './utils/Name.js';

export default class Column extends Atman {
    constructor (_class, data) {
        super(_class, data);

        this.name = new Name(data.name);
    }
}
