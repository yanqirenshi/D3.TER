export default class Sculptor {
    pool () {
        return { list: [], ht: {} };
    }
    position () {
        return { x:0, y:0, z:0 };
    }
    size () {
        return { w:0, h:0 };
    }
    background () {
        return {
            color: '',
        };
    }
    bar () {
        return {
            size: {
                horizontal: 3,
                header: 3,
                contents: 3,
            }
        };
    }
    type () {
        return {
            contents: '??',
            padding: 8,
            position: { x:0, y:0, z:0 },
            size: { w:0, h:0 },
        };
    }
    identifiers () {
        return {
            padding: 0,
            position: { x:0, y:0, z:0 },
            size: { w: null, h: null },
            items: { list: [], ht: {} },
        };
    }
    attributes () {
        return {
            padding: 0,
            position: { x:0, y:0, z:0 },
            size: { w: null, h: null },
            items: { list: [], ht: {} },
        };
    }
    ports () {
        return {
            items: this.pool(),
        };
    }
}
