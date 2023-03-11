import Column from './Column.js';

import Name from './utils/Name.js';

export default class Attribute extends Column {
    constructor (data) {
        super('ATTRIBUTE', data);
    }
}
