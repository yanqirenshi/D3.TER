export default class Neo4jObject {
    constructor (data) {
        this._data = data;
    }
    change (data) {
        this._data = data;
    }
    id () {
        return this._data.id;
    }
    type () {
        return this._data.type;
    }
    deleted () {
        return this._data.deleted;
    }
    merge (data) {
    }
}
