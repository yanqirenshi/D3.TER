export default class Pool {
    make () {
        return {
            list: [],
            ht: {},
        };
    }
    list2pool (list, f) {
        let pool = this.make();

        if (!list)
            return pool;

        if (f)
            return list.reduce((acc, val) => {
                const new_val = f(val);

                acc.list.push(new_val);

                acc.ht[new_val.id()] = new_val;

                return acc;
            }, pool);
        else
            return list.reduce((acc, val) => {
                acc.list.push(val);

                acc.ht[val.id()] = val;
                return acc;
            }, pool);
    }
}
