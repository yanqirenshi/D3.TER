import {Node} from '../lib/neo4j/index.js';

export default class OrganismClass extends Node {
    label () {
        return this._data.label;
    }
    x () {
        return this._data.x || 0;
    }
    y () {
        return this._data.y || 0;
    }
    move () {
        return this._data.move || 0;
    }
    nameJa () {
        return this._data.name_ja;
    }
    nameEn () {
        return this._data.name_en;
    }
    nameScientific () {
        return this._data.name_scientific;
    }
    rank () {
        return this._data.rank;
    }
}
