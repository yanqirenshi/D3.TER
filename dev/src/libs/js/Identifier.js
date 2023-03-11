import Column from './Column.js';

import Name from './utils/Name.js';

export default class Identifier extends Column {
    constructor (data) {
        super('IDENTIFIER', data);
    }
}
