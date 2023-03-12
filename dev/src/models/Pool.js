export default class Pool {
    constructor () {
        this._list = [];

        this._index = {
            id: {},
        };
    }
    list () {
        return this._list;
    }
    add (in_data) {
        const id = in_data.id;

        const data = this._index.id[id];

        if (!data) {
            this._index.id[id]= in_data;
            this._list.push(in_data);
        } else {
            // if (data!==in_data)
            //     data.merge(in_data);
        }
    }
    getByID (id) {
        return this._index.id[id] || null;
    }
    removeByID (id) {
    }
}
