import NODES_DATA, {INDEX_NODES} from './NODES_DATA.js';

const STRUCTURE = [
    { id: 1 },
    {
        id: 9,
        ch: [
            { id: 2, p: { x:  100, y: 100 } },
        ],
    },
    {
        id: 7,
        ch: [
            {
                id: 8,
                p: { x: 100, y: 100 },
                ch: [
                    { id: 3, p: { x:  100, y: 100 } },
                    { id: 4, p: { x:  600, y: 100 } },
                    { id: 5, p: { x: 1100, y: 100 } },
                    { id: 6, p: { x: 1100, y: 400 } },
                ],
            },
        ],
    }
];

function compose (list) {
    return list.reduce((nodes, d)=> {
        const node = INDEX_NODES[d.id];

        if (d.ch)
            node.children = compose(d.ch);

        if (d.p)
            node.position = d.p;

        nodes.push(node);

        return nodes;
    }, []);
};

const NODE_DATA = compose(STRUCTURE);

export default NODE_DATA;
