const NODES_DATA = [
    {
        id: 1,
        size: { w: 1100, h: 500 },
        position: { x:0, y:0 },
        label: {
            text: 'America',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 2,
        size: { w: 700, h: 900 },
        position: { x:1300, y:0 },
        label: {
            text: 'Japan',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 3,
        size: { w: 500, h: 500 },
        position: { x:2200, y:0 },
        label: {
            text: 'ISO',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 4,
        size: { w: 700, h: 900 },
        position: { x:2900, y:0 },
        label: {
            text: ' ユニコードコンソーシアム',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 5,
        size: { w: 400, h: 300 },
        label: {
            text: 'ANSI',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 6,
        size: { w: 500, h: 700 },
        label: {
            text: 'JIS',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 7,
        size: { w: 200, h: 100 },
        label: {
            text: 'ASCII',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 8,
        size: { w: 200, h: 100 },
        label: {
            text: 'SHIFT-JIS',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 9,
        size: { w: 400, h: 300 },
        position: { x:600, y:100 },
        label: {
            text: 'AT&T',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 10,
        size: { w: 200, h: 100 },
        label: {
            text: 'EUC-JP',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 11,
        size: { w: 300, h: 100 },
        label: {
            text: 'ISO-2022-JP (JISコード)',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 12,
        size: { w: 400, h: 700 },
        label: {
            text: 'Unicode',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 13,
        size: { w: 200, h: 100 },
        label: {
            text: 'JIS X 0221',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 14,
        size: { w: 200, h: 100 },
        label: {
            text: 'ISO/IEC 10646',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },

    {
        id: 15,
        size: { w: 200, h: 100 },
        label: {
            text: 'UTF-8',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 16,
        size: { w: 200, h: 100 },
        label: {
            text: 'UTF-16',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 17,
        size: { w: 200, h: 100 },
        label: {
            text: 'UTF-32',
            position: { x: 20, y: 40 },
            font: { size: 24, color: '#333333' },
        },
    },
    {
        id: 18,
        size: { w: 300, h: 100 },
        label: {
            text: 'ISO/IEC 8859-1 (Latin-1)',
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
