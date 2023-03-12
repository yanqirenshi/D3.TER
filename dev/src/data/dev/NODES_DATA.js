function ensurePosition (obj) {
    if (!obj.position) {
        obj.position = { x: 0, y: 0 };
    } else {
        if (!(typeof obj.position.x==='number'))
            obj.position.x = 0;

        if (!(typeof obj.position.y==='number'))
            obj.position.y = 0;
    }
}

function ensureSize (obj) {
    if (!obj.size) {
        obj.size = { w: 0, y: 0 };
    } else {
        if (!(typeof obj.size.w==='number'))
            obj.size.w = 100;

        if (!(typeof obj.size.h==='number'))
            obj.size.h = 100;
    }
}

function ensureNode (data) {
    const node = {...data}; // deepmerge を使うべきかな。

    // id
    if (!('id' in node))
        throw new Error('Not have id. node=' + JSON.stringify(node));

    // position
    ensurePosition(node);

    // size
    ensureSize(node);

    // label
    const makeTemplate = ()=> {
        return {
            text: '????????',
            position: { x: 0, y: 0 },
            font: { size: 24, color: '#333333' },
        };
    };
    const template = makeTemplate();
    if (!node.label) {
        node.label = template;
    } else {
        const label = node.label;
        if (!label.text)
            label.text = template.text;

        ensurePosition(label);

        if (!label.font) {
            label.font = template.font;
        } else {
            const font = label.font;
            if (!(typeof font.size==='number'))
                font.size = template.font.size;

            if ('color' in font)
                font.color = template.font.color;
        }
    }

    // children
    if (!Array.isArray(node.children))
        node.children = [];

    // これは強制的に Set する。
    node.type = 'NODE';

    return node;
}

const NODES_DATA = [
    {
        id: 1,
        size: { w: 400, h: 1600 },
        position: { x:0, y:0 },
        label: {
            text: 'Party.Foodies (Broswer)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 2,
        size: { w: 300, h: 200 },
        label: {
            text: 'Party.Foodies (Server)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 3,
        size: { w: 300, h: 200 },
        label: {
            text: 'Tableware (SSR Server)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 4,
        size: { w:300, h:500 },
        label: {
            text: 'Peplin (App Server)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 5,
        size: { w:300, h:200 },
        label: {
            text: 'Users DB(PostgreSQL)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 6,
        size: { w:300, h:400 },
        label: {
            text: 'Base DB(Neo4j)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 7,
        size: { w: 1700, h: 1100 },
        position: { x: 600, y: 500 },
        label: {
            text: 'Conoha',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 8,
        size: { w: 1500, h: 900 },
        position: { x: 100, y: 100 },
        label: {
            text: 'Peplin (VPS)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 9,
        size: { w: 500, h: 400 },
        position: { x: 600, y:0 },
        label: {
            text: 'Firebase Hosting',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
].map(ensureNode);

export const INDEX_NODES = NODES_DATA.reduce((index,node)=> {
    const id = node.id;

    if (index[id])
        throw new Error('Duplicate ID. id=' + id);

    index[id] = node;

    return index;
}, {});

export default NODES_DATA;
